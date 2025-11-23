<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M29 7a13.014 13.014 0 0 1-13 13H6.414l4.294 4.293a1 1 0 0 1-1.415 1.415l-6-6a1 1 0 0 1 0-1.415l6-6a1 1 0 0 1 1.415 1.415L6.414 18H16A11.013 11.013 0 0 0 27 7a1 1 0 1 1 2 0"/>`, 'thin': `<path fill="currentColor" d="M28.5 7A12.514 12.514 0 0 1 16 19.5H5.207l5.147 5.146a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708.708L5.207 18.5H16A11.513 11.513 0 0 0 27.5 7a.5.5 0 0 1 1 0"/>`, 'light': `<path fill="currentColor" d="M28.75 7A12.765 12.765 0 0 1 16 19.75H5.811l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 1.06l-4.72 4.72h10.19A11.263 11.263 0 0 0 27.25 7a.75.75 0 1 1 1.5 0"/>`, 'bold': `<path fill="currentColor" d="M29.5 7A13.515 13.515 0 0 1 16 20.5H7.625l3.44 3.439a1.503 1.503 0 1 1-2.125 2.125l-6-6a1.5 1.5 0 0 1 0-2.125l6-6a1.502 1.502 0 1 1 2.125 2.125L7.625 17.5H16A10.51 10.51 0 0 0 26.5 7a1.5 1.5 0 1 1 3 0"/>`, 'fill': `<path fill="currentColor" d="M29 7a13.014 13.014 0 0 1-13 13h-5v5a1.001 1.001 0 0 1-1.707.707l-6-6a1 1 0 0 1 0-1.415l6-6A1 1 0 0 1 11 13v5h5A11.013 11.013 0 0 0 27 7a1 1 0 1 1 2 0"/>`, 'duotone': `<path fill="currentColor" d="M10 13v12l-6-6z" opacity=".08"/><path fill="currentColor" d="M28 6a1 1 0 0 0-1 1 11.013 11.013 0 0 1-11 11h-5v-5a1.001 1.001 0 0 0-1.707-.707l-6 6a1 1 0 0 0 0 1.415l6 6A1 1 0 0 0 11 25v-5h5A13.013 13.013 0 0 0 29 7a1 1 0 0 0-1-1M9 22.586 5.414 19 9 15.414z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
