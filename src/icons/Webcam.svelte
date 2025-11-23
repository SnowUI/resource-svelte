<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M21 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0m-8 0a3 3 0 1 1 5.999 0A3 3 0 0 1 13 13m15 12H17v-2.05a10 10 0 1 0-2 0V25H4a1 1 0 1 0 0 2h24a1 1 0 0 0 0-2M8 13a8 8 0 1 1 8 8 8.01 8.01 0 0 1-8-8"/>`, 'thin': `<path fill="currentColor" d="M20.5 13a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0m-8 0a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M28 25.5H16.5v-3.014a9.5 9.5 0 1 0-1 0V25.5H4a.5.5 0 0 0 0 1h24a.5.5 0 0 0 0-1M7.5 13a8.5 8.5 0 1 1 8.5 8.5A8.51 8.51 0 0 1 7.5 13"/>`, 'light': `<path fill="currentColor" d="M20.75 13a4.75 4.75 0 1 0-9.5 0 4.75 4.75 0 0 0 9.5 0m-8 0a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M28 25.25H16.75v-2.531a9.75 9.75 0 1 0-1.5 0v2.53H4a.75.75 0 1 0 0 1.5h24a.75.75 0 1 0 0-1.5M7.75 13A8.25 8.25 0 1 1 16 21.25 8.26 8.26 0 0 1 7.75 13"/>`, 'bold': `<path fill="currentColor" d="M21 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0m-7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m14 11.5H17.5v-1.109a10.5 10.5 0 1 0-3 0v1.11H4a1.5 1.5 0 1 0 0 3h24a1.5 1.5 0 0 0 0-3M8.5 13a7.5 7.5 0 1 1 7.5 7.5A7.51 7.51 0 0 1 8.5 13"/>`, 'fill': `<path fill="currentColor" d="M20 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0m9 13a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h11v-2.05a10 10 0 1 1 2 0V25h11a1 1 0 0 1 1 1m-13-7a6 6 0 1 0-6-6 6.006 6.006 0 0 0 6 6"/>`, 'duotone': `<path fill="currentColor" d="M16 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18m0 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8" opacity=".08"/><path fill="currentColor" d="M21 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0m-8 0a3 3 0 1 1 5.999 0A3 3 0 0 1 13 13m15 12H17v-2.05a10 10 0 1 0-2 0V25H4a1 1 0 1 0 0 2h24a1 1 0 0 0 0-2M8 13a8 8 0 1 1 8 8 8.01 8.01 0 0 1-8-8"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
