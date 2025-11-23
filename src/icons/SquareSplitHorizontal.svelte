<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25 5H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M7 7h8v18H7zm18 18h-8V7h8z"/>`, 'thin': `<path fill="currentColor" d="M25 5.5H7A1.5 1.5 0 0 0 5.5 7v18A1.5 1.5 0 0 0 7 26.5h18a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 25 5.5M6.5 25V7a.5.5 0 0 1 .5-.5h8.5v19H7a.5.5 0 0 1-.5-.5m19 0a.5.5 0 0 1-.5.5h-8.5v-19H25a.5.5 0 0 1 .5.5z"/>`, 'light': `<path fill="currentColor" d="M25 5.25H7A1.75 1.75 0 0 0 5.25 7v18A1.75 1.75 0 0 0 7 26.75h18A1.75 1.75 0 0 0 26.75 25V7A1.75 1.75 0 0 0 25 5.25M6.75 25V7A.25.25 0 0 1 7 6.75h8.25v18.5H7a.25.25 0 0 1-.25-.25m18.5 0a.25.25 0 0 1-.25.25h-8.25V6.75H25a.25.25 0 0 1 .25.25z"/>`, 'bold': `<path fill="currentColor" d="M25 4.5H7A2.5 2.5 0 0 0 4.5 7v18A2.5 2.5 0 0 0 7 27.5h18a2.5 2.5 0 0 0 2.5-2.5V7A2.5 2.5 0 0 0 25 4.5m-17.5 3h7v17h-7zm17 17h-7v-17h7z"/>`, 'fill': `<path fill="currentColor" d="M15 5.5v21a.5.5 0 0 1-.5.5H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h7.5a.5.5 0 0 1 .5.5M25 5h-7.5a.5.5 0 0 0-.5.5v21a.5.5 0 0 0 .5.5H25a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2"/>`, 'duotone': `<path fill="currentColor" d="M26 7v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M25 5H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M7 7h8v18H7zm18 18h-8V7h8z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
