<script lang="ts">
  import type { AvatarProps } from '../lib/types';

  let { size = 32, width, height, alt = "XLogo", class: className = "", ...rest }: AvatarProps = $props();
  let resolvedWidth = $derived(size ?? width ?? 32);
  let resolvedHeight = $derived(size ?? height ?? 32);
</script>

<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
  width={resolvedWidth}
  height={resolvedHeight}
  class={className}
  role={alt ? "img" : undefined}
  aria-label={alt || undefined}
  aria-hidden={alt ? undefined : "true"}
  {...rest}
>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9877 16.2296L0 1.3335H9.49513L16.8951 10.5403L24.8007 1.37495H30.0301L19.4235 13.6861L32 29.3335H22.5332L14.5206 19.3769L5.96634 29.3059H0.708592L11.9877 16.2296ZM23.9131 26.5735L5.82209 4.09348H8.1142L26.1824 26.5735H23.9131Z" fill="currentColor"/>
</svg>
