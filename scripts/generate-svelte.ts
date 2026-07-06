import { promises as fs } from 'fs';
import * as path from 'path';
import { readIconAssets, readMaterialAssets } from './utils/read-assets';
import {
  wrapSvgAsSvelte,
  generateIconComponentCode,
  generateAvatarComponentCode,
  generateIllustrationComponentCode,
} from './utils/generate-component';

async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true });
}

async function writeFileIfChanged(filePath: string, content: string) {
  try {
    const existing = await fs.readFile(filePath, 'utf8');
    if (existing === content) return;
  } catch {}
  await fs.writeFile(filePath, content, 'utf8');
}

const materialGroups = [
  { folder: 'avatars', namespace: 'AvatarAsset' },
  { folder: 'backgrounds', namespace: 'BackgroundAsset' },
  { folder: 'cursors', namespace: 'CursorAsset' },
  { folder: 'emoji', namespace: 'EmojiAsset' },
  { folder: 'illustrations', namespace: 'IllustrationAsset' },
  { folder: 'images', namespace: 'ImageAsset' },
  { folder: 'logos', namespace: 'LogoAsset' },
] as const;

/**
 * 主入口扁平导出时的 collection 优先级（snowui > phosphor > special）。
 * 同名图标按此顺序决定主入口导出哪个；被覆盖的可通过子模块 `@.../snowui` 等访问。
 */
const COLLECTION_PRIORITY = ['snowui', 'phosphor', 'special'] as const;

function toPascalCaseSafe(name: string): string {
  return name.replace(/(^\w|[-_]\w)/g, (segment) => segment.replace(/[-_]/, '').toUpperCase());
}

function sanitizeComponentName(name: string, group: string): string {
  const pascal = toPascalCaseSafe(name);
  if (/^[A-Za-z_]/.test(pascal)) {
    return pascal;
  }
  return toPascalCaseSafe(`${group}-${name}`);
}

