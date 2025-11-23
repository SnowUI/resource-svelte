<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import RedditSrc from '@snowui-design-system/resource-core/assets/logos/reddit.svg';
  let { size = 32, width, height, alt = "Reddit", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(RedditSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>