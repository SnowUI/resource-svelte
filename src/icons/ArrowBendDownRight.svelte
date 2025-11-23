<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m28.708 19.708-6 6a1 1 0 1 1-1.415-1.415L25.586 20H16A13.013 13.013 0 0 1 3 7a1 1 0 0 1 2 0 11.01 11.01 0 0 0 11 11h9.586l-4.293-4.292a1 1 0 1 1 1.415-1.415l6 6a1 1 0 0 1 0 1.415"/>`, 'thin': `<path fill="currentColor" d="m28.354 19.354-6 6a.5.5 0 0 1-.708-.708l5.147-5.146H16A12.514 12.514 0 0 1 3.5 7a.5.5 0 1 1 1 0A11.513 11.513 0 0 0 16 18.5h10.793l-5.147-5.146a.5.5 0 0 1 .708-.708l6 6a.503.503 0 0 1 0 .708"/>`, 'light': `<path fill="currentColor" d="m28.53 19.53-6 6a.75.75 0 0 1-1.06-1.06l4.719-4.72H16A12.765 12.765 0 0 1 3.25 7a.75.75 0 0 1 1.5 0A11.263 11.263 0 0 0 16 18.25h10.189l-4.719-4.72a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06"/>`, 'bold': `<path fill="currentColor" d="m29.061 20.061-6 6a1.503 1.503 0 0 1-2.125-2.125l3.439-3.436H16A13.515 13.515 0 0 1 2.5 7a1.5 1.5 0 0 1 3 0A10.51 10.51 0 0 0 16 17.5h8.375l-3.44-3.439a1.502 1.502 0 1 1 2.125-2.125l6 6a1.5 1.5 0 0 1 .001 2.125"/>`, 'fill': `<path fill="currentColor" d="m28.708 19.708-6 6A1 1 0 0 1 21 25v-5h-5A13.013 13.013 0 0 1 3 7a1 1 0 0 1 2 0 11.01 11.01 0 0 0 11 11h5v-5a1 1 0 0 1 1.707-.707l6 6a1 1 0 0 1 0 1.415"/>`, 'duotone': `<path fill="currentColor" d="m28 19-6 6V13z" opacity=".08"/><path fill="currentColor" d="m28.708 18.293-6-6A1 1 0 0 0 21 13v5h-5A11.01 11.01 0 0 1 5 7a1 1 0 0 0-2 0 13.014 13.014 0 0 0 13 13h5v5a1 1 0 0 0 1.707.707l6-6a1 1 0 0 0 0-1.415M23 22.586v-7.172L26.586 19z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
