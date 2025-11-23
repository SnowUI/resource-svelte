<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Geometric02Src from '@snowui-design-system/resource-core/assets/backgrounds/geometric-02-1024.jpg';
import Geometric02Src320 from '@snowui-design-system/resource-core/assets/backgrounds/geometric-02-320.jpg';
import Geometric02Src640 from '@snowui-design-system/resource-core/assets/backgrounds/geometric-02-640.jpg';
import Geometric02Src1920 from '@snowui-design-system/resource-core/assets/backgrounds/geometric-02-1920.jpg';
  const Geometric02WidthMap = {
    320: Geometric02Src320,
    640: Geometric02Src640,
    1024: Geometric02Src,
    1920: Geometric02Src1920,
  } as const;
  const Geometric02AvailableWidths = [320, 640, 1024, 1920] as const;

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
  let { width = 1024, height, alt = "Geometric02", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 1024);
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  let closestWidth = $derived(findClosestWidth(resolvedWidth, Geometric02AvailableWidths));
  let imageSrc = $derived(Geometric02WidthMap[closestWidth as keyof typeof Geometric02WidthMap] ?? Geometric02Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>