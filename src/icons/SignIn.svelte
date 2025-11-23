<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m17.708 16.708-5 5a1 1 0 0 1-1.415-1.415L14.586 17H3a1 1 0 0 1 0-2h11.586l-3.293-3.293a1 1 0 1 1 1.415-1.415l5 5a1 1 0 0 1 0 1.415M24 4h-7a1 1 0 1 0 0 2h7v20h-7a1 1 0 0 0 0 2h7a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/>`, 'thin': `<path fill="currentColor" d="m17.354 16.354-5 5a.5.5 0 0 1-.708-.708l4.147-4.146H3a.5.5 0 0 1 0-1h12.793l-4.147-4.146a.5.5 0 0 1 .708-.708l5 5a.503.503 0 0 1 0 .708M24 4.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 1 .5.5v20a.5.5 0 0 1-.5.5h-7a.5.5 0 0 0 0 1h7a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 24 4.5"/>`, 'light': `<path fill="currentColor" d="m17.53 16.53-5 5a.75.75 0 0 1-1.06-1.06l3.719-3.72H3a.75.75 0 1 1 0-1.5h12.189l-3.719-3.72a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06M24 4.25h-7a.75.75 0 1 0 0 1.5h7a.25.25 0 0 1 .25.25v20a.25.25 0 0 1-.25.25h-7a.75.75 0 1 0 0 1.5h7A1.75 1.75 0 0 0 25.75 26V6A1.75 1.75 0 0 0 24 4.25"/>`, 'bold': `<path fill="currentColor" d="m18.061 17.061-5 5a1.503 1.503 0 0 1-2.125-2.125l2.439-2.436H3a1.5 1.5 0 1 1 0-3h10.375l-2.436-2.439A1.5 1.5 0 0 1 12 9.496c.399 0 .781.158 1.063.44l5 5a1.5 1.5 0 0 1-.003 2.125M24 3.5h-7a1.5 1.5 0 0 0 0 3h6.5v19H17a1.5 1.5 0 1 0 0 3h7a2.5 2.5 0 0 0 2.5-2.5V6A2.5 2.5 0 0 0 24 3.5"/>`, 'fill': `<path fill="currentColor" d="m17.708 16.708-5 5A1 1 0 0 1 11 21v-4H3a1 1 0 0 1 0-2h8v-4a1 1 0 0 1 1.707-.707l5 5a1 1 0 0 1 0 1.415M24 4h-7a1 1 0 1 0 0 2h7v20h-7a1 1 0 0 0 0 2h7a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/>`, 'duotone': `<path fill="currentColor" d="m17 16-5 5V11z" opacity=".08"/><path fill="currentColor" d="m17.708 15.293-5-5A1 1 0 0 0 11 11v4H3a1 1 0 0 0 0 2h8v4a1 1 0 0 0 1.707.707l5-5a1 1 0 0 0 0-1.415M13 18.586v-5.172L15.586 16zM26 6v20a2 2 0 0 1-2 2h-7a1 1 0 0 1 0-2h7V6h-7a1 1 0 1 1 0-2h7a2 2 0 0 1 2 2"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
