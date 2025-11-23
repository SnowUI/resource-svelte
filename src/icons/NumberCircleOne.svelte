<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 24a11 11 0 1 1 11-11 11.01 11.01 0 0 1-11 11m1.5-17v12a1 1 0 0 1-2 0V11.875l-1.445.964a1 1 0 1 1-1.11-1.665l3-2A1 1 0 0 1 17.5 10"/>`, 'thin': `<path fill="currentColor" d="M16 3.5A12.5 12.5 0 1 0 28.5 16 12.514 12.514 0 0 0 16 3.5m0 24A11.5 11.5 0 1 1 27.5 16 11.513 11.513 0 0 1 16 27.5M17 10v12a.5.5 0 0 1-1 0V10.934l-2.222 1.482a.5.5 0 0 1-.694-.139.5.5 0 0 1 .139-.693l3-2A.5.5 0 0 1 17 10"/>`, 'light': `<path fill="currentColor" d="M16 3.25A12.75 12.75 0 1 0 28.75 16 12.765 12.765 0 0 0 16 3.25m0 24A11.25 11.25 0 1 1 27.25 16 11.26 11.26 0 0 1 16 27.25M17.25 10v12a.75.75 0 1 1-1.5 0V11.401l-1.834 1.224a.751.751 0 0 1-.832-1.25l3-2A.75.75 0 0 1 17.25 10"/>`, 'bold': `<path fill="currentColor" d="M16 2.5A13.5 13.5 0 1 0 29.5 16 13.515 13.515 0 0 0 16 2.5m0 24A10.5 10.5 0 1 1 26.5 16 10.51 10.51 0 0 1 16 26.5M18 10v12a1.5 1.5 0 1 1-3 0v-9.197l-.668.447a1.502 1.502 0 0 1-1.665-2.5l3-2A1.5 1.5 0 0 1 18 10"/>`, 'fill': `<path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m1.5 19a1 1 0 0 1-2 0V11.875l-1.445.964a1 1 0 1 1-1.11-1.665l3-2A1 1 0 0 1 17.5 10z"/>`, 'duotone': `<path fill="currentColor" d="M28 16a12 12 0 1 1-23.999 0A12 12 0 0 1 28 16" opacity=".08"/><path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 24a11 11 0 1 1 11-11 11.01 11.01 0 0 1-11 11m1.5-17v12a1 1 0 0 1-2 0V11.875l-1.445.964a1 1 0 1 1-1.11-1.665l3-2A1 1 0 0 1 17.5 10"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
