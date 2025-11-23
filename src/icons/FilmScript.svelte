<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 24H7V5h18zM12 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`, 'thin': `<path fill="currentColor" d="M25 3.5H7A1.5 1.5 0 0 0 5.5 5v22A1.5 1.5 0 0 0 7 28.5h18a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 25 3.5m.5 23.5a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 .5.5zm-14-17a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`, 'light': `<path fill="currentColor" d="M25 3.25H7A1.75 1.75 0 0 0 5.25 5v22A1.75 1.75 0 0 0 7 28.75h18A1.75 1.75 0 0 0 26.75 27V5A1.75 1.75 0 0 0 25 3.25M25.25 27a.25.25 0 0 1-.25.25H7a.25.25 0 0 1-.25-.25V5A.25.25 0 0 1 7 4.75h18a.25.25 0 0 1 .25.25zm-13.5-17a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m0 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m0-6a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"/>`, 'bold': `<path fill="currentColor" d="M25 2.5H7A2.5 2.5 0 0 0 4.5 5v22A2.5 2.5 0 0 0 7 29.5h18a2.5 2.5 0 0 0 2.5-2.5V5A2.5 2.5 0 0 0 25 2.5m-.5 24h-17v-21h17zM9.5 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0-6a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>`, 'fill': `<path fill="currentColor" d="M25 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M9.5 23.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0-6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0-6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>`, 'duotone': `<path fill="currentColor" d="M26 5v22a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M25 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 24H7V5h18zM12 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
