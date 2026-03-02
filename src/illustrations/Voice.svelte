<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import VoiceSrc from '@snowui-design-system/resource-base/assets/illustrations/voice.svg';
  let { width, height = 128, alt = "Voice", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? undefined);
  let resolvedHeight = $derived(height ?? 128);
  let imageSrc = $derived(VoiceSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth ?? undefined}
  height={resolvedHeight}
  class={className}
  {...rest}
/>