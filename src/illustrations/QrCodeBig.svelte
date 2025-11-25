<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import QrCodeBigSrc from '@snowui-design-system/resource-base/assets/illustrations/qr-code-big.svg';
  let { width = 320, height, alt = "QrCodeBig", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? 320);
  let imageSrc = $derived(QrCodeBigSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth}
  height={height ?? undefined}
  class={className}
  {...rest}
/>