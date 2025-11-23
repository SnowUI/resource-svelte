<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m26.708 22.708-6 6a1 1 0 1 1-1.415-1.415L23.586 23H8a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v17h14.586l-4.293-4.292a1 1 0 1 1 1.415-1.415l6 6a1 1 0 0 1 0 1.415"/>`, 'thin': `<path fill="currentColor" d="m26.354 22.354-6 6a.501.501 0 0 1-.708-.708l5.147-5.146H8a.5.5 0 0 1-.5-.5V4a.5.5 0 1 1 1 0v17.5h16.293l-5.147-5.146a.501.501 0 0 1 .708-.708l6 6a.503.503 0 0 1 0 .708"/>`, 'light': `<path fill="currentColor" d="m26.53 22.53-6 6a.75.75 0 0 1-1.06-1.06l4.719-4.72H8a.75.75 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v17.25h15.439l-4.719-4.72a.75.75 0 1 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06"/>`, 'bold': `<path fill="currentColor" d="m27.061 23.061-6 6a1.503 1.503 0 0 1-2.125-2.125l3.439-3.436H8A1.5 1.5 0 0 1 6.5 22V4a1.5 1.5 0 0 1 3 0v16.5h12.875l-3.44-3.439a1.504 1.504 0 0 1 2.125-2.125l6 6a1.5 1.5 0 0 1 .001 2.125"/>`, 'fill': `<path fill="currentColor" d="m26.708 22.708-6 6A1 1 0 0 1 19 28v-5H8a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v17h10v-5a1 1 0 0 1 1.707-.707l6 6a1 1 0 0 1 0 1.415"/>`, 'duotone': `<path fill="currentColor" d="m26 22-6 6V16z" opacity=".08"/><path fill="currentColor" d="m26.708 21.293-6-6A1 1 0 0 0 19 16v5H9V4a1 1 0 0 0-2 0v18a1 1 0 0 0 1 1h11v5a1 1 0 0 0 1.707.707l6-6a1 1 0 0 0 0-1.415M21 25.586v-7.172L24.586 22z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
