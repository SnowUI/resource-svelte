<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Geometric05Src from '@snowui-design-system/resource-base/assets/backgrounds/geometric-05-1024.jpg';
import Geometric05Src320 from '@snowui-design-system/resource-base/assets/backgrounds/geometric-05-320.jpg';
import Geometric05Src640 from '@snowui-design-system/resource-base/assets/backgrounds/geometric-05-640.jpg';
import Geometric05Src1920 from '@snowui-design-system/resource-base/assets/backgrounds/geometric-05-1920.jpg';
  const Geometric05WidthMap = {
    320: Geometric05Src320,
    640: Geometric05Src640,
    1024: Geometric05Src,
    1920: Geometric05Src1920,
  } as const;
  const Geometric05AvailableWidths = [320, 640, 1024, 1920] as const;

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
  let { width = 1024, height, alt = "Geometric05", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 1024);
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  let closestWidth = $derived(findClosestWidth(resolvedWidth, Geometric05AvailableWidths));
  let imageSrc = $derived(Geometric05WidthMap[closestWidth as keyof typeof Geometric05WidthMap] ?? Geometric05Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>