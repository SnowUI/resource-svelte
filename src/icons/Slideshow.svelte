<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M24 6H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 18H8V8h16zm6-17v18a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0M4 7v18a1 1 0 1 1-2 0V7a1 1 0 0 1 2 0"/>`, 'thin': `<path fill="currentColor" d="M24 6.5H8A1.5 1.5 0 0 0 6.5 8v16A1.5 1.5 0 0 0 8 25.5h16a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 24 6.5m.5 17.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5zm5-17v18a.5.5 0 0 1-1 0V7a.5.5 0 0 1 1 0m-26 0v18a.5.5 0 0 1-1 0V7a.5.5 0 1 1 1 0"/>`, 'light': `<path fill="currentColor" d="M24 6.25H8A1.75 1.75 0 0 0 6.25 8v16A1.75 1.75 0 0 0 8 25.75h16A1.75 1.75 0 0 0 25.75 24V8A1.75 1.75 0 0 0 24 6.25M24.25 24a.25.25 0 0 1-.25.25H8a.25.25 0 0 1-.25-.25V8A.25.25 0 0 1 8 7.75h16a.25.25 0 0 1 .25.25zm5.5-17v18a.75.75 0 1 1-1.5 0V7a.75.75 0 1 1 1.5 0m-26 0v18a.75.75 0 1 1-1.5 0V7a.75.75 0 0 1 1.5 0"/>`, 'bold': `<path fill="currentColor" d="M23 5.5H9A2.5 2.5 0 0 0 6.5 8v16A2.5 2.5 0 0 0 9 26.5h14a2.5 2.5 0 0 0 2.5-2.5V8A2.5 2.5 0 0 0 23 5.5m-.5 18h-13v-15h13zm8-16.5v18a1.5 1.5 0 1 1-3 0V7a1.5 1.5 0 1 1 3 0m-26 0v18a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 0 1 3 0"/>`, 'fill': `<path fill="currentColor" d="M26 8v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2m3-2a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1M3 6a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1"/>`, 'duotone': `<path fill="currentColor" d="M25 8v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M24 6H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 18H8V8h16zm6-17v18a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0M4 7v18a1 1 0 1 1-2 0V7a1 1 0 0 1 2 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
