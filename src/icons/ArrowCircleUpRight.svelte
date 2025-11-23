<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M21 12v6a1 1 0 0 1-2 0v-3.586l-6.292 6.294a1 1 0 0 1-1.415-1.415L17.586 13H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1m8 4A13 13 0 1 1 16 3a13.014 13.014 0 0 1 13 13m-2 0a11 11 0 1 0-11 11 11.01 11.01 0 0 0 11-11"/>`, 'thin': `<path fill="currentColor" d="M16 3.5A12.5 12.5 0 1 0 28.5 16 12.514 12.514 0 0 0 16 3.5m0 24A11.5 11.5 0 1 1 27.5 16 11.513 11.513 0 0 1 16 27.5M20.5 12v6a.5.5 0 0 1-1 0v-4.792l-7.146 7.146a.5.5 0 0 1-.708-.708l7.147-7.146H14a.5.5 0 0 1 0-1h6a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M16 3.25A12.75 12.75 0 1 0 28.75 16 12.765 12.765 0 0 0 16 3.25m0 24A11.25 11.25 0 1 1 27.25 16 11.26 11.26 0 0 1 16 27.25M20.75 12v6a.75.75 0 1 1-1.5 0v-4.189l-6.72 6.719a.75.75 0 0 1-1.06-1.06l6.719-6.72H14a.75.75 0 1 1 0-1.5h6a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M16 2.5A13.5 13.5 0 1 0 29.5 16 13.515 13.515 0 0 0 16 2.5m0 24A10.5 10.5 0 1 1 26.5 16 10.51 10.51 0 0 1 16 26.5M21.5 12v6a1.5 1.5 0 1 1-3 0v-2.375l-5.439 5.44a1.503 1.503 0 0 1-2.125-2.125l5.439-5.44H14a1.5 1.5 0 1 1 0-3h6a1.5 1.5 0 0 1 1.5 1.5"/>`, 'fill': `<path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m5 15a1 1 0 0 1-2 0v-3.586l-6.292 6.294a1 1 0 0 1-1.415-1.415L17.586 13H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1z"/>`, 'duotone': `<path fill="currentColor" d="M28 16a12 12 0 1 1-23.999 0A12 12 0 0 1 28 16" opacity=".08"/><path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 24a11 11 0 1 1 11-11 11.01 11.01 0 0 1-11 11m5-15v6a1 1 0 0 1-2 0v-3.586l-6.292 6.294a1 1 0 0 1-1.415-1.415L17.586 13H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
