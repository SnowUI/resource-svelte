<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M22 2H10a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 25a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM21 7a1 1 0 0 1-1 1h-8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M22 2.5H10A2.5 2.5 0 0 0 7.5 5v22a2.5 2.5 0 0 0 2.5 2.5h12a2.5 2.5 0 0 0 2.5-2.5V5A2.5 2.5 0 0 0 22 2.5M23.5 27a1.5 1.5 0 0 1-1.5 1.5H10A1.5 1.5 0 0 1 8.5 27V5A1.5 1.5 0 0 1 10 3.5h12A1.5 1.5 0 0 1 23.5 5zm-3-20a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M22 2.25H10A2.75 2.75 0 0 0 7.25 5v22A2.75 2.75 0 0 0 10 29.75h12A2.75 2.75 0 0 0 24.75 27V5A2.75 2.75 0 0 0 22 2.25M23.25 27A1.25 1.25 0 0 1 22 28.25H10A1.25 1.25 0 0 1 8.75 27V5A1.25 1.25 0 0 1 10 3.75h12A1.25 1.25 0 0 1 23.25 5zm-2.5-20a.75.75 0 0 1-.75.75h-8a.75.75 0 1 1 0-1.5h8a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M22 1.5H10A3.5 3.5 0 0 0 6.5 5v22a3.5 3.5 0 0 0 3.5 3.5h12a3.5 3.5 0 0 0 3.5-3.5V5A3.5 3.5 0 0 0 22 1.5m.5 25.5a.5.5 0 0 1-.5.5H10a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5zm-2-19A1.5 1.5 0 0 1 19 9.5h-6a1.5 1.5 0 0 1 0-3h6A1.5 1.5 0 0 1 20.5 8"/>`, 'fill': `<path fill="currentColor" d="M22 2H10a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-2 6h-8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M24 5v22a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2" opacity=".08"/><path fill="currentColor" d="M22 2H10a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 25a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM21 7a1 1 0 0 1-1 1h-8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
