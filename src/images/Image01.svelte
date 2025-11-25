<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Image01Src from '@snowui-design-system/resource-base/assets/images/image-01-320.png';
import Image01Src160 from '@snowui-design-system/resource-base/assets/images/image-01-160.png';
import Image01Src640 from '@snowui-design-system/resource-base/assets/images/image-01-640.png';
import Image01Src1024 from '@snowui-design-system/resource-base/assets/images/image-01-1024.png';
  const Image01WidthMap = {
    160: Image01Src160,
    320: Image01Src,
    640: Image01Src640,
    1024: Image01Src1024,
  } as const;
  const Image01AvailableWidths = [160, 320, 640, 1024] as const;

  // 查找最接近的可用宽度
  const findClosestWidth = (target: number, available: readonly number[]): number => {
    if (available.length === 0) return target;
    // 如果目标宽度在可用宽度中，直接返回
    if (available.includes(target)) return target;
    // 找到最接近的宽度
    let closest = available[0];
    let minDiff = Math.abs(target - closest);
    for (const width of available) {
      const diff = Math.abs(target - width);
      if (diff < minDiff) {
        minDiff = diff;
        closest = width;
      }
    }
    return closest;
  };
  let { width = 320, height, alt = "Image01", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 320);
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  let closestWidth = $derived(findClosestWidth(resolvedWidth, Image01AvailableWidths));
  let imageSrc = $derived(Image01WidthMap[closestWidth as keyof typeof Image01WidthMap] ?? Image01Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>