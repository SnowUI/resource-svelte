<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Illustration06Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-06-320.png';
import Illustration06Src160 from '@snowui-design-system/resource-core/assets/illustrations/illustration-06-160.png';
import Illustration06Src640 from '@snowui-design-system/resource-core/assets/illustrations/illustration-06-640.png';
import Illustration06Src1024 from '@snowui-design-system/resource-core/assets/illustrations/illustration-06-1024.png';
  const Illustration06WidthMap = {
    160: Illustration06Src160,
    320: Illustration06Src,
    640: Illustration06Src640,
    1024: Illustration06Src1024,
  } as const;
  const Illustration06AvailableWidths = [160, 320, 640, 1024] as const;

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
  let { width = 320, height, alt = "Illustration06", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 320);
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  let closestWidth = $derived(findClosestWidth(resolvedWidth, Illustration06AvailableWidths));
  let imageSrc = $derived(Illustration06WidthMap[closestWidth as keyof typeof Illustration06WidthMap] ?? Illustration06Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>