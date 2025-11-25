<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import VoiceSrc from '@snowui-design-system/resource-base/assets/illustrations/voice.svg';
  let { width = 320, height, alt = "Voice", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 320);
  let imageSrc = $derived(VoiceSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>