<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import GradientSrc from '@snowui-design-system/resource-base/assets/backgrounds/gradient-12.jpg';
import GradientSrc12 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-12.jpg';
  const GradientWidthMap = {
    12: GradientSrc12,
  } as const;
  const GradientAvailableWidths = [12] as const;

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
  let { width, height = 128, alt = "Gradient", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? undefined);
  let resolvedHeight = $derived(height ?? 128);
  // 根据请求宽度选择资源；未传 width 时使用默认宽度选择最接近资源，渲染时保持宽度自适应
  let sourceWidth = $derived(resolvedWidth ?? 1024);
  let closestWidth = $derived(findClosestWidth(sourceWidth, GradientAvailableWidths));
  let imageSrc = $derived(GradientWidthMap[closestWidth as keyof typeof GradientWidthMap] ?? GradientSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth ?? undefined}
  height={resolvedHeight}
  class={className}
  {...rest}
/>