<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Gradient03Src from '@snowui-design-system/resource-base/assets/backgrounds/gradient-03-1024.jpg';
import Gradient03Src320 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-03-320.jpg';
import Gradient03Src640 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-03-640.jpg';
import Gradient03Src1920 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-03-1920.jpg';
  const Gradient03WidthMap = {
    320: Gradient03Src320,
    640: Gradient03Src640,
    1024: Gradient03Src,
    1920: Gradient03Src1920,
  } as const;
  const Gradient03AvailableWidths = [320, 640, 1024, 1920] as const;

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
  let { width, height = 128, alt = "Gradient03", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? undefined);
  let resolvedHeight = $derived(height ?? 128);
  // 根据请求宽度选择资源；未传 width 时使用默认宽度选择最接近资源，渲染时保持宽度自适应
  let sourceWidth = $derived(resolvedWidth ?? 1024);
  let closestWidth = $derived(findClosestWidth(sourceWidth, Gradient03AvailableWidths));
  let imageSrc = $derived(Gradient03WidthMap[closestWidth as keyof typeof Gradient03WidthMap] ?? Gradient03Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth ?? undefined}
  height={resolvedHeight}
  class={className}
  {...rest}
/>