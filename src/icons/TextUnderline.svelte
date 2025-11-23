<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25 28a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1m-9-3a8.01 8.01 0 0 0 8-8V7a1 1 0 0 0-2 0v10a6 6 0 1 1-12 0V7a1 1 0 0 0-2 0v10a8.01 8.01 0 0 0 8 8"/>`, 'thin': `<path fill="currentColor" d="M24.5 28a.5.5 0 0 1-.5.5H8a.5.5 0 0 1 0-1h16a.5.5 0 0 1 .5.5M16 24.5a7.51 7.51 0 0 0 7.5-7.5V7a.5.5 0 0 0-1 0v10a6.5 6.5 0 1 1-13 0V7a.5.5 0 1 0-1 0v10a7.51 7.51 0 0 0 7.5 7.5"/>`, 'light': `<path fill="currentColor" d="M24.75 28a.75.75 0 0 1-.75.75H8a.75.75 0 1 1 0-1.5h16a.75.75 0 0 1 .75.75M16 24.75A7.76 7.76 0 0 0 23.75 17V7a.75.75 0 1 0-1.5 0v10a6.25 6.25 0 0 1-12.5 0V7a.75.75 0 0 0-1.5 0v10A7.76 7.76 0 0 0 16 24.75"/>`, 'bold': `<path fill="currentColor" d="M25.5 28a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h16a1.5 1.5 0 0 1 1.5 1.5M16 24.5a8.51 8.51 0 0 0 8.5-8.5V7a1.5 1.5 0 1 0-3 0v9a5.5 5.5 0 0 1-11 0V7a1.5 1.5 0 1 0-3 0v9a8.51 8.51 0 0 0 8.5 8.5"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M10 9a1 1 0 0 1 2 0v6a4 4 0 1 0 8 0V9a1 1 0 0 1 2 0v6a6 6 0 1 1-12 0zm12 16H10a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M23 7v10a7 7 0 1 1-14 0V7z" opacity=".08"/><path fill="currentColor" d="M25 28a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1m-9-3a8.01 8.01 0 0 0 8-8V7a1 1 0 0 0-2 0v10a6 6 0 1 1-12 0V7a1 1 0 0 0-2 0v10a8.01 8.01 0 0 0 8 8"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
