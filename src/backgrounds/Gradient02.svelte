<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Gradient02Src from '@snowui-design-system/resource-base/assets/backgrounds/gradient-02-1024.jpg';
import Gradient02Src320 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-02-320.jpg';
import Gradient02Src640 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-02-640.jpg';
import Gradient02Src1920 from '@snowui-design-system/resource-base/assets/backgrounds/gradient-02-1920.jpg';
  const Gradient02WidthMap = {
    320: Gradient02Src320,
    640: Gradient02Src640,
    1024: Gradient02Src,
    1920: Gradient02Src1920,
  } as const;
  const Gradient02AvailableWidths = [320, 640, 1024, 1920] as const;

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
  let { width = 1024, height, alt = "Gradient02", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 1024);
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  let closestWidth = $derived(findClosestWidth(resolvedWidth, Gradient02AvailableWidths));
  let imageSrc = $derived(Gradient02WidthMap[closestWidth as keyof typeof Gradient02WidthMap] ?? Gradient02Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>