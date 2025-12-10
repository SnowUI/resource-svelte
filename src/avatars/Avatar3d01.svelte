<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import Avatar3d01Src from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-32.jpg';
import Avatar3d01Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-16.jpg';
import Avatar3d01Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-20.jpg';
import Avatar3d01Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-24.jpg';
import Avatar3d01Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-28.jpg';
import Avatar3d01Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-40.jpg';
import Avatar3d01Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-48.jpg';
import Avatar3d01Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-56.jpg';
import Avatar3d01Src60 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-60.jpg';
import Avatar3d01Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-64.jpg';
import Avatar3d01Src72 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-72.jpg';
import Avatar3d01Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-80.jpg';
import Avatar3d01Src84 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-84.jpg';
import Avatar3d01Src96 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-96.jpg';
import Avatar3d01Src120 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-120.jpg';
import Avatar3d01Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-128.jpg';
import Avatar3d01Src144 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-144.jpg';
import Avatar3d01Src168 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-168.jpg';
import Avatar3d01Src192 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-192.jpg';
import Avatar3d01Src240 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-240.jpg';
import Avatar3d01Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-256.jpg';
import Avatar3d01Src384 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-384.jpg';
import Avatar3d01Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-512.jpg';
import Avatar3d01Src768 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-768.jpg';
import Avatar3d01Src1536 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-01-1536.jpg';
  const Avatar3d01SizeMap = {
    16: Avatar3d01Src16,
    20: Avatar3d01Src20,
    24: Avatar3d01Src24,
    28: Avatar3d01Src28,
    32: Avatar3d01Src,
    40: Avatar3d01Src40,
    48: Avatar3d01Src48,
    56: Avatar3d01Src56,
    60: Avatar3d01Src60,
    64: Avatar3d01Src64,
    72: Avatar3d01Src72,
    80: Avatar3d01Src80,
    84: Avatar3d01Src84,
    96: Avatar3d01Src96,
    120: Avatar3d01Src120,
    128: Avatar3d01Src128,
    144: Avatar3d01Src144,
    168: Avatar3d01Src168,
    192: Avatar3d01Src192,
    240: Avatar3d01Src240,
    256: Avatar3d01Src256,
    384: Avatar3d01Src384,
    512: Avatar3d01Src512,
    768: Avatar3d01Src768,
    1536: Avatar3d01Src1536,
  } as const;
  const Avatar3d01AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 80, 84, 96, 120, 128, 144, 168, 192, 240, 256, 384, 512, 768, 1536] as const;

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
  let { size = 32, width, height, alt = "Avatar3d01", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, Avatar3d01AvailableSizes));
  let imageSrc = $derived(Avatar3d01SizeMap[closestSize as keyof typeof Avatar3d01SizeMap] ?? Avatar3d01Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>