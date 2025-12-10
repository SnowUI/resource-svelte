<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarMale06Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-32.jpg';
import AvatarMale06Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-16.jpg';
import AvatarMale06Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-20.jpg';
import AvatarMale06Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-24.jpg';
import AvatarMale06Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-28.jpg';
import AvatarMale06Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-40.jpg';
import AvatarMale06Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-48.jpg';
import AvatarMale06Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-56.jpg';
import AvatarMale06Src60 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-60.jpg';
import AvatarMale06Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-64.jpg';
import AvatarMale06Src72 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-72.jpg';
import AvatarMale06Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-80.jpg';
import AvatarMale06Src84 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-84.jpg';
import AvatarMale06Src96 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-96.jpg';
import AvatarMale06Src120 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-120.jpg';
import AvatarMale06Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-128.jpg';
import AvatarMale06Src144 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-144.jpg';
import AvatarMale06Src168 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-168.jpg';
import AvatarMale06Src192 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-192.jpg';
import AvatarMale06Src240 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-240.jpg';
import AvatarMale06Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-256.jpg';
import AvatarMale06Src384 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-384.jpg';
import AvatarMale06Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-512.jpg';
import AvatarMale06Src768 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-768.jpg';
import AvatarMale06Src1536 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-06-1536.jpg';
  const AvatarMale06SizeMap = {
    16: AvatarMale06Src16,
    20: AvatarMale06Src20,
    24: AvatarMale06Src24,
    28: AvatarMale06Src28,
    32: AvatarMale06Src,
    40: AvatarMale06Src40,
    48: AvatarMale06Src48,
    56: AvatarMale06Src56,
    60: AvatarMale06Src60,
    64: AvatarMale06Src64,
    72: AvatarMale06Src72,
    80: AvatarMale06Src80,
    84: AvatarMale06Src84,
    96: AvatarMale06Src96,
    120: AvatarMale06Src120,
    128: AvatarMale06Src128,
    144: AvatarMale06Src144,
    168: AvatarMale06Src168,
    192: AvatarMale06Src192,
    240: AvatarMale06Src240,
    256: AvatarMale06Src256,
    384: AvatarMale06Src384,
    512: AvatarMale06Src512,
    768: AvatarMale06Src768,
    1536: AvatarMale06Src1536,
  } as const;
  const AvatarMale06AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 80, 84, 96, 120, 128, 144, 168, 192, 240, 256, 384, 512, 768, 1536] as const;

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