<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import Avatar3d0436Src from '@snowui-design-system/resource-base/assets/avatars/avatar-3d-04-36.jpg';
  let { size = 32, width, height, alt = "Avatar3d0436", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(Avatar3d0436Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>