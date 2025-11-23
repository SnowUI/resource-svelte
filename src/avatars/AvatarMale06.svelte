<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarMale06Src from '@snowui-design-system/resource-core/assets/avatars/avatar-male-06-32.jpg';
import AvatarMale06Src16 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-06-16.jpg';
import AvatarMale06Src20 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-06-20.jpg';
import AvatarMale06Src24 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-06-24.jpg';
import AvatarMale06Src28 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-06-28.jpg';
import AvatarMale06Src40 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-06-40.jpg';
import AvatarMale06Src48 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-06-48.jpg';
import AvatarMale06Src56 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-06-56.jpg';
import AvatarMale06Src64 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-06-64.jpg';
import AvatarMale06Src80 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-06-80.jpg';
import AvatarMale06Src128 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-06-128.jpg';
import AvatarMale06Src256 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-06-256.jpg';
import AvatarMale06Src512 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-06-512.jpg';
  const AvatarMale06SizeMap = {
    16: AvatarMale06Src16,
    20: AvatarMale06Src20,
    24: AvatarMale06Src24,
    28: AvatarMale06Src28,
    32: AvatarMale06Src,
    40: AvatarMale06Src40,
    48: AvatarMale06Src48,
    56: AvatarMale06Src56,
    64: AvatarMale06Src64,
    80: AvatarMale06Src80,
    128: AvatarMale06Src128,
    256: AvatarMale06Src256,
    512: AvatarMale06Src512,
  } as const;
  const AvatarMale06AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

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
  let { size = 32, width, height, alt = "AvatarMale06", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarMale06AvailableSizes));
  let imageSrc = $derived(AvatarMale06SizeMap[closestSize as keyof typeof AvatarMale06SizeMap] ?? AvatarMale06Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>