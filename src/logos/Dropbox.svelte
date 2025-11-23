<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import DropboxSrc from '@snowui-design-system/resource-core/assets/logos/dropbox.svg';
  let { size = 32, width, height, alt = "Dropbox", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(DropboxSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>