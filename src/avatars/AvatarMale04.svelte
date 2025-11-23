<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarMale04Src from '@snowui-design-system/resource-core/assets/avatars/avatar-male-04-32.jpg';
import AvatarMale04Src16 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-04-16.jpg';
import AvatarMale04Src20 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-04-20.jpg';
import AvatarMale04Src24 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-04-24.jpg';
import AvatarMale04Src28 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-04-28.jpg';
import AvatarMale04Src40 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-04-40.jpg';
import AvatarMale04Src48 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-04-48.jpg';
import AvatarMale04Src56 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-04-56.jpg';
import AvatarMale04Src64 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-04-64.jpg';
import AvatarMale04Src80 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-04-80.jpg';
import AvatarMale04Src128 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-04-128.jpg';
import AvatarMale04Src256 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-04-256.jpg';
import AvatarMale04Src512 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-04-512.jpg';
  const AvatarMale04SizeMap = {
    16: AvatarMale04Src16,
    20: AvatarMale04Src20,
    24: AvatarMale04Src24,
    28: AvatarMale04Src28,
    32: AvatarMale04Src,
    40: AvatarMale04Src40,
    48: AvatarMale04Src48,
    56: AvatarMale04Src56,
    64: AvatarMale04Src64,
    80: AvatarMale04Src80,
    128: AvatarMale04Src128,
    256: AvatarMale04Src256,
    512: AvatarMale04Src512,
  } as const;
  const AvatarMale04AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

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
  let { size = 32, width, height, alt = "AvatarMale04", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarMale04AvailableSizes));
  let imageSrc = $derived(AvatarMale04SizeMap[closestSize as keyof typeof AvatarMale04SizeMap] ?? AvatarMale04Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>