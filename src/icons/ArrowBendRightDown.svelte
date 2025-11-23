<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m25.708 22.708-6 6a1 1 0 0 1-1.415 0l-6-6a1 1 0 1 1 1.415-1.415L18 25.586V16A11.01 11.01 0 0 0 7 5a1 1 0 0 1 0-2 13.014 13.014 0 0 1 13 13v9.586l4.293-4.293a1 1 0 1 1 1.415 1.415"/>`, 'thin': `<path fill="currentColor" d="m25.354 22.354-6 6a.503.503 0 0 1-.708 0l-6-6a.5.5 0 0 1 .708-.708l5.146 5.147V16A11.513 11.513 0 0 0 7 4.5a.5.5 0 1 1 0-1A12.514 12.514 0 0 1 19.5 16v10.793l5.146-5.147a.5.5 0 0 1 .708.708"/>`, 'light': `<path fill="currentColor" d="m25.53 22.53-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 1.06-1.06l4.72 4.719V16A11.26 11.26 0 0 0 7 4.75a.75.75 0 0 1 0-1.5A12.765 12.765 0 0 1 19.75 16v10.189l4.72-4.719a.75.75 0 0 1 1.06 1.06"/>`, 'bold': `<path fill="currentColor" d="m26.061 23.061-6 6a1.503 1.503 0 0 1-2.125 0l-6-6a1.503 1.503 0 0 1 2.125-2.125l3.439 3.439V16A10.51 10.51 0 0 0 7 5.5a1.5 1.5 0 0 1 0-3A13.515 13.515 0 0 1 20.5 16v8.375l3.439-3.44a1.503 1.503 0 0 1 2.125 2.125z"/>`, 'fill': `<path fill="currentColor" d="m25.708 22.708-6 6a1 1 0 0 1-1.415 0l-6-6A1 1 0 0 1 13 21h5v-5A11.01 11.01 0 0 0 7 5a1 1 0 0 1 0-2 13.014 13.014 0 0 1 13 13v5h5a1 1 0 0 1 .707 1.707"/>`, 'duotone': `<path fill="currentColor" d="m25 22-6 6-6-6z" opacity=".08"/><path fill="currentColor" d="M25.924 21.618A1 1 0 0 0 25 21h-5v-5A13.013 13.013 0 0 0 7 3a1 1 0 0 0 0 2 11.01 11.01 0 0 1 11 11v5h-5a1 1 0 0 0-.707 1.707l6 6a1 1 0 0 0 1.415 0l6-6a1 1 0 0 0 .216-1.09M19 26.586 15.414 23h7.172z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
