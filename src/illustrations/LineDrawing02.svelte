<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import LineDrawing02Src from '@snowui-design-system/resource-base/assets/illustrations/line-drawing-02.svg';
  let { width, height = 128, alt = "LineDrawing02", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? undefined);
  let resolvedHeight = $derived(height ?? 128);
  let imageSrc = $derived(LineDrawing02Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth ?? undefined}
  height={resolvedHeight}
  class={className}
  {...rest}
/>