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
  let { width, height = 128, alt = "Illustration08", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? undefined);
  let resolvedHeight = $derived(height ?? 128);
  // 根据请求宽度选择资源；未传 width 时使用默认宽度选择最接近资源，渲染时保持宽度自适应
  let sourceWidth = $derived(resolvedWidth ?? 320);
  let closestWidth = $derived(findClosestWidth(sourceWidth, Illustration08AvailableWidths));
  let imageSrc = $derived(Illustration08WidthMap[closestWidth as keyof typeof Illustration08WidthMap] ?? Illustration08Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth ?? undefined}
  height={resolvedHeight}
  class={className}
  {...rest}
/>