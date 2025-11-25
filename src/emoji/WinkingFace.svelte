<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import WinkingFaceSrc from '@snowui-design-system/resource-base/assets/emoji/winking-face.svg';
  let { size = 32, width, height, alt = "WinkingFace", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(WinkingFaceSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>