<script lang="ts">
  import type { AvatarProps } from '../lib/types';

  let { size = 32, width, height, alt = "Framer", class: className = "", ...rest }: AvatarProps = $props();
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
<circle cx="16" cy="16" r="16" fill="currentColor"/>
<path d="M8.79999 20.5161H15.6555V27.5742L8.79999 20.5161Z" fill="white"/>
<path d="M8.79999 13.458H15.6555V20.5161H8.79999V13.458Z" fill="white"/>
<path d="M15.6555 13.458L22.511 20.5161H15.6555V13.458Z" fill="white"/>
<path d="M15.6555 6.3999H22.511V13.458H15.6555V6.3999Z" fill="white"/>
<path d="M8.79999 6.3999H15.6555V13.458L8.79999 6.3999Z" fill="white"/>
</svg>
