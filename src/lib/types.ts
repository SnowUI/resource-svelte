export const RESOURCE_ICON_CONTEXT_KEY = Symbol('RESOURCE_ICON_CONTEXT_KEY');
export type ResourceSize = 12 | 16 | 20 | 24 | 28 | 32 | 40 | 48 | 80;
export type IconWeight = 'regular' | 'thin' | 'light' | 'bold' | 'fill' | 'duotone';

export interface IconProps {
  size?: ResourceSize | number | string;
  color?: string;
  weight?: IconWeight;
  class?: string;
  viewBox?: string;
  [key: string]: unknown;
}

export interface IconContext extends IconProps {
  registerChildSize?: (size: ResourceSize | number | string | undefined) => void;
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
