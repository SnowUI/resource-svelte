<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m0 2v2H5V7zm0 18H5V11h22zm-5-11a6 6 0 1 1-12 0 1 1 0 0 1 2 0 4 4 0 1 0 8 0 1 1 0 0 1 2 0"/>`, 'thin': `<path fill="currentColor" d="M27 5.5H5A1.5 1.5 0 0 0 3.5 7v18A1.5 1.5 0 0 0 5 26.5h22a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 27 5.5m-22 1h22a.5.5 0 0 1 .5.5v2.5h-23V7a.5.5 0 0 1 .5-.5m22 19H5a.5.5 0 0 1-.5-.5V10.5h23V25a.5.5 0 0 1-.5.5M21.5 14a5.5 5.5 0 0 1-11 0 .5.5 0 0 1 1 0 4.5 4.5 0 1 0 9 0 .5.5 0 0 1 1 0"/>`, 'light': `<path fill="currentColor" d="M27 5.25H5A1.75 1.75 0 0 0 3.25 7v18A1.75 1.75 0 0 0 5 26.75h22A1.75 1.75 0 0 0 28.75 25V7A1.75 1.75 0 0 0 27 5.25M5 6.75h22a.25.25 0 0 1 .25.25v2.25H4.75V7A.25.25 0 0 1 5 6.75m22 18.5H5a.25.25 0 0 1-.25-.25V10.75h22.5V25a.25.25 0 0 1-.25.25M21.75 14a5.75 5.75 0 0 1-11.5 0 .75.75 0 1 1 1.5 0 4.25 4.25 0 0 0 8.5 0 .75.75 0 1 1 1.5 0"/>`, 'bold': `<path fill="currentColor" d="M27 4.5H5A2.5 2.5 0 0 0 2.5 7v18A2.5 2.5 0 0 0 5 27.5h22a2.5 2.5 0 0 0 2.5-2.5V7A2.5 2.5 0 0 0 27 4.5m-.5 3v2h-21v-2zm-21 17v-12h21v12zm17-9a6.5 6.5 0 1 1-13 0 1.5 1.5 0 0 1 3 0 3.5 3.5 0 1 0 7 0 1.5 1.5 0 1 1 3 0"/>`, 'fill': `<path fill="currentColor" d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M16 20a6.006 6.006 0 0 1-6-6 1 1 0 0 1 2 0 4 4 0 1 0 8 0 1 1 0 0 1 2 0 6.006 6.006 0 0 1-6 6M5 9V7h22v2z"/>`, 'duotone': `<path fill="currentColor" d="M28 7v3H4V7a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m0 2v2H5V7zm0 18H5V11h22zm-5-11a6 6 0 1 1-12 0 1 1 0 0 1 2 0 4 4 0 1 0 8 0 1 1 0 0 1 2 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
