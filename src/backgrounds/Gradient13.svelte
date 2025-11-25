<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Gradient13Src from '@snowui-design-system/resource-base/assets/backgrounds/gradient-13-1024.jpg';
import Gradient13Src320 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-13-320.jpg';
import Gradient13Src640 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-13-640.jpg';
import Gradient13Src1920 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-13-1920.jpg';
  const Gradient13WidthMap = {
    320: Gradient13Src320,
    640: Gradient13Src640,
    1024: Gradient13Src,
    1920: Gradient13Src1920,
  } as const;
  const Gradient13AvailableWidths = [320, 640, 1024, 1920] as const;

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
  let { width = 1024, height, alt = "Gradient13", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 1024);
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  let closestWidth = $derived(findClosestWidth(resolvedWidth, Gradient13AvailableWidths));
  let imageSrc = $derived(Gradient13WidthMap[closestWidth as keyof typeof Gradient13WidthMap] ?? Gradient13Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>