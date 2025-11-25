<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AppleIntelligence2aSrc from '@snowui-design-system/resource-base/assets/logos/apple-intelligence-2a.svg';
  let { size = 32, width, height, alt = "AppleIntelligence2a", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(AppleIntelligence2aSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>