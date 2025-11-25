<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarAbstract01Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-32.jpg';
import AvatarAbstract01Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-16.jpg';
import AvatarAbstract01Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-20.jpg';
import AvatarAbstract01Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-24.jpg';
import AvatarAbstract01Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-28.jpg';
import AvatarAbstract01Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-40.jpg';
import AvatarAbstract01Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-48.jpg';
import AvatarAbstract01Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-56.jpg';
import AvatarAbstract01Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-64.jpg';
import AvatarAbstract01Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-80.jpg';
import AvatarAbstract01Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-128.jpg';
import AvatarAbstract01Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-256.jpg';
import AvatarAbstract01Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-512.jpg';
  const AvatarAbstract01SizeMap = {
    16: AvatarAbstract01Src16,
    20: AvatarAbstract01Src20,
    24: AvatarAbstract01Src24,
    28: AvatarAbstract01Src28,
    32: AvatarAbstract01Src,
    40: AvatarAbstract01Src40,
    48: AvatarAbstract01Src48,
    56: AvatarAbstract01Src56,
    64: AvatarAbstract01Src64,
    80: AvatarAbstract01Src80,
    128: AvatarAbstract01Src128,
    256: AvatarAbstract01Src256,
    512: AvatarAbstract01Src512,
  } as const;
  const AvatarAbstract01AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

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
  let { size = 32, width, height, alt = "AvatarAbstract01", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarAbstract01AvailableSizes));
  let imageSrc = $derived(AvatarAbstract01SizeMap[closestSize as keyof typeof AvatarAbstract01SizeMap] ?? AvatarAbstract01Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>