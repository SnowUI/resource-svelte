<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarMale04Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-32.jpg';
import AvatarMale04Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-16.jpg';
import AvatarMale04Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-20.jpg';
import AvatarMale04Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-24.jpg';
import AvatarMale04Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-28.jpg';
import AvatarMale04Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-40.jpg';
import AvatarMale04Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-48.jpg';
import AvatarMale04Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-56.jpg';
import AvatarMale04Src60 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-60.jpg';
import AvatarMale04Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-64.jpg';
import AvatarMale04Src72 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-72.jpg';
import AvatarMale04Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-80.jpg';
import AvatarMale04Src84 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-84.jpg';
import AvatarMale04Src96 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-96.jpg';
import AvatarMale04Src120 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-120.jpg';
import AvatarMale04Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-128.jpg';
import AvatarMale04Src144 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-144.jpg';
import AvatarMale04Src168 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-168.jpg';
import AvatarMale04Src192 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-192.jpg';
import AvatarMale04Src240 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-240.jpg';
import AvatarMale04Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-256.jpg';
import AvatarMale04Src384 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-384.jpg';
import AvatarMale04Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-512.jpg';
import AvatarMale04Src768 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-768.jpg';
import AvatarMale04Src1536 from '@snowui-design-system/resource-base/assets/avatars/avatar-male-04-1536.jpg';
  const AvatarMale04SizeMap = {
    16: AvatarMale04Src16,
    20: AvatarMale04Src20,
    24: AvatarMale04Src24,
    28: AvatarMale04Src28,
    32: AvatarMale04Src,
    40: AvatarMale04Src40,
    48: AvatarMale04Src48,
    56: AvatarMale04Src56,
    60: AvatarMale04Src60,
    64: AvatarMale04Src64,
    72: AvatarMale04Src72,
    80: AvatarMale04Src80,
    84: AvatarMale04Src84,
    96: AvatarMale04Src96,
    120: AvatarMale04Src120,
    128: AvatarMale04Src128,
    144: AvatarMale04Src144,
    168: AvatarMale04Src168,
    192: AvatarMale04Src192,
    240: AvatarMale04Src240,
    256: AvatarMale04Src256,
    384: AvatarMale04Src384,
    512: AvatarMale04Src512,
    768: AvatarMale04Src768,
    1536: AvatarMale04Src1536,
  } as const;
  const AvatarMale04AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 80, 84, 96, 120, 128, 144, 168, 192, 240, 256, 384, 512, 768, 1536] as const;

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
  let { size = 32, width, height, alt = "AvatarMale04", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarMale04AvailableSizes));
  let imageSrc = $derived(AvatarMale04SizeMap[closestSize as keyof typeof AvatarMale04SizeMap] ?? AvatarMale04Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>