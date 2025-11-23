<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25 7a1 1 0 0 1-1 1h-4.279l-5.334 16H18a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h4.279l5.334-16H14a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M24.5 7a.5.5 0 0 1-.5.5h-4.64l-5.666 17H18a.5.5 0 0 1 0 1H8a.5.5 0 0 1 0-1h4.64l5.666-17H14a.5.5 0 0 1 0-1h10a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M24.75 7a.75.75 0 0 1-.75.75h-4.46l-5.5 16.5H18a.75.75 0 1 1 0 1.5H8a.75.75 0 1 1 0-1.5h4.46l5.5-16.5H14a.75.75 0 1 1 0-1.5h10a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M25.5 7A1.5 1.5 0 0 1 24 8.5h-3.919l-5 15H18a1.5 1.5 0 1 1 0 3H8a1.5 1.5 0 1 1 0-3h3.919l5-15H14a1.5 1.5 0 0 1 0-3h10A1.5 1.5 0 0 1 25.5 7"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-4 6h-2.795l-4.286 12H17a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2h2.795l4.286-12H15a1 1 0 1 1 0-2h7a1 1 0 1 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="m24 7-6 18H8l6-18z" opacity=".08"/><path fill="currentColor" d="M25 7a1 1 0 0 1-1 1h-4.279l-5.334 16H18a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h4.279l5.334-16H14a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
