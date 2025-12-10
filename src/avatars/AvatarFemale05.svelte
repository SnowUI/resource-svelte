<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarFemale05Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-32.jpg';
import AvatarFemale05Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-16.jpg';
import AvatarFemale05Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-20.jpg';
import AvatarFemale05Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-24.jpg';
import AvatarFemale05Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-28.jpg';
import AvatarFemale05Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-40.jpg';
import AvatarFemale05Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-48.jpg';
import AvatarFemale05Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-56.jpg';
import AvatarFemale05Src60 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-60.jpg';
import AvatarFemale05Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-64.jpg';
import AvatarFemale05Src72 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-72.jpg';
import AvatarFemale05Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-80.jpg';
import AvatarFemale05Src84 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-84.jpg';
import AvatarFemale05Src96 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-96.jpg';
import AvatarFemale05Src120 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-120.jpg';
import AvatarFemale05Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-128.jpg';
import AvatarFemale05Src144 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-144.jpg';
import AvatarFemale05Src168 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-168.jpg';
import AvatarFemale05Src192 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-192.jpg';
import AvatarFemale05Src240 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-240.jpg';
import AvatarFemale05Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-256.jpg';
import AvatarFemale05Src384 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-384.jpg';
import AvatarFemale05Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-512.jpg';
import AvatarFemale05Src768 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-768.jpg';
import AvatarFemale05Src1536 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-1536.jpg';
  const AvatarFemale05SizeMap = {
    16: AvatarFemale05Src16,
    20: AvatarFemale05Src20,
    24: AvatarFemale05Src24,
    28: AvatarFemale05Src28,
    32: AvatarFemale05Src,
    40: AvatarFemale05Src40,
    48: AvatarFemale05Src48,
    56: AvatarFemale05Src56,
    60: AvatarFemale05Src60,
    64: AvatarFemale05Src64,
    72: AvatarFemale05Src72,
    80: AvatarFemale05Src80,
    84: AvatarFemale05Src84,
    96: AvatarFemale05Src96,
    120: AvatarFemale05Src120,
    128: AvatarFemale05Src128,
    144: AvatarFemale05Src144,
    168: AvatarFemale05Src168,
    192: AvatarFemale05Src192,
    240: AvatarFemale05Src240,
    256: AvatarFemale05Src256,
    384: AvatarFemale05Src384,
    512: AvatarFemale05Src512,
    768: AvatarFemale05Src768,
    1536: AvatarFemale05Src1536,
  } as const;
  const AvatarFemale05AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 80, 84, 96, 120, 128, 144, 168, 192, 240, 256, 384, 512, 768, 1536] as const;

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
  let { size = 32, width, height, alt = "AvatarFemale05", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarFemale05AvailableSizes));
  let imageSrc = $derived(AvatarFemale05SizeMap[closestSize as keyof typeof AvatarFemale05SizeMap] ?? AvatarFemale05Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>