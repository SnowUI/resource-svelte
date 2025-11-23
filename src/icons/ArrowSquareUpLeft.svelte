<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 22H6V6h20zm-15-8v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-3.586l6.294 6.293a1 1 0 0 1-1.415 1.415L13 14.414V18a1 1 0 0 1-2 0"/>`, 'thin': `<path fill="currentColor" d="M26 4.5H6A1.5 1.5 0 0 0 4.5 6v20A1.5 1.5 0 0 0 6 27.5h20a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 26 4.5m.5 21.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h20a.5.5 0 0 1 .5.5zm-6.146-6.354a.5.5 0 0 1-.708.708L12.5 13.208V18a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-4.792z"/>`, 'light': `<path fill="currentColor" d="M26 4.25H6A1.75 1.75 0 0 0 4.25 6v20A1.75 1.75 0 0 0 6 27.75h20A1.75 1.75 0 0 0 27.75 26V6A1.75 1.75 0 0 0 26 4.25M26.25 26a.25.25 0 0 1-.25.25H6a.25.25 0 0 1-.25-.25V6A.25.25 0 0 1 6 5.75h20a.25.25 0 0 1 .25.25zm-5.72-6.53a.75.75 0 1 1-1.06 1.06l-6.72-6.72V18a.75.75 0 1 1-1.5 0v-6a.75.75 0 0 1 .75-.75h6a.75.75 0 1 1 0 1.5h-4.19z"/>`, 'bold': `<path fill="currentColor" d="M26 3.5H6A2.5 2.5 0 0 0 3.5 6v20A2.5 2.5 0 0 0 6 28.5h20a2.5 2.5 0 0 0 2.5-2.5V6A2.5 2.5 0 0 0 26 3.5m-.5 22h-19v-19h19zm-15-7.5v-6a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 1 1 0 3h-2.375l5.44 5.439a1.503 1.503 0 0 1-2.125 2.125l-5.44-5.439V18a1.5 1.5 0 1 1-3 0"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-5.292 16.708a1 1 0 0 1-1.415 0L13 14.414V18a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-3.586l6.294 6.293a1 1 0 0 1 0 1.415"/>`, 'duotone': `<path fill="currentColor" d="M27 6v20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 22H6V6h20zm-15-8v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-3.586l6.294 6.293a1 1 0 0 1-1.415 1.415L13 14.414V18a1 1 0 0 1-2 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
