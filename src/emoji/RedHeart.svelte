<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import RedHeartSrc from '@snowui-design-system/resource-base/assets/emoji/red-heart.svg';
  let { size = 32, width, height, alt = "RedHeart", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(RedHeartSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>