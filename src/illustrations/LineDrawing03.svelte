<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import LineDrawing03Src from '@snowui-design-system/resource-core/assets/illustrations/line-drawing-03.svg';
  let { width = 320, height, alt = "LineDrawing03", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 320);
  let imageSrc = $derived(LineDrawing03Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>