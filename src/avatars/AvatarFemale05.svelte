<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarFemale05Src from '@snowui-design-system/resource-core/assets/avatars/avatar-female-05-32.jpg';
import AvatarFemale05Src16 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-05-16.jpg';
import AvatarFemale05Src20 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-05-20.jpg';
import AvatarFemale05Src24 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-05-24.jpg';
import AvatarFemale05Src28 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-05-28.jpg';
import AvatarFemale05Src40 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-05-40.jpg';
import AvatarFemale05Src48 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-05-48.jpg';
import AvatarFemale05Src56 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-05-56.jpg';
import AvatarFemale05Src64 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-05-64.jpg';
import AvatarFemale05Src80 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-05-80.jpg';
import AvatarFemale05Src128 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-05-128.jpg';
import AvatarFemale05Src256 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-05-256.jpg';
import AvatarFemale05Src512 from '@snowui-design-system/resource-core/assets/avatars/avatar-female-05-512.jpg';
  const AvatarFemale05SizeMap = {
    16: AvatarFemale05Src16,
    20: AvatarFemale05Src20,
    24: AvatarFemale05Src24,
    28: AvatarFemale05Src28,
    32: AvatarFemale05Src,
    40: AvatarFemale05Src40,
    48: AvatarFemale05Src48,
    56: AvatarFemale05Src56,
    64: AvatarFemale05Src64,
    80: AvatarFemale05Src80,
    128: AvatarFemale05Src128,
    256: AvatarFemale05Src256,
    512: AvatarFemale05Src512,
  } as const;
  const AvatarFemale05AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

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
  let { size = 32, width, height, alt = "AvatarFemale05", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarFemale05AvailableSizes));
  let imageSrc = $derived(AvatarFemale05SizeMap[closestSize as keyof typeof AvatarFemale05SizeMap] ?? AvatarFemale05Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>