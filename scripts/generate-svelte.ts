import { promises as fs } from 'fs';
import * as path from 'path';
import { readIconAssets, readMaterialAssets } from './utils/read-assets';
import { wrapSvgAsSvelte, generateIconComponentCode, generateAvatarComponentCode, generateIllustrationComponentCode } from './utils/generate-component';

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
  // When running from resource-svelte/scripts/, __dirname is resource-svelte/scripts/
  // So we need to go up one level to get to resource-svelte/
  const sveltePkgDir = path.resolve(__dirname, '..');
  const srcDir = path.join(sveltePkgDir, 'src');
  
  // Try to find resource-base directory
  // 1. First, try monorepo structure: ../resource-base (from resource-svelte/ to resource-base)
  // 2. Then, try npm package: node_modules/@snowui-design-system/resource-base
  const repoRoot = path.resolve(sveltePkgDir, '..');
  const monorepoCoreDir = path.join(repoRoot, 'resource-base');
  const npmCoreDir = path.join(sveltePkgDir, 'node_modules', '@snowui-design-system', 'resource-core');
  
  let resourceCoreDir: string;
  try {
    // Check if monorepo structure exists
    await fs.access(monorepoCoreDir);
    resourceCoreDir = monorepoCoreDir;
    console.log('📦 Using monorepo resource-core:', resourceCoreDir);
  } catch {
    // Fall back to npm package
    try {
      await fs.access(npmCoreDir);
      resourceCoreDir = npmCoreDir;
      console.log('📦 Using npm package resource-core:', resourceCoreDir);
    } catch {
      console.error('❌ Error: Cannot find resource-core directory.');
      console.error('   Tried:', monorepoCoreDir);
      console.error('   Tried:', npmCoreDir);
      console.error('   Please ensure @snowui-design-system/resource-base is installed.');
      process.exit(1);
    }
  }

  // Prepare folders
  const iconsDir = path.join(srcDir, 'icons');
  await ensureDir(iconsDir);
  for (const group of materialGroups) {
    await ensureDir(path.join(srcDir, group.folder));
  }
  await ensureDir(path.join(srcDir, 'vectors'));

  // Read assets
  const icons = await readIconAssets(resourceCoreDir);
  const materialAssets = new Map<string, Awaited<ReturnType<typeof readMaterialAssets>>>();
  for (const group of materialGroups) {
    const assets = await readMaterialAssets(resourceCoreDir, group.folder);
    materialAssets.set(group.folder, assets);
  }

  let generated = 0;

  const iconExportLines: string[] = [];
  const iconByNameImports = new Set<string>();
  const iconByNameEntries: string[] = [];
  const expectedIconFiles = new Set<string>(['by-name.ts']);

  const materialGroupData = new Map<
    string,
    {
      barrelExports: Set<string>;
      count: number;
      componentNames: string[]; // 添加组件名称数组
    }
  >();

  for (const group of materialGroups) {
    materialGroupData.set(group.folder, {
      barrelExports: new Set<string>(),
      count: 0,
      componentNames: [],
    });
  }

  // Generate icon components
  for (const icon of icons) {
    const compName = icon.pascalName;
    if (!compName) continue;
    const { weightsLiteral, viewBox } = wrapSvgAsSvelte(icon.weights as Record<string, string>, compName);
    const code = generateIconComponentCode(compName, weightsLiteral, viewBox);
    const outPath = path.join(iconsDir, `${compName}.svelte`);
    await writeFileIfChanged(outPath, code);
    iconExportLines.push(`export { default as ${compName} } from './icons/${compName}.svelte';`);
    iconByNameImports.add(`import ${compName} from './${compName}.svelte';`);
    iconByNameEntries.push(`  '${icon.kebabName}': ${compName},`);
    expectedIconFiles.add(`${compName}.svelte`);
    generated++;
  }

  for (const group of materialGroups) {
    const assets = materialAssets.get(group.folder) ?? [];
    const data = materialGroupData.get(group.folder)!;

    for (const asset of assets) {
      const firstFile = asset.files[0];
      if (!firstFile) continue;
      const compName = sanitizeComponentName(asset.name, group.folder);
      if (!compName) continue;
      
      // 跳过错误的组件：如果资源名不包含数字后缀，但所有文件的 size 都是变体编号（1-10）
      // 例如：avatar-3d 资源包含 avatar-3d-01.jpg (size=01), avatar-3d-02.jpg (size=02) 等
      // 这些应该被识别为独立的组件（Avatar3d01, Avatar3d02 等），而不是一个 Avatar3d 组件
      // 正确的尺寸应该是 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512
      if (!asset.name.match(/-\d+$/)) {
        // 获取所有文件的 size 值
        const sizes = asset.files
          .map(f => (f as any).size)
          .filter((s): s is number => s !== undefined);
        
        // 如果所有 size 都在 1-10 范围内，说明这些是变体编号，不是尺寸
        // 检查是否所有 size 都是变体编号（1-10），且没有正确的尺寸（>=16）
        const allSizesAreVariants = sizes.length > 0 && 
          sizes.every(s => s >= 1 && s <= 10) && 
          !sizes.some(s => s >= 16);
        
        if (allSizesAreVariants) {
          // 检查是否有默认文件（文件名就是资源名，如 avatar-3d.jpg，没有 size）
          const hasDefaultFile = asset.files.some(f => (f as any).size === undefined);
          
          // 如果没有默认文件，说明这是错误的分组，跳过
          if (!hasDefaultFile) {
            continue;
          }
        }
      }
      
      // 查找带 size 属性的文件（多尺寸图片）
      const sizeFiles = asset.files
        .filter(f => (f as any).size !== undefined)
        .map(f => ({ size: (f as any).size, path: f.path }))
        .sort((a, b) => a.size - b.size);
      
      // 找到默认文件（没有 size 属性的第一个文件）
      const defaultFile = asset.files.find(f => (f as any).size === undefined) || firstFile;
      
      // 根据素材类型选择不同的生成函数
      let code: string;
      if (group.folder === 'illustrations') {
        // Illustrations: 宽度固定，高度自适应，默认宽度 320（与 images 一致）
        code = generateIllustrationComponentCode(
          compName, 
          defaultFile.path, 
          sizeFiles.length > 0 ? sizeFiles : undefined,
          320 // 默认宽度
        );
      } else if (group.folder === 'backgrounds') {
        // Backgrounds: 宽度固定，高度自适应，默认宽度 1024
        code = generateIllustrationComponentCode(
          compName, 
          defaultFile.path, 
          sizeFiles.length > 0 ? sizeFiles : undefined,
          1024 // 默认宽度
        );
      } else if (group.folder === 'images') {
        // Images: 宽度固定，高度自适应，默认宽度 320
        code = generateIllustrationComponentCode(
          compName, 
          defaultFile.path, 
          sizeFiles.length > 0 ? sizeFiles : undefined,
          320 // 默认宽度
        );
      } else {
        // Avatars 和其他: 正方形尺寸，默认 32x32
        const defaultSize = group.folder === 'avatars' ? 32 : 32;
        code = generateAvatarComponentCode(
          compName, 
          defaultFile.path, 
          sizeFiles.length > 0 ? sizeFiles : undefined,
          defaultSize
        );
      }
      
      const outPath = path.join(srcDir, group.folder, `${compName}.svelte`);
    await writeFileIfChanged(outPath, code);
      data.barrelExports.add(`export { default as ${compName} } from './${compName}.svelte';`);
      data.componentNames.push(compName); // 记录组件名称
      data.count++;
    generated++;
  }
  }

  // Generate index.ts exports
  const exportLines = new Set<string>(iconExportLines);
  
  // Track exported component names to avoid duplicates (icons have priority)
  const exportedNames = new Set<string>();
  for (const line of iconExportLines) {
    const match = line.match(/export \{ default as (\w+) \} from/);
    if (match) {
      exportedNames.add(match[1]);
    }
  }
  
  // Add all material component exports directly (no namespaces)
  // Skip if name already exists (icons have priority)
  for (const group of materialGroups) {
    const data = materialGroupData.get(group.folder)!;
    for (const exportLine of data.barrelExports) {
      // Convert from './ComponentName.svelte' to './avatars/ComponentName.svelte' etc.
      const match = exportLine.match(/export \{ default as (\w+) \} from '\.\/(\w+)\.svelte';/);
      if (match) {
        const [, compName, oldPath] = match;
        // Skip if name already exported (from icons)
        if (!exportedNames.has(compName)) {
          exportLines.add(`export { default as ${compName} } from './${group.folder}/${compName}.svelte';`);
          exportedNames.add(compName);
    }
  }
    }
    // Still create barrel files for organization, but we export directly from index.ts
    const barrelPath = path.join(srcDir, group.folder, 'index.ts');
    const barrelContent =
      data.barrelExports.size > 0
        ? Array.from(data.barrelExports).join('\n') + '\n'
        : 'export {};\n';
    await writeFileIfChanged(barrelPath, barrelContent);
  }

  // Generate component names mapping file
  const componentNamesMapping: Record<string, string[]> = {};
  for (const group of materialGroups) {
    const data = materialGroupData.get(group.folder)!;
    componentNamesMapping[group.folder] = data.componentNames.sort();
  }
  
  // Generate component-names.ts file
  const componentNamesContent = [
    '// Auto-generated component names mapping',
    '// This file is generated automatically. Do not edit manually.',
    '',
    'export const componentNames = {',
    ...Object.entries(componentNamesMapping).map(([category, names]) => {
      return `  ${category}: [${names.map(n => `'${n}'`).join(', ')}],`;
    }),
    '} as const;',
    '',
    'export type ComponentCategory = keyof typeof componentNames;',
    ''
  ].join('\n');
  
  await writeFileIfChanged(path.join(srcDir, 'component-names.ts'), componentNamesContent);

  const indexContentLines = [
    ...Array.from(exportLines),
    `export { iconsByName as icons } from './icons/by-name';`,
    `export type { IconName } from './icons/by-name';`,
    `export { componentNames } from './component-names';`,
    `export type { ComponentCategory } from './component-names';`,
    ''
  ];
  const indexContent = indexContentLines.join('\n');

  await writeFileIfChanged(path.join(srcDir, 'index.ts'), indexContent);

  if (iconByNameEntries.length > 0) {
    const iconsByNameContent = [
      ...Array.from(iconByNameImports).sort(),
      '',
      'export const iconsByName = {',
      ...iconByNameEntries.sort(),
      "} as const;",
      '',
      'export type IconName = keyof typeof iconsByName;',
      ''
    ].join('\n');
    await writeFileIfChanged(path.join(srcDir, 'icons', 'by-name.ts'), iconsByNameContent);
  }

  // Cleanup stale icon files
  try {
    const existingIconFiles = await fs.readdir(iconsDir);
    for (const file of existingIconFiles) {
      if (!file.endsWith('.svelte')) continue;
      if (!expectedIconFiles.has(file)) {
        await fs.unlink(path.join(iconsDir, file));
      }
    }
  } catch {}

  // Report
  console.log(`Generated ${generated} components.`);
  const materialSummary = materialGroups
    .map((group) => `${group.folder}: ${materialGroupData.get(group.folder)?.count ?? 0}`)
    .join(', ');
  console.log(`Index updated with ${icons.length} icons; ${materialSummary}.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

