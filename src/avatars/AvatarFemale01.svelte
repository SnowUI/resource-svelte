<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarFemale01Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-32.jpg';
import AvatarFemale01Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-16.jpg';
import AvatarFemale01Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-20.jpg';
import AvatarFemale01Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-24.jpg';
import AvatarFemale01Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-28.jpg';
import AvatarFemale01Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-40.jpg';
import AvatarFemale01Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-48.jpg';
import AvatarFemale01Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-56.jpg';
import AvatarFemale01Src60 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-60.jpg';
import AvatarFemale01Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-64.jpg';
import AvatarFemale01Src72 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-72.jpg';
import AvatarFemale01Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-80.jpg';
import AvatarFemale01Src84 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-84.jpg';
import AvatarFemale01Src96 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-96.jpg';
import AvatarFemale01Src120 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-120.jpg';
import AvatarFemale01Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-128.jpg';
import AvatarFemale01Src144 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-144.jpg';
import AvatarFemale01Src168 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-168.jpg';
import AvatarFemale01Src192 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-192.jpg';
import AvatarFemale01Src240 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-240.jpg';
import AvatarFemale01Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-256.jpg';
import AvatarFemale01Src384 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-384.jpg';
import AvatarFemale01Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-512.jpg';
import AvatarFemale01Src768 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-768.jpg';
import AvatarFemale01Src1536 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-1536.jpg';
  const AvatarFemale01SizeMap = {
    16: AvatarFemale01Src16,
    20: AvatarFemale01Src20,
    24: AvatarFemale01Src24,
    28: AvatarFemale01Src28,
    32: AvatarFemale01Src,
    40: AvatarFemale01Src40,
    48: AvatarFemale01Src48,
    56: AvatarFemale01Src56,
    60: AvatarFemale01Src60,
    64: AvatarFemale01Src64,
    72: AvatarFemale01Src72,
    80: AvatarFemale01Src80,
    84: AvatarFemale01Src84,
    96: AvatarFemale01Src96,
    120: AvatarFemale01Src120,
    128: AvatarFemale01Src128,
    144: AvatarFemale01Src144,
    168: AvatarFemale01Src168,
    192: AvatarFemale01Src192,
    240: AvatarFemale01Src240,
    256: AvatarFemale01Src256,
    384: AvatarFemale01Src384,
    512: AvatarFemale01Src512,
    768: AvatarFemale01Src768,
    1536: AvatarFemale01Src1536,
  } as const;
  const AvatarFemale01AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 80, 84, 96, 120, 128, 144, 168, 192, 240, 256, 384, 512, 768, 1536] as const;

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
  };
  let { size = 32, width, height, alt = "AvatarFemale01", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarFemale01AvailableSizes));
  let imageSrc = $derived(AvatarFemale01SizeMap[closestSize as keyof typeof AvatarFemale01SizeMap] ?? AvatarFemale01Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>