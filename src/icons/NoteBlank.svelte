<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h13.586A1.98 1.98 0 0 0 21 27.414L27.414 21A1.98 1.98 0 0 0 28 19.586V6a2 2 0 0 0-2-2M6 6h20v13h-6a1 1 0 0 0-1 1v6H6zm18.586 15L21 24.586V21z"/>`, 'thin': `<path fill="currentColor" d="M26 4.5H6A1.5 1.5 0 0 0 4.5 6v20A1.5 1.5 0 0 0 6 27.5h13.586a1.5 1.5 0 0 0 1.06-.439l6.415-6.415a1.5 1.5 0 0 0 .439-1.06V6A1.5 1.5 0 0 0 26 4.5M5.5 26V6a.5.5 0 0 1 .5-.5h20a.5.5 0 0 1 .5.5v13.5H20a.5.5 0 0 0-.5.5v6.5H6a.5.5 0 0 1-.5-.5m15-.207V20.5h5.294z"/>`, 'light': `<path fill="currentColor" d="M26 4.25H6A1.75 1.75 0 0 0 4.25 6v20A1.75 1.75 0 0 0 6 27.75h13.586a1.74 1.74 0 0 0 1.238-.512l6.413-6.414a1.74 1.74 0 0 0 .513-1.238V6A1.75 1.75 0 0 0 26 4.25M5.75 26V6A.25.25 0 0 1 6 5.75h20a.25.25 0 0 1 .25.25v13.25H20a.75.75 0 0 0-.75.75v6.25H6a.25.25 0 0 1-.25-.25m15-.811V20.75h4.44z"/>`, 'bold': `<path fill="currentColor" d="M26 3.5H6A2.5 2.5 0 0 0 3.5 6v20A2.5 2.5 0 0 0 6 28.5h13.586a2.48 2.48 0 0 0 1.768-.733l6.413-6.413a2.49 2.49 0 0 0 .733-1.768V6A2.5 2.5 0 0 0 26 3.5m-19.5 3h19V18h-6a1.5 1.5 0 0 0-1.5 1.5v6H6.5zM21 23.875V21h2.875z"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h13.586A1.98 1.98 0 0 0 21 27.414L27.414 21A1.98 1.98 0 0 0 28 19.586V6a2 2 0 0 0-2-2m-6 21.586V20h5.586z"/>`, 'duotone': `<path fill="currentColor" d="m27 20-7 7v-7z" opacity=".08"/><path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h13.586A1.98 1.98 0 0 0 21 27.414L27.414 21A1.98 1.98 0 0 0 28 19.586V6a2 2 0 0 0-2-2M6 6h20v13h-6a1 1 0 0 0-1 1v6H6zm18.586 15L21 24.586V21z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
