<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import GoogleSrc from '@snowui-design-system/resource-core/assets/logos/google.svg';
  let { size = 32, width, height, alt = "Google", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(GoogleSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>