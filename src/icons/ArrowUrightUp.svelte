<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27.708 10.708a1 1 0 0 1-1.415 0L22 6.414V21a8 8 0 0 1-16 0V10a1 1 0 1 1 2 0v11a6 6 0 1 0 12 0V6.414l-4.292 4.294a1 1 0 0 1-1.415-1.415l6-6a1 1 0 0 1 1.415 0l6 6a1 1 0 0 1 0 1.415"/>`, 'thin': `<path fill="currentColor" d="M27.354 10.354a.503.503 0 0 1-.708 0L21.5 5.207V21a7.5 7.5 0 0 1-15 0V10a.5.5 0 0 1 1 0v11a6.5 6.5 0 0 0 13 0V5.207l-5.146 5.147a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708"/>`, 'light': `<path fill="currentColor" d="M27.53 10.53a.75.75 0 0 1-1.06 0l-4.72-4.719v15.19a7.75 7.75 0 0 1-15.5 0V10a.75.75 0 1 1 1.5 0v11a6.25 6.25 0 0 0 12.5 0V5.81l-4.72 4.72a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06"/>`, 'bold': `<path fill="currentColor" d="M28.061 11.061a1.5 1.5 0 0 1-2.125 0L22.5 7.625V21a8.5 8.5 0 1 1-17 0V10a1.5 1.5 0 1 1 3 0v11a5.5 5.5 0 1 0 11 0V7.625l-3.439 3.436a1.504 1.504 0 0 1-2.125-2.125l6-6a1.5 1.5 0 0 1 2.125 0l6 6a1.5 1.5 0 0 1 0 2.125"/>`, 'fill': `<path fill="currentColor" d="M27.924 10.383A1 1 0 0 1 27 11h-5v10a8 8 0 0 1-16 0V10a1 1 0 1 1 2 0v11a6 6 0 1 0 12 0V11h-5a1.001 1.001 0 0 1-.707-1.707l6-6a1 1 0 0 1 1.415 0l6 6a1 1 0 0 1 .216 1.09"/>`, 'duotone': `<path fill="currentColor" d="M27 10H15l6-6z" opacity=".08"/><path fill="currentColor" d="m27.708 9.293-6-6a1 1 0 0 0-1.415 0l-6 6A1 1 0 0 0 15 11h5v10a6 6 0 1 1-12 0V10a1 1 0 1 0-2 0v11a8 8 0 0 0 16 0V11h5a1.001 1.001 0 0 0 .707-1.707M17.414 9 21 5.414 24.586 9z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
