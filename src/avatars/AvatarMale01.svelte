<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarMale01Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-32.jpg';
import AvatarMale01Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-16.jpg';
import AvatarMale01Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-20.jpg';
import AvatarMale01Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-24.jpg';
import AvatarMale01Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-28.jpg';
import AvatarMale01Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-40.jpg';
import AvatarMale01Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-48.jpg';
import AvatarMale01Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-56.jpg';
import AvatarMale01Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-64.jpg';
import AvatarMale01Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-80.jpg';
import AvatarMale01Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-128.jpg';
import AvatarMale01Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-256.jpg';
import AvatarMale01Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-512.jpg';
  const AvatarMale01SizeMap = {
    16: AvatarMale01Src16,
    20: AvatarMale01Src20,
    24: AvatarMale01Src24,
    28: AvatarMale01Src28,
    32: AvatarMale01Src,
    40: AvatarMale01Src40,
    48: AvatarMale01Src48,
    56: AvatarMale01Src56,
    64: AvatarMale01Src64,
    80: AvatarMale01Src80,
    128: AvatarMale01Src128,
    256: AvatarMale01Src256,
    512: AvatarMale01Src512,
  } as const;
  const AvatarMale01AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

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
  let { size = 32, width, height, alt = "AvatarMale01", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarMale01AvailableSizes));
  let imageSrc = $derived(AvatarMale01SizeMap[closestSize as keyof typeof AvatarMale01SizeMap] ?? AvatarMale01Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>