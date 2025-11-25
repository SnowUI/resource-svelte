<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import NintendoSrc from '@snowui-design-system/resource-base/assets/logos/nintendo.svg';
  let { size = 32, width, height, alt = "Nintendo", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(NintendoSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>