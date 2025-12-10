<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import Avatar3d02Src from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-32.jpg';
import Avatar3d02Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-16.jpg';
import Avatar3d02Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-20.jpg';
import Avatar3d02Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-24.jpg';
import Avatar3d02Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-28.jpg';
import Avatar3d02Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-40.jpg';
import Avatar3d02Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-48.jpg';
import Avatar3d02Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-56.jpg';
import Avatar3d02Src60 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-60.jpg';
import Avatar3d02Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-64.jpg';
import Avatar3d02Src72 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-72.jpg';
import Avatar3d02Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-80.jpg';
import Avatar3d02Src84 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-84.jpg';
import Avatar3d02Src96 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-96.jpg';
import Avatar3d02Src120 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-120.jpg';
import Avatar3d02Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-128.jpg';
import Avatar3d02Src144 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-144.jpg';
import Avatar3d02Src168 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-168.jpg';
import Avatar3d02Src192 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-192.jpg';
import Avatar3d02Src240 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-240.jpg';
import Avatar3d02Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-256.jpg';
import Avatar3d02Src384 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-384.jpg';
import Avatar3d02Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-512.jpg';
import Avatar3d02Src768 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-768.jpg';
import Avatar3d02Src1536 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-02-1536.jpg';
  const Avatar3d02SizeMap = {
    16: Avatar3d02Src16,
    20: Avatar3d02Src20,
    24: Avatar3d02Src24,
    28: Avatar3d02Src28,
    32: Avatar3d02Src,
    40: Avatar3d02Src40,
    48: Avatar3d02Src48,
    56: Avatar3d02Src56,
    60: Avatar3d02Src60,
    64: Avatar3d02Src64,
    72: Avatar3d02Src72,
    80: Avatar3d02Src80,
    84: Avatar3d02Src84,
    96: Avatar3d02Src96,
    120: Avatar3d02Src120,
    128: Avatar3d02Src128,
    144: Avatar3d02Src144,
    168: Avatar3d02Src168,
    192: Avatar3d02Src192,
    240: Avatar3d02Src240,
    256: Avatar3d02Src256,
    384: Avatar3d02Src384,
    512: Avatar3d02Src512,
    768: Avatar3d02Src768,
    1536: Avatar3d02Src1536,
  } as const;
  const Avatar3d02AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 80, 84, 96, 120, 128, 144, 168, 192, 240, 256, 384, 512, 768, 1536] as const;

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
  let { size = 32, width, height, alt = "Avatar3d02", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, Avatar3d02AvailableSizes));
  let imageSrc = $derived(Avatar3d02SizeMap[closestSize as keyof typeof Avatar3d02SizeMap] ?? Avatar3d02Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>