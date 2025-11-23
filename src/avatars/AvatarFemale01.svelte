<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarFemale01Src from '@snowui-design-system/resource-core/assets/avatars/avatar-female-01-32.jpg';
import AvatarFemale01Src16 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-01-16.jpg';
import AvatarFemale01Src20 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-01-20.jpg';
import AvatarFemale01Src24 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-01-24.jpg';
import AvatarFemale01Src28 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-01-28.jpg';
import AvatarFemale01Src40 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-01-40.jpg';
import AvatarFemale01Src48 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-01-48.jpg';
import AvatarFemale01Src56 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-01-56.jpg';
import AvatarFemale01Src64 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-01-64.jpg';
import AvatarFemale01Src80 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-01-80.jpg';
import AvatarFemale01Src128 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-01-128.jpg';
import AvatarFemale01Src256 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-01-256.jpg';
import AvatarFemale01Src512 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-01-512.jpg';
  const AvatarFemale01SizeMap = {
    16: AvatarFemale01Src16,
    20: AvatarFemale01Src20,
    24: AvatarFemale01Src24,
    28: AvatarFemale01Src28,
    32: AvatarFemale01Src,
    40: AvatarFemale01Src40,
    48: AvatarFemale01Src48,
    56: AvatarFemale01Src56,
    64: AvatarFemale01Src64,
    80: AvatarFemale01Src80,
    128: AvatarFemale01Src128,
    256: AvatarFemale01Src256,
    512: AvatarFemale01Src512,
  } as const;
  const AvatarFemale01AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

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