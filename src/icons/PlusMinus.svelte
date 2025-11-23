<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m25.708 7.708-18 18a1 1 0 0 1-1.415-1.415l18-18a1 1 0 1 1 1.415 1.414M8 14a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V4a1 1 0 0 0-2 0v4H4a1 1 0 0 0 0 2h4zm20 8H18a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2"/>`, 'thin': `<path fill="currentColor" d="m25.354 7.354-18 18a.5.5 0 0 1-.708-.708l18-18a.501.501 0 0 1 .708.708M8.5 14a.5.5 0 0 0 1 0V9.5H14a.5.5 0 0 0 0-1H9.5V4a.5.5 0 1 0-1 0v4.5H4a.5.5 0 1 0 0 1h4.5zM28 22.5H18a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1"/>`, 'light': `<path fill="currentColor" d="m25.53 7.53-18 18a.75.75 0 0 1-1.06-1.06l18-18a.75.75 0 0 1 1.06 1.06M8.25 14a.75.75 0 1 0 1.5 0V9.75H14a.75.75 0 1 0 0-1.5H9.75V4a.75.75 0 0 0-1.5 0v4.25H4a.75.75 0 0 0 0 1.5h4.25zM28 22.25H18a.75.75 0 1 0 0 1.5h10a.75.75 0 1 0 0-1.5"/>`, 'bold': `<path fill="currentColor" d="m26.061 8.061-18 18a1.503 1.503 0 0 1-2.125-2.125l18-18a1.502 1.502 0 1 1 2.125 2.125M7.5 14a1.5 1.5 0 0 0 3 0v-3.5H14a1.5 1.5 0 1 0 0-3h-3.5V4a1.5 1.5 0 1 0-3 0v3.5H4a1.5 1.5 0 0 0 0 3h3.5zM28 21.5H18a1.5 1.5 0 1 0 0 3h10a1.5 1.5 0 1 0 0-3"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M7 12a1 1 0 0 1 1-1h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H8a1 1 0 0 1-1-1m3 12a1 1 0 0 1-.707-1.707l12-12a1 1 0 0 1 1.415 1.415l-12 12A1 1 0 0 1 10 24m14-1h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M27 6v20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="m25.708 7.708-18 18a1 1 0 0 1-1.415-1.415l18-18a1 1 0 1 1 1.415 1.414M8 14a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V4a1 1 0 0 0-2 0v4H4a1 1 0 0 0 0 2h4zm20 8H18a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
