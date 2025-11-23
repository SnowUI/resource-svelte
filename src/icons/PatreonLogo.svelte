<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M22 5a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8m0 14a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6M10 5H8a2 2 0 0 0-2 2v19a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m0 21H8V7h2z"/>`, 'thin': `<path fill="currentColor" d="M22 5.5a7.5 7.5 0 1 0 7.5 7.5A7.51 7.51 0 0 0 22 5.5m0 14a6.5 6.5 0 1 1 6.5-6.5 6.507 6.507 0 0 1-6.5 6.5m-12-14H8A1.5 1.5 0 0 0 6.5 7v19A1.5 1.5 0 0 0 8 27.5h2a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 10 5.5m.5 20.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5z"/>`, 'light': `<path fill="currentColor" d="M22 5.25A7.75 7.75 0 1 0 29.75 13 7.76 7.76 0 0 0 22 5.25m0 14A6.25 6.25 0 1 1 28.25 13 6.257 6.257 0 0 1 22 19.25m-12-14H8A1.75 1.75 0 0 0 6.25 7v19A1.75 1.75 0 0 0 8 27.75h2A1.75 1.75 0 0 0 11.75 26V7A1.75 1.75 0 0 0 10 5.25M10.25 26a.25.25 0 0 1-.25.25H8a.25.25 0 0 1-.25-.25V7A.25.25 0 0 1 8 6.75h2a.25.25 0 0 1 .25.25z"/>`, 'bold': `<path fill="currentColor" d="M21.25 4.5A9.2 9.2 0 0 0 15 6.941 2.5 2.5 0 0 0 12.5 4.5H8A2.5 2.5 0 0 0 5.5 7v19A2.5 2.5 0 0 0 8 28.5h4.5A2.5 2.5 0 0 0 15 26v-5.437A9.25 9.25 0 1 0 21.25 4.5M12 25.5H8.5v-18H12zm9.25-5.5a6.25 6.25 0 1 1 6.25-6.25A6.257 6.257 0 0 1 21.25 20"/>`, 'fill': `<path fill="currentColor" d="M30 13a8 8 0 1 1-8-8 8.01 8.01 0 0 1 8 8M10 5H8a2 2 0 0 0-2 2v19a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2"/>`, 'duotone': `<path fill="currentColor" d="M29 13a7 7 0 1 1-14 0 7 7 0 0 1 14 0M10 6H8a1 1 0 0 0-1 1v19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1" opacity=".08"/><path fill="currentColor" d="M22 5a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8m0 14a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6M10 5H8a2 2 0 0 0-2 2v19a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m0 21H8V7h2z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
