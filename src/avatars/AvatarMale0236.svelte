<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarMale0236Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-02-36.jpg';
  let { size = 32, width, height, alt = "AvatarMale0236", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(AvatarMale0236Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>