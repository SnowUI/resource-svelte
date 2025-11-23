<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import TwitterSrc from '@snowui-design-system/resource-core/assets/logos/twitter.svg';
  let { size = 32, width, height, alt = "Twitter", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(TwitterSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>