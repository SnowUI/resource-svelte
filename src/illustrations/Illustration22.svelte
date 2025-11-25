<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Illustration22Src from '@snowui-design-system/resource-base/assets/illustrations/illustration-22-320.png';
import Illustration22Src160 from '@snowui-design-system/resource-base/assets/illustrations/illustration-22-160.png';
import Illustration22Src640 from '@snowui-design-system/resource-base/assets/illustrations/illustration-22-640.png';
import Illustration22Src1024 from '@snowui-design-system/resource-base/assets/illustrations/illustration-22-1024.png';
  const Illustration22WidthMap = {
    160: Illustration22Src160,
    320: Illustration22Src,
    640: Illustration22Src640,
    1024: Illustration22Src1024,
  } as const;
  const Illustration22AvailableWidths = [160, 320, 640, 1024] as const;

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
  let { width = 320, height, alt = "Illustration22", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 320);
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  let closestWidth = $derived(findClosestWidth(resolvedWidth, Illustration22AvailableWidths));
  let imageSrc = $derived(Illustration22WidthMap[closestWidth as keyof typeof Illustration22WidthMap] ?? Illustration22Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>