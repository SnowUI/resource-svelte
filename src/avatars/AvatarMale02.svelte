<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarMale02Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-32.jpg';
import AvatarMale02Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-16.jpg';
import AvatarMale02Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-20.jpg';
import AvatarMale02Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-24.jpg';
import AvatarMale02Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-28.jpg';
import AvatarMale02Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-40.jpg';
import AvatarMale02Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-48.jpg';
import AvatarMale02Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-56.jpg';
import AvatarMale02Src60 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-60.jpg';
import AvatarMale02Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-64.jpg';
import AvatarMale02Src72 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-72.jpg';
import AvatarMale02Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-80.jpg';
import AvatarMale02Src84 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-84.jpg';
import AvatarMale02Src96 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-96.jpg';
import AvatarMale02Src120 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-120.jpg';
import AvatarMale02Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-128.jpg';
import AvatarMale02Src144 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-144.jpg';
import AvatarMale02Src168 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-168.jpg';
import AvatarMale02Src192 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-192.jpg';
import AvatarMale02Src240 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-240.jpg';
import AvatarMale02Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-256.jpg';
import AvatarMale02Src384 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-384.jpg';
import AvatarMale02Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-512.jpg';
import AvatarMale02Src768 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-768.jpg';
import AvatarMale02Src1536 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-1536.jpg';
  const AvatarMale02SizeMap = {
    16: AvatarMale02Src16,
    20: AvatarMale02Src20,
    24: AvatarMale02Src24,
    28: AvatarMale02Src28,
    32: AvatarMale02Src,
    40: AvatarMale02Src40,
    48: AvatarMale02Src48,
    56: AvatarMale02Src56,
    60: AvatarMale02Src60,
    64: AvatarMale02Src64,
    72: AvatarMale02Src72,
    80: AvatarMale02Src80,
    84: AvatarMale02Src84,
    96: AvatarMale02Src96,
    120: AvatarMale02Src120,
    128: AvatarMale02Src128,
    144: AvatarMale02Src144,
    168: AvatarMale02Src168,
    192: AvatarMale02Src192,
    240: AvatarMale02Src240,
    256: AvatarMale02Src256,
    384: AvatarMale02Src384,
    512: AvatarMale02Src512,
    768: AvatarMale02Src768,
    1536: AvatarMale02Src1536,
  } as const;
  const AvatarMale02AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 80, 84, 96, 120, 128, 144, 168, 192, 240, 256, 384, 512, 768, 1536] as const;

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
  let { size = 32, width, height, alt = "AvatarMale02", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarMale02AvailableSizes));
  let imageSrc = $derived(AvatarMale02SizeMap[closestSize as keyof typeof AvatarMale02SizeMap] ?? AvatarMale02Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>