<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarByewindSrc from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-32.jpg';
import AvatarByewindSrc16 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-16.jpg';
import AvatarByewindSrc20 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-20.jpg';
import AvatarByewindSrc24 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-24.jpg';
import AvatarByewindSrc28 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-28.jpg';
import AvatarByewindSrc40 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-40.jpg';
import AvatarByewindSrc48 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-48.jpg';
import AvatarByewindSrc56 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-56.jpg';
import AvatarByewindSrc60 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-60.jpg';
import AvatarByewindSrc64 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-64.jpg';
import AvatarByewindSrc72 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-72.jpg';
import AvatarByewindSrc80 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-80.jpg';
import AvatarByewindSrc84 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-84.jpg';
import AvatarByewindSrc96 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-96.jpg';
import AvatarByewindSrc120 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-120.jpg';
import AvatarByewindSrc128 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-128.jpg';
import AvatarByewindSrc144 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-144.jpg';
import AvatarByewindSrc168 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-168.jpg';
import AvatarByewindSrc192 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-192.jpg';
import AvatarByewindSrc240 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-240.jpg';
import AvatarByewindSrc256 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-256.jpg';
import AvatarByewindSrc384 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-384.jpg';
import AvatarByewindSrc512 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-512.jpg';
import AvatarByewindSrc768 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-768.jpg';
import AvatarByewindSrc1536 from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-1536.jpg';
  const AvatarByewindSizeMap = {
    16: AvatarByewindSrc16,
    20: AvatarByewindSrc20,
    24: AvatarByewindSrc24,
    28: AvatarByewindSrc28,
    32: AvatarByewindSrc,
    40: AvatarByewindSrc40,
    48: AvatarByewindSrc48,
    56: AvatarByewindSrc56,
    60: AvatarByewindSrc60,
    64: AvatarByewindSrc64,
    72: AvatarByewindSrc72,
    80: AvatarByewindSrc80,
    84: AvatarByewindSrc84,
    96: AvatarByewindSrc96,
    120: AvatarByewindSrc120,
    128: AvatarByewindSrc128,
    144: AvatarByewindSrc144,
    168: AvatarByewindSrc168,
    192: AvatarByewindSrc192,
    240: AvatarByewindSrc240,
    256: AvatarByewindSrc256,
    384: AvatarByewindSrc384,
    512: AvatarByewindSrc512,
    768: AvatarByewindSrc768,
    1536: AvatarByewindSrc1536,
  } as const;
  const AvatarByewindAvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 60, 64, 72, 80, 84, 96, 120, 128, 144, 168, 192, 240, 256, 384, 512, 768, 1536] as const;

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
  let { size = 32, width, height, alt = "AvatarByewind", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  // 根据 size 选择对应尺寸的图片，如果没有精确匹配则使用最接近的尺寸
  let closestSize = $derived(findClosestSize(resolvedWidth, AvatarByewindAvailableSizes));
  let imageSrc = $derived(AvatarByewindSizeMap[closestSize as keyof typeof AvatarByewindSizeMap] ?? AvatarByewindSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>