<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarAbstract02Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-32.jpg';
import AvatarAbstract02Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-16.jpg';
import AvatarAbstract02Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-20.jpg';
import AvatarAbstract02Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-24.jpg';
import AvatarAbstract02Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-28.jpg';
import AvatarAbstract02Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-40.jpg';
import AvatarAbstract02Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-48.jpg';
import AvatarAbstract02Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-56.jpg';
import AvatarAbstract02Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-64.jpg';
import AvatarAbstract02Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-80.jpg';
import AvatarAbstract02Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-128.jpg';
import AvatarAbstract02Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-256.jpg';
import AvatarAbstract02Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-512.jpg';
  const AvatarAbstract02SizeMap = {
    16: AvatarAbstract02Src16,
    20: AvatarAbstract02Src20,
    24: AvatarAbstract02Src24,
    28: AvatarAbstract02Src28,
    32: AvatarAbstract02Src,
    40: AvatarAbstract02Src40,
    48: AvatarAbstract02Src48,
    56: AvatarAbstract02Src56,
    64: AvatarAbstract02Src64,
    80: AvatarAbstract02Src80,
    128: AvatarAbstract02Src128,
    256: AvatarAbstract02Src256,
    512: AvatarAbstract02Src512,
  } as const;
  const AvatarAbstract02AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

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
  let { size = 32, width, height, alt = "AvatarAbstract02", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarAbstract02AvailableSizes));
  let imageSrc = $derived(AvatarAbstract02SizeMap[closestSize as keyof typeof AvatarAbstract02SizeMap] ?? AvatarAbstract02Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>