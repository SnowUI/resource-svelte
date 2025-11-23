<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M5 19h2a1 1 0 0 0 0-2H5v-2h2a1 1 0 0 0 0-2H5v-2h2a1 1 0 0 0 0-2H5V7h5v18H5zm22 6H12V7h15z"/>`, 'thin': `<path fill="currentColor" d="M27 5.5H5A1.5 1.5 0 0 0 3.5 7v18A1.5 1.5 0 0 0 5 26.5h22a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 27 5.5M4.5 25v-6.5H7a.5.5 0 0 0 0-1H4.5v-3H7a.5.5 0 0 0 0-1H4.5v-3H7a.5.5 0 0 0 0-1H4.5V7a.5.5 0 0 1 .5-.5h5.5v19H5a.5.5 0 0 1-.5-.5m23 0a.5.5 0 0 1-.5.5H11.5v-19H27a.5.5 0 0 1 .5.5z"/>`, 'light': `<path fill="currentColor" d="M27 5.25H5A1.75 1.75 0 0 0 3.25 7v18A1.75 1.75 0 0 0 5 26.75h22A1.75 1.75 0 0 0 28.75 25V7A1.75 1.75 0 0 0 27 5.25M4.75 25v-6.25H7a.75.75 0 1 0 0-1.5H4.75v-2.5H7a.75.75 0 1 0 0-1.5H4.75v-2.5H7a.75.75 0 1 0 0-1.5H4.75V7A.25.25 0 0 1 5 6.75h5.25v18.5H5a.25.25 0 0 1-.25-.25m22.5 0a.25.25 0 0 1-.25.25H11.75V6.75H27a.25.25 0 0 1 .25.25z"/>`, 'bold': `<path fill="currentColor" d="M27 4.5H5A2.5 2.5 0 0 0 2.5 7v18A2.5 2.5 0 0 0 5 27.5h22a2.5 2.5 0 0 0 2.5-2.5V7A2.5 2.5 0 0 0 27 4.5m-21.5 8h4v2h-4zm4-5v2h-4v-2zm-4 10h4v7h-4zm21 7h-14v-17h14z"/>`, 'fill': `<path fill="currentColor" d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M8 19H6a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m0-4H6a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m0-4H6a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m19 14H11V7h16z"/>`, 'duotone': `<path fill="currentColor" d="M11 6v20H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" opacity=".08"/><path fill="currentColor" d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M5 19h2a1 1 0 0 0 0-2H5v-2h2a1 1 0 0 0 0-2H5v-2h2a1 1 0 0 0 0-2H5V7h5v18H5zm22 6H12V7h15z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
