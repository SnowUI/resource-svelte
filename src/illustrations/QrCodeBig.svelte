<script lang="ts">
  import type { BackgroundProps } from '../lib/types';
import QrCodeBigSrc from '@snowui-design-system/resource-base/assets/illustrations/qr-code-big.svg';
  let { width, height = 128, alt = "QrCodeBig", class: className = "", ...rest }: BackgroundProps = $props();
  let resolvedWidth = $derived(width ?? undefined);
  let resolvedHeight = $derived(height ?? 128);
  let imageSrc = $derived(QrCodeBigSrc);
</script>
<img
  src={imageSrc}
  alt={alt}
  width={resolvedWidth ?? undefined}
  height={resolvedHeight}
  class={className}
  {...rest}
/>