<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import CursorsResizeUpDownSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-resize-up-down.svg';
  let { size = 32, width, height, alt = "CursorsResizeUpDown", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(CursorsResizeUpDownSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>