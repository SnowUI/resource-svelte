<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m27.708 16.708-9 9a1 1 0 0 1-1.415-1.415L24.586 17H5a1 1 0 0 1 0-2h19.586l-7.293-7.292a1 1 0 0 1 1.415-1.415l9 9a1 1 0 0 1 0 1.415"/>`, 'thin': `<path fill="currentColor" d="m27.354 16.354-9 9a.5.5 0 0 1-.708-.708l8.147-8.146H5a.5.5 0 1 1 0-1h20.793l-8.147-8.146a.5.5 0 0 1 .708-.708l9 9a.5.5 0 0 1 0 .708"/>`, 'light': `<path fill="currentColor" d="m27.53 16.53-9 9a.75.75 0 0 1-1.06-1.06l7.719-7.72H5a.75.75 0 1 1 0-1.5h20.189L17.47 7.53a.75.75 0 0 1 1.06-1.06l9 9a.75.75 0 0 1 0 1.06"/>`, 'bold': `<path fill="currentColor" d="m28.061 17.061-9 9a1.503 1.503 0 0 1-2.125-2.125l6.439-6.436H5a1.5 1.5 0 0 1 0-3h18.375l-6.436-6.44a1.503 1.503 0 0 1 2.125-2.125l9 9a1.5 1.5 0 0 1-.003 2.126"/>`, 'fill': `<path fill="currentColor" d="m27.708 16.708-9 9A1 1 0 0 1 17 25v-8H5a1 1 0 0 1 0-2h12V7a1 1 0 0 1 1.707-.707l9 9a1 1 0 0 1 0 1.415"/>`, 'duotone': `<path fill="currentColor" d="m27 16-9 9V7z" opacity=".08"/><path fill="currentColor" d="m27.708 15.293-9-9A1 1 0 0 0 17 7v8H5a1 1 0 1 0 0 2h12v8a1 1 0 0 0 1.707.708l9-9a1 1 0 0 0 0-1.415M19 22.586V9.414L25.586 16z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
