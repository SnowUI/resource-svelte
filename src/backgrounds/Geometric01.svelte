<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Geometric01Src from '@snowui-design-system/resource-base/assets/backgrounds/geometric-01-1024.jpg';
import Geometric01Src320 from '@snowui-design-system/resource-base/assets/backgrounds/geometric-01-320.jpg';
import Geometric01Src640 from '@snowui-design-system/resource-base/assets/backgrounds/geometric-01-640.jpg';
import Geometric01Src1920 from '@snowui-design-system/resource-base/assets/backgrounds/geometric-01-1920.jpg';
  const Geometric01WidthMap = {
    320: Geometric01Src320,
    640: Geometric01Src640,
    1024: Geometric01Src,
    1920: Geometric01Src1920,
  } as const;
  const Geometric01AvailableWidths = [320, 640, 1024, 1920] as const;

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
  let { width, height = 128, alt = "Geometric01", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? undefined);
  let resolvedHeight = $derived(height ?? 128);
  // 根据请求宽度选择资源；未传 width 时使用默认宽度选择最接近资源，渲染时保持宽度自适应
  let sourceWidth = $derived(resolvedWidth ?? 1024);
  let closestWidth = $derived(findClosestWidth(sourceWidth, Geometric01AvailableWidths));
  let imageSrc = $derived(Geometric01WidthMap[closestWidth as keyof typeof Geometric01WidthMap] ?? Geometric01Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth ?? undefined}
  height={resolvedHeight}
  class={className}
  {...rest}
/>