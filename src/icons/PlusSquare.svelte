<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 22H6V6h20zm-4-10a1 1 0 0 1-1 1h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 2 0v4h4a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M26 4.5H6A1.5 1.5 0 0 0 4.5 6v20A1.5 1.5 0 0 0 6 27.5h20a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 26 4.5m.5 21.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h20a.5.5 0 0 1 .5.5zm-5-10a.5.5 0 0 1-.5.5h-4.5V21a.5.5 0 0 1-1 0v-4.5H11a.5.5 0 0 1 0-1h4.5V11a.5.5 0 0 1 1 0v4.5H21a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M26 4.25H6A1.75 1.75 0 0 0 4.25 6v20A1.75 1.75 0 0 0 6 27.75h20A1.75 1.75 0 0 0 27.75 26V6A1.75 1.75 0 0 0 26 4.25M26.25 26a.25.25 0 0 1-.25.25H6a.25.25 0 0 1-.25-.25V6A.25.25 0 0 1 6 5.75h20a.25.25 0 0 1 .25.25zm-4.5-10a.75.75 0 0 1-.75.75h-4.25V21a.75.75 0 1 1-1.5 0v-4.25H11a.75.75 0 1 1 0-1.5h4.25V11a.75.75 0 1 1 1.5 0v4.25H21a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M26 3.5H6A2.5 2.5 0 0 0 3.5 6v20A2.5 2.5 0 0 0 6 28.5h20a2.5 2.5 0 0 0 2.5-2.5V6A2.5 2.5 0 0 0 26 3.5m-.5 22h-19v-19h19zM9.5 16a1.5 1.5 0 0 1 1.5-1.5h3.5V11a1.5 1.5 0 1 1 3 0v3.5H21a1.5 1.5 0 1 1 0 3h-3.5V21a1.5 1.5 0 1 1-3 0v-3.5H11A1.5 1.5 0 0 1 9.5 16"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-5 13h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M27 6v20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 22H6V6h20zm-4-10a1 1 0 0 1-1 1h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 2 0v4h4a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
