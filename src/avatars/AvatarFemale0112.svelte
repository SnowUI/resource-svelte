<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarFemale0112Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-01-12.jpg';
  let { size = 32, width, height, alt = "AvatarFemale0112", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(AvatarFemale0112Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>