<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import Illustration12Src from '@snowui-design-system/resource-base/assets/illustrations/illustration-12-320.png';
import Illustration12Src160 from '@snowui-design-system/resource-base/assets/illustrations/illustration-12-160.png';
import Illustration12Src640 from '@snowui-design-system/resource-base/assets/illustrations/illustration-12-640.png';
import Illustration12Src1024 from '@snowui-design-system/resource-base/assets/illustrations/illustration-12-1024.png';
  const Illustration12WidthMap = {
    160: Illustration12Src160,
    320: Illustration12Src,
    640: Illustration12Src640,
    1024: Illustration12Src1024,
  } as const;
  const Illustration12AvailableWidths = [160, 320, 640, 1024] as const;

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
  let { width, height = 128, alt = "Illustration12", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? undefined);
  let resolvedHeight = $derived(height ?? 128);
  // 根据请求宽度选择资源；未传 width 时使用默认宽度选择最接近资源，渲染时保持宽度自适应
  let sourceWidth = $derived(resolvedWidth ?? 320);
  let closestWidth = $derived(findClosestWidth(sourceWidth, Illustration12AvailableWidths));
  let imageSrc = $derived(Illustration12WidthMap[closestWidth as keyof typeof Illustration12WidthMap] ?? Illustration12Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth ?? undefined}
  height={resolvedHeight}
  class={className}
  {...rest}
/>