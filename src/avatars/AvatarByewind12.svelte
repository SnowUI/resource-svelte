<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AvatarByewind12Src from '@snowui-design-system/resource-base/assets/avatars/avatar-byewind-12.jpg';
  let { size = 32, width, height, alt = "AvatarByewind12", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(AvatarByewind12Src);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>