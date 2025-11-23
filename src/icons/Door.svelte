<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M29 27h-3V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v22H3a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2M8 5h16v22H8zm13 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`, 'thin': `<path fill="currentColor" d="M29 27.5h-3.5V5A1.5 1.5 0 0 0 24 3.5H8A1.5 1.5 0 0 0 6.5 5v22.5H3a.5.5 0 0 0 0 1h26a.5.5 0 0 0 0-1M7.5 5a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5v22.5h-17zm13 11.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`, 'light': `<path fill="currentColor" d="M29 27.25h-3.25V5A1.75 1.75 0 0 0 24 3.25H8A1.75 1.75 0 0 0 6.25 5v22.25H3a.75.75 0 1 0 0 1.5h26a.75.75 0 1 0 0-1.5M7.75 5A.25.25 0 0 1 8 4.75h16a.25.25 0 0 1 .25.25v22.25H7.75zm13 11.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"/>`, 'bold': `<path fill="currentColor" d="M29 26.5h-2.5V5A2.5 2.5 0 0 0 24 2.5H8A2.5 2.5 0 0 0 5.5 5v21.5H3a1.5 1.5 0 1 0 0 3h26a1.5 1.5 0 1 0 0-3M8.5 5.5h15v21h-15zm13 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`, 'fill': `<path fill="currentColor" d="M29 27h-3V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v22H3a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2m-8.5-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>`, 'duotone': `<path fill="currentColor" d="M25 5v23H7V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M29 27h-3V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v22H3a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2M8 5h16v22H8zm13 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
