<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m30.75 13.331-4.5-5A1 1 0 0 0 25.5 8H17V4a1 1 0 0 0-2 0v4H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10v8a1 1 0 0 0 2 0v-8h8.5a1 1 0 0 0 .744-.331l4.5-5a1 1 0 0 0 .006-1.338M25.055 18H5v-8h20.055l3.6 4z"/>`, 'thin': `<path fill="currentColor" d="m30.375 13.665-4.5-5A.5.5 0 0 0 25.5 8.5h-9V4a.5.5 0 0 0-1 0v4.5H5A1.5 1.5 0 0 0 3.5 10v8A1.5 1.5 0 0 0 5 19.5h10.5V28a.5.5 0 0 0 1 0v-8.5h9a.5.5 0 0 0 .375-.165l4.5-5a.5.5 0 0 0 0-.67M25.278 18.5H5a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h20.278l4.05 4.5z"/>`, 'light': `<path fill="currentColor" d="m30.558 13.5-4.5-5a.75.75 0 0 0-.558-.25h-8.75V4a.75.75 0 1 0-1.5 0v4.25H5A1.75 1.75 0 0 0 3.25 10v8A1.75 1.75 0 0 0 5 19.75h10.25V28a.75.75 0 1 0 1.5 0v-8.25h8.75a.75.75 0 0 0 .558-.25l4.5-5a.75.75 0 0 0 0-1m-5.392 4.75H5a.25.25 0 0 1-.25-.25v-8A.25.25 0 0 1 5 9.75h20.166L28.991 14z"/>`, 'bold': `<path fill="currentColor" d="m31.115 13-4.5-5a1.5 1.5 0 0 0-1.115-.5h-8V4a1.5 1.5 0 1 0-3 0v3.5H5A2.5 2.5 0 0 0 2.5 10v8A2.5 2.5 0 0 0 5 20.5h9.5V28a1.5 1.5 0 1 0 3 0v-7.5h8a1.5 1.5 0 0 0 1.115-.5l4.5-5a1.5 1.5 0 0 0 0-2m-6.282 4.5H5.5v-7h19.333l3.15 3.5z"/>`, 'fill': `<path fill="currentColor" d="m30.75 14.669-4.5 5a1 1 0 0 1-.75.331H17v8a1 1 0 0 1-2 0v-8H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h10V4a1 1 0 0 1 2 0v4h8.5a1 1 0 0 1 .75.331l4.5 5a1 1 0 0 1 0 1.338"/>`, 'duotone': `<path fill="currentColor" d="m30 14-4.5 5H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h20.5z" opacity=".08"/><path fill="currentColor" d="m30.75 13.331-4.5-5A1 1 0 0 0 25.5 8H17V4a1 1 0 0 0-2 0v4H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10v8a1 1 0 0 0 2 0v-8h8.5a1 1 0 0 0 .744-.331l4.5-5a1 1 0 0 0 .006-1.338M25.055 18H5v-8h20.055l3.6 4z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
