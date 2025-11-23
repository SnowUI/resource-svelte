export type IconWeight = 'regular' | 'thin' | 'light' | 'bold' | 'fill' | 'duotone';

export interface IconProps {
  size?: number | string;
  color?: string;
  weight?: IconWeight;
  class?: string;
  viewBox?: string;
  [key: string]: unknown;
}

export interface AvatarProps {
  size?: number;
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

