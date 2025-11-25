<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Minimal02Src from '@snowui-design-system/resource-base/assets/backgrounds/minimal-02-1024.jpg';
import Minimal02Src320 from '@snowui-design-system/resource-base/assets/backgrounds/minimal-02-320.jpg';
import Minimal02Src640 from '@snowui-design-system/resource-base/assets/backgrounds/minimal-02-640.jpg';
import Minimal02Src1920 from '@snowui-design-system/resource-base/assets/backgrounds/minimal-02-1920.jpg';
  const Minimal02WidthMap = {
    320: Minimal02Src320,
    640: Minimal02Src640,
    1024: Minimal02Src,
    1920: Minimal02Src1920,
  } as const;
  const Minimal02AvailableWidths = [320, 640, 1024, 1920] as const;

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
  let { width = 1024, height, alt = "Minimal02", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 1024);
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  let closestWidth = $derived(findClosestWidth(resolvedWidth, Minimal02AvailableWidths));
  let imageSrc = $derived(Minimal02WidthMap[closestWidth as keyof typeof Minimal02WidthMap] ?? Minimal02Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>