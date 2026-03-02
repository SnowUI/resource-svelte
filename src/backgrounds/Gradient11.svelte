<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Gradient11Src from '@snowui-design-system/resource-base/assets/backgrounds/gradient-11-1024.jpg';
import Gradient11Src320 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-11-320.jpg';
import Gradient11Src640 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-11-640.jpg';
import Gradient11Src1920 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-11-1920.jpg';
  const Gradient11WidthMap = {
    320: Gradient11Src320,
    640: Gradient11Src640,
    1024: Gradient11Src,
    1920: Gradient11Src1920,
  } as const;
  const Gradient11AvailableWidths = [320, 640, 1024, 1920] as const;

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
  let { width, height = 128, alt = "Gradient11", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? undefined);
  let resolvedHeight = $derived(height ?? 128);
  // 根据请求宽度选择资源；未传 width 时使用默认宽度选择最接近资源，渲染时保持宽度自适应
  let sourceWidth = $derived(resolvedWidth ?? 1024);
  let closestWidth = $derived(findClosestWidth(sourceWidth, Gradient11AvailableWidths));
  let imageSrc = $derived(Gradient11WidthMap[closestWidth as keyof typeof Gradient11WidthMap] ?? Gradient11Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth ?? undefined}
  height={resolvedHeight}
  class={className}
  {...rest}
/>