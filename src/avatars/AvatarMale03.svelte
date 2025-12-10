<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarMale03Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-32.jpg';
import AvatarMale03Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-16.jpg';
import AvatarMale03Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-20.jpg';
import AvatarMale03Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-24.jpg';
import AvatarMale03Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-28.jpg';
import AvatarMale03Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-40.jpg';
import AvatarMale03Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-48.jpg';
import AvatarMale03Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-56.jpg';
import AvatarMale03Src60 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-60.jpg';
import AvatarMale03Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-64.jpg';
import AvatarMale03Src72 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-72.jpg';
import AvatarMale03Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-80.jpg';
import AvatarMale03Src84 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-84.jpg';
import AvatarMale03Src96 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-96.jpg';
import AvatarMale03Src120 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-120.jpg';
import AvatarMale03Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-128.jpg';
import AvatarMale03Src144 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-144.jpg';
import AvatarMale03Src168 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-168.jpg';
import AvatarMale03Src192 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-192.jpg';
import AvatarMale03Src240 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-240.jpg';
import AvatarMale03Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-256.jpg';
import AvatarMale03Src384 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-384.jpg';
import AvatarMale03Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-512.jpg';
import AvatarMale03Src768 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-768.jpg';
import AvatarMale03Src1536 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-03-1536.jpg';
  const AvatarMale03SizeMap = {
    16: AvatarMale03Src16,
    20: AvatarMale03Src20,
    24: AvatarMale03Src24,
    28: AvatarMale03Src28,
    32: AvatarMale03Src,
    40: AvatarMale03Src40,
    48: AvatarMale03Src48,
    56: AvatarMale03Src56,
    60: AvatarMale03Src60,
    64: AvatarMale03Src64,
    72: AvatarMale03Src72,
    80: AvatarMale03Src80,
    84: AvatarMale03Src84,
    96: AvatarMale03Src96,
    120: AvatarMale03Src120,
    128: AvatarMale03Src128,
    144: AvatarMale03Src144,
    168: AvatarMale03Src168,
    192: AvatarMale03Src192,
    240: AvatarMale03Src240,
    256: AvatarMale03Src256,
    384: AvatarMale03Src384,
    512: AvatarMale03Src512,
    768: AvatarMale03Src768,
    1536: AvatarMale03Src1536,
  } as const;
  const AvatarMale03AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 80, 84, 96, 120, 128, 144, 168, 192, 240, 256, 384, 512, 768, 1536] as const;

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
  let { size = 32, width, height, alt = "AvatarMale03", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarMale03AvailableSizes));
  let imageSrc = $derived(AvatarMale03SizeMap[closestSize as keyof typeof AvatarMale03SizeMap] ?? AvatarMale03Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>