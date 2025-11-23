<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M23 8H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m-1 18H6V10h16zm6-21v18a1 1 0 0 1-2 0V6H9a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M23 8.5H5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 .5.5h18a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5m-.5 18h-17v-17h17zm5-21.5v18a.5.5 0 0 1-1 0V5.5H9a.5.5 0 1 1 0-1h18a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M23 8.25H5a.75.75 0 0 0-.75.75v18a.75.75 0 0 0 .75.75h18a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75m-.75 18H5.75V9.75h16.5zM27.75 5v18a.75.75 0 1 1-1.5 0V5.75H9a.75.75 0 0 1 0-1.5h18a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M22.5 8H5a1.5 1.5 0 0 0-1.5 1.5V27A1.5 1.5 0 0 0 5 28.5h17.5A1.5 1.5 0 0 0 24 27V9.5A1.5 1.5 0 0 0 22.5 8M21 25.5H6.5V11H21zM28.5 5v17.5a1.5 1.5 0 1 1-3 0v-16h-16a1.5 1.5 0 0 1 0-3H27A1.5 1.5 0 0 1 28.5 5"/>`, 'fill': `<path fill="currentColor" d="M24 9v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1m3-5H9a1 1 0 0 0 0 2h17v17a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1"/>`, 'duotone': `<path fill="currentColor" d="M23 9v18H5V9z" opacity=".08"/><path fill="currentColor" d="M23 8H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m-1 18H6V10h16zm6-21v18a1 1 0 0 1-2 0V6H9a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
