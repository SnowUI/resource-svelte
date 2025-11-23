<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import OneDriveSrc from '@snowui-design-system/resource-core/assets/logos/one-drive.svg';
  let { size = 32, width, height, alt = "OneDrive", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(OneDriveSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>