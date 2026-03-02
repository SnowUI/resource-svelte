<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarAbstract0436Src from '@snowui-design-system/resource-base/assets/avatars/avatar-abstract-04-36.jpg';
  let { size = 32, width, height, alt = "AvatarAbstract0436", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(AvatarAbstract0436Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>