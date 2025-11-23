<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import AppleIntelligence2bSrc from '@snowui-design-system/resource-core/assets/logos/apple-intelligence-2b.svg';
  let { size = 32, width, height, alt = "AppleIntelligence2b", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(AppleIntelligence2bSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>