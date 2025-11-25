<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import Avatar3d03Src from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-03-32.jpg';
import Avatar3d03Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-03-16.jpg';
import Avatar3d03Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-03-20.jpg';
import Avatar3d03Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-03-24.jpg';
import Avatar3d03Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-03-28.jpg';
import Avatar3d03Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-03-40.jpg';
import Avatar3d03Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-03-48.jpg';
import Avatar3d03Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-03-56.jpg';
import Avatar3d03Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-03-64.jpg';
import Avatar3d03Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-03-80.jpg';
import Avatar3d03Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-03-128.jpg';
import Avatar3d03Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-03-256.jpg';
import Avatar3d03Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-03-512.jpg';
  const Avatar3d03SizeMap = {
    16: Avatar3d03Src16,
    20: Avatar3d03Src20,
    24: Avatar3d03Src24,
    28: Avatar3d03Src28,
    32: Avatar3d03Src,
    40: Avatar3d03Src40,
    48: Avatar3d03Src48,
    56: Avatar3d03Src56,
    64: Avatar3d03Src64,
    80: Avatar3d03Src80,
    128: Avatar3d03Src128,
    256: Avatar3d03Src256,
    512: Avatar3d03Src512,
  } as const;
  const Avatar3d03AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

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
  let { size = 32, width, height, alt = "Avatar3d03", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, Avatar3d03AvailableSizes));
  let imageSrc = $derived(Avatar3d03SizeMap[closestSize as keyof typeof Avatar3d03SizeMap] ?? Avatar3d03Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>