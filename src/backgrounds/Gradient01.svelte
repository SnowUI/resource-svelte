<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Gradient01Src from '@snowui-design-system/resource-base/assets/backgrounds/gradient-01-1024.jpg';
import Gradient01Src320 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-01-320.jpg';
import Gradient01Src640 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-01-640.jpg';
import Gradient01Src1920 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-01-1920.jpg';
  const Gradient01WidthMap = {
    320: Gradient01Src320,
    640: Gradient01Src640,
    1024: Gradient01Src,
    1920: Gradient01Src1920,
  } as const;
  const Gradient01AvailableWidths = [320, 640, 1024, 1920] as const;

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
  let { width, height = 128, alt = "Gradient01", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? undefined);
  let resolvedHeight = $derived(height ?? 128);
  // 根据请求宽度选择资源；未传 width 时使用默认宽度选择最接近资源，渲染时保持宽度自适应
  let sourceWidth = $derived(resolvedWidth ?? 1024);
  let closestWidth = $derived(findClosestWidth(sourceWidth, Gradient01AvailableWidths));
  let imageSrc = $derived(Gradient01WidthMap[closestWidth as keyof typeof Gradient01WidthMap] ?? Gradient01Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth ?? undefined}
  height={resolvedHeight}
  class={className}
  {...rest}
/>