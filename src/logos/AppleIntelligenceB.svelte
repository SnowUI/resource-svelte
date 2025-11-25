<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AppleIntelligenceBSrc from '@snowui-design-system/resource-base/assets/logos/apple-intelligence-b.svg';
  let { size = 32, width, height, alt = "AppleIntelligenceB", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(AppleIntelligenceBSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>