<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import FaceBlowingKissSrc from '@snowui-design-system/resource-core/assets/emoji/face-blowing-kiss.svg';
  let { size = 32, width, height, alt = "FaceBlowingKiss", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(FaceBlowingKissSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>