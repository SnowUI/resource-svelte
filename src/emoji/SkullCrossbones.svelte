<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import SkullCrossbonesSrc from '@snowui-design-system/resource-base/assets/emoji/skull-crossbones.svg';
  let { size = 32, width, height, alt = "SkullCrossbones", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(SkullCrossbonesSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>