<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AndroidSrc from '@snowui-design-system/resource-core/assets/logos/android.svg';
  let { size = 32, width, height, alt = "Android", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(AndroidSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>