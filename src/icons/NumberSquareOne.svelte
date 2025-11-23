<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 22H6V6h20zm-8.5-16v12a1 1 0 0 1-2 0V11.875l-1.445.964a1 1 0 1 1-1.11-1.665l3-2A1 1 0 0 1 17.5 10"/>`, 'thin': `<path fill="currentColor" d="M26 4.5H6A1.5 1.5 0 0 0 4.5 6v20A1.5 1.5 0 0 0 6 27.5h20a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 26 4.5m.5 21.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h20a.5.5 0 0 1 .5.5zM17 10v12a.5.5 0 0 1-1 0V10.934l-2.222 1.482a.5.5 0 0 1-.694-.139.5.5 0 0 1 .139-.693l3-2A.5.5 0 0 1 17 10"/>`, 'light': `<path fill="currentColor" d="M26 4.25H6A1.75 1.75 0 0 0 4.25 6v20A1.75 1.75 0 0 0 6 27.75h20A1.75 1.75 0 0 0 27.75 26V6A1.75 1.75 0 0 0 26 4.25M26.25 26a.25.25 0 0 1-.25.25H6a.25.25 0 0 1-.25-.25V6A.25.25 0 0 1 6 5.75h20a.25.25 0 0 1 .25.25zm-9-16v12a.75.75 0 1 1-1.5 0V11.401l-1.834 1.224a.751.751 0 0 1-.832-1.25l3-2A.75.75 0 0 1 17.25 10"/>`, 'bold': `<path fill="currentColor" d="M26 3.5H6A2.5 2.5 0 0 0 3.5 6v20A2.5 2.5 0 0 0 6 28.5h20a2.5 2.5 0 0 0 2.5-2.5V6A2.5 2.5 0 0 0 26 3.5m-.5 22h-19v-19h19zM12.25 12.833a1.5 1.5 0 0 1 .418-2.083l3-2A1.5 1.5 0 0 1 18 10v12a1.5 1.5 0 1 1-3 0v-9.197l-.668.447a1.5 1.5 0 0 1-2.082-.418"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-8.5 18a1 1 0 0 1-2 0V11.875l-1.445.964a1 1 0 1 1-1.11-1.665l3-2A1 1 0 0 1 17.5 10z"/>`, 'duotone': `<path fill="currentColor" d="M27 6v20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 22H6V6h20zm-8.5-16v12a1 1 0 0 1-2 0V11.875l-1.445.964a1 1 0 1 1-1.11-1.665l3-2A1 1 0 0 1 17.5 10"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
