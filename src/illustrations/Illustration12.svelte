<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Illustration12Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-12-320.png';
import Illustration12Src160 from '@snowui-design-system/resource-core/assets/illustrations/illustration-12-160.png';
import Illustration12Src640 from '@snowui-design-system/resource-core/assets/illustrations/illustration-12-640.png';
import Illustration12Src1024 from '@snowui-design-system/resource-core/assets/illustrations/illustration-12-1024.png';
  const Illustration12WidthMap = {
    160: Illustration12Src160,
    320: Illustration12Src,
    640: Illustration12Src640,
    1024: Illustration12Src1024,
  } as const;
  const Illustration12AvailableWidths = [160, 320, 640, 1024] as const;

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
  let { width = 320, height, alt = "Illustration12", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 320);
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  let closestWidth = $derived(findClosestWidth(resolvedWidth, Illustration12AvailableWidths));
  let imageSrc = $derived(Illustration12WidthMap[closestWidth as keyof typeof Illustration12WidthMap] ?? Illustration12Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>