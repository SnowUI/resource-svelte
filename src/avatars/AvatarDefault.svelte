<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarDefaultSrc from '@snowui-design-system/resource-base/assets/avatars/avatar-default-32.jpg';
import AvatarDefaultSrc16 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-16.jpg';
import AvatarDefaultSrc20 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-20.jpg';
import AvatarDefaultSrc24 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-24.jpg';
import AvatarDefaultSrc28 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-28.jpg';
import AvatarDefaultSrc40 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-40.jpg';
import AvatarDefaultSrc48 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-48.jpg';
import AvatarDefaultSrc56 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-56.jpg';
import AvatarDefaultSrc60 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-60.jpg';
import AvatarDefaultSrc64 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-64.jpg';
import AvatarDefaultSrc72 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-72.jpg';
import AvatarDefaultSrc80 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-80.jpg';
import AvatarDefaultSrc84 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-84.jpg';
import AvatarDefaultSrc96 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-96.jpg';
import AvatarDefaultSrc120 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-120.jpg';
import AvatarDefaultSrc128 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-128.jpg';
import AvatarDefaultSrc144 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-144.jpg';
import AvatarDefaultSrc168 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-168.jpg';
import AvatarDefaultSrc192 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-192.jpg';
import AvatarDefaultSrc240 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-240.jpg';
import AvatarDefaultSrc256 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-256.jpg';
import AvatarDefaultSrc384 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-384.jpg';
import AvatarDefaultSrc512 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-512.jpg';
import AvatarDefaultSrc768 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-768.jpg';
import AvatarDefaultSrc1536 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-1536.jpg';
  const AvatarDefaultSizeMap = {
    16: AvatarDefaultSrc16,
    20: AvatarDefaultSrc20,
    24: AvatarDefaultSrc24,
    28: AvatarDefaultSrc28,
    32: AvatarDefaultSrc,
    40: AvatarDefaultSrc40,
    48: AvatarDefaultSrc48,
    56: AvatarDefaultSrc56,
    60: AvatarDefaultSrc60,
    64: AvatarDefaultSrc64,
    72: AvatarDefaultSrc72,
    80: AvatarDefaultSrc80,
    84: AvatarDefaultSrc84,
    96: AvatarDefaultSrc96,
    120: AvatarDefaultSrc120,
    128: AvatarDefaultSrc128,
    144: AvatarDefaultSrc144,
    168: AvatarDefaultSrc168,
    192: AvatarDefaultSrc192,
    240: AvatarDefaultSrc240,
    256: AvatarDefaultSrc256,
    384: AvatarDefaultSrc384,
    512: AvatarDefaultSrc512,
    768: AvatarDefaultSrc768,
    1536: AvatarDefaultSrc1536,
  } as const;
  const AvatarDefaultAvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 80, 84, 96, 120, 128, 144, 168, 192, 240, 256, 384, 512, 768, 1536] as const;

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
  let { size = 32, width, height, alt = "AvatarDefault", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarDefaultAvailableSizes));
  let imageSrc = $derived(AvatarDefaultSizeMap[closestSize as keyof typeof AvatarDefaultSizeMap] ?? AvatarDefaultSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>