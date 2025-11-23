<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 24a11 11 0 1 1 11-11 11.01 11.01 0 0 1-11 11m0-19a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8m0 14a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6"/>`, 'thin': `<path fill="currentColor" d="M16 3.5A12.5 12.5 0 1 0 28.5 16 12.514 12.514 0 0 0 16 3.5m0 24A11.5 11.5 0 1 1 27.5 16 11.513 11.513 0 0 1 16 27.5m0-19a7.5 7.5 0 1 0 7.5 7.5A7.51 7.51 0 0 0 16 8.5m0 14a6.5 6.5 0 1 1 6.5-6.5 6.507 6.507 0 0 1-6.5 6.5"/>`, 'light': `<path fill="currentColor" d="M16 3.25A12.75 12.75 0 1 0 28.75 16 12.765 12.765 0 0 0 16 3.25m0 24A11.25 11.25 0 1 1 27.25 16 11.26 11.26 0 0 1 16 27.25m0-19A7.75 7.75 0 1 0 23.75 16 7.76 7.76 0 0 0 16 8.25m0 14A6.25 6.25 0 1 1 22.25 16 6.257 6.257 0 0 1 16 22.25"/>`, 'bold': `<path fill="currentColor" d="M16 2.5A13.5 13.5 0 1 0 29.5 16 13.515 13.515 0 0 0 16 2.5m0 24A10.5 10.5 0 1 1 26.5 16 10.51 10.51 0 0 1 16 26.5M16 8a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8m0 13a4.999 4.999 0 1 1 0-9.998A4.999 4.999 0 0 1 16 21"/>`, 'fill': `<path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 24a11 11 0 1 1 11-11 11.01 11.01 0 0 1-11 11m8-11a8 8 0 1 1-8-8 8.01 8.01 0 0 1 8 8"/>`, 'duotone': `<path fill="currentColor" d="M23 16a7 7 0 1 1-14 0 7 7 0 0 1 14 0" opacity=".08"/><path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 24a11 11 0 1 1 11-11 11.01 11.01 0 0 1-11 11m0-19a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8m0 14a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
