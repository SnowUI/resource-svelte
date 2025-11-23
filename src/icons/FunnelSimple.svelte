<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25 16a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1m4-7H3a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2M19 21h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2"/>`, 'thin': `<path fill="currentColor" d="M24.5 16a.5.5 0 0 1-.5.5H8a.5.5 0 0 1 0-1h16a.5.5 0 0 1 .5.5M29 9.5H3a.5.5 0 1 0 0 1h26a.5.5 0 0 0 0-1m-10 12h-6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1"/>`, 'light': `<path fill="currentColor" d="M24.75 16a.75.75 0 0 1-.75.75H8a.75.75 0 1 1 0-1.5h16a.75.75 0 0 1 .75.75M29 9.25H3a.75.75 0 0 0 0 1.5h26a.75.75 0 1 0 0-1.5m-10 12h-6a.75.75 0 1 0 0 1.5h6a.75.75 0 1 0 0-1.5"/>`, 'bold': `<path fill="currentColor" d="M25.5 16a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h16a1.5 1.5 0 0 1 1.5 1.5M29 8.5H3a1.5 1.5 0 0 0 0 3h26a1.5 1.5 0 1 0 0-3m-10 12h-6a1.5 1.5 0 1 0 0 3h6a1.5 1.5 0 1 0 0-3"/>`, 'fill': `<path fill="currentColor" d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-9 17h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m4-5H10a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2m4-5H6a1 1 0 0 1 0-2h20a1 1 0 0 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M29 7v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2" opacity=".08"/><path fill="currentColor" d="M25 16a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1m4-7H3a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2M19 21h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
