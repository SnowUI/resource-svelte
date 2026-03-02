<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarMale0536Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-36.jpg';
  let { size = 32, width, height, alt = "AvatarMale0536", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(AvatarMale0536Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>