<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m30.919 18.606-6-14A1 1 0 0 0 24 4H8a1 1 0 0 0-.919.606l-6 14A1 1 0 0 0 2 20h13v6h-3a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-6h7v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 .919-1.394M3.516 18 8.66 6h14.68l5.144 12z"/>`, 'thin': `<path fill="currentColor" d="m30.46 18.803-6-14A.5.5 0 0 0 24 4.5H8a.5.5 0 0 0-.46.303l-6 14A.5.5 0 0 0 2 19.5h13.5v7H12a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-3.5v-7h8V24a.5.5 0 0 0 1 0v-4.5H30a.5.5 0 0 0 .46-.698M2.759 18.5l5.57-13h15.34l5.572 13z"/>`, 'light': `<path fill="currentColor" d="m30.689 18.705-6-14a.75.75 0 0 0-.69-.455H8a.75.75 0 0 0-.688.455l-6 14A.75.75 0 0 0 2 19.75h13.25v6.5H12a.75.75 0 0 0 0 1.5h8a.75.75 0 1 0 0-1.5h-3.25v-6.5h7.5V24a.75.75 0 0 0 1.5 0v-4.25H30a.75.75 0 0 0 .689-1.045M3.137 18.25 8.5 5.75h15l5.362 12.5z"/>`, 'bold': `<path fill="currentColor" d="m31.375 18.409-6-14A1.5 1.5 0 0 0 24 3.5H8a1.5 1.5 0 0 0-1.375.909l-6 14A1.5 1.5 0 0 0 2 20.5h12.5v5H12a1.5 1.5 0 1 0 0 3h8a1.5 1.5 0 1 0 0-3h-2.5v-5h6V24a1.5 1.5 0 1 0 3 0v-3.5H30a1.5 1.5 0 0 0 1.375-2.091m-27.1-.909 4.714-11H23.01l4.714 11z"/>`, 'fill': `<path fill="currentColor" d="M30.835 19.55A1 1 0 0 1 30 20h-4v4a1 1 0 1 1-2 0v-4h-7v6h3a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2h3v-6H2a1 1 0 0 1-.919-1.394l6-14A1 1 0 0 1 8 4h16a1 1 0 0 1 .919.606l6 14a1 1 0 0 1-.084.944"/>`, 'duotone': `<path fill="currentColor" d="M30 19H2L8 5h16z" opacity=".08"/><path fill="currentColor" d="m30.919 18.606-6-14A1 1 0 0 0 24 4H8a1 1 0 0 0-.919.606l-6 14A1 1 0 0 0 2 20h13v6h-3a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-6h7v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 .919-1.394M3.516 18 8.66 6h14.68l5.144 12z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
