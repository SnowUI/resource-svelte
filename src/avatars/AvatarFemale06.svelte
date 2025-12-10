<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarFemale06Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-32.jpg';
import AvatarFemale06Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-16.jpg';
import AvatarFemale06Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-20.jpg';
import AvatarFemale06Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-24.jpg';
import AvatarFemale06Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-28.jpg';
import AvatarFemale06Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-40.jpg';
import AvatarFemale06Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-48.jpg';
import AvatarFemale06Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-56.jpg';
import AvatarFemale06Src60 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-60.jpg';
import AvatarFemale06Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-64.jpg';
import AvatarFemale06Src72 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-72.jpg';
import AvatarFemale06Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-80.jpg';
import AvatarFemale06Src84 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-84.jpg';
import AvatarFemale06Src96 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-96.jpg';
import AvatarFemale06Src120 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-120.jpg';
import AvatarFemale06Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-128.jpg';
import AvatarFemale06Src144 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-144.jpg';
import AvatarFemale06Src168 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-168.jpg';
import AvatarFemale06Src192 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-192.jpg';
import AvatarFemale06Src240 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-240.jpg';
import AvatarFemale06Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-256.jpg';
import AvatarFemale06Src384 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-384.jpg';
import AvatarFemale06Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-512.jpg';
import AvatarFemale06Src768 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-768.jpg';
import AvatarFemale06Src1536 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-1536.jpg';
  const AvatarFemale06SizeMap = {
    16: AvatarFemale06Src16,
    20: AvatarFemale06Src20,
    24: AvatarFemale06Src24,
    28: AvatarFemale06Src28,
    32: AvatarFemale06Src,
    40: AvatarFemale06Src40,
    48: AvatarFemale06Src48,
    56: AvatarFemale06Src56,
    60: AvatarFemale06Src60,
    64: AvatarFemale06Src64,
    72: AvatarFemale06Src72,
    80: AvatarFemale06Src80,
    84: AvatarFemale06Src84,
    96: AvatarFemale06Src96,
    120: AvatarFemale06Src120,
    128: AvatarFemale06Src128,
    144: AvatarFemale06Src144,
    168: AvatarFemale06Src168,
    192: AvatarFemale06Src192,
    240: AvatarFemale06Src240,
    256: AvatarFemale06Src256,
    384: AvatarFemale06Src384,
    512: AvatarFemale06Src512,
    768: AvatarFemale06Src768,
    1536: AvatarFemale06Src1536,
  } as const;
  const AvatarFemale06AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 80, 84, 96, 120, 128, 144, 168, 192, 240, 256, 384, 512, 768, 1536] as const;

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
  let { size = 32, width, height, alt = "AvatarFemale06", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarFemale06AvailableSizes));
  let imageSrc = $derived(AvatarFemale06SizeMap[closestSize as keyof typeof AvatarFemale06SizeMap] ?? AvatarFemale06Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>