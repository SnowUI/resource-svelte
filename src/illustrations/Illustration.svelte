<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import IllustrationSrc from '@snowui-design-system/resource-base/assets/illustrations/illustration-16.png';
import IllustrationSrc16 from '@snowui-design-system/resource-base/assets/illustrations/illustration-16.png';
import IllustrationSrc20 from '@snowui-design-system/resource-base/assets/illustrations/illustration-20.png';
import IllustrationSrc24 from '@snowui-design-system/resource-base/assets/illustrations/illustration-24.png';
import IllustrationSrc28 from '@snowui-design-system/resource-base/assets/illustrations/illustration-28.png';
  const IllustrationWidthMap = {
    16: IllustrationSrc16,
    20: IllustrationSrc20,
    24: IllustrationSrc24,
    28: IllustrationSrc28,
  } as const;
  const IllustrationAvailableWidths = [16, 20, 24, 28] as const;

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
  let { width = 320, height, alt = "Illustration", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 320);
  // 根据 width 选择对应宽度的图片，如果没有精确匹配则使用最接近的宽度
  let closestWidth = $derived(findClosestWidth(resolvedWidth, IllustrationAvailableWidths));
  let imageSrc = $derived(IllustrationWidthMap[closestWidth as keyof typeof IllustrationWidthMap] ?? IllustrationSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>