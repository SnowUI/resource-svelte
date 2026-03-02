<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarByewind36Src from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-36.jpg';
  let { size = 32, width, height, alt = "AvatarByewind36", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(AvatarByewind36Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>