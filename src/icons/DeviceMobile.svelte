<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M22 2H10a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3M9 8h14v16H9zm1-4h12a1 1 0 0 1 1 1v1H9V5a1 1 0 0 1 1-1m12 24H10a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"/>`, 'thin': `<path fill="currentColor" d="M22 2.5H10A2.5 2.5 0 0 0 7.5 5v22a2.5 2.5 0 0 0 2.5 2.5h12a2.5 2.5 0 0 0 2.5-2.5V5A2.5 2.5 0 0 0 22 2.5m-13.5 5h15v17h-15zm1.5-4h12A1.5 1.5 0 0 1 23.5 5v1.5h-15V5A1.5 1.5 0 0 1 10 3.5m12 25H10A1.5 1.5 0 0 1 8.5 27v-1.5h15V27a1.5 1.5 0 0 1-1.5 1.5"/>`, 'light': `<path fill="currentColor" d="M22 2.25H10A2.75 2.75 0 0 0 7.25 5v22A2.75 2.75 0 0 0 10 29.75h12A2.75 2.75 0 0 0 24.75 27V5A2.75 2.75 0 0 0 22 2.25M8.75 7.75h14.5v16.5H8.75zm1.25-4h12A1.25 1.25 0 0 1 23.25 5v1.25H8.75V5A1.25 1.25 0 0 1 10 3.75m12 24.5H10A1.25 1.25 0 0 1 8.75 27v-1.25h14.5V27A1.25 1.25 0 0 1 22 28.25"/>`, 'bold': `<path fill="currentColor" d="M22 1.5H10A3.5 3.5 0 0 0 6.5 5v22a3.5 3.5 0 0 0 3.5 3.5h12a3.5 3.5 0 0 0 3.5-3.5V5A3.5 3.5 0 0 0 22 1.5m-12.5 8h13v13h-13zm.5-5h12a.5.5 0 0 1 .5.5v1.5h-13V5a.5.5 0 0 1 .5-.5m12 23H10a.5.5 0 0 1-.5-.5v-1.5h13V27a.5.5 0 0 1-.5.5"/>`, 'fill': `<path fill="currentColor" d="M22 2H10a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3M10 4h12a1 1 0 0 1 1 1v1H9V5a1 1 0 0 1 1-1m12 24H10a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"/>`, 'duotone': `<path fill="currentColor" d="M24 7v18H8V7z" opacity=".08"/><path fill="currentColor" d="M22 2H10a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3M9 8h14v16H9zm1-4h12a1 1 0 0 1 1 1v1H9V5a1 1 0 0 1 1-1m12 24H10a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
