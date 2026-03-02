<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import HumanoidSrc from '@snowui-design-system/resource-base/assets/illustrations/humanoid.svg';
  let { width, height = 128, alt = "Humanoid", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? undefined);
  let resolvedHeight = $derived(height ?? 128);
  let imageSrc = $derived(HumanoidSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth ?? undefined}
  height={resolvedHeight}
  class={className}
  {...rest}
/>