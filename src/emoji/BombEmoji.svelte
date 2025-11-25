<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import BombEmojiSrc from '@snowui-design-system/resource-base/assets/emoji/bomb-emoji.svg';
  let { size = 32, width, height, alt = "BombEmoji", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(BombEmojiSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>