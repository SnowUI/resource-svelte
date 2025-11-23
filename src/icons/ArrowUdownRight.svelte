<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m28.708 21.708-6 6a1 1 0 1 1-1.415-1.415L25.586 22H11a8 8 0 0 1 0-16h11a1 1 0 1 1 0 2H11a6 6 0 1 0 0 12h14.586l-4.293-4.292a1 1 0 1 1 1.415-1.415l6 6a1 1 0 0 1 0 1.415"/>`, 'thin': `<path fill="currentColor" d="m28.354 21.354-6 6a.501.501 0 0 1-.708-.708l5.147-5.146H11a7.5 7.5 0 0 1 0-15h11a.5.5 0 0 1 0 1H11a6.5 6.5 0 1 0 0 13h15.793l-5.147-5.146a.5.5 0 0 1 .708-.708l6 6a.503.503 0 0 1 0 .708"/>`, 'light': `<path fill="currentColor" d="m28.53 21.53-6 6a.75.75 0 0 1-1.06-1.06l4.719-4.72H11a7.75 7.75 0 1 1 0-15.5h11a.75.75 0 1 1 0 1.5H11a6.25 6.25 0 0 0 0 12.5h15.189l-4.719-4.72a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06"/>`, 'bold': `<path fill="currentColor" d="m29.061 22.061-6 6a1.503 1.503 0 0 1-2.125-2.125l3.439-3.436H11a8.5 8.5 0 1 1 0-17h11a1.5 1.5 0 0 1 0 3H11a5.5 5.5 0 0 0 0 11h13.375l-3.44-3.439a1.504 1.504 0 0 1 2.125-2.125l6 6a1.5 1.5 0 0 1 .001 2.125"/>`, 'fill': `<path fill="currentColor" d="m28.708 21.708-6 6A1 1 0 0 1 21 27v-5H11a8 8 0 0 1 0-16h11a1 1 0 1 1 0 2H11a6 6 0 1 0 0 12h10v-5a1 1 0 0 1 1.707-.707l6 6a1 1 0 0 1 0 1.415"/>`, 'duotone': `<path fill="currentColor" d="m28 21-6 6V15z" opacity=".08"/><path fill="currentColor" d="m28.708 20.293-6-6A1 1 0 0 0 21 15v5H11a6 6 0 1 1 0-12h11a1 1 0 1 0 0-2H11a8 8 0 1 0 0 16h10v5a1 1 0 0 0 1.707.707l6-6a1 1 0 0 0 0-1.415M23 24.586v-7.172L26.586 21z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
