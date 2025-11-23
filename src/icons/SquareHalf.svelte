<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25 5H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-8 10h8v2h-8zm0-2v-2h8v2zm0 6h8v2h-8zm8-10h-8V7h8zM7 7h8v18H7zm18 18h-8v-2h8z"/>`, 'thin': `<path fill="currentColor" d="M25 5.5H7A1.5 1.5 0 0 0 5.5 7v18A1.5 1.5 0 0 0 7 26.5h18a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 25 5.5m-8.5 9h9v3h-9zm0-1v-3h9v3zm0 5h9v3h-9zm9-11.5v2.5h-9v-3H25a.5.5 0 0 1 .5.5m-19 18V7a.5.5 0 0 1 .5-.5h8.5v19H7a.5.5 0 0 1-.5-.5m18.5.5h-8.5v-3h9V25a.5.5 0 0 1-.5.5"/>`, 'light': `<path fill="currentColor" d="M25 5.25H7A1.75 1.75 0 0 0 5.25 7v18A1.75 1.75 0 0 0 7 26.75h18A1.75 1.75 0 0 0 26.75 25V7A1.75 1.75 0 0 0 25 5.25m-8.25 9.5h8.5v2.5h-8.5zm0-1.5v-2.5h8.5v2.5zm0 5.5h8.5v2.5h-8.5zM25.25 7v2.25h-8.5v-2.5H25a.25.25 0 0 1 .25.25M6.75 25V7A.25.25 0 0 1 7 6.75h8.25v18.5H7a.25.25 0 0 1-.25-.25m18.25.25h-8.25v-2.5h8.5V25a.25.25 0 0 1-.25.25"/>`, 'bold': `<path fill="currentColor" d="M25 4.5H7A2.5 2.5 0 0 0 4.5 7v18A2.5 2.5 0 0 0 7 27.5h18a2.5 2.5 0 0 0 2.5-2.5V7A2.5 2.5 0 0 0 25 4.5m-7.5 8h7v2h-7zm0 5h7v2h-7zm7-8h-7v-2h7zm-17-2h7v17h-7zm10 17v-2h7v2z"/>`, 'fill': `<path fill="currentColor" d="M25 5H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M7 7h9v18H7z"/>`, 'duotone': `<path fill="currentColor" d="M26 7v18a1 1 0 0 1-1 1h-9V6h9a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M25 5H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M7 7h8v18H7zm18 18h-8V7h8z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
