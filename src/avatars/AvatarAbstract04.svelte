<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarAbstract04Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-32.jpg';
import AvatarAbstract04Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-16.jpg';
import AvatarAbstract04Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-20.jpg';
import AvatarAbstract04Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-24.jpg';
import AvatarAbstract04Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-28.jpg';
import AvatarAbstract04Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-40.jpg';
import AvatarAbstract04Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-48.jpg';
import AvatarAbstract04Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-56.jpg';
import AvatarAbstract04Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-64.jpg';
import AvatarAbstract04Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-80.jpg';
import AvatarAbstract04Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-128.jpg';
import AvatarAbstract04Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-256.jpg';
import AvatarAbstract04Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-512.jpg';
  const AvatarAbstract04SizeMap = {
    16: AvatarAbstract04Src16,
    20: AvatarAbstract04Src20,
    24: AvatarAbstract04Src24,
    28: AvatarAbstract04Src28,
    32: AvatarAbstract04Src,
    40: AvatarAbstract04Src40,
    48: AvatarAbstract04Src48,
    56: AvatarAbstract04Src56,
    64: AvatarAbstract04Src64,
    80: AvatarAbstract04Src80,
    128: AvatarAbstract04Src128,
    256: AvatarAbstract04Src256,
    512: AvatarAbstract04Src512,
  } as const;
  const AvatarAbstract04AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

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
  let { size = 32, width, height, alt = "AvatarAbstract04", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarAbstract04AvailableSizes));
  let imageSrc = $derived(AvatarAbstract04SizeMap[closestSize as keyof typeof AvatarAbstract04SizeMap] ?? AvatarAbstract04Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>