<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import HumanoidSrc from '@snowui-design-system/resource-base/assets/illustrations/humanoid.svg';
  let { width = 320, height, alt = "Humanoid", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 320);
  let imageSrc = $derived(HumanoidSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>