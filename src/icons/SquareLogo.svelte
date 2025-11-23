<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 22H6V6h20zm-6-15h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-1 8h-6v-6h6z"/>`, 'thin': `<path fill="currentColor" d="M26 4.5H6A1.5 1.5 0 0 0 4.5 6v20A1.5 1.5 0 0 0 6 27.5h20a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 26 4.5m.5 21.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h20a.5.5 0 0 1 .5.5zM20 11.5h-8a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5m-.5 8h-7v-7h7z"/>`, 'light': `<path fill="currentColor" d="M26 4.25H6A1.75 1.75 0 0 0 4.25 6v20A1.75 1.75 0 0 0 6 27.75h20A1.75 1.75 0 0 0 27.75 26V6A1.75 1.75 0 0 0 26 4.25M26.25 26a.25.25 0 0 1-.25.25H6a.25.25 0 0 1-.25-.25V6A.25.25 0 0 1 6 5.75h20a.25.25 0 0 1 .25.25zM20 11.25h-8a.75.75 0 0 0-.75.75v8a.75.75 0 0 0 .75.75h8a.75.75 0 0 0 .75-.75v-8a.75.75 0 0 0-.75-.75m-.75 8h-6.5v-6.5h6.5z"/>`, 'bold': `<path fill="currentColor" d="M26 3.5H6A2.5 2.5 0 0 0 3.5 6v20A2.5 2.5 0 0 0 6 28.5h20a2.5 2.5 0 0 0 2.5-2.5V6A2.5 2.5 0 0 0 26 3.5m-.5 22h-19v-19h19zm-13.5-4h8a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5h-8a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5m1.5-8h5v5h-5z"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 22H6V6h20zm-5-14v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1"/>`, 'duotone': `<path fill="currentColor" d="M20 12v8h-8v-8z" opacity=".08"/><path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 22H6V6h20zm-6-15h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-1 8h-6v-6h6z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
