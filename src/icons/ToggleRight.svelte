<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M22 7H10a9 9 0 1 0 0 18h12a9 9 0 0 0 0-18m0 16H10a7 7 0 1 1 0-14h12a7 7 0 1 1 0 14m0-12a5 5 0 1 0 0 10 5 5 0 0 0 0-10m0 8a3 3 0 1 1 0-5.999A3 3 0 0 1 22 19"/>`, 'thin': `<path fill="currentColor" d="M22 7.5H10a8.5 8.5 0 1 0 0 17h12a8.5 8.5 0 1 0 0-17m0 16H10a7.5 7.5 0 0 1 0-15h12a7.5 7.5 0 0 1 0 15m0-12a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 8a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7"/>`, 'light': `<path fill="currentColor" d="M22 7.25H10a8.75 8.75 0 1 0 0 17.5h12a8.75 8.75 0 0 0 0-17.5m0 16H10a7.25 7.25 0 1 1 0-14.5h12a7.25 7.25 0 1 1 0 14.5m0-12a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m0 8a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5"/>`, 'bold': `<path fill="currentColor" d="M22 6.5H10a9.5 9.5 0 1 0 0 19h12a9.5 9.5 0 1 0 0-19m0 16H10a6.5 6.5 0 1 1 0-13h12a6.5 6.5 0 1 1 0 13m0-11a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>`, 'fill': `<path fill="currentColor" d="M22 7H10a9 9 0 1 0 0 18h12a9 9 0 0 0 0-18m0 14a5 5 0 1 1 0-10 5 5 0 0 1 0 10"/>`, 'duotone': `<path fill="currentColor" d="M26 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0" opacity=".08"/><path fill="currentColor" d="M22 7H10a9 9 0 1 0 0 18h12a9 9 0 0 0 0-18m0 16H10a7 7 0 1 1 0-14h12a7 7 0 1 1 0 14m0-12a5 5 0 1 0 0 10 5 5 0 0 0 0-10m0 8a3 3 0 1 1 0-5.999A3 3 0 0 1 22 19"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
