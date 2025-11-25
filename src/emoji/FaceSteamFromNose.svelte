<script lang="ts">
  import type { AvatarProps } from '../lib/types';
import FaceSteamFromNoseSrc from '@snowui-design-system/resource-base/assets/emoji/face-steam-from-nose.svg';
  let { size = 32, width, height, alt = "FaceSteamFromNose", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
  let imageSrc = $derived(FaceSteamFromNoseSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  {...rest}
/>