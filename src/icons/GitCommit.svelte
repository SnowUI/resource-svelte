<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M31 15h-8.073a7 7 0 0 0-13.854 0H1a1 1 0 0 0 0 2h8.073a7 7 0 0 0 13.854 0H31a1 1 0 1 0 0-2m-15 6a5 5 0 1 1 0-10 5 5 0 0 1 0 10"/>`, 'thin': `<path fill="currentColor" d="M31 15.5h-8.521a6.5 6.5 0 0 0-12.958 0H1a.5.5 0 0 0 0 1h8.521a6.5 6.5 0 0 0 12.958 0H31a.5.5 0 0 0 0-1m-15 6a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1-5.5 5.5"/>`, 'light': `<path fill="currentColor" d="M31 15.25h-8.292a6.75 6.75 0 0 0-13.415 0H1a.75.75 0 1 0 0 1.5h8.293a6.75 6.75 0 0 0 13.415 0H31a.75.75 0 1 0 0-1.5m-15 6a5.25 5.25 0 1 1 0-10.499 5.25 5.25 0 0 1 0 10.499"/>`, 'bold': `<path fill="currentColor" d="M30.5 14.5h-7.151a7.5 7.5 0 0 0-14.698 0H1.5a1.5 1.5 0 1 0 0 3h7.151a7.5 7.5 0 0 0 14.698 0H30.5a1.5 1.5 0 0 0 0-3m-14.5 6a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9"/>`, 'fill': `<path fill="currentColor" d="M32 16a1 1 0 0 1-1 1h-8.073a7 7 0 0 1-13.854 0H1a1 1 0 1 1 0-2h8.073a7 7 0 0 1 13.854 0H31a1 1 0 0 1 1 1"/>`, 'duotone': `<path fill="currentColor" d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0" opacity=".08"/><path fill="currentColor" d="M31 15h-8.073a7 7 0 0 0-13.854 0H1a1 1 0 0 0 0 2h8.073a7 7 0 0 0 13.854 0H31a1 1 0 1 0 0-2m-15 6a5 5 0 1 1 0-10 5 5 0 0 1 0 10"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
