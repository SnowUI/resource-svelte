<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-6 15h6v3H14v-3zm1-2v-3h5v3zm5-11v6h-6a1 1 0 0 0-1 1v4h-5a1 1 0 0 0-1 1v4H7V5zm0 22H7v-4h18z"/>`, 'thin': `<path fill="currentColor" d="M25 3.5H7A1.5 1.5 0 0 0 5.5 5v22A1.5 1.5 0 0 0 7 28.5h18a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 25 3.5m-6 14h6.5v4h-12v-4zm.5-1v-4h6v4zM7 4.5h18a.5.5 0 0 1 .5.5v6.5H19a.5.5 0 0 0-.5.5v4.5H13a.5.5 0 0 0-.5.5v4.5h-6V5a.5.5 0 0 1 .5-.5m18 23H7a.5.5 0 0 1-.5-.5v-4.5h19V27a.5.5 0 0 1-.5.5"/>`, 'light': `<path fill="currentColor" d="M25 3.25H7A1.75 1.75 0 0 0 5.25 5v22A1.75 1.75 0 0 0 7 28.75h18A1.75 1.75 0 0 0 26.75 27V5A1.75 1.75 0 0 0 25 3.25m-6 14.5h6.25v3.5h-11.5v-3.5zm.75-1.5v-3.5h5.5v3.5zM7 4.75h18a.25.25 0 0 1 .25.25v6.25H19a.75.75 0 0 0-.75.75v4.25H13a.75.75 0 0 0-.75.75v4.25h-5.5V5A.25.25 0 0 1 7 4.75m18 22.5H7a.25.25 0 0 1-.25-.25v-4.25h18.5V27a.25.25 0 0 1-.25.25"/>`, 'bold': `<path fill="currentColor" d="M25 2.5H7A2.5 2.5 0 0 0 4.5 5v22A2.5 2.5 0 0 0 7 29.5h18a2.5 2.5 0 0 0 2.5-2.5V5A2.5 2.5 0 0 0 25 2.5m-6 16h5.5v2h-10v-2zm1.5-3v-2h4v2zm4-10v5H19a1.5 1.5 0 0 0-1.5 1.5v3.5H13a1.5 1.5 0 0 0-1.5 1.5v3.5h-4v-15zm-17 21v-3h17v3z"/>`, 'fill': `<path fill="currentColor" d="M25 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-5 10h5v3h-5zm-6 5h11v3H14zm11 9H7v-4h18z"/>`, 'duotone': `<path fill="currentColor" d="M26 5v7h-7v5h-6v5H6V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M25 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-6 15h6v3H14v-3zm1-2v-3h5v3zm5-11v6h-6a1 1 0 0 0-1 1v4h-5a1 1 0 0 0-1 1v4H7V5zm0 22H7v-4h18z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
