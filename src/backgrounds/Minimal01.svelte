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
  let { width = 1024, height, alt = "Minimal01", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 1024);
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  let closestWidth = $derived(findClosestWidth(resolvedWidth, Minimal01AvailableWidths));
  let imageSrc = $derived(Minimal01WidthMap[closestWidth as keyof typeof Minimal01WidthMap] ?? Minimal01Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>