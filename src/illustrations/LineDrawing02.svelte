<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import LineDrawing02Src from '@snowui-design-system/resource-base/assets/illustrations/line-drawing-02.svg';
  let { width = 320, height, alt = "LineDrawing02", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 320);
  let imageSrc = $derived(LineDrawing02Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>