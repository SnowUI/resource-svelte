<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Geometric03Src from '@snowui-design-system/resource-base/assets/backgrounds/geometric-03-1024.jpg';
import Geometric03Src320 from '@snowui-design-system/resource-base/assets/backgrounds/geometric-03-320.jpg';
import Geometric03Src640 from '@snowui-design-system/resource-base/assets/backgrounds/geometric-03-640.jpg';
import Geometric03Src1920 from '@snowui-design-system/resource-base/assets/backgrounds/geometric-03-1920.jpg';
  const Geometric03WidthMap = {
    320: Geometric03Src320,
    640: Geometric03Src640,
    1024: Geometric03Src,
    1920: Geometric03Src1920,
  } as const;
  const Geometric03AvailableWidths = [320, 640, 1024, 1920] as const;

  // 查找最接近的 3x 宽度
  const findClosestWidth = (target: number, available: readonly number[]): number => {
    if (available.length === 0) return target;
    const preferred = target * 3;
    let closest = available[0];
    let minDiff = Math.abs(preferred - closest);
    for (const width of available) {
      const diff = Math.abs(preferred - width);
      if (diff < minDiff) {
        minDiff = diff;
        closest = width;
      }
    }
    return closest;
  };
  let { width = 1024, height, alt = "Geometric03", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 1024);
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  let closestWidth = $derived(findClosestWidth(resolvedWidth, Geometric03AvailableWidths));
  let imageSrc = $derived(Geometric03WidthMap[closestWidth as keyof typeof Geometric03WidthMap] ?? Geometric03Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>