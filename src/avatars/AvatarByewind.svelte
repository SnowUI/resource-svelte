<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarByewindSrc from '@snowui-design-system/resource-core/assets/avatars/avatar-byewind-32.jpg';
import AvatarByewindSrc16 from '@snowui-design-system/resource-core/assets/avatars/avatar-byewind-16.jpg';
import AvatarByewindSrc20 from '@snowui-design-system/resource-core/assets/avatars/avatar-byewind-20.jpg';
import AvatarByewindSrc24 from '@snowui-design-system/resource-core/assets/avatars/avatar-byewind-24.jpg';
import AvatarByewindSrc28 from '@snowui-design-system/resource-core/assets/avatars/avatar-byewind-28.jpg';
import AvatarByewindSrc40 from '@snowui-design-system/resource-core/assets/avatars/avatar-byewind-40.jpg';
import AvatarByewindSrc48 from '@snowui-design-system/resource-core/assets/avatars/avatar-byewind-48.jpg';
import AvatarByewindSrc56 from '@snowui-design-system/resource-core/assets/avatars/avatar-byewind-56.jpg';
import AvatarByewindSrc64 from '@snowui-design-system/resource-core/assets/avatars/avatar-byewind-64.jpg';
import AvatarByewindSrc80 from '@snowui-design-system/resource-core/assets/avatars/avatar-byewind-80.jpg';
import AvatarByewindSrc128 from '@snowui-design-system/resource-core/assets/avatars/avatar-byewind-128.jpg';
import AvatarByewindSrc256 from '@snowui-design-system/resource-core/assets/avatars/avatar-byewind-256.jpg';
import AvatarByewindSrc512 from '@snowui-design-system/resource-core/assets/avatars/avatar-byewind-512.jpg';
  const AvatarByewindSizeMap = {
    16: AvatarByewindSrc16,
    20: AvatarByewindSrc20,
    24: AvatarByewindSrc24,
    28: AvatarByewindSrc28,
    32: AvatarByewindSrc,
    40: AvatarByewindSrc40,
    48: AvatarByewindSrc48,
    56: AvatarByewindSrc56,
    64: AvatarByewindSrc64,
    80: AvatarByewindSrc80,
    128: AvatarByewindSrc128,
    256: AvatarByewindSrc256,
    512: AvatarByewindSrc512,
  } as const;
  const AvatarByewindAvailableSizes = [16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512] as const;

  // 查找最接近的可用尺寸
  const findClosestSize = (target: number, available: readonly number[]): number => {
    if (available.length === 0) return target;
    // 如果目标尺寸在可用尺寸中，直接返回
    if (available.includes(target)) return target;
    // 找到最接近的尺寸
    let closest = available[0];
    let minDiff = Math.abs(target - closest);
    for (const size of available) {
      const diff = Math.abs(target - size);
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