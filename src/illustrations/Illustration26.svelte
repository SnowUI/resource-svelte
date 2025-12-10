<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Illustration26Src from '@snowui-design-system/resource-base/assets/illustrations/illustration-26-320.png';
import Illustration26Src160 from '@snowui-design-system/resource-base/assets/illustrations/illustration-26-160.png';
import Illustration26Src640 from '@snowui-design-system/resource-base/assets/illustrations/illustration-26-640.png';
import Illustration26Src1024 from '@snowui-design-system/resource-base/assets/illustrations/illustration-26-1024.png';
  const Illustration26WidthMap = {
    160: Illustration26Src160,
    320: Illustration26Src,
    640: Illustration26Src640,
    1024: Illustration26Src1024,
  } as const;
  const Illustration26AvailableWidths = [160, 320, 640, 1024] as const;

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
  let { width = 320, height, alt = "Illustration26", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 320);
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  let closestWidth = $derived(findClosestWidth(resolvedWidth, Illustration26AvailableWidths));
  let imageSrc = $derived(Illustration26WidthMap[closestWidth as keyof typeof Illustration26WidthMap] ?? Illustration26Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>