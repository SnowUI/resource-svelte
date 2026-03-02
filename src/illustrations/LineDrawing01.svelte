<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import LineDrawing01Src from '@snowui-design-system/resource-base/assets/illustrations/line-drawing-01.svg';
  let { width, height = 128, alt = "LineDrawing01", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? undefined);
  let resolvedHeight = $derived(height ?? 128);
  let imageSrc = $derived(LineDrawing01Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth ?? undefined}
  height={resolvedHeight}
  class={className}
  {...rest}
/>