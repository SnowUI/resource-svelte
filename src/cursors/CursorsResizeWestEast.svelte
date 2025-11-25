<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import CursorsResizeWestEastSrc from '@snowui-design-system/resource-base/assets/cursors/cursors-resize-west-east.svg';
  let { size = 32, width, height, alt = "CursorsResizeWestEast", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(CursorsResizeWestEastSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>