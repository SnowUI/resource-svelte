<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M3 23h26a1 1 0 0 0 0-2h-1v-2A12.015 12.015 0 0 0 17 7.043V5h2a1 1 0 1 0 0-2h-6a1 1 0 1 0 0 2h2v2.043A12.015 12.015 0 0 0 4 19v2H3a1 1 0 0 0 0 2m3-4a10 10 0 0 1 20 0v2H6zm24 7a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h26a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M3 22.5h26a.5.5 0 0 0 0-1h-1.5V19a11.514 11.514 0 0 0-11-11.489V4.5H19a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1h2.5v3.011A11.514 11.514 0 0 0 4.5 19v2.5H3a.5.5 0 0 0 0 1M5.5 19a10.5 10.5 0 1 1 21 0v2.5h-21zm24 7a.5.5 0 0 1-.5.5H3a.5.5 0 0 1 0-1h26a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M3 22.75h26a.75.75 0 1 0 0-1.5h-1.25V19a11.76 11.76 0 0 0-11-11.725V4.75H19a.75.75 0 1 0 0-1.5h-6a.75.75 0 1 0 0 1.5h2.25v2.525A11.76 11.76 0 0 0 4.25 19v2.25H3a.75.75 0 1 0 0 1.5M5.75 19a10.25 10.25 0 1 1 20.5 0v2.25H5.75zm24 7a.75.75 0 0 1-.75.75H3a.75.75 0 1 1 0-1.5h26a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M3 22.5h26a1.5 1.5 0 1 0 0-3h-.511A12.52 12.52 0 0 0 17.5 7.59V5.5H19a1.5 1.5 0 0 0 0-3h-6a1.5 1.5 0 0 0 0 3h1.5v2.09A12.52 12.52 0 0 0 3.511 19.5H3a1.5 1.5 0 1 0 0 3m13-12a9.51 9.51 0 0 1 9.486 9H6.514a9.51 9.51 0 0 1 9.486-9M30.5 26a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 1 1 0-3h26a1.5 1.5 0 0 1 1.5 1.5"/>`, 'fill': `<path fill="currentColor" d="M2 22a1 1 0 0 1 1-1h1v-2A12.015 12.015 0 0 1 15 7.043V5h-2a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2h-2v2.043A12.015 12.015 0 0 1 28 19v2h1a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1m27 3H3a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2"/>`, 'duotone': `<path fill="currentColor" d="M27 19v3H5v-3a11 11 0 1 1 22 0" opacity=".08"/><path fill="currentColor" d="M3 23h26a1 1 0 0 0 0-2h-1v-2A12.015 12.015 0 0 0 17 7.043V5h2a1 1 0 1 0 0-2h-6a1 1 0 1 0 0 2h2v2.043A12.015 12.015 0 0 0 4 19v2H3a1 1 0 0 0 0 2m3-4a10 10 0 0 1 20 0v2H6zm24 7a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h26a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