async function main() {
  const sveltePkgDir = path.resolve(__dirname, '..');
  const srcDir = path.join(sveltePkgDir, 'src');

  const repoRoot = path.resolve(sveltePkgDir, '..');
  const monorepoCoreDir = path.join(repoRoot, 'resource-base');
  const npmCoreDir = path.join(sveltePkgDir, 'node_modules', '@snowui-design-system', 'resource-base');

  let resourceCoreDir: string;
  try {
    await fs.access(monorepoCoreDir);
    resourceCoreDir = monorepoCoreDir;
    console.log('📦 Using monorepo resource-base:', resourceCoreDir);
  } catch {
    try {
      await fs.access(npmCoreDir);
      resourceCoreDir = npmCoreDir;
      console.log('📦 Using npm package resource-base:', resourceCoreDir);
    } catch {
      console.error('❌ Cannot find resource-base directory.');
      process.exit(1);
    }
  }

  // 准备目录
  const iconsDir = path.join(srcDir, 'icons');
  await ensureDir(iconsDir);
  for (const group of materialGroups) {
    await ensureDir(path.join(srcDir, group.folder));
  }

  // 读取素材
  const icons = await readIconAssets(resourceCoreDir);
  const materialAssets = new Map<string, Awaited<ReturnType<typeof readMaterialAssets>>>();
  for (const group of materialGroups) {
    const assets = await readMaterialAssets(resourceCoreDir, group.folder);
    materialAssets.set(group.folder, assets);
  }

  let generated = 0;

  // 按 collection 分组
  const iconsByCollection = new Map<string, typeof icons>();
  for (const icon of icons) {
    if (!iconsByCollection.has(icon.collection)) iconsByCollection.set(icon.collection, []);
    iconsByCollection.get(icon.collection)!.push(icon);
  }

  // collection -> 该 collection 下的 PascalName + kebab 列表
  interface CollectionExport {
    collection: string;
    components: Array<{ pascalName: string; kebabName: string }>;
  }
  const collectionExports: CollectionExport[] = [];
  const allExpectedIconFiles = new Set<string>();

  // 为每个 collection 生成组件 + barrel
  for (const collection of [...iconsByCollection.keys()].sort()) {
    const list = iconsByCollection.get(collection)!;
    const colDir = path.join(iconsDir, collection);
    await ensureDir(colDir);

    const exports: Array<{ pascalName: string; kebabName: string }> = [];
    const byNameEntries: string[] = [];
    const byNameImports: string[] = [];

    for (const icon of list) {
      const compName = icon.pascalName;
      if (!compName) continue;
      const { weightsLiteral, viewBox } = wrapSvgAsSvelte(icon.weights as Record<string, string>, compName);
      const code = generateIconComponentCode(compName, weightsLiteral, viewBox, {
        collection: icon.collection,
        usageName: icon.kebabName,
      });
      const outPath = path.join(colDir, `${compName}.svelte`);
      await writeFileIfChanged(outPath, code);
      allExpectedIconFiles.add(path.join(collection, `${compName}.svelte`));
      exports.push({ pascalName: compName, kebabName: icon.kebabName });
      byNameImports.push(`import ${compName} from './${compName}.svelte';`);
      byNameEntries.push(`  '${icon.kebabName}': ${compName},`);
      generated++;
    }

    exports.sort((a, b) => a.pascalName.localeCompare(b.pascalName));

    // collection barrel：src/icons/{collection}/index.ts
    const barrelLines = [
      ...exports.map(
        (e) => `export { default as ${e.pascalName} } from './${e.pascalName}.svelte';`,
      ),
      '',
    ];
    await writeFileIfChanged(path.join(colDir, 'index.ts'), barrelLines.join('\n'));

    // collection by-name 映射：src/icons/{collection}/by-name.ts
    const byNameContent = [
      ...byNameImports.sort(),
      '',
      'export const iconsByName = {',
      ...byNameEntries.sort(),
      '} as const;',
      '',
      'export type IconName = keyof typeof iconsByName;',
      '',
    ].join('\n');
    await writeFileIfChanged(path.join(colDir, 'by-name.ts'), byNameContent);
    allExpectedIconFiles.add(path.join(collection, 'index.ts'));
    allExpectedIconFiles.add(path.join(collection, 'by-name.ts'));

    collectionExports.push({ collection, components: exports });
  }

  // 生成扁平 + namespace 顶级 icons 入口：src/icons/index.ts
  // 扁平：按 COLLECTION_PRIORITY 解决同名冲突
  const flatExportOrder = [
    ...COLLECTION_PRIORITY.filter((c) => iconsByCollection.has(c)),
    ...[...iconsByCollection.keys()].filter((c) => !COLLECTION_PRIORITY.includes(c as any)).sort(),
  ];
  const flatExportSeen = new Set<string>();
  const flatExportLines: string[] = [];
  for (const collection of flatExportOrder) {
    const list = collectionExports.find((c) => c.collection === collection)!.components;
    for (const c of list) {
      if (flatExportSeen.has(c.pascalName)) continue;
      flatExportLines.push(
        `export { default as ${c.pascalName} } from './${collection}/${c.pascalName}.svelte';`,
      );
      flatExportSeen.add(c.pascalName);
    }
  }
  // namespace 导出：用 *  as collection
  const namespaceLines = flatExportOrder.map(
    (collection) => `export * as ${collection} from './${collection}';`,
  );
  const iconsIndexContent = [
    '// Auto-generated by scripts/generate-svelte.ts. Do not edit.',
    `// Flat exports use priority order: ${flatExportOrder.join(' > ')}.`,
    '// To access an overridden component, import from the collection subpath, e.g.',
    `//   import { Clipboard } from '@snowui-design-system/resource-svelte/icons/phosphor'`,
    '',
    ...flatExportLines,
    '',
    '// Namespaced collections',
    ...namespaceLines,
    '',
  ].join('\n');
  await writeFileIfChanged(path.join(iconsDir, 'index.ts'), iconsIndexContent);
  allExpectedIconFiles.add('index.ts');

  // 全局合并 by-name（用于 `<Icon name="..." collection?="..." />`）
  // 结构：iconsByName[collection][kebabName] = ComponentName
  // 同时给一个默认（priority 优先）扁平 map：iconsByDefault[kebabName] = ComponentName
  const globalByNameImports: string[] = [];
  const collectionMapEntries: string[] = [];
  const defaultMapEntries = new Map<string, { collection: string; pascalName: string }>();
  for (const collection of flatExportOrder) {
    const list = collectionExports.find((c) => c.collection === collection)!.components;
    const inner: string[] = [];
    for (const c of list) {
      // 用 alias import 避免冲突: import { default as Snowui_Clipboard } from './snowui/Clipboard.svelte'
      const alias = `${collection}_${c.pascalName}`;
      globalByNameImports.push(
        `import ${alias} from './${collection}/${c.pascalName}.svelte';`,
      );
      inner.push(`    '${c.kebabName}': ${alias},`);
      if (!defaultMapEntries.has(c.kebabName)) {
        defaultMapEntries.set(c.kebabName, { collection, pascalName: c.pascalName });
      }
    }
    collectionMapEntries.push(`  ${collection}: {\n${inner.join('\n')}\n  },`);
  }
  const defaultMapLines = [...defaultMapEntries.entries()].sort().map(
    ([k, v]) => `  '${k}': ${v.collection}_${v.pascalName},`,
  );
  // 注意：iconsByCollection / iconsByDefault 采用懒求值 Proxy 而非立即字面量赋值。
  // 原因：每个组件 (e.g. Add.svelte) 通过 IconBase 间接 import 此文件，形成模块循环依赖；
  // 若在 by-name.ts 模块体直接 build 字面量，会在 ESM 进入半初始化态时读到 TDZ 的 import binding，
  // 抛出 "Cannot access 'snowui_Add' before initialization"。
  // 用 Proxy 延迟到首次属性访问时（render 阶段）才构建字典，此时所有模块均已 init 完成。
  const globalByNameContent = [
    '// Auto-generated by scripts/generate-svelte.ts. Do not edit.',
    ...globalByNameImports.sort(),
    '',
    'type Registry = Record<string, Record<string, any>>;',
    'type DefaultMap = Record<string, any>;',
    '',
    'let _byCol: Registry | null = null;',
    'let _byDef: DefaultMap | null = null;',
    '',
    'function _ensure() {',
    '  if (_byCol) return;',
    '  _byCol = {',
    ...collectionMapEntries.map((line) => '  ' + line),
    '  };',
    '  _byDef = {',
    ...defaultMapLines.map((line) => '  ' + line),
    '  };',
    '}',
    '',
    'export const iconsByCollection: Registry = new Proxy({} as Registry, {',
    '  get(_, prop) { _ensure(); return _byCol![prop as string]; },',
    '  has(_, prop) { _ensure(); return (prop as string) in _byCol!; },',
    '  ownKeys() { _ensure(); return Object.keys(_byCol!); },',
    '  getOwnPropertyDescriptor(_, prop) {',
    '    _ensure();',
    '    if (!((prop as string) in _byCol!)) return undefined;',
    '    return { enumerable: true, configurable: true, value: _byCol![prop as string] };',
    '  },',
    '});',
    '',
    'export const iconsByDefault: DefaultMap = new Proxy({} as DefaultMap, {',
    '  get(_, prop) { _ensure(); return _byDef![prop as string]; },',
    '  has(_, prop) { _ensure(); return (prop as string) in _byDef!; },',
    '  ownKeys() { _ensure(); return Object.keys(_byDef!); },',
    '});',
    '',
    'export type IconUsageName = string;',
    'export type IconCollectionName = string;',
    '',
  ].join('\n');
  await writeFileIfChanged(path.join(iconsDir, 'by-name.ts'), globalByNameContent);

  // 清理旧的扁平 *.svelte（保留 collection 子目录）
  try {
    const top = await fs.readdir(iconsDir, { withFileTypes: true });
    for (const e of top) {
      if (e.isFile() && e.name.endsWith('.svelte')) {
        await fs.unlink(path.join(iconsDir, e.name));
      }
    }
    // 清理 collection 内不在期待集合中的 .svelte
    for (const collection of iconsByCollection.keys()) {
      const colDir = path.join(iconsDir, collection);
      const entries = await fs.readdir(colDir);
      for (const f of entries) {
        if (!f.endsWith('.svelte')) continue;
        if (!allExpectedIconFiles.has(path.join(collection, f))) {
          await fs.unlink(path.join(colDir, f));
        }
      }
    }
  } catch {}

  // ---- 处理 materials（保持原逻辑） ----
  const materialGroupData = new Map<
    string,
    {
      barrelExports: Set<string>;
      count: number;
      componentNames: string[];
    }
  >();
  for (const group of materialGroups) {
    materialGroupData.set(group.folder, {
      barrelExports: new Set<string>(),
      count: 0,
      componentNames: [],
    });
  }

  for (const group of materialGroups) {
    const assets = materialAssets.get(group.folder) ?? [];
    const data = materialGroupData.get(group.folder)!;

    for (const asset of assets) {
      const firstFile = asset.files[0];
      if (!firstFile) continue;
      const compName = sanitizeComponentName(asset.name, group.folder);
      if (!compName) continue;

      if (!asset.name.match(/-\d+$/)) {
        const sizes = asset.files
          .map((f) => (f as any).size)
          .filter((s): s is number => s !== undefined);
        const allSizesAreVariants =
          sizes.length > 0 &&
          sizes.every((s) => s >= 1 && s <= 10) &&
          !sizes.some((s) => s >= 16);
        if (allSizesAreVariants) {
          const hasDefaultFile = asset.files.some((f) => (f as any).size === undefined);
          if (!hasDefaultFile) continue;
        }
      }

      const sizeFiles = asset.files
        .filter((f) => (f as any).size !== undefined)
        .map((f) => ({ size: (f as any).size as number, path: f.path }))
        .sort((a, b) => a.size - b.size);
      const defaultFile = asset.files.find((f) => (f as any).size === undefined) || firstFile;

      let code: string;
      if (group.folder === 'illustrations') {
        code = generateIllustrationComponentCode(compName, defaultFile.path, sizeFiles.length > 0 ? sizeFiles : undefined, 320);
      } else if (group.folder === 'backgrounds') {
        code = generateIllustrationComponentCode(compName, defaultFile.path, sizeFiles.length > 0 ? sizeFiles : undefined, 1024);
      } else if (group.folder === 'images') {
        code = generateIllustrationComponentCode(compName, defaultFile.path, sizeFiles.length > 0 ? sizeFiles : undefined, 320);
      } else {
        const defaultSize = group.folder === 'avatars' ? 32 : 32;
        code = generateAvatarComponentCode(compName, defaultFile.path, sizeFiles.length > 0 ? sizeFiles : undefined, defaultSize);
      }

      const outPath = path.join(srcDir, group.folder, `${compName}.svelte`);
      await writeFileIfChanged(outPath, code);
      data.barrelExports.add(`export { default as ${compName} } from './${compName}.svelte';`);
      data.componentNames.push(compName);
      data.count++;
      generated++;
    }
  }

  // 顶层 src/index.ts：导出 icons（扁平 + namespace）+ materials + by-name + Icon/IconProvider
  const exportLines: string[] = [];

  // icons：通过子模块再 re-export，保留主入口扁平
  exportLines.push(`export * from './icons';`);
  exportLines.push(`export { iconsByCollection, iconsByDefault } from './icons/by-name';`);
  exportLines.push(`export type { IconUsageName, IconCollectionName } from './icons/by-name';`);

  // materials：扁平导出（跳过与 icons 同名）— 不再有"图标专属"集合，但扁平 icon 名优先
  const usedNames = new Set<string>([...defaultMapEntries.keys()].map((k) => toPascalCaseSafe(k)));
  for (const group of materialGroups) {
    const data = materialGroupData.get(group.folder)!;
    for (const exportLine of data.barrelExports) {
      const match = exportLine.match(/export \{ default as (\w+) \} from '\.\/(\w+)\.svelte';/);
      if (match) {
        const [, compName] = match;
        if (!usedNames.has(compName)) {
          exportLines.push(
            `export { default as ${compName} } from './${group.folder}/${compName}.svelte';`,
          );
          usedNames.add(compName);
        }
      }
    }
    const barrelPath = path.join(srcDir, group.folder, 'index.ts');
    const barrelContent =
      data.barrelExports.size > 0 ? Array.from(data.barrelExports).join('\n') + '\n' : 'export {};\n';
    await writeFileIfChanged(barrelPath, barrelContent);
  }

  // component-names.ts（保持向后兼容）
  const componentNamesMapping: Record<string, string[]> = {};
  for (const group of materialGroups) {
    componentNamesMapping[group.folder] = materialGroupData.get(group.folder)!.componentNames.sort();
  }
  const componentNamesContent = [
    '// Auto-generated component names mapping',
    'export const componentNames = {',
    ...Object.entries(componentNamesMapping).map(([category, names]) => {
      return `  ${category}: [${names.map((n) => `'${n}'`).join(', ')}],`;
    }),
    '} as const;',
    '',
    'export type ComponentCategory = keyof typeof componentNames;',
    '',
  ].join('\n');
  await writeFileIfChanged(path.join(srcDir, 'component-names.ts'), componentNamesContent);

  // index.ts：补 Icon / IconProvider / 上下文 key
  exportLines.push(`export { componentNames } from './component-names';`);
  exportLines.push(`export type { ComponentCategory } from './component-names';`);
  exportLines.push(`export { RESOURCE_ICON_CONTEXT_KEY } from './lib/types';`);
  exportLines.push(`export { default as Icon } from './lib/Icon.svelte';`);
  exportLines.push(`export { default as IconProvider } from './lib/IconProvider.svelte';`);
  exportLines.push('');
  await writeFileIfChanged(path.join(srcDir, 'index.ts'), exportLines.join('\n'));

  // 报告
  console.log(`Generated ${generated} components.`);
  const materialSummary = materialGroups
    .map((g) => `${g.folder}: ${materialGroupData.get(g.folder)?.count ?? 0}`)
    .join(', ');
  const iconSummary = [...iconsByCollection.entries()]
    .map(([c, l]) => `${c}: ${l.length}`)
    .join(', ');
  console.log(`Icons by collection: ${iconSummary}`);
  console.log(`Materials: ${materialSummary}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
