<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import SmilingFaceHeartsSrc from '@snowui-design-system/resource-core/assets/emoji/smiling-face-hearts.svg';
  let { size = 32, width, height, alt = "SmilingFaceHearts", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(SmilingFaceHeartsSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>