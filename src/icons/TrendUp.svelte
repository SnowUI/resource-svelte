<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M30 7v8a1 1 0 0 1-2 0V9.414L17.708 19.708a1 1 0 0 1-1.415 0L12 15.414l-8.292 8.294a1 1 0 0 1-1.415-1.415l9-9a1 1 0 0 1 1.415 0L17 17.586 26.586 8H21a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M29.5 7v8a.5.5 0 0 1-1 0V8.208L17.354 19.354a.5.5 0 0 1-.708 0L12 14.708l-8.646 8.646a.5.5 0 0 1-.708-.708l9-9a.503.503 0 0 1 .707 0L17 18.293 27.792 7.5H21a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M29.75 7v8a.75.75 0 1 1-1.5 0V8.81L17.53 19.53a.75.75 0 0 1-1.06 0L12 15.061 3.53 23.53a.75.75 0 0 1-1.06-1.06l9-9a.75.75 0 0 1 1.06 0L17 17.939 27.19 7.75H21a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M30.5 7v8a1.5 1.5 0 1 1-3 0v-4.375l-9.439 9.44a1.5 1.5 0 0 1-2.125 0L12 16.125 4.06 24.061a1.503 1.503 0 0 1-2.125-2.125l9-9a1.5 1.5 0 0 1 2.125 0L17 16.875 25.375 8.5H21a1.5 1.5 0 0 1 0-3h8A1.5 1.5 0 0 1 30.5 7"/>`, 'fill': `<path fill="currentColor" d="M30 7v8a1 1 0 0 1-1.707.707L25 12.415l-7.292 7.294a1 1 0 0 1-1.415 0L12 15.414l-8.292 8.294a1 1 0 0 1-1.415-1.415l9-9a1 1 0 0 1 1.415 0L17 17.586 23.586 11l-3.293-3.293A1 1 0 0 1 21 6h8a1 1 0 0 1 1 1"/>`, 'duotone': `<path fill="currentColor" d="M29 7v8l-8-8z" opacity=".08"/><path fill="currentColor" d="M29 6h-8a1 1 0 0 0-.707 1.707L23.586 11 17 17.586l-4.292-4.293a1 1 0 0 0-1.415 0l-9 9a1 1 0 1 0 1.415 1.415L12 15.414l4.293 4.294a1 1 0 0 0 1.415 0L25 12.414l3.293 3.294A1 1 0 0 0 30 15V7a1 1 0 0 0-1-1m-1 6.586L23.414 8H28z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
