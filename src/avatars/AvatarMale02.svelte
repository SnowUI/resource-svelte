<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarMale02Src from '@snowui-design-system/resource-core/assets/avatars/avatar-male-02-32.jpg';
import AvatarMale02Src16 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-02-16.jpg';
import AvatarMale02Src20 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-02-20.jpg';
import AvatarMale02Src24 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-02-24.jpg';
import AvatarMale02Src28 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-02-28.jpg';
import AvatarMale02Src40 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-02-40.jpg';
import AvatarMale02Src48 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-02-48.jpg';
import AvatarMale02Src56 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-02-56.jpg';
import AvatarMale02Src64 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-02-64.jpg';
import AvatarMale02Src80 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-02-80.jpg';
import AvatarMale02Src128 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-02-128.jpg';
import AvatarMale02Src256 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-02-256.jpg';
import AvatarMale02Src512 from '@snowui-design-system/resource-core/assets/avatars/avatar-male-02-512.jpg';
  const AvatarMale02SizeMap = {
    16: AvatarMale02Src16,
    20: AvatarMale02Src20,
    24: AvatarMale02Src24,
    28: AvatarMale02Src28,
    32: AvatarMale02Src,
    40: AvatarMale02Src40,
    48: AvatarMale02Src48,
    56: AvatarMale02Src56,
    64: AvatarMale02Src64,
    80: AvatarMale02Src80,
    128: AvatarMale02Src128,
    256: AvatarMale02Src256,
    512: AvatarMale02Src512,
  } as const;
  const AvatarMale02AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

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
  let { size = 32, width, height, alt = "AvatarMale02", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarMale02AvailableSizes));
  let imageSrc = $derived(AvatarMale02SizeMap[closestSize as keyof typeof AvatarMale02SizeMap] ?? AvatarMale02Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>