<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import CursorsResizeLeftRightSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-resize-left-right.svg';
  let { size = 32, width, height, alt = "CursorsResizeLeftRight", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(CursorsResizeLeftRightSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>