<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 4h-3V3a1 1 0 0 0-2 0v1H11V3a1 1 0 0 0-2 0v1H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M9 6v1a1 1 0 0 0 2 0V6h10v1a1 1 0 0 0 2 0V6h3v4H6V6zm17 20H6V12h20z"/>`, 'thin': `<path fill="currentColor" d="M26 4.5h-3.5V3a.5.5 0 0 0-1 0v1.5h-11V3a.5.5 0 0 0-1 0v1.5H6A1.5 1.5 0 0 0 4.5 6v20A1.5 1.5 0 0 0 6 27.5h20a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 26 4.5m-20 1h3.5V7a.5.5 0 1 0 1 0V5.5h11V7a.5.5 0 0 0 1 0V5.5H26a.5.5 0 0 1 .5.5v4.5h-21V6a.5.5 0 0 1 .5-.5m20 21H6a.5.5 0 0 1-.5-.5V11.5h21V26a.5.5 0 0 1-.5.5"/>`, 'light': `<path fill="currentColor" d="M26 4.25h-3.25V3a.75.75 0 1 0-1.5 0v1.25h-10.5V3a.75.75 0 1 0-1.5 0v1.25H6A1.75 1.75 0 0 0 4.25 6v20A1.75 1.75 0 0 0 6 27.75h20A1.75 1.75 0 0 0 27.75 26V6A1.75 1.75 0 0 0 26 4.25M6 5.75h3.25V7a.75.75 0 0 0 1.5 0V5.75h10.5V7a.75.75 0 1 0 1.5 0V5.75H26a.25.25 0 0 1 .25.25v4.25H5.75V6A.25.25 0 0 1 6 5.75m20 20.5H6a.25.25 0 0 1-.25-.25V11.75h20.5V26a.25.25 0 0 1-.25.25"/>`, 'bold': `<path fill="currentColor" d="M26 3.5h-2.5V3a1.5 1.5 0 1 0-3 0v.5h-9V3a1.5 1.5 0 1 0-3 0v.5H6A2.5 2.5 0 0 0 3.5 6v20A2.5 2.5 0 0 0 6 28.5h20a2.5 2.5 0 0 0 2.5-2.5V6A2.5 2.5 0 0 0 26 3.5m-17.5 3a1.5 1.5 0 0 0 3 0h9a1.5 1.5 0 1 0 3 0h2v3h-19v-3zm-2 19v-13h19v13z"/>`, 'fill': `<path fill="currentColor" d="M26 4h-3V3a1 1 0 0 0-2 0v1H11V3a1 1 0 0 0-2 0v1H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 6H6V6h3v1a1 1 0 0 0 2 0V6h10v1a1 1 0 0 0 2 0V6h3z"/>`, 'duotone': `<path fill="currentColor" d="M27 6v5H5V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M26 4h-3V3a1 1 0 0 0-2 0v1H11V3a1 1 0 0 0-2 0v1H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M9 6v1a1 1 0 0 0 2 0V6h10v1a1 1 0 0 0 2 0V6h3v4H6V6zm17 20H6V12h20z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
