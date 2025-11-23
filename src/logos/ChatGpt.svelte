<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import ChatGptSrc from '@snowui-design-system/resource-core/assets/logos/chat-gpt.svg';
  let { size = 32, width, height, alt = "ChatGpt", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(ChatGptSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>