<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 4a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1m-4 5v19a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2m-2 0h-8v19h8z"/>`, 'thin': `<path fill="currentColor" d="M25.5 4a.5.5 0 0 1-.5.5H7a.5.5 0 1 1 0-1h18a.5.5 0 0 1 .5.5m-4 5v19a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5V9A1.5 1.5 0 0 1 12 7.5h8A1.5 1.5 0 0 1 21.5 9m-1 0a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5z"/>`, 'light': `<path fill="currentColor" d="M25.75 4a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h18a.75.75 0 0 1 .75.75m-4 5v19A1.75 1.75 0 0 1 20 29.75h-8A1.75 1.75 0 0 1 10.25 28V9A1.75 1.75 0 0 1 12 7.25h8A1.75 1.75 0 0 1 21.75 9m-1.5 0a.25.25 0 0 0-.25-.25h-8a.25.25 0 0 0-.25.25v19a.25.25 0 0 0 .25.25h8a.25.25 0 0 0 .25-.25z"/>`, 'bold': `<path fill="currentColor" d="M26.5 4A1.5 1.5 0 0 1 25 5.5H7a1.5 1.5 0 0 1 0-3h18A1.5 1.5 0 0 1 26.5 4m-4 6v18a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 9.5 28V10A2.5 2.5 0 0 1 12 7.5h8a2.5 2.5 0 0 1 2.5 2.5m-3 .5h-7v17h7z"/>`, 'fill': `<path fill="currentColor" d="M26 4a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1m-6 3h-8a2 2 0 0 0-2 2v19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>`, 'duotone': `<path fill="currentColor" d="M21 9v19a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M26 4a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1m-4 5v19a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2m-2 0h-8v19h8z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
