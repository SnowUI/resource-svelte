<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarFemale02Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-32.jpg';
import AvatarFemale02Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-16.jpg';
import AvatarFemale02Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-20.jpg';
import AvatarFemale02Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-24.jpg';
import AvatarFemale02Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-28.jpg';
import AvatarFemale02Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-40.jpg';
import AvatarFemale02Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-48.jpg';
import AvatarFemale02Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-56.jpg';
import AvatarFemale02Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-64.jpg';
import AvatarFemale02Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-80.jpg';
import AvatarFemale02Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-128.jpg';
import AvatarFemale02Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-256.jpg';
import AvatarFemale02Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-512.jpg';
  const AvatarFemale02SizeMap = {
    16: AvatarFemale02Src16,
    20: AvatarFemale02Src20,
    24: AvatarFemale02Src24,
    28: AvatarFemale02Src28,
    32: AvatarFemale02Src,
    40: AvatarFemale02Src40,
    48: AvatarFemale02Src48,
    56: AvatarFemale02Src56,
    64: AvatarFemale02Src64,
    80: AvatarFemale02Src80,
    128: AvatarFemale02Src128,
    256: AvatarFemale02Src256,
    512: AvatarFemale02Src512,
  } as const;
  const AvatarFemale02AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

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
  let { size = 32, width, height, alt = "AvatarFemale02", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarFemale02AvailableSizes));
  let imageSrc = $derived(AvatarFemale02SizeMap[closestSize as keyof typeof AvatarFemale02SizeMap] ?? AvatarFemale02Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>