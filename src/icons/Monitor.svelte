<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 5H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1zm-6 6a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M26 5.5H6A2.5 2.5 0 0 0 3.5 8v14A2.5 2.5 0 0 0 6 24.5h20a2.5 2.5 0 0 0 2.5-2.5V8A2.5 2.5 0 0 0 26 5.5M27.5 22a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 22V8A1.5 1.5 0 0 1 6 6.5h20A1.5 1.5 0 0 1 27.5 8zm-7 6a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M26 5.25H6A2.75 2.75 0 0 0 3.25 8v14A2.75 2.75 0 0 0 6 24.75h20A2.75 2.75 0 0 0 28.75 22V8A2.75 2.75 0 0 0 26 5.25M27.25 22A1.25 1.25 0 0 1 26 23.25H6A1.25 1.25 0 0 1 4.75 22V8A1.25 1.25 0 0 1 6 6.75h20A1.25 1.25 0 0 1 27.25 8zm-6.5 6a.75.75 0 0 1-.75.75h-8a.75.75 0 1 1 0-1.5h8a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M26 4.5H6A3.5 3.5 0 0 0 2.5 8v14A3.5 3.5 0 0 0 6 25.5h20a3.5 3.5 0 0 0 3.5-3.5V8A3.5 3.5 0 0 0 26 4.5m.5 17.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h20a.5.5 0 0 1 .5.5zm-5 6.5A1.5 1.5 0 0 1 20 30h-8a1.5 1.5 0 1 1 0-3h8a1.5 1.5 0 0 1 1.5 1.5"/>`, 'fill': `<path fill="currentColor" d="M26 5H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3M20 27h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2"/>`, 'duotone': `<path fill="currentColor" d="M28 8v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2" opacity=".08"/><path fill="currentColor" d="M26 5H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1zm-6 6a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
