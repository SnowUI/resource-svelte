<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 29a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1m-16-5V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v19a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2m2 0h8V5h-8z"/>`, 'thin': `<path fill="currentColor" d="M25.5 29a.5.5 0 0 1-.5.5H7a.5.5 0 0 1 0-1h18a.5.5 0 0 1 .5.5m-15-5V5A1.5 1.5 0 0 1 12 3.5h8A1.5 1.5 0 0 1 21.5 5v19a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5m1 0a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5z"/>`, 'light': `<path fill="currentColor" d="M25.75 29a.75.75 0 0 1-.75.75H7a.75.75 0 1 1 0-1.5h18a.75.75 0 0 1 .75.75m-15.5-5V5A1.75 1.75 0 0 1 12 3.25h8A1.75 1.75 0 0 1 21.75 5v19A1.75 1.75 0 0 1 20 25.75h-8A1.75 1.75 0 0 1 10.25 24m1.5 0a.25.25 0 0 0 .25.25h8a.25.25 0 0 0 .25-.25V5a.25.25 0 0 0-.25-.25h-8a.25.25 0 0 0-.25.25z"/>`, 'bold': `<path fill="currentColor" d="M26.5 29a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 1 1 0-3h18a1.5 1.5 0 0 1 1.5 1.5m-17-6V5A2.5 2.5 0 0 1 12 2.5h8A2.5 2.5 0 0 1 22.5 5v18a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 9.5 23m3-.5h7v-17h-7z"/>`, 'fill': `<path fill="currentColor" d="M26 29a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1m-14-3h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v19a2 2 0 0 0 2 2"/>`, 'duotone': `<path fill="currentColor" d="M21 5v19a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M26 29a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1m-16-5V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v19a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2m2 0h8V5h-8z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
