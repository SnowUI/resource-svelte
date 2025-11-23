<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 3H9a4 4 0 0 0-4 4v21a1 1 0 0 0 1 1h18a1 1 0 0 0 0-2H7a2 2 0 0 1 2-2h17a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 20H9a4 4 0 0 0-2 .536V7a2 2 0 0 1 2-2h16z"/>`, 'thin': `<path fill="currentColor" d="M26 3.5H9A3.5 3.5 0 0 0 5.5 7v21a.5.5 0 0 0 .5.5h18a.5.5 0 0 0 0-1H6.5V27A2.5 2.5 0 0 1 9 24.5h17a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5m-.5 20H9a3.5 3.5 0 0 0-2.5 1.052V7A2.5 2.5 0 0 1 9 4.5h16.5z"/>`, 'light': `<path fill="currentColor" d="M26 3.25H9A3.75 3.75 0 0 0 5.25 7v21a.75.75 0 0 0 .75.75h18a.75.75 0 1 0 0-1.5H6.75V27A2.25 2.25 0 0 1 9 24.75h17a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75m-.75 20H9a3.73 3.73 0 0 0-2.25.75V7A2.25 2.25 0 0 1 9 4.75h16.25z"/>`, 'bold': `<path fill="currentColor" d="M26 2.5H9A4.5 4.5 0 0 0 4.5 7v21A1.5 1.5 0 0 0 6 29.5h18a1.5 1.5 0 1 0 0-3H7.5V26A1.5 1.5 0 0 1 9 24.5h17a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 26 2.5m-1.5 19H9a4.5 4.5 0 0 0-1.5.258V7A1.5 1.5 0 0 1 9 5.5h15.5z"/>`, 'fill': `<path fill="currentColor" d="M27 4v20a1 1 0 0 1-1 1H9a2 2 0 0 0-2 2h17a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4h17a1 1 0 0 1 1 1"/>`, 'duotone': `<path fill="currentColor" d="M26 4v20H9a3 3 0 0 0-3 3V7a3 3 0 0 1 3-3z" opacity=".08"/><path fill="currentColor" d="M26 3H9a4 4 0 0 0-4 4v21a1 1 0 0 0 1 1h18a1 1 0 0 0 0-2H7a2 2 0 0 1 2-2h17a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 20H9a4 4 0 0 0-2 .536V7a2 2 0 0 1 2-2h16z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
