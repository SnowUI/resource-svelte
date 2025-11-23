<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M29 25a1 1 0 0 1-2 0 11.013 11.013 0 0 0-11-11H6.414l4.294 4.293a1 1 0 0 1-1.415 1.415l-6-6a1 1 0 0 1 0-1.415l6-6a1 1 0 0 1 1.415 1.415L6.414 12H16a13.014 13.014 0 0 1 13 13"/>`, 'thin': `<path fill="currentColor" d="M28.5 25a.5.5 0 0 1-1 0A11.513 11.513 0 0 0 16 13.5H5.207l5.147 5.146a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708.708L5.207 12.5H16A12.513 12.513 0 0 1 28.5 25"/>`, 'light': `<path fill="currentColor" d="M28.75 25a.75.75 0 1 1-1.5 0A11.263 11.263 0 0 0 16 13.75H5.811l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 1.06l-4.72 4.72h10.19A12.765 12.765 0 0 1 28.75 25"/>`, 'bold': `<path fill="currentColor" d="M29.5 25a1.5 1.5 0 0 1-3 0A10.51 10.51 0 0 0 16 14.5H7.625l3.44 3.439a1.502 1.502 0 1 1-2.125 2.125l-6-6a1.5 1.5 0 0 1 0-2.125l6-6a1.503 1.503 0 0 1 2.125 2.125L7.625 11.5H16A13.515 13.515 0 0 1 29.5 25"/>`, 'fill': `<path fill="currentColor" d="M29 25a1 1 0 0 1-2 0 11.013 11.013 0 0 0-11-11h-5v5a1.001 1.001 0 0 1-1.707.707l-6-6a1 1 0 0 1 0-1.415l6-6A1 1 0 0 1 11 7v5h5a13.013 13.013 0 0 1 13 13"/>`, 'duotone': `<path fill="currentColor" d="M10 7v12l-6-6z" opacity=".08"/><path fill="currentColor" d="M16 12h-5V7a1.001 1.001 0 0 0-1.707-.708l-6 6a1 1 0 0 0 0 1.415l6 6A1 1 0 0 0 11 19v-5h5a11.013 11.013 0 0 1 11 11 1 1 0 1 0 2 0 13.014 13.014 0 0 0-13-13m-7 4.586L5.414 13 9 9.414z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
