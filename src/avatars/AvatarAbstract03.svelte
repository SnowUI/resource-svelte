<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarAbstract03Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-32.jpg';
import AvatarAbstract03Src16 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-16.jpg';
import AvatarAbstract03Src20 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-20.jpg';
import AvatarAbstract03Src24 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-24.jpg';
import AvatarAbstract03Src28 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-28.jpg';
import AvatarAbstract03Src40 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-40.jpg';
import AvatarAbstract03Src48 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-48.jpg';
import AvatarAbstract03Src56 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-56.jpg';
import AvatarAbstract03Src60 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-60.jpg';
import AvatarAbstract03Src64 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-64.jpg';
import AvatarAbstract03Src72 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-72.jpg';
import AvatarAbstract03Src80 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-80.jpg';
import AvatarAbstract03Src84 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-84.jpg';
import AvatarAbstract03Src96 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-96.jpg';
import AvatarAbstract03Src120 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-120.jpg';
import AvatarAbstract03Src128 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-128.jpg';
import AvatarAbstract03Src144 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-144.jpg';
import AvatarAbstract03Src168 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-168.jpg';
import AvatarAbstract03Src192 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-192.jpg';
import AvatarAbstract03Src240 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-240.jpg';
import AvatarAbstract03Src256 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-256.jpg';
import AvatarAbstract03Src384 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-384.jpg';
import AvatarAbstract03Src512 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-512.jpg';
import AvatarAbstract03Src768 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-768.jpg';
import AvatarAbstract03Src1536 from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-03-1536.jpg';
  const AvatarAbstract03SizeMap = {
    16: AvatarAbstract03Src16,
    20: AvatarAbstract03Src20,
    24: AvatarAbstract03Src24,
    28: AvatarAbstract03Src28,
    32: AvatarAbstract03Src,
    40: AvatarAbstract03Src40,
    48: AvatarAbstract03Src48,
    56: AvatarAbstract03Src56,
    60: AvatarAbstract03Src60,
    64: AvatarAbstract03Src64,
    72: AvatarAbstract03Src72,
    80: AvatarAbstract03Src80,
    84: AvatarAbstract03Src84,
    96: AvatarAbstract03Src96,
    120: AvatarAbstract03Src120,
    128: AvatarAbstract03Src128,
    144: AvatarAbstract03Src144,
    168: AvatarAbstract03Src168,
    192: AvatarAbstract03Src192,
    240: AvatarAbstract03Src240,
    256: AvatarAbstract03Src256,
    384: AvatarAbstract03Src384,
    512: AvatarAbstract03Src512,
    768: AvatarAbstract03Src768,
    1536: AvatarAbstract03Src1536,
  } as const;
  const AvatarAbstract03AvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 80, 84, 96, 120, 128, 144, 168, 192, 240, 256, 384, 512, 768, 1536] as const;

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
  let { size = 32, width, height, alt = "AvatarAbstract03", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarAbstract03AvailableSizes));
  let imageSrc = $derived(AvatarAbstract03SizeMap[closestSize as keyof typeof AvatarAbstract03SizeMap] ?? AvatarAbstract03Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>