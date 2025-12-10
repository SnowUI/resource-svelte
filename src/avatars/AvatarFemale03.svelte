<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarFemale03Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-32.jpg';
import AvatarFemale03Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-16.jpg';
import AvatarFemale03Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-20.jpg';
import AvatarFemale03Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-24.jpg';
import AvatarFemale03Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-28.jpg';
import AvatarFemale03Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-40.jpg';
import AvatarFemale03Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-48.jpg';
import AvatarFemale03Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-56.jpg';
import AvatarFemale03Src60 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-60.jpg';
import AvatarFemale03Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-64.jpg';
import AvatarFemale03Src72 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-72.jpg';
import AvatarFemale03Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-80.jpg';
import AvatarFemale03Src84 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-84.jpg';
import AvatarFemale03Src96 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-96.jpg';
import AvatarFemale03Src120 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-120.jpg';
import AvatarFemale03Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-128.jpg';
import AvatarFemale03Src144 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-144.jpg';
import AvatarFemale03Src168 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-168.jpg';
import AvatarFemale03Src192 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-192.jpg';
import AvatarFemale03Src240 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-240.jpg';
import AvatarFemale03Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-256.jpg';
import AvatarFemale03Src384 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-384.jpg';
import AvatarFemale03Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-512.jpg';
import AvatarFemale03Src768 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-768.jpg';
import AvatarFemale03Src1536 from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-1536.jpg';
  const AvatarFemale03SizeMap = {
    16: AvatarFemale03Src16,
    20: AvatarFemale03Src20,
    24: AvatarFemale03Src24,
    28: AvatarFemale03Src28,
    32: AvatarFemale03Src,
    40: AvatarFemale03Src40,
    48: AvatarFemale03Src48,
    56: AvatarFemale03Src56,
    60: AvatarFemale03Src60,
    64: AvatarFemale03Src64,
    72: AvatarFemale03Src72,
    80: AvatarFemale03Src80,
    84: AvatarFemale03Src84,
    96: AvatarFemale03Src96,
    120: AvatarFemale03Src120,
    128: AvatarFemale03Src128,
    144: AvatarFemale03Src144,
    168: AvatarFemale03Src168,
    192: AvatarFemale03Src192,
    240: AvatarFemale03Src240,
    256: AvatarFemale03Src256,
    384: AvatarFemale03Src384,
    512: AvatarFemale03Src512,
    768: AvatarFemale03Src768,
    1536: AvatarFemale03Src1536,
  } as const;
  const AvatarFemale03AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 80, 84, 96, 120, 128, 144, 168, 192, 240, 256, 384, 512, 768, 1536] as const;

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
  let { size = 32, width, height, alt = "AvatarFemale03", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarFemale03AvailableSizes));
  let imageSrc = $derived(AvatarFemale03SizeMap[closestSize as keyof typeof AvatarFemale03SizeMap] ?? AvatarFemale03Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>