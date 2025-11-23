<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 10h-9V6a1 1 0 0 0-2 0v4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9v4a1 1 0 0 0 2 0v-4h9a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m0 10H6v-8h20z"/>`, 'thin': `<path fill="currentColor" d="M26 10.5h-9.5V6a.5.5 0 0 0-1 0v4.5H6A1.5 1.5 0 0 0 4.5 12v8A1.5 1.5 0 0 0 6 21.5h9.5V26a.5.5 0 0 0 1 0v-4.5H26a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5m.5 9.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h20a.5.5 0 0 1 .5.5z"/>`, 'light': `<path fill="currentColor" d="M26 10.25h-9.25V6a.75.75 0 1 0-1.5 0v4.25H6A1.75 1.75 0 0 0 4.25 12v8A1.75 1.75 0 0 0 6 21.75h9.25V26a.75.75 0 1 0 1.5 0v-4.25H26A1.75 1.75 0 0 0 27.75 20v-8A1.75 1.75 0 0 0 26 10.25m.25 9.75a.25.25 0 0 1-.25.25H6a.25.25 0 0 1-.25-.25v-8a.25.25 0 0 1 .25-.25h20a.25.25 0 0 1 .25.25z"/>`, 'bold': `<path fill="currentColor" d="M26 9.5h-8.5V6a1.5 1.5 0 1 0-3 0v3.5H6A2.5 2.5 0 0 0 3.5 12v8A2.5 2.5 0 0 0 6 22.5h8.5V26a1.5 1.5 0 1 0 3 0v-3.5H26a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 26 9.5m-.5 10h-19v-7h19z"/>`, 'fill': `<path fill="currentColor" d="M28 12v8a2 2 0 0 1-2 2h-9v4a1 1 0 0 1-2 0v-4H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h9V6a1 1 0 0 1 2 0v4h9a2 2 0 0 1 2 2"/>`, 'duotone': `<path fill="currentColor" d="M27 12v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M26 10h-9V6a1 1 0 0 0-2 0v4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9v4a1 1 0 0 0 2 0v-4h9a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m0 10H6v-8h20z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
