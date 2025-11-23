<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m28.708 13.708-6 6a1 1 0 1 1-1.415-1.415L25.586 14H16A11.01 11.01 0 0 0 5 25a1 1 0 1 1-2 0 13.014 13.014 0 0 1 13-13h9.586l-4.293-4.292a1.001 1.001 0 0 1 1.415-1.415l6 6a1 1 0 0 1 0 1.415"/>`, 'thin': `<path fill="currentColor" d="m28.354 13.354-6 6a.5.5 0 0 1-.708-.708l5.147-5.146H16A11.51 11.51 0 0 0 4.5 25a.5.5 0 1 1-1 0A12.514 12.514 0 0 1 16 12.5h10.793l-5.147-5.146a.5.5 0 0 1 .708-.708l6 6a.503.503 0 0 1 0 .708"/>`, 'light': `<path fill="currentColor" d="m28.53 13.53-6 6a.75.75 0 0 1-1.06-1.06l4.719-4.72H16A11.263 11.263 0 0 0 4.75 25a.75.75 0 0 1-1.5 0A12.765 12.765 0 0 1 16 12.25h10.189L21.47 7.53a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06"/>`, 'bold': `<path fill="currentColor" d="m29.061 14.061-6 6a1.503 1.503 0 0 1-2.125-2.125l3.439-3.436H16A10.51 10.51 0 0 0 5.5 25a1.5 1.5 0 0 1-3 0A13.515 13.515 0 0 1 16 11.5h8.375l-3.436-3.44a1.503 1.503 0 0 1 2.125-2.125l6 6a1.5 1.5 0 0 1-.003 2.126"/>`, 'fill': `<path fill="currentColor" d="m28.708 13.708-6 6A1 1 0 0 1 21 19v-5h-5A11.01 11.01 0 0 0 5 25a1 1 0 1 1-2 0 13.014 13.014 0 0 1 13-13h5V7a1 1 0 0 1 1.707-.708l6 6a1 1 0 0 1 0 1.415"/>`, 'duotone': `<path fill="currentColor" d="m28 13-6 6V7z" opacity=".08"/><path fill="currentColor" d="m28.708 12.293-6-6A1 1 0 0 0 21 7v5h-5A13.013 13.013 0 0 0 3 25a1 1 0 1 0 2 0 11.01 11.01 0 0 1 11-11h5v5a1 1 0 0 0 1.707.707l6-6a1 1 0 0 0 0-1.415M23 16.586V9.414L26.586 13z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
