<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import VisaSrc from '@snowui-design-system/resource-core/assets/logos/visa.svg';
  let { size = 32, width, height, alt = "Visa", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(VisaSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>