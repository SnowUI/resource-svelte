<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M24 3H8a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m1 23a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM21 8a1 1 0 0 1-1 1h-8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M24 3.5H8A2.5 2.5 0 0 0 5.5 6v20A2.5 2.5 0 0 0 8 28.5h16a2.5 2.5 0 0 0 2.5-2.5V6A2.5 2.5 0 0 0 24 3.5M25.5 26a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 26V6A1.5 1.5 0 0 1 8 4.5h16A1.5 1.5 0 0 1 25.5 6zm-5-18a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M24 3.25H8A2.75 2.75 0 0 0 5.25 6v20A2.75 2.75 0 0 0 8 28.75h16A2.75 2.75 0 0 0 26.75 26V6A2.75 2.75 0 0 0 24 3.25M25.25 26A1.25 1.25 0 0 1 24 27.25H8A1.25 1.25 0 0 1 6.75 26V6A1.25 1.25 0 0 1 8 4.75h16A1.25 1.25 0 0 1 25.25 6zm-4.5-18a.75.75 0 0 1-.75.75h-8a.75.75 0 1 1 0-1.5h8a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M24 2.5H8A3.5 3.5 0 0 0 4.5 6v20A3.5 3.5 0 0 0 8 29.5h16a3.5 3.5 0 0 0 3.5-3.5V6A3.5 3.5 0 0 0 24 2.5m.5 23.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5zm-3-17a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 1 1 0-3h8A1.5 1.5 0 0 1 21.5 9"/>`, 'fill': `<path fill="currentColor" d="M24 3H8a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m-4 6h-8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M26 6v20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2" opacity=".08"/><path fill="currentColor" d="M24 3H8a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m1 23a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM21 8a1 1 0 0 1-1 1h-8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
