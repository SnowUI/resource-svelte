<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M24 4H8a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4m2 20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zM15 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`, 'thin': `<path fill="currentColor" d="M24 4.5H8A3.5 3.5 0 0 0 4.5 8v16A3.5 3.5 0 0 0 8 27.5h16a3.5 3.5 0 0 0 3.5-3.5V8A3.5 3.5 0 0 0 24 4.5M26.5 24a2.5 2.5 0 0 1-2.5 2.5H8A2.5 2.5 0 0 1 5.5 24V8A2.5 2.5 0 0 1 8 5.5h16A2.5 2.5 0 0 1 26.5 8zm-12-10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`, 'light': `<path fill="currentColor" d="M24 4.25H8A3.75 3.75 0 0 0 4.25 8v16A3.75 3.75 0 0 0 8 27.75h16A3.75 3.75 0 0 0 27.75 24V8A3.75 3.75 0 0 0 24 4.25M26.25 24A2.25 2.25 0 0 1 24 26.25H8A2.25 2.25 0 0 1 5.75 24V8A2.25 2.25 0 0 1 8 5.75h16A2.25 2.25 0 0 1 26.25 8zm-11.5-10.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m5 5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"/>`, 'bold': `<path fill="currentColor" d="M24 3.5H8A4.5 4.5 0 0 0 3.5 8v16A4.5 4.5 0 0 0 8 28.5h16a4.5 4.5 0 0 0 4.5-4.5V8A4.5 4.5 0 0 0 24 3.5M25.5 24a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 24V8A1.5 1.5 0 0 1 8 6.5h16A1.5 1.5 0 0 1 25.5 8zM15 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`, 'fill': `<path fill="currentColor" d="M24 4H8a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4M13.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>`, 'duotone': `<path fill="currentColor" d="M27 8v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3" opacity=".08"/><path fill="currentColor" d="M24 4H8a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4m2 20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zM15 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
