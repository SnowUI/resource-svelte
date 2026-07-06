export const RESOURCE_ICON_CONTEXT_KEY = Symbol('RESOURCE_ICON_CONTEXT_KEY');
export type ResourceSize = 12 | 16 | 20 | 24 | 28 | 32 | 40 | 48 | 80;
export type IconWeight = 'regular' | 'thin' | 'light' | 'bold' | 'fill' | 'duotone';

export interface IconMeta {
  collection: string;
  /** kebab-case usageName，与该组件在所属 collection 中的 iconName 一致 */
  usageName: string;
  /** PascalCase 组件名 */
  componentName: string;
}

/**
 * Provider 的替换策略。多个字段同时存在时优先级：
 *   preserve > replaceMap > targetCollection > priority
 */
export interface ReplacePolicy {
  /**
   * 例外保留：被命中的组件不替换。
   * 支持三种模式：
   *   - "component:DotCircle" 按组件名锁定
   *   - "usage:home" 按 usageName 锁定
   *   - "snowui:dot-circle" 按 collection:iconName 锁定（注意：不带 `collection:` 前缀）
   */
  preserve?: string[];
  /**
   * 精确替换表，key 与 preserve 模式同名，value 为 "collection:iconName"
   * 例：{ "phosphor:bell": "material-symbols:notifications" }
   */
  replaceMap?: Record<string, string>;
  /** 整体切换到目标 collection */
  targetCollection?: string;
  /** 优先级数组：按顺序找第一个含该 usageName 的 collection */
  priority?: string[];
}

export interface IconProps {
  size?: ResourceSize | number | string;
  color?: string;
  weight?: IconWeight;
  class?: string;
  viewBox?: string;
  /** 内部使用：标志该次渲染已经过 Provider 替换决策，不再二次替换。 */
  bypassSwitch?: boolean;
  [key: string]: unknown;
}

export interface IconContext extends IconProps {
  registerChildSize?: (size: ResourceSize | number | string | undefined) => void;
  /** Provider 设置的默认 collection（影响 <Icon name=""> 解析） */
  collection?: string;
  /** Provider 设置的 fallback collection 顺序 */
  fallbackCollections?: string[];
  /** 是否允许远程 Iconify 加载 */
  allowRemote?: boolean;
  /** 替换策略（影响所有直接组件 + <Icon name=""> 渲染） */
  replace?: ReplacePolicy;
}

export interface AvatarProps {
  size?: ResourceSize | number;
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  class?: string;
  [key: string]: unknown;
}

export interface BackgroundProps {
  width?: number;
  height?: number;
  src?: string;
  alt?: string;
  class?: string;
  [key: string]: unknown;
}
