import * as path from 'path';

export function generateIconComponentCode(componentName: string, weightsObjectLiteral: string, viewBox: string | null = null): string {
  const lines = [
    `<script lang="ts">`,
    `  import IconBase from '../lib/IconBase.svelte';`,
    `  import type { IconProps } from '../lib/types';`,
    `  `,
    `  const weights = ${weightsObjectLiteral} as const;`,
  ];
  
  if (viewBox) {
    lines.push(`  const defaultViewBox = "${viewBox}";`, '');
  }
  
  lines.push(
    viewBox 
      ? `  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();`
      : `  let { ...rest }: IconProps = $props();`,
    `</script>`,
    ``,
    `<IconBase viewBox={viewBox} weights={weights} {...rest} />`,
    ''
  );
  
  return lines.join('\n');
}

const BLACK_COLOR_VALUES = new Set([
  '#000',
  '#000000',
  '#000000ff',
  'black',
  'rgb(0,0,0)',
  'rgb(0, 0, 0)',
  'rgba(0,0,0,1)',
  'rgba(0, 0, 0, 1)'
]);

function normalizeColorAttributes(svgFragment: string): string {
  const shouldReplace = (value: string) => {
    const trimmed = value.trim();
    if (
      !trimmed ||
      /^none$/i.test(trimmed) ||
      /^currentColor$/i.test(trimmed) ||
      /^url\(/i.test(trimmed) ||
      /^var\(/i.test(trimmed)
    ) {
      return false;
    }
    return BLACK_COLOR_VALUES.has(trimmed.toLowerCase());
  };

  const replaceAttr = (attr: string, quote: string, value: string, original: string) => {
    if (!shouldReplace(value)) {
      return original;
    }
    return `${attr}=${quote}currentColor${quote}`;
  };

  let normalized = svgFragment.replace(
    /(fill|stroke)=("|\')([^"\']+)\2/gi,
    (match, attr, quote, value) => replaceAttr(attr, quote, value, match)
  );

  normalized = normalized.replace(/style=("|\')([^"\']*)\1/gi, (match, quote, value) => {
    const updated = value.replace(/(fill|stroke)\s*:\s*([^;]+)/gi, (_m, attr, val) => {
      const trimmed = val.trim();
      if (!shouldReplace(trimmed)) {
        return `${attr}:${trimmed}`;
      }
      return `${attr}:currentColor`;
    });
    return updated === value ? match : `style=${quote}${updated}${quote}`;
  });

  return normalized;
}

const ATTRIBUTE_NAME_MAP: Record<string, string> = {
  'clip-rule': 'clipRule',
  'fill-rule': 'fillRule',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-miterlimit': 'strokeMiterlimit',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'color-interpolation-filters': 'colorInterpolationFilters',
  'flood-color': 'floodColor',
  'flood-opacity': 'floodOpacity'
};

function normalizeAttributeNames(svgFragment: string): string {
  return svgFragment.replace(/(\s)([a-zA-Z_:][a-zA-Z0-9_.:-]*)=/g, (match, prefix, attr) => {
    const lowerAttr = attr.toLowerCase();
    if (ATTRIBUTE_NAME_MAP[lowerAttr]) {
      return `${prefix}${ATTRIBUTE_NAME_MAP[lowerAttr]}=`;
    }
    return match;
  });
}

function toStyleProp(prop: string): string {
  const mapped = ATTRIBUTE_NAME_MAP[prop.toLowerCase()];
  if (mapped) return mapped;
  return prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
}

function convertStyleAttributes(svgFragment: string): string {
  return svgFragment.replace(/style=("([^"]*)"|'([^']*)')/gi, (_match, _full, doubleQuote, singleQuote) => {
    const styleContent = (doubleQuote ?? singleQuote ?? '').trim();
    if (!styleContent) {
      return `style=""`;
    }
    const declarations = styleContent
      .split(/;(?![^(]*\))/g)
      .map((part) => part.trim())
      .filter(Boolean)
      .map((declaration) => {
        const [rawProp, ...rawValueParts] = declaration.split(':');
        if (!rawProp || rawValueParts.length === 0) return null;
        const valueRaw = rawValueParts.join(':').trim();
        if (!valueRaw) return null;
        const propName = toStyleProp(rawProp.trim());
        const numericMatch = /^[-+]?\d*\.?\d+$/.test(valueRaw);
        if (numericMatch) {
          const numericValue = Number(valueRaw);
          return `${propName}: ${numericValue}`;
        }
        return `${propName}: "${valueRaw.replace(/"/g, '\\"')}"`;
      })
      .filter((item): item is string => Boolean(item));

    if (declarations.length === 0) {
      return `style=""`;
    }

    return `style="${declarations.join('; ')}"`;
  });
}

function removeXmlnsAttributes(svgFragment: string): string {
  return svgFragment.replace(/\s+xmlns(:[a-zA-Z0-9_-]+)?=("([^"]*)"|'([^']*)')/gi, '');
}

export function extractViewBox(svg: string): string | null {
  const viewBoxMatch = svg.match(/viewBox=["']([^"']+)["']/i);
  if (viewBoxMatch) {
    return viewBoxMatch[1];
  }
  // 如果没有 viewBox，尝试从 width 和 height 推断
  const widthMatch = svg.match(/width=["'](\d+)["']/i);
  const heightMatch = svg.match(/height=["'](\d+)["']/i);
  if (widthMatch && heightMatch) {
    return `0 0 ${widthMatch[1]} ${heightMatch[1]}`;
  }
  return null;
}

export function wrapSvgAsSvelte(svgByWeight: Record<string, string>, componentName: string): { weightsLiteral: string; viewBox: string | null } {
  let extractedViewBox: string | null = null;
  const entries = Object.entries(svgByWeight).map(([w, svg]) => {
    // 提取 viewBox（使用第一个找到的 viewBox，假设所有权重使用相同的 viewBox）
    if (!extractedViewBox) {
      extractedViewBox = extractViewBox(svg);
    }
    // strip xml/doctype and outer <svg ...>...</svg>, keep inner nodes for IconBase
    let cleaned = svg
      .replace(/<\?xml[^>]*>/gi, '')
      .replace(/<!DOCTYPE[^>]*>/gi, '')
      .trim();
    // extract inner of first <svg>...</svg>
    const svgMatch = cleaned.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    const inner = (svgMatch ? svgMatch[1] : cleaned)
      .replace(/\n+/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .trim();
    const normalizedInner = removeXmlnsAttributes(
      convertStyleAttributes(normalizeAttributeNames(normalizeColorAttributes(inner)))
    );
    // Escape backticks and dollar signs for template literal
    const escaped = normalizedInner.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    return `'${w}': \`${escaped}\``;
  });
  return {
    weightsLiteral: `{ ${entries.join(', ')} }`,
    viewBox: extractedViewBox
  };
}

export function generateAvatarComponentCode(
  componentName: string, 
  filePath: string,
  sizeFiles?: Array<{ size: number; path: string }>,
  defaultSize: number = 32
): string {
  const normalizedPath = filePath.replace(/\\/g, '/');
  const assetsMatch = normalizedPath.match(/assets\/(.+)$/);
  
  // 生成导入语句
  const imports: string[] = [];
  const importIdentifier = `${componentName}Src`;
  
  // 查找默认尺寸的图片，如果没有则使用原始文件
  const defaultSizeFile = sizeFiles?.find(f => f.size === defaultSize);
  const defaultFilePath = defaultSizeFile ? defaultSizeFile.path : filePath;
  const normalizedDefaultPath = defaultFilePath.replace(/\\/g, '/');
  const defaultAssetsMatch = normalizedDefaultPath.match(/assets\/(.+)$/);
  
  if (defaultAssetsMatch) {
    const assetPath = `@snowui-design-system/resource-base/assets/${defaultAssetsMatch[1]}`;
    imports.push(`import ${importIdentifier} from '${assetPath}';`);
  } else {
    const importPath = path.relative('src/avatars', defaultFilePath).replace(/\\/g, '/');
    imports.push(`import ${importIdentifier} from '${importPath}';`);
  }
  
  // 多尺寸图片导入（排除默认尺寸，因为已经导入）
  const sizeImports: string[] = [];
  const sizeMap: string[] = [];
  
  if (sizeFiles && sizeFiles.length > 0) {
    for (const sizeFile of sizeFiles) {
      // 跳过默认尺寸，因为已经作为默认导入
      if (sizeFile.size === defaultSize) {
        sizeMap.push(`    ${sizeFile.size}: ${importIdentifier},`);
        continue;
      }
      
      const sizeImportName = `${componentName}Src${sizeFile.size}`;
      const normalizedSizePath = sizeFile.path.replace(/\\/g, '/');
      const sizeAssetsMatch = normalizedSizePath.match(/assets\/(.+)$/);
      
      if (sizeAssetsMatch) {
        const sizeAssetPath = `@snowui-design-system/resource-base/assets/${sizeAssetsMatch[1]}`;
        sizeImports.push(`import ${sizeImportName} from '${sizeAssetPath}';`);
      } else {
        const sizeImportPath = path.relative('src/avatars', sizeFile.path).replace(/\\/g, '/');
        sizeImports.push(`import ${sizeImportName} from '${sizeImportPath}';`);
      }
      
      sizeMap.push(`    ${sizeFile.size}: ${sizeImportName},`);
    }
  }
  
  // 生成组件代码
  const hasSizes = sizeFiles && sizeFiles.length > 0;
  
  // 生成可用尺寸数组（用于查找最接近的尺寸）
  const availableSizes = hasSizes 
    ? sizeFiles.map(f => f.size).sort((a, b) => a - b)
    : [];
  const availableSizesStr = hasSizes 
    ? `[${availableSizes.join(', ')}]`
    : '[]';
  
  // 查找最接近尺寸的辅助函数（优先匹配接近 3x 的资源）
  const findClosestSizeHelper = hasSizes ? `
  // 查找最接近的 3x 尺寸
  const findClosestSize = (target: number, available: readonly number[]): number => {
    if (available.length === 0) return target;
    const preferred = target * 3;
    let closest = available[0];
    let minDiff = Math.abs(preferred - closest);
    for (const size of available) {
      const diff = Math.abs(preferred - size);
      if (diff < minDiff) {
        minDiff = diff;
        closest = size;
      }
    }
    return closest;
  };` : '';
  
  const componentCode = [
    "<script lang=\"ts\">",
    "  import type { AvatarProps } from '../lib/types';",
    ...imports,
    ...sizeImports,
    '',
    hasSizes ? `  const ${componentName}SizeMap = {` : '',
    ...sizeMap,
    hasSizes ? `  } as const;` : '',
    hasSizes ? `  const ${componentName}AvailableSizes = ${availableSizesStr} as const;` : '',
    '',
    findClosestSizeHelper,
    '',
    `  let { size = ${defaultSize}, width, height, alt = "${componentName}", class: className = "", ...rest }: AvatarProps = $props();`,
    `  let resolvedWidth = $derived(size ?? width ?? ${defaultSize});`,
    `  let resolvedHeight = $derived(size ?? height ?? ${defaultSize});`,
    hasSizes 
      ? `  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸`
      : '',
    hasSizes
      ? `  let closestSize = $derived(findClosestSize(resolvedWidth, ${componentName}AvailableSizes));`
      : '',
    hasSizes
      ? `  let imageSrc = $derived(${componentName}SizeMap[closestSize as keyof typeof ${componentName}SizeMap] ?? ${importIdentifier});`
      : '',
    hasSizes ? '' : `  let imageSrc = $derived(${importIdentifier});`,
    "</script>",
    ``,
    `<img`,
    `  src={imageSrc}`,
    `  alt={alt}`,
    `  width={resolvedWidth}`,
    `  height={resolvedHeight}`,
    `  class={className}`,
    `  {...rest}`,
    `/>`,
    ''
  ].filter(line => line !== '').join('\n');
  
  return componentCode;
}

/**
 * 生成 Illustration 组件代码（宽度固定，高度自适应）
 */
export function generateIllustrationComponentCode(
  componentName: string, 
  filePath: string,
  sizeFiles?: Array<{ size: number; path: string }>,
  defaultWidth: number = 256
): string {
  const normalizedPath = filePath.replace(/\\/g, '/');
  const assetsMatch = normalizedPath.match(/assets\/(.+)$/);
  
  // 生成导入语句
  const imports: string[] = [];
  const importIdentifier = `${componentName}Src`;
  
  // 查找默认宽度的图片，如果没有则使用原始文件
  const defaultSizeFile = sizeFiles?.find(f => f.size === defaultWidth);
  const defaultFilePath = defaultSizeFile ? defaultSizeFile.path : filePath;
  const normalizedDefaultPath = defaultFilePath.replace(/\\/g, '/');
  const defaultAssetsMatch = normalizedDefaultPath.match(/assets\/(.+)$/);
  
  if (defaultAssetsMatch) {
    const assetPath = `@snowui-design-system/resource-base/assets/${defaultAssetsMatch[1]}`;
    imports.push(`import ${importIdentifier} from '${assetPath}';`);
  } else {
    const importPath = path.relative('src/illustrations', defaultFilePath).replace(/\\/g, '/');
    imports.push(`import ${importIdentifier} from '${importPath}';`);
  }
  
  // 多尺寸图片导入（排除默认尺寸，因为已经导入）
  const sizeImports: string[] = [];
  const sizeMap: string[] = [];
  
  if (sizeFiles && sizeFiles.length > 0) {
    for (const sizeFile of sizeFiles) {
      // 跳过默认尺寸，因为已经作为默认导入
      if (sizeFile.size === defaultWidth) {
        sizeMap.push(`    ${sizeFile.size}: ${importIdentifier},`);
        continue;
      }
      
      const sizeImportName = `${componentName}Src${sizeFile.size}`;
      const normalizedSizePath = sizeFile.path.replace(/\\/g, '/');
      const sizeAssetsMatch = normalizedSizePath.match(/assets\/(.+)$/);
      
      if (sizeAssetsMatch) {
        const sizeAssetPath = `@snowui-design-system/resource-base/assets/${sizeAssetsMatch[1]}`;
        sizeImports.push(`import ${sizeImportName} from '${sizeAssetPath}';`);
      } else {
        const sizeImportPath = path.relative('src/illustrations', sizeFile.path).replace(/\\/g, '/');
        sizeImports.push(`import ${sizeImportName} from '${sizeImportPath}';`);
      }
      
      sizeMap.push(`    ${sizeFile.size}: ${sizeImportName},`);
    }
  }
  
  // 生成组件代码
  const hasSizes = sizeFiles && sizeFiles.length > 0;
  
  // 生成可用宽度数组（用于查找最接近的宽度）
  const availableWidths = hasSizes 
    ? sizeFiles.map(f => f.size).sort((a, b) => a - b)
    : [];
  const availableWidthsStr = hasSizes 
    ? `[${availableWidths.join(', ')}]`
    : '[]';
  
  // 查找最接近宽度的辅助函数（优先匹配接近 3x 的资源）
  const findClosestWidthHelper = hasSizes ? `
  // 查找最接近的 3x 宽度
  const findClosestWidth = (target: number, available: readonly number[]): number => {
    if (available.length === 0) return target;
    const preferred = target * 3;
    let closest = available[0];
    let minDiff = Math.abs(preferred - closest);
    for (const width of available) {
      const diff = Math.abs(preferred - width);
      if (diff < minDiff) {
        minDiff = diff;
        closest = width;
      }
    }
    return closest;
  };` : '';
  
  const componentCode = [
    "<script lang=\"ts\">",
    "  import type { BackgroundProps } from '../lib/types';",
    ...imports,
    ...sizeImports,
    '',
    hasSizes ? `  const ${componentName}WidthMap = {` : '',
    ...sizeMap,
    hasSizes ? `  } as const;` : '',
    hasSizes ? `  const ${componentName}AvailableWidths = ${availableWidthsStr} as const;` : '',
    '',
    findClosestWidthHelper,
    '',
    `  let { width = ${defaultWidth}, height, alt = "${componentName}", class: className = "", ...rest }: BackgroundProps = $props();`,
    `  let resolvedWidth = $derived(width ?? ${defaultWidth});`,
    hasSizes 
      ? `  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度`
      : '',
    hasSizes
      ? `  let closestWidth = $derived(findClosestWidth(resolvedWidth, ${componentName}AvailableWidths));`
      : '',
    hasSizes
      ? `  let imageSrc = $derived(${componentName}WidthMap[closestWidth as keyof typeof ${componentName}WidthMap] ?? ${importIdentifier});`
      : '',
    hasSizes ? '' : `  let imageSrc = $derived(${importIdentifier});`,
    "</script>",
    ``,
    `<img`,
    `  src={imageSrc}`,
    `  alt={alt}`,
    `  width={resolvedWidth}`,
    `  height={height ?? undefined}`,
    `  class={className}`,
    `  {...rest}`,
    `/>`,
    ''
  ].filter(line => line !== '').join('\n');
  
  return componentCode;
}

