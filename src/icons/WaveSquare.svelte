<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M30 16v7a1 1 0 0 1-1 1H16a1 1 0 0 1-1-1V10H4v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13h11v-6a1 1 0 0 1 2 0"/>`, 'thin': `<path fill="currentColor" d="M29.5 16v7a.5.5 0 0 1-.5.5H16a.5.5 0 0 1-.5-.5V9.5h-12V16a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v13.5h12V16a.5.5 0 0 1 1 0"/>`, 'light': `<path fill="currentColor" d="M29.75 16v7a.75.75 0 0 1-.75.75H16a.75.75 0 0 1-.75-.75V9.75H3.75V16a.75.75 0 1 1-1.5 0V9A.75.75 0 0 1 3 8.25h13a.75.75 0 0 1 .75.75v13.25h11.5V16a.75.75 0 1 1 1.5 0"/>`, 'bold': `<path fill="currentColor" d="M30.5 16v7a1.5 1.5 0 0 1-1.5 1.5H16a1.5 1.5 0 0 1-1.5-1.5V10.5h-10V16a1.5 1.5 0 0 1-3 0V9A1.5 1.5 0 0 1 3 7.5h13A1.5 1.5 0 0 1 17.5 9v12.5h10V16a1.5 1.5 0 1 1 3 0"/>`, 'fill': `<path fill="currentColor" d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-1 16a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-9H8v4a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9h7v-4a1 1 0 0 1 2 0z"/>`, 'duotone': `<path fill="currentColor" d="M16 9v7H3V9zm0 7v7h13v-7z" opacity=".08"/><path fill="currentColor" d="M30 16v7a1 1 0 0 1-1 1H16a1 1 0 0 1-1-1V10H4v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13h11v-6a1 1 0 0 1 2 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
