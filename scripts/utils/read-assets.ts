import { promises as fs } from 'fs';
import * as path from 'path';

export type IconWeight = 'regular' | 'thin' | 'light' | 'bold' | 'fill' | 'duotone';

export interface IconAsset {
  name: string;
  kebabName: string;
  pascalName: string;
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
  const map = new Map<string, IconAsset>();

  for (const w of weights) {
    const weightDir = path.join(iconsDir, w);
    try {
      const files = await fs.readdir(weightDir);
      for (const file of files) {
        if (!file.endsWith('.svg')) continue;
        // e.g. four-leaf-clover-regular.svg -> name without suffix
        const kebabName = file.replace(new RegExp(`-${w}\\.svg$`), '').replace(/\.svg$/, '');
        const pascalName = toPascalCase(kebabName);
        const fullPath = path.join(weightDir, file);
        const svg = await fs.readFile(fullPath, 'utf8');
        const existing = map.get(kebabName) || {
          name: kebabName,
          kebabName,
          pascalName,
          weights: {},
        };
        existing.weights[w] = svg;
        map.set(kebabName, existing);
      }
    } catch {
      // skip missing weight folder
    }
  }

  return Array.from(map.values());
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
        // 合法的尺寸：16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512
        // 以及 backgrounds/images/illustrations 的宽度：160, 320, 640, 1024, 1920
        const VALID_SIZES = new Set([16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512, 160, 320, 640, 1024, 1920]);
        
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

