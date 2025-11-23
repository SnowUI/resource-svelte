<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M18.5 19a7.5 7.5 0 0 0 0-15H11a1 1 0 0 0-1 1v12H7a1 1 0 0 0 0 2h3v2H7a1 1 0 0 0 0 2h3v4a1 1 0 0 0 2 0v-4h6a1 1 0 0 0 0-2h-6v-2zM12 6h6.5a5.5 5.5 0 0 1 0 11H12z"/>`, 'thin': `<path fill="currentColor" d="M18.5 4.5H11a.5.5 0 0 0-.5.5v12.5H7a.5.5 0 0 0 0 1h3.5v3H7a.5.5 0 0 0 0 1h3.5V27a.5.5 0 0 0 1 0v-4.5H18a.5.5 0 0 0 0-1h-6.5v-3h7a7 7 0 1 0 0-14m0 13h-7v-12h7a6 6 0 1 1 0 12"/>`, 'light': `<path fill="currentColor" d="M18.5 18.75a7.25 7.25 0 1 0 0-14.5H11a.75.75 0 0 0-.75.75v12.25H7a.75.75 0 1 0 0 1.5h3.25v2.5H7a.75.75 0 1 0 0 1.5h3.25V27a.75.75 0 1 0 1.5 0v-4.25H18a.75.75 0 1 0 0-1.5h-6.25v-2.5zm-6.75-13h6.75a5.75 5.75 0 0 1 0 11.5h-6.75z"/>`, 'bold': `<path fill="currentColor" d="M18.5 19.5a8 8 0 0 0 0-16H11A1.5 1.5 0 0 0 9.5 5v11.5H7a1.5 1.5 0 1 0 0 3h2.5v2H7a1.5 1.5 0 1 0 0 3h2.5V27a1.5 1.5 0 0 0 3 0v-2.5H18a1.5 1.5 0 1 0 0-3h-5.5v-2zm-6-13h6a5 5 0 1 1 0 10h-6z"/>`, 'fill': `<path fill="currentColor" d="M22 13.5a3.5 3.5 0 0 1-3.5 3.5H14v-7h4.5a3.5 3.5 0 0 1 3.5 3.5m7 2.5A13 13 0 1 1 16 3a13.014 13.014 0 0 1 13 13m-5-2.5A5.506 5.506 0 0 0 18.5 8H13a1 1 0 0 0-1 1v8h-2a1 1 0 0 0 0 2h2v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h5a1 1 0 0 0 0-2h-5v-2h4.5a5.506 5.506 0 0 0 5.5-5.5"/>`, 'duotone': `<path fill="currentColor" d="M25 11.5a6.5 6.5 0 0 1-6.5 6.5H11V5h7.5a6.5 6.5 0 0 1 6.5 6.5" opacity=".08"/><path fill="currentColor" d="M18.5 19a7.5 7.5 0 0 0 0-15H11a1 1 0 0 0-1 1v12H7a1 1 0 0 0 0 2h3v2H7a1 1 0 0 0 0 2h3v4a1 1 0 0 0 2 0v-4h6a1 1 0 0 0 0-2h-6v-2zM12 6h6.5a5.5 5.5 0 0 1 0 11H12z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
