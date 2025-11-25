<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import CursorsResizeDownSrc from '@snowui-design-system/resource-base/assets/cursors/cursors-resize-down.svg';
  let { size = 32, width, height, alt = "CursorsResizeDown", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(CursorsResizeDownSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>