<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarFemale06Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-32.jpg';
import AvatarFemale06Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-16.jpg';
import AvatarFemale06Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-20.jpg';
import AvatarFemale06Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-24.jpg';
import AvatarFemale06Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-28.jpg';
import AvatarFemale06Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-40.jpg';
import AvatarFemale06Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-48.jpg';
import AvatarFemale06Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-56.jpg';
import AvatarFemale06Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-64.jpg';
import AvatarFemale06Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-80.jpg';
import AvatarFemale06Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-128.jpg';
import AvatarFemale06Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-256.jpg';
import AvatarFemale06Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-512.jpg';
  const AvatarFemale06SizeMap = {
    16: AvatarFemale06Src16,
    20: AvatarFemale06Src20,
    24: AvatarFemale06Src24,
    28: AvatarFemale06Src28,
    32: AvatarFemale06Src,
    40: AvatarFemale06Src40,
    48: AvatarFemale06Src48,
    56: AvatarFemale06Src56,
    64: AvatarFemale06Src64,
    80: AvatarFemale06Src80,
    128: AvatarFemale06Src128,
    256: AvatarFemale06Src256,
    512: AvatarFemale06Src512,
  } as const;
  const AvatarFemale06AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

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
  let { size = 32, width, height, alt = "AvatarFemale06", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarFemale06AvailableSizes));
  let imageSrc = $derived(AvatarFemale06SizeMap[closestSize as keyof typeof AvatarFemale06SizeMap] ?? AvatarFemale06Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>