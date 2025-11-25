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
import AvatarDefaultSrc64 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-64.jpg';
import AvatarDefaultSrc80 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-80.jpg';
import AvatarDefaultSrc128 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-128.jpg';
import AvatarDefaultSrc256 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-256.jpg';
import AvatarDefaultSrc512 from '@snowui-design-system/resource-base/assets/avatars/avatar-default-512.jpg';
  const AvatarDefaultSizeMap = {
    16: AvatarDefaultSrc16,
    20: AvatarDefaultSrc20,
    24: AvatarDefaultSrc24,
    28: AvatarDefaultSrc28,
    32: AvatarDefaultSrc,
    40: AvatarDefaultSrc40,
    48: AvatarDefaultSrc48,
    56: AvatarDefaultSrc56,
    64: AvatarDefaultSrc64,
    80: AvatarDefaultSrc80,
    128: AvatarDefaultSrc128,
    256: AvatarDefaultSrc256,
    512: AvatarDefaultSrc512,
  } as const;
  const AvatarDefaultAvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

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