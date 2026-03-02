<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarAbstract0236Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-02-36.jpg';
  let { size = 32, width, height, alt = "AvatarAbstract0236", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(AvatarAbstract0236Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>