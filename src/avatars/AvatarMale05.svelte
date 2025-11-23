<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarMale05Src from '@snowui-design-system/resource-core/assets/avatars/avatar-male-05-32.jpg';
import AvatarMale05Src16 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-05-16.jpg';
import AvatarMale05Src20 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-05-20.jpg';
import AvatarMale05Src24 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-05-24.jpg';
import AvatarMale05Src28 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-05-28.jpg';
import AvatarMale05Src40 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-05-40.jpg';
import AvatarMale05Src48 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-05-48.jpg';
import AvatarMale05Src56 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-05-56.jpg';
import AvatarMale05Src64 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-05-64.jpg';
import AvatarMale05Src80 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-05-80.jpg';
import AvatarMale05Src128 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-05-128.jpg';
import AvatarMale05Src256 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-05-256.jpg';
import AvatarMale05Src512 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-05-512.jpg';
  const AvatarMale05SizeMap = {
    16: AvatarMale05Src16,
    20: AvatarMale05Src20,
    24: AvatarMale05Src24,
    28: AvatarMale05Src28,
    32: AvatarMale05Src,
    40: AvatarMale05Src40,
    48: AvatarMale05Src48,
    56: AvatarMale05Src56,
    64: AvatarMale05Src64,
    80: AvatarMale05Src80,
    128: AvatarMale05Src128,
    256: AvatarMale05Src256,
    512: AvatarMale05Src512,
  } as const;
  const AvatarMale05AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

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
  let { size = 32, width, height, alt = "AvatarMale05", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarMale05AvailableSizes));
  let imageSrc = $derived(AvatarMale05SizeMap[closestSize as keyof typeof AvatarMale05SizeMap] ?? AvatarMale05Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>