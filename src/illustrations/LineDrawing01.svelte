<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import LineDrawing01Src from '@snowui-design-system/resource-base/assets/illustrations/line-drawing-01.svg';
  let { width = 320, height, alt = "LineDrawing01", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 320);
  let imageSrc = $derived(LineDrawing01Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>