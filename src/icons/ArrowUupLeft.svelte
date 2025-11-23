<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M29 18a8.01 8.01 0 0 1-8 8H10a1 1 0 0 1 0-2h11a6 6 0 0 0 0-12H6.414l4.294 4.293a1 1 0 0 1-1.415 1.415l-6-6a1 1 0 0 1 0-1.415l6-6a1 1 0 0 1 1.415 1.415L6.414 10H21a8.01 8.01 0 0 1 8 8"/>`, 'thin': `<path fill="currentColor" d="M28.5 18a7.51 7.51 0 0 1-7.5 7.5H10a.5.5 0 1 1 0-1h11a6.5 6.5 0 1 0 0-13H5.207l5.147 5.146a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708.708L5.207 10.5H21a7.51 7.51 0 0 1 7.5 7.5"/>`, 'light': `<path fill="currentColor" d="M28.75 18A7.76 7.76 0 0 1 21 25.75H10a.75.75 0 1 1 0-1.5h11a6.25 6.25 0 0 0 0-12.5H5.811l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 1.06l-4.72 4.72h15.19A7.76 7.76 0 0 1 28.75 18"/>`, 'bold': `<path fill="currentColor" d="M29.5 18a8.51 8.51 0 0 1-8.5 8.5H10a1.5 1.5 0 1 1 0-3h11a5.5 5.5 0 0 0 0-11H7.625l3.44 3.439a1.503 1.503 0 1 1-2.125 2.125l-6-6a1.5 1.5 0 0 1 0-2.125l6-6a1.503 1.503 0 0 1 2.125 2.125L7.625 9.5H21a8.51 8.51 0 0 1 8.5 8.5"/>`, 'fill': `<path fill="currentColor" d="M29 18a8.01 8.01 0 0 1-8 8H10a1 1 0 0 1 0-2h11a6 6 0 0 0 0-12H11v5a1 1 0 0 1-1.707.708l-6-6a1 1 0 0 1 0-1.415l6-6A1 1 0 0 1 11 5v5h10a8.01 8.01 0 0 1 8 8"/>`, 'duotone': `<path fill="currentColor" d="M10 5v12l-6-6z" opacity=".08"/><path fill="currentColor" d="M21 10H11V5a1.001 1.001 0 0 0-1.707-.707l-6 6a1 1 0 0 0 0 1.415l6 6A1 1 0 0 0 11 17v-5h10a6 6 0 1 1 0 12H10a1 1 0 1 0 0 2h11a8 8 0 0 0 0-16M9 14.586 5.414 11 9 7.414z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
