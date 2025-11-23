<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M24 3H8a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M7 9h18v14H7zm1-4h16a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1m16 22H8a1 1 0 0 1-1-1v-1h18v1a1 1 0 0 1-1 1"/>`, 'thin': `<path fill="currentColor" d="M24 3.5H8A2.5 2.5 0 0 0 5.5 6v20A2.5 2.5 0 0 0 8 28.5h16a2.5 2.5 0 0 0 2.5-2.5V6A2.5 2.5 0 0 0 24 3.5m-17.5 5h19v15h-19zm1.5-4h16A1.5 1.5 0 0 1 25.5 6v1.5h-19V6A1.5 1.5 0 0 1 8 4.5m16 23H8A1.5 1.5 0 0 1 6.5 26v-1.5h19V26a1.5 1.5 0 0 1-1.5 1.5"/>`, 'light': `<path fill="currentColor" d="M24 3.25H8A2.75 2.75 0 0 0 5.25 6v20A2.75 2.75 0 0 0 8 28.75h16A2.75 2.75 0 0 0 26.75 26V6A2.75 2.75 0 0 0 24 3.25M6.75 8.75h18.5v14.5H6.75zm1.25-4h16A1.25 1.25 0 0 1 25.25 6v1.25H6.75V6A1.25 1.25 0 0 1 8 4.75m16 22.5H8A1.25 1.25 0 0 1 6.75 26v-1.25h18.5V26A1.25 1.25 0 0 1 24 27.25"/>`, 'bold': `<path fill="currentColor" d="M24 2.5H8A3.5 3.5 0 0 0 4.5 6v20A3.5 3.5 0 0 0 8 29.5h16a3.5 3.5 0 0 0 3.5-3.5V6A3.5 3.5 0 0 0 24 2.5m-16.5 8h17v11h-17zm.5-5h16a.5.5 0 0 1 .5.5v1.5h-17V6a.5.5 0 0 1 .5-.5m16 21H8a.5.5 0 0 1-.5-.5v-1.5h17V26a.5.5 0 0 1-.5.5"/>`, 'fill': `<path fill="currentColor" d="M24 3H8a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M8 5h16a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1m16 22H8a1 1 0 0 1-1-1v-1h18v1a1 1 0 0 1-1 1"/>`, 'duotone': `<path fill="currentColor" d="M26 8v16H6V8z" opacity=".08"/><path fill="currentColor" d="M24 3H8a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M7 9h18v14H7zm1-4h16a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1m16 22H8a1 1 0 0 1-1-1v-1h18v1a1 1 0 0 1-1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
