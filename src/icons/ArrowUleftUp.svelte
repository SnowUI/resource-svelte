<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 10v11a8 8 0 0 1-16 0V6.414l-4.292 4.294a1 1 0 0 1-1.415-1.415l6-6a1 1 0 0 1 1.415 0l6 6a1 1 0 0 1-1.415 1.415L12 6.414V21a6 6 0 1 0 12 0V10a1 1 0 1 1 2 0"/>`, 'thin': `<path fill="currentColor" d="M25.5 10v11a7.5 7.5 0 1 1-15 0V5.207l-5.146 5.147a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L11.5 5.207V21a6.5 6.5 0 0 0 13 0V10a.5.5 0 0 1 1 0"/>`, 'light': `<path fill="currentColor" d="M25.75 10v11a7.75 7.75 0 0 1-15.5 0V5.811l-4.72 4.72a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06l-4.72-4.72v15.19a6.25 6.25 0 0 0 12.5 0V10a.75.75 0 1 1 1.5 0"/>`, 'bold': `<path fill="currentColor" d="M26.5 10v11a8.5 8.5 0 1 1-17 0V7.625l-3.439 3.436a1.503 1.503 0 1 1-2.125-2.125l6-6a1.5 1.5 0 0 1 2.125 0l6 6a1.503 1.503 0 1 1-2.125 2.125L12.5 7.625V21a5.5 5.5 0 1 0 11 0V10a1.5 1.5 0 0 1 3 0"/>`, 'fill': `<path fill="currentColor" d="M26 10v11a8 8 0 0 1-16 0V11H5a1.001 1.001 0 0 1-.707-1.707l6-6a1 1 0 0 1 1.415 0l6 6A1 1 0 0 1 17 11h-5v10a6 6 0 1 0 12 0V10a1 1 0 1 1 2 0"/>`, 'duotone': `<path fill="currentColor" d="M17 10H5l6-6z" opacity=".08"/><path fill="currentColor" d="M25 9a1 1 0 0 0-1 1v11a6 6 0 0 1-12 0V11h5a1 1 0 0 0 .708-1.707l-6-6a1 1 0 0 0-1.415 0l-6 6A1 1 0 0 0 5 11h5v10a8 8 0 1 0 16 0V10a1 1 0 0 0-1-1M11 5.414 14.586 9H7.414z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
