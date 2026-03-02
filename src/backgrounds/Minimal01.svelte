<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Minimal01Src from '@snowui-design-system/resource-base/assets/backgrounds/minimal-01-1024.jpg';
import Minimal01Src320 from '@snowui-design-system/resource-base/assets/backgrounds/minimal-01-320.jpg';
import Minimal01Src640 from '@snowui-design-system/resource-base/assets/backgrounds/minimal-01-640.jpg';
import Minimal01Src1920 from '@snowui-design-system/resource-base/assets/backgrounds/minimal-01-1920.jpg';
  const Minimal01WidthMap = {
    320: Minimal01Src320,
    640: Minimal01Src640,
    1024: Minimal01Src,
    1920: Minimal01Src1920,
  } as const;
  const Minimal01AvailableWidths = [320, 640, 1024, 1920] as const;

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
  let { width, height = 128, alt = "Minimal01", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? undefined);
  let resolvedHeight = $derived(height ?? 128);
  // 根据请求宽度选择资源；未传 width 时使用默认宽度选择最接近资源，渲染时保持宽度自适应
  let sourceWidth = $derived(resolvedWidth ?? 1024);
  let closestWidth = $derived(findClosestWidth(sourceWidth, Minimal01AvailableWidths));
  let imageSrc = $derived(Minimal01WidthMap[closestWidth as keyof typeof Minimal01WidthMap] ?? Minimal01Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth ?? undefined}
  height={resolvedHeight}
  class={className}
  {...rest}
/>