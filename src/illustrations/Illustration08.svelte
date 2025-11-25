<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Illustration08Src from '@snowui-design-system/resource-base/assets/illustrations/illustration-08-320.png';
import Illustration08Src160 from '@snowui-design-system/resource-base/assets/illustrations/illustration-08-160.png';
import Illustration08Src640 from '@snowui-design-system/resource-base/assets/illustrations/illustration-08-640.png';
import Illustration08Src1024 from '@snowui-design-system/resource-base/assets/illustrations/illustration-08-1024.png';
  const Illustration08WidthMap = {
    160: Illustration08Src160,
    320: Illustration08Src,
    640: Illustration08Src640,
    1024: Illustration08Src1024,
  } as const;
  const Illustration08AvailableWidths = [160, 320, 640, 1024] as const;

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
  let { width = 320, height, alt = "Illustration08", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 320);
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  let closestWidth = $derived(findClosestWidth(resolvedWidth, Illustration08AvailableWidths));
  let imageSrc = $derived(Illustration08WidthMap[closestWidth as keyof typeof Illustration08WidthMap] ?? Illustration08Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>