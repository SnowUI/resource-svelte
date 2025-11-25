<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import SmilingFaceHornsSrc from '@snowui-design-system/resource-base/assets/emoji/smiling-face-horns.svg';
  let { size = 32, width, height, alt = "SmilingFaceHorns", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(SmilingFaceHornsSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>