<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M24 26a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h.5a3.5 3.5 0 0 0 3.5-3.5V17H7a1 1 0 0 1 0-2h4v-4.5a6.5 6.5 0 0 1 10.635-5.015 1 1 0 1 1-1.273 1.543A4.5 4.5 0 0 0 13 10.5V15h4a1 1 0 0 1 0 2h-4v4.5a5.48 5.48 0 0 1-1.26 3.5H23a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M23.5 26a.5.5 0 0 1-.5.5H7a.5.5 0 0 1 0-1h.5a4 4 0 0 0 4-4v-5H7a.5.5 0 0 1 0-1h4.5v-5a5.999 5.999 0 0 1 9.816-4.625.5.5 0 1 1-.636.771A5 5 0 0 0 12.5 10.5v5H17a.5.5 0 1 1 0 1h-4.5v5a5 5 0 0 1-2 4H23a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M23.75 26a.75.75 0 0 1-.75.75H7a.75.75 0 1 1 0-1.5h.5a3.75 3.75 0 0 0 3.75-3.75v-4.75H7a.75.75 0 1 1 0-1.5h4.25V10.5a6.25 6.25 0 0 1 10.226-4.823.75.75 0 1 1-.955 1.158A4.75 4.75 0 0 0 12.75 10.5v4.75H17a.75.75 0 1 1 0 1.5h-4.25v4.75a5.23 5.23 0 0 1-1.579 3.75H23a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M24.5 26a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 1 1 0-3h.5a3 3 0 0 0 3-3v-4H7a1.5 1.5 0 1 1 0-3h3.5v-4a7 7 0 0 1 11.454-5.401 1.5 1.5 0 0 1-1.91 2.313A3.96 3.96 0 0 0 17.5 6.5a4 4 0 0 0-4 4v4H17a1.5 1.5 0 1 1 0 3h-3.5v4a5.97 5.97 0 0 1-.805 3H23a1.5 1.5 0 0 1 1.5 1.5"/>`, 'fill': `<path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m5 21H10a1 1 0 0 1 0-2h.5a2.5 2.5 0 0 0 2.5-2.5V17h-3a1 1 0 0 1 0-2h3v-3a5 5 0 0 1 7.5-4.33.999.999 0 1 1-1 1.731A3 3 0 0 0 15 12v3h3a1 1 0 0 1 0 2h-3v2.5c.001.89-.264 1.76-.76 2.5H21a1 1 0 0 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M21 26H7.5a4.5 4.5 0 0 0 4.5-4.5v-11a5.5 5.5 0 0 1 9-4.244z" opacity=".08"/><path fill="currentColor" d="M24 26a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h.5a3.5 3.5 0 0 0 3.5-3.5V17H7a1 1 0 0 1 0-2h4v-4.5a6.5 6.5 0 0 1 10.635-5.015 1 1 0 1 1-1.273 1.543A4.5 4.5 0 0 0 13 10.5V15h4a1 1 0 0 1 0 2h-4v4.5a5.48 5.48 0 0 1-1.26 3.5H23a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
