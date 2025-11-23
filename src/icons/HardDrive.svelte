<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 8H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m0 14H4V10h24zm-3-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`, 'thin': `<path fill="currentColor" d="M28 8.5H4A1.5 1.5 0 0 0 2.5 10v12A1.5 1.5 0 0 0 4 23.5h24a1.5 1.5 0 0 0 1.5-1.5V10A1.5 1.5 0 0 0 28 8.5m.5 13.5a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .5-.5h24a.5.5 0 0 1 .5.5zm-4-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`, 'light': `<path fill="currentColor" d="M28 8.25H4A1.75 1.75 0 0 0 2.25 10v12A1.75 1.75 0 0 0 4 23.75h24A1.75 1.75 0 0 0 29.75 22V10A1.75 1.75 0 0 0 28 8.25M28.25 22a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25V10A.25.25 0 0 1 4 9.75h24a.25.25 0 0 1 .25.25zm-3.5-6a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"/>`, 'bold': `<path fill="currentColor" d="M28 7.5H4A2.5 2.5 0 0 0 1.5 10v12A2.5 2.5 0 0 0 4 24.5h24a2.5 2.5 0 0 0 2.5-2.5V10A2.5 2.5 0 0 0 28 7.5m-.5 14h-23v-11h23zm-7-5.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>`, 'fill': `<path fill="currentColor" d="M28 8H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m-4.5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>`, 'duotone': `<path fill="currentColor" d="M29 10v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M28 8H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m0 14H4V10h24zm-3-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
