<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarMale05Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-32.jpg';
import AvatarMale05Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-16.jpg';
import AvatarMale05Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-20.jpg';
import AvatarMale05Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-24.jpg';
import AvatarMale05Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-28.jpg';
import AvatarMale05Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-40.jpg';
import AvatarMale05Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-48.jpg';
import AvatarMale05Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-56.jpg';
import AvatarMale05Src60 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-60.jpg';
import AvatarMale05Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-64.jpg';
import AvatarMale05Src72 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-72.jpg';
import AvatarMale05Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-80.jpg';
import AvatarMale05Src84 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-84.jpg';
import AvatarMale05Src96 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-96.jpg';
import AvatarMale05Src120 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-120.jpg';
import AvatarMale05Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-128.jpg';
import AvatarMale05Src144 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-144.jpg';
import AvatarMale05Src168 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-168.jpg';
import AvatarMale05Src192 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-192.jpg';
import AvatarMale05Src240 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-240.jpg';
import AvatarMale05Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-256.jpg';
import AvatarMale05Src384 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-384.jpg';
import AvatarMale05Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-512.jpg';
import AvatarMale05Src768 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-768.jpg';
import AvatarMale05Src1536 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-1536.jpg';
  const AvatarMale05SizeMap = {
    16: AvatarMale05Src16,
    20: AvatarMale05Src20,
    24: AvatarMale05Src24,
    28: AvatarMale05Src28,
    32: AvatarMale05Src,
    40: AvatarMale05Src40,
    48: AvatarMale05Src48,
    56: AvatarMale05Src56,
    60: AvatarMale05Src60,
    64: AvatarMale05Src64,
    72: AvatarMale05Src72,
    80: AvatarMale05Src80,
    84: AvatarMale05Src84,
    96: AvatarMale05Src96,
    120: AvatarMale05Src120,
    128: AvatarMale05Src128,
    144: AvatarMale05Src144,
    168: AvatarMale05Src168,
    192: AvatarMale05Src192,
    240: AvatarMale05Src240,
    256: AvatarMale05Src256,
    384: AvatarMale05Src384,
    512: AvatarMale05Src512,
    768: AvatarMale05Src768,
    1536: AvatarMale05Src1536,
  } as const;
  const AvatarMale05AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 80, 84, 96, 120, 128, 144, 168, 192, 240, 256, 384, 512, 768, 1536] as const;

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