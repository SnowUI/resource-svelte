<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import Avatar3d04Src from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-04-32.jpg';
import Avatar3d04Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-04-16.jpg';
import Avatar3d04Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-04-20.jpg';
import Avatar3d04Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-04-24.jpg';
import Avatar3d04Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-04-28.jpg';
import Avatar3d04Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-04-40.jpg';
import Avatar3d04Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-04-48.jpg';
import Avatar3d04Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-04-56.jpg';
import Avatar3d04Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-04-64.jpg';
import Avatar3d04Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-04-80.jpg';
import Avatar3d04Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-04-128.jpg';
import Avatar3d04Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-04-256.jpg';
import Avatar3d04Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-04-512.jpg';
  const Avatar3d04SizeMap = {
    16: Avatar3d04Src16,
    20: Avatar3d04Src20,
    24: Avatar3d04Src24,
    28: Avatar3d04Src28,
    32: Avatar3d04Src,
    40: Avatar3d04Src40,
    48: Avatar3d04Src48,
    56: Avatar3d04Src56,
    64: Avatar3d04Src64,
    80: Avatar3d04Src80,
    128: Avatar3d04Src128,
    256: Avatar3d04Src256,
    512: Avatar3d04Src512,
  } as const;
  const Avatar3d04AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

  // 查找最接近的可用尺寸
  const findClosestSize = (target: number, available: readonly number[]): number => {
    if (available.length === 0) return target;
    // 如果目标尺寸在可用尺寸中，直接返回
    if (available.includes(target)) return target;
    // 找到最接近的尺寸
    let closest = available[0];
    let minDiff = Math.abs(target - closest);
    for (const size of available) {
      const diff = Math.abs(target - size);
      if (diff < minDiff) {
        minDiff = diff;
        closest = size;
      }
    }
    return closest;
  };
  let { size = 32, width, height, alt = "Avatar3d04", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, Avatar3d04AvailableSizes));
  let imageSrc = $derived(Avatar3d04SizeMap[closestSize as keyof typeof Avatar3d04SizeMap] ?? Avatar3d04Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>