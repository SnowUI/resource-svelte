<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 24a11 11 0 1 1 11-11 11.01 11.01 0 0 1-11 11m0-20a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9m0 16a7 7 0 1 1 7-7 7.01 7.01 0 0 1-7 7"/>`, 'thin': `<path fill="currentColor" d="M16 3.5A12.5 12.5 0 1 0 28.5 16 12.514 12.514 0 0 0 16 3.5m0 24A11.5 11.5 0 1 1 27.5 16 11.513 11.513 0 0 1 16 27.5m0-20a8.5 8.5 0 1 0 8.5 8.5A8.51 8.51 0 0 0 16 7.5m0 16a7.5 7.5 0 1 1 7.5-7.5 7.51 7.51 0 0 1-7.5 7.5"/>`, 'light': `<path fill="currentColor" d="M16 3.25A12.75 12.75 0 1 0 28.75 16 12.765 12.765 0 0 0 16 3.25m0 24A11.25 11.25 0 1 1 27.25 16 11.26 11.26 0 0 1 16 27.25m0-20A8.75 8.75 0 1 0 24.75 16 8.76 8.76 0 0 0 16 7.25m0 16A7.25 7.25 0 1 1 23.25 16 7.26 7.26 0 0 1 16 23.25"/>`, 'bold': `<path fill="currentColor" d="M16 2.5A13.5 13.5 0 1 0 29.5 16 13.515 13.515 0 0 0 16 2.5m0 24A10.5 10.5 0 1 1 26.5 16 10.51 10.51 0 0 1 16 26.5m0-19a8.5 8.5 0 1 0 8.5 8.5A8.51 8.51 0 0 0 16 7.5m0 14a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1-5.5 5.5"/>`, 'fill': `<path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 24a11 11 0 1 1 11-11 11.01 11.01 0 0 1-11 11"/><path fill="currentColor" d="M16 25a9 9 0 1 0 0-18 9 9 0 0 0 0 18"/>`, 'duotone': `<path fill="currentColor" d="M24 16a8 8 0 1 1-16 0 8 8 0 0 1 16 0" opacity=".08"/><path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 24a11 11 0 1 1 11-11 11.01 11.01 0 0 1-11 11m0-20a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9m0 16a7 7 0 1 1 7-7 7.01 7.01 0 0 1-7 7"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
