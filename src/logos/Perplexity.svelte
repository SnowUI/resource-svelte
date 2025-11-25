<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import PerplexitySrc from '@snowui-design-system/resource-base/assets/logos/perplexity.svg';
  let { size = 32, width, height, alt = "Perplexity", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(PerplexitySrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>