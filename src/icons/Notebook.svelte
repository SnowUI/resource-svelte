<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M23 14a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1m-1 3h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m6-11v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2M6 26h3V6H6zm20 0V6H11v20z"/>`, 'thin': `<path fill="currentColor" d="M22.5 14a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5m-.5 3.5h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1M27.5 6v20a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 26V6A1.5 1.5 0 0 1 6 4.5h20A1.5 1.5 0 0 1 27.5 6M6 26.5h3.5v-21H6a.5.5 0 0 0-.5.5v20a.5.5 0 0 0 .5.5M26.5 6a.5.5 0 0 0-.5-.5H10.5v21H26a.5.5 0 0 0 .5-.5z"/>`, 'light': `<path fill="currentColor" d="M22.75 14a.75.75 0 0 1-.75.75h-8a.75.75 0 1 1 0-1.5h8a.75.75 0 0 1 .75.75M22 17.25h-8a.75.75 0 1 0 0 1.5h8a.75.75 0 1 0 0-1.5M27.75 6v20A1.75 1.75 0 0 1 26 27.75H6A1.75 1.75 0 0 1 4.25 26V6A1.75 1.75 0 0 1 6 4.25h20A1.75 1.75 0 0 1 27.75 6M6 26.25h3.25V5.75H6a.25.25 0 0 0-.25.25v20a.25.25 0 0 0 .25.25M26.25 6a.25.25 0 0 0-.25-.25H10.75v20.5H26a.25.25 0 0 0 .25-.25z"/>`, 'bold': `<path fill="currentColor" d="M13.5 13.5A1.5 1.5 0 0 1 15 12h7a1.5 1.5 0 1 1 0 3h-7a1.5 1.5 0 0 1-1.5-1.5M22 17h-7a1.5 1.5 0 1 0 0 3h7a1.5 1.5 0 1 0 0-3m6.5-11v20a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26V6A2.5 2.5 0 0 1 6 3.5h20A2.5 2.5 0 0 1 28.5 6m-22 19.5h2v-19h-2zm19-19h-14v19h14z"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M10 26H6V6h4zm12-7h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2m0-4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M10 5v22H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" opacity=".08"/><path fill="currentColor" d="M23 14a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1m-1 3h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m6-11v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2M6 26h3V6H6zm20 0V6H11v20z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
