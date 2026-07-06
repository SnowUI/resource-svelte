import { promises as fs } from 'fs';
import * as path from 'path';

export type IconWeight = 'regular' | 'thin' | 'light' | 'bold' | 'fill' | 'duotone';

export interface IconAsset {
  name: string;
  kebabName: string;
  pascalName: string;
  collection: string;
  /** "special" 类无权重维度，weights 只有 regular */
  isSpecial: boolean;
  weights: Partial<Record<IconWeight, string>>; // weight -> SVG content
}

export interface MaterialFile {
  format: string;
  path: string;
  content: Buffer;
}

export interface MaterialAsset {
  name: string;
  kebabName: string;
  pascalName: string;
  files: MaterialFile[];
}

function toPascalCase(input: string): string {
  return input.replace(/(^\w|[-_]\w)/g, (m) => m.replace(/[-_]/, '').toUpperCase());
}

function toKebabCase(input: string): string {
  return input
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

export async function readIconAssets(resourceCoreDir: string): Promise<IconAsset[]> {
  const iconsDir = path.join(resourceCoreDir, 'assets', 'icons');
  const weights: IconWeight[] = ['regular', 'thin', 'light', 'bold', 'fill', 'duotone'];

  // 发现 collection 子目录
  let collections: string[] = [];
  try {
    const entries = await fs.readdir(iconsDir, { withFileTypes: true });
    collections = entries.filter((e) => e.isDirectory()).map((e) => e.name).sort();
  } catch {
    return [];
  }

  const result: IconAsset[] = [];

  for (const collection of collections) {
    const collectionDir = path.join(iconsDir, collection);
    const isSpecial = collection === 'special';

    if (isSpecial) {
      // special：collection 根目录扁平 SVG，无权重
      let files: string[] = [];
      try {
        files = await fs.readdir(collectionDir);
      } catch {
        continue;
      }
      for (const file of files) {
        if (!file.endsWith('.svg')) continue;
        const kebabName = file.replace(/\.svg$/, '');
        const pascalName = toPascalCase(kebabName);
        const fullPath = path.join(collectionDir, file);
        const svg = await fs.readFile(fullPath, 'utf8');
        result.push({
          name: kebabName,
          kebabName,
          pascalName,
          collection,
          isSpecial: true,
          weights: { regular: svg },
        });
      }
    } else {
      // 普通 collection：按 weight 子目录
      const map = new Map<string, IconAsset>();
      for (const w of weights) {
        const weightDir = path.join(collectionDir, w);
        let files: string[];
        try {
          files = await fs.readdir(weightDir);
        } catch {
          continue;
        }
        for (const file of files) {
          if (!file.endsWith('.svg')) continue;
          const kebabName = file.replace(/\.svg$/, '');
          const pascalName = toPascalCase(kebabName);
          const fullPath = path.join(weightDir, file);
          const svg = await fs.readFile(fullPath, 'utf8');
          const existing =
            map.get(kebabName) ||
            ({
              name: kebabName,
              kebabName,
              pascalName,
              collection,
              isSpecial: false,
              weights: {},
            } as IconAsset);
          existing.weights[w] = svg;
          map.set(kebabName, existing);
        }
      }
      result.push(...map.values());
    }
  }

  return result;
}

const ALLOWED_MATERIAL_EXTS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg']);

export async function readMaterialFolder(dir: string): Promise<MaterialFile[]> {
  try {
    const files = await fs.readdir(dir);
    const results: MaterialFile[] = [];
    for (const f of files) {
      if (f.startsWith('.')) continue;
      const full = path.join(dir, f);
      const stat = await fs.stat(full);
      if (stat.isFile()) {
        const ext = path.extname(f).toLowerCase();
        if (!ALLOWED_MATERIAL_EXTS.has(ext)) continue;
        const content = await fs.readFile(full);
        const format = ext.slice(1);
        results.push({ format, path: full, content });
      }
    }
    return results;
  } catch {
    return [];
  }
}

export async function readMaterialAssets(resourceCoreDir: string, folder: string): Promise<MaterialAsset[]> {
  const base = path.join(resourceCoreDir, 'assets', folder);
  try {
    const files = await fs.readdir(base);
    const map = new Map<string, MaterialAsset>();
    for (const f of files) {
      if (f.startsWith('.')) continue;
      const full = path.join(base, f);
      const stat = await fs.stat(full);
      if (stat.isFile()) {
        const ext = path.extname(f).toLowerCase();
        if (!ALLOWED_MATERIAL_EXTS.has(ext)) continue;
        const baseName = f.replace(/\.[^.]+$/, '');
        if (!baseName) continue;

        // 检查是否是带尺寸后缀的文件（如 avatar-byewind-64.jpg）
        // 合法尺寸：1x + 3x（avatars），以及 backgrounds/images/illustrations 的宽度
        const AVATAR_SIZES_1X = [12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512];
        const AVATAR_SIZES_3X = AVATAR_SIZES_1X.map((s) => s * 3);
        const WIDTH_SIZES_1X = [160, 320, 640, 1024, 1920];
        const WIDTH_SIZES_3X = WIDTH_SIZES_1X.map((s) => s * 3); // 480, 960, 1920, 3072, 5760
        const VALID_SIZES = new Set([
          ...AVATAR_SIZES_1X,
          ...AVATAR_SIZES_3X,
          ...WIDTH_SIZES_1X,
          ...WIDTH_SIZES_3X,
        ]);

        const sizeMatch = baseName.match(/^(.+)-(\d+)$/);
        let kebab: string;
        let size: number | undefined;

        if (sizeMatch) {
          const potentialSize = parseInt(sizeMatch[2], 10);
          // 如果数字是合法的尺寸，则认为是尺寸后缀
          if (VALID_SIZES.has(potentialSize)) {
            kebab = sizeMatch[1];
            size = potentialSize;
          } else {
            // 如果数字不是合法尺寸，则认为是资源名的一部分（如 avatar-3d-01）
            kebab = baseName;
            size = undefined;
          }
        } else {
          kebab = baseName;
          size = undefined;
        }

        const existing = map.get(kebab);
        const fileEntry: MaterialFile & { size?: number } = {
          format: ext.slice(1),
          path: full,
          content: await fs.readFile(full),
          ...(size !== undefined && { size }),
        };
        if (existing) {
          existing.files.push(fileEntry);
        } else {
          map.set(kebab, {
            name: kebab,
            kebabName: kebab,
            pascalName: toPascalCase(kebab),
            files: [fileEntry],
          });
        }
      }
    }
    return Array.from(map.values());
  } catch {
    return [];
  }
}

