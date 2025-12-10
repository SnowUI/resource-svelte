<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Minimal03Src from '@snowui-design-system/resource-base/assets/backgrounds/minimal-03-1024.jpg';
import Minimal03Src320 from '@snowui-design-system/resource-base/assets/backgrounds/minimal-03-320.jpg';
import Minimal03Src640 from '@snowui-design-system/resource-base/assets/backgrounds/minimal-03-640.jpg';
import Minimal03Src1920 from '@snowui-design-system/resource-base/assets/backgrounds/minimal-03-1920.jpg';
  const Minimal03WidthMap = {
    320: Minimal03Src320,
    640: Minimal03Src640,
    1024: Minimal03Src,
    1920: Minimal03Src1920,
  } as const;
  const Minimal03AvailableWidths = [320, 640, 1024, 1920] as const;

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
  let { width = 1024, height, alt = "Minimal03", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 1024);
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  let closestWidth = $derived(findClosestWidth(resolvedWidth, Minimal03AvailableWidths));
  let imageSrc = $derived(Minimal03WidthMap[closestWidth as keyof typeof Minimal03WidthMap] ?? Minimal03Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>