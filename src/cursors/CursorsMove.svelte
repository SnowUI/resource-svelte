<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import CursorsMoveSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-move.svg';
  let { size = 32, width, height, alt = "CursorsMove", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(CursorsMoveSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>