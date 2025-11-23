<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25.007 9a7 7 0 0 0-4.893 12h-8.215a7 7 0 1 0-4.893 2h18a7 7 0 1 0 0-14m-23 7a5 5 0 1 1 10 0 5 5 0 0 1-10 0m23 5a5 5 0 1 1 0-10 5 5 0 0 1 0 10"/>`, 'thin': `<path fill="currentColor" d="M25 9.5a6.5 6.5 0 0 0-3.457 12H10.458A6.5 6.5 0 1 0 7 22.5h18a6.5 6.5 0 1 0 0-13M1.5 16a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0M25 21.5a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1-5.5 5.5"/>`, 'light': `<path fill="currentColor" d="M25 9.25a6.75 6.75 0 0 0-4.236 12h-9.528A6.75 6.75 0 1 0 7 22.75h18a6.75 6.75 0 0 0 0-13.5M1.75 16a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M25 21.25a5.25 5.25 0 1 1 0-10.499 5.25 5.25 0 0 1 0 10.499"/>`, 'bold': `<path fill="currentColor" d="M24.5 8.5a7.5 7.5 0 0 0-6 12h-5a7.5 7.5 0 1 0-6 3h17a7.5 7.5 0 0 0 0-15M3 16a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m21.5 4.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9"/>`, 'fill': `<path fill="currentColor" d="M25.007 9a7 7 0 0 0-4.893 12h-8.215a7 7 0 1 0-4.893 2h18a7 7 0 1 0 0-14m-18 12a5 5 0 1 1 0-9.999 5 5 0 0 1 0 9.999m18 0a5 5 0 1 1 0-10 5 5 0 0 1 0 10m3-5a3 3 0 1 1-6.001 0 3 3 0 0 1 6 0m-18 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>`, 'duotone': `<path fill="currentColor" d="M13.007 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0m12-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12" opacity=".08"/><path fill="currentColor" d="M25.007 9a7 7 0 0 0-4.893 12h-8.215a7 7 0 1 0-4.893 2h18a7 7 0 1 0 0-14m-23 7a5 5 0 1 1 10 0 5 5 0 0 1-10 0m23 5a5 5 0 1 1 0-10 5 5 0 0 1 0 10"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
