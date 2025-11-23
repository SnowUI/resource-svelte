<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 15h-4V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v9H6a1 1 0 0 0 0 2h4v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-9h4a1 1 0 0 0 0-2m-6 11h-8V6h8z"/>`, 'thin': `<path fill="currentColor" d="M26 15.5h-4.5V6A1.5 1.5 0 0 0 20 4.5h-8A1.5 1.5 0 0 0 10.5 6v9.5H6a.5.5 0 0 0 0 1h4.5V26a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5v-9.5H26a.5.5 0 0 0 0-1M20.5 26a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5z"/>`, 'light': `<path fill="currentColor" d="M26 15.25h-4.25V6A1.75 1.75 0 0 0 20 4.25h-8A1.75 1.75 0 0 0 10.25 6v9.25H6a.75.75 0 1 0 0 1.5h4.25V26A1.75 1.75 0 0 0 12 27.75h8A1.75 1.75 0 0 0 21.75 26v-9.25H26a.75.75 0 1 0 0-1.5M20.25 26a.25.25 0 0 1-.25.25h-8a.25.25 0 0 1-.25-.25V6a.25.25 0 0 1 .25-.25h8a.25.25 0 0 1 .25.25z"/>`, 'bold': `<path fill="currentColor" d="M26 14.5h-3.5V6A2.5 2.5 0 0 0 20 3.5h-8A2.5 2.5 0 0 0 9.5 6v8.5H6a1.5 1.5 0 1 0 0 3h3.5V26a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5v-8.5H26a1.5 1.5 0 1 0 0-3m-6.5 11h-7v-19h7z"/>`, 'fill': `<path fill="currentColor" d="M27 16a1 1 0 0 1-1 1h-4v9a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-9H6a1 1 0 0 1 0-2h4V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9h4a1 1 0 0 1 1 1"/>`, 'duotone': `<path fill="currentColor" d="M21 6v20a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M26 15h-4V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v9H6a1 1 0 0 0 0 2h4v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-9h4a1 1 0 0 0 0-2m-6 11h-8V6h8z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
