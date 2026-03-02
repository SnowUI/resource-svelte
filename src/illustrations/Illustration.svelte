<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import IllustrationSrc from '@snowui-design-system/resource-base/assets/illustrations/illustration-12.png';
import IllustrationSrc12 from '@snowui-design-system/resource-base/assets/illustrations/illustration-12.png';
import IllustrationSrc16 from '@snowui-design-system/resource-base/assets/illustrations/illustration-16.png';
import IllustrationSrc20 from '@snowui-design-system/resource-base/assets/illustrations/illustration-20.png';
import IllustrationSrc24 from '@snowui-design-system/resource-base/assets/illustrations/illustration-24.png';
import IllustrationSrc28 from '@snowui-design-system/resource-base/assets/illustrations/illustration-28.png';
  const IllustrationWidthMap = {
    12: IllustrationSrc12,
    16: IllustrationSrc16,
    20: IllustrationSrc20,
    24: IllustrationSrc24,
    28: IllustrationSrc28,
  } as const;
  const IllustrationAvailableWidths = [12, 16, 20, 24, 28] as const;

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
  let { width, height = 128, alt = "Illustration", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? undefined);
  let resolvedHeight = $derived(height ?? 128);
  // 根据请求宽度选择资源；未传 width 时使用默认宽度选择最接近资源，渲染时保持宽度自适应
  let sourceWidth = $derived(resolvedWidth ?? 320);
  let closestWidth = $derived(findClosestWidth(sourceWidth, IllustrationAvailableWidths));
  let imageSrc = $derived(IllustrationWidthMap[closestWidth as keyof typeof IllustrationWidthMap] ?? IllustrationSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth ?? undefined}
  height={resolvedHeight}
  class={className}
  {...rest}
/>