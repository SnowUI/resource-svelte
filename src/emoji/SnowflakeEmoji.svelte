<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import SnowflakeEmojiSrc from '@snowui-design-system/resource-core/assets/emoji/snowflake-emoji.svg';
  let { size = 32, width, height, alt = "SnowflakeEmoji", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(SnowflakeEmojiSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>