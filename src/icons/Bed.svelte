<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 9H3V6a1 1 0 0 0-2 0v20a1 1 0 1 0 2 0v-4h26v4a1 1 0 0 0 2 0V14a5 5 0 0 0-5-5M3 11h9v9H3zm11 9v-9h12a3 3 0 0 1 3 3v6z"/>`, 'thin': `<path fill="currentColor" d="M26 9.5H2.5V6a.5.5 0 1 0-1 0v20a.5.5 0 0 0 1 0v-4.5h27V26a.5.5 0 0 0 1 0V14A4.5 4.5 0 0 0 26 9.5m-23.5 1h10v10h-10zm11 10v-10H26a3.5 3.5 0 0 1 3.5 3.5v6.5z"/>`, 'light': `<path fill="currentColor" d="M26 9.25H2.75V6a.75.75 0 0 0-1.5 0v20a.75.75 0 1 0 1.5 0v-4.25h26.5V26a.75.75 0 1 0 1.5 0V14A4.75 4.75 0 0 0 26 9.25m-23.25 1.5h9.5v9.5h-9.5zm11 9.5v-9.5H26A3.25 3.25 0 0 1 29.25 14v6.25z"/>`, 'bold': `<path fill="currentColor" d="M26 8.5H3.5V6a1.5 1.5 0 0 0-3 0v20a1.5 1.5 0 0 0 3 0v-3.5h25V26a1.5 1.5 0 1 0 3 0V14A5.506 5.506 0 0 0 26 8.5m-14.5 11h-8v-8h8zm17 0h-14v-8H26a2.5 2.5 0 0 1 2.5 2.5z"/>`, 'fill': `<path fill="currentColor" d="M26 9H3V6a1 1 0 0 0-2 0v20a1 1 0 1 0 2 0v-4h26v4a1 1 0 0 0 2 0V14a5 5 0 0 0-5-5M3 11h9v9H3z"/>`, 'duotone': `<path fill="currentColor" d="M30 14v7H13V10h13a4 4 0 0 1 4 4" opacity=".08"/><path fill="currentColor" d="M26 9H3V6a1 1 0 0 0-2 0v20a1 1 0 1 0 2 0v-4h26v4a1 1 0 0 0 2 0V14a5 5 0 0 0-5-5M3 11h9v9H3zm11 9v-9h12a3 3 0 0 1 3 3v6z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
