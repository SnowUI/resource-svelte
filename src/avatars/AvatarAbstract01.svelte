<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarAbstract01Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-32.jpg';
import AvatarAbstract01Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-16.jpg';
import AvatarAbstract01Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-20.jpg';
import AvatarAbstract01Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-24.jpg';
import AvatarAbstract01Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-28.jpg';
import AvatarAbstract01Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-40.jpg';
import AvatarAbstract01Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-48.jpg';
import AvatarAbstract01Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-56.jpg';
import AvatarAbstract01Src60 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-60.jpg';
import AvatarAbstract01Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-64.jpg';
import AvatarAbstract01Src72 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-72.jpg';
import AvatarAbstract01Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-80.jpg';
import AvatarAbstract01Src84 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-84.jpg';
import AvatarAbstract01Src96 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-96.jpg';
import AvatarAbstract01Src120 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-120.jpg';
import AvatarAbstract01Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-128.jpg';
import AvatarAbstract01Src144 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-144.jpg';
import AvatarAbstract01Src168 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-168.jpg';
import AvatarAbstract01Src192 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-192.jpg';
import AvatarAbstract01Src240 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-240.jpg';
import AvatarAbstract01Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-256.jpg';
import AvatarAbstract01Src384 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-384.jpg';
import AvatarAbstract01Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-512.jpg';
import AvatarAbstract01Src768 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-768.jpg';
import AvatarAbstract01Src1536 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-01-1536.jpg';
  const AvatarAbstract01SizeMap = {
    16: AvatarAbstract01Src16,
    20: AvatarAbstract01Src20,
    24: AvatarAbstract01Src24,
    28: AvatarAbstract01Src28,
    32: AvatarAbstract01Src,
    40: AvatarAbstract01Src40,
    48: AvatarAbstract01Src48,
    56: AvatarAbstract01Src56,
    60: AvatarAbstract01Src60,
    64: AvatarAbstract01Src64,
    72: AvatarAbstract01Src72,
    80: AvatarAbstract01Src80,
    84: AvatarAbstract01Src84,
    96: AvatarAbstract01Src96,
    120: AvatarAbstract01Src120,
    128: AvatarAbstract01Src128,
    144: AvatarAbstract01Src144,
    168: AvatarAbstract01Src168,
    192: AvatarAbstract01Src192,
    240: AvatarAbstract01Src240,
    256: AvatarAbstract01Src256,
    384: AvatarAbstract01Src384,
    512: AvatarAbstract01Src512,
    768: AvatarAbstract01Src768,
    1536: AvatarAbstract01Src1536,
  } as const;
  const AvatarAbstract01AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 80, 84, 96, 120, 128, 144, 168, 192, 240, 256, 384, 512, 768, 1536] as const;

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
  let { size = 32, width, height, alt = "AvatarAbstract01", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarAbstract01AvailableSizes));
  let imageSrc = $derived(AvatarAbstract01SizeMap[closestSize as keyof typeof AvatarAbstract01SizeMap] ?? AvatarAbstract01Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>