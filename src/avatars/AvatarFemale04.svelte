<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarFemale04Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-32.jpg';
import AvatarFemale04Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-16.jpg';
import AvatarFemale04Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-20.jpg';
import AvatarFemale04Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-24.jpg';
import AvatarFemale04Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-28.jpg';
import AvatarFemale04Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-40.jpg';
import AvatarFemale04Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-48.jpg';
import AvatarFemale04Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-56.jpg';
import AvatarFemale04Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-64.jpg';
import AvatarFemale04Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-80.jpg';
import AvatarFemale04Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-128.jpg';
import AvatarFemale04Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-256.jpg';
import AvatarFemale04Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-512.jpg';
  const AvatarFemale04SizeMap = {
    16: AvatarFemale04Src16,
    20: AvatarFemale04Src20,
    24: AvatarFemale04Src24,
    28: AvatarFemale04Src28,
    32: AvatarFemale04Src,
    40: AvatarFemale04Src40,
    48: AvatarFemale04Src48,
    56: AvatarFemale04Src56,
    64: AvatarFemale04Src64,
    80: AvatarFemale04Src80,
    128: AvatarFemale04Src128,
    256: AvatarFemale04Src256,
    512: AvatarFemale04Src512,
  } as const;
  const AvatarFemale04AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

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
  let { size = 32, width, height, alt = "AvatarFemale04", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarFemale04AvailableSizes));
  let imageSrc = $derived(AvatarFemale04SizeMap[closestSize as keyof typeof AvatarFemale04SizeMap] ?? AvatarFemale04Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>