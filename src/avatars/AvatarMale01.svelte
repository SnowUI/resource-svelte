<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarMale01Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-32.jpg';
import AvatarMale01Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-16.jpg';
import AvatarMale01Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-20.jpg';
import AvatarMale01Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-24.jpg';
import AvatarMale01Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-28.jpg';
import AvatarMale01Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-40.jpg';
import AvatarMale01Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-48.jpg';
import AvatarMale01Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-56.jpg';
import AvatarMale01Src60 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-60.jpg';
import AvatarMale01Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-64.jpg';
import AvatarMale01Src72 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-72.jpg';
import AvatarMale01Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-80.jpg';
import AvatarMale01Src84 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-84.jpg';
import AvatarMale01Src96 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-96.jpg';
import AvatarMale01Src120 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-120.jpg';
import AvatarMale01Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-128.jpg';
import AvatarMale01Src144 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-144.jpg';
import AvatarMale01Src168 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-168.jpg';
import AvatarMale01Src192 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-192.jpg';
import AvatarMale01Src240 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-240.jpg';
import AvatarMale01Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-256.jpg';
import AvatarMale01Src384 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-384.jpg';
import AvatarMale01Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-512.jpg';
import AvatarMale01Src768 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-768.jpg';
import AvatarMale01Src1536 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-01-1536.jpg';
  const AvatarMale01SizeMap = {
    16: AvatarMale01Src16,
    20: AvatarMale01Src20,
    24: AvatarMale01Src24,
    28: AvatarMale01Src28,
    32: AvatarMale01Src,
    40: AvatarMale01Src40,
    48: AvatarMale01Src48,
    56: AvatarMale01Src56,
    60: AvatarMale01Src60,
    64: AvatarMale01Src64,
    72: AvatarMale01Src72,
    80: AvatarMale01Src80,
    84: AvatarMale01Src84,
    96: AvatarMale01Src96,
    120: AvatarMale01Src120,
    128: AvatarMale01Src128,
    144: AvatarMale01Src144,
    168: AvatarMale01Src168,
    192: AvatarMale01Src192,
    240: AvatarMale01Src240,
    256: AvatarMale01Src256,
    384: AvatarMale01Src384,
    512: AvatarMale01Src512,
    768: AvatarMale01Src768,
    1536: AvatarMale01Src1536,
  } as const;
  const AvatarMale01AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 80, 84, 96, 120, 128, 144, 168, 192, 240, 256, 384, 512, 768, 1536] as const;

  // 查找最接近的 3x 尺寸
  const findClosestSize = (target: number, available: readonly number[]): number => {
    if (available.length === 0) return target;
    const preferred = target * 3;
    let closest = available[0];
    let minDiff = Math.abs(preferred - closest);
    for (const size of available) {
      const diff = Math.abs(preferred - size);
      if (diff < minDiff) {
        minDiff = diff;
        closest = size;
      }
    }
    return closest;
  };
  let { size = 32, width, height, alt = "AvatarMale01", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarMale01AvailableSizes));
  let imageSrc = $derived(AvatarMale01SizeMap[closestSize as keyof typeof AvatarMale01SizeMap] ?? AvatarMale01Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>