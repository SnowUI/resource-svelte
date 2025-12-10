<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarAbstract04Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-32.jpg';
import AvatarAbstract04Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-16.jpg';
import AvatarAbstract04Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-20.jpg';
import AvatarAbstract04Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-24.jpg';
import AvatarAbstract04Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-28.jpg';
import AvatarAbstract04Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-40.jpg';
import AvatarAbstract04Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-48.jpg';
import AvatarAbstract04Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-56.jpg';
import AvatarAbstract04Src60 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-60.jpg';
import AvatarAbstract04Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-64.jpg';
import AvatarAbstract04Src72 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-72.jpg';
import AvatarAbstract04Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-80.jpg';
import AvatarAbstract04Src84 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-84.jpg';
import AvatarAbstract04Src96 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-96.jpg';
import AvatarAbstract04Src120 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-120.jpg';
import AvatarAbstract04Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-128.jpg';
import AvatarAbstract04Src144 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-144.jpg';
import AvatarAbstract04Src168 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-168.jpg';
import AvatarAbstract04Src192 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-192.jpg';
import AvatarAbstract04Src240 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-240.jpg';
import AvatarAbstract04Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-256.jpg';
import AvatarAbstract04Src384 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-384.jpg';
import AvatarAbstract04Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-512.jpg';
import AvatarAbstract04Src768 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-768.jpg';
import AvatarAbstract04Src1536 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-1536.jpg';
  const AvatarAbstract04SizeMap = {
    16: AvatarAbstract04Src16,
    20: AvatarAbstract04Src20,
    24: AvatarAbstract04Src24,
    28: AvatarAbstract04Src28,
    32: AvatarAbstract04Src,
    40: AvatarAbstract04Src40,
    48: AvatarAbstract04Src48,
    56: AvatarAbstract04Src56,
    60: AvatarAbstract04Src60,
    64: AvatarAbstract04Src64,
    72: AvatarAbstract04Src72,
    80: AvatarAbstract04Src80,
    84: AvatarAbstract04Src84,
    96: AvatarAbstract04Src96,
    120: AvatarAbstract04Src120,
    128: AvatarAbstract04Src128,
    144: AvatarAbstract04Src144,
    168: AvatarAbstract04Src168,
    192: AvatarAbstract04Src192,
    240: AvatarAbstract04Src240,
    256: AvatarAbstract04Src256,
    384: AvatarAbstract04Src384,
    512: AvatarAbstract04Src512,
    768: AvatarAbstract04Src768,
    1536: AvatarAbstract04Src1536,
  } as const;
  const AvatarAbstract04AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 80, 84, 96, 120, 128, 144, 168, 192, 240, 256, 384, 512, 768, 1536] as const;

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
  let { size = 32, width, height, alt = "AvatarAbstract04", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarAbstract04AvailableSizes));
  let imageSrc = $derived(AvatarAbstract04SizeMap[closestSize as keyof typeof AvatarAbstract04SizeMap] ?? AvatarAbstract04Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>