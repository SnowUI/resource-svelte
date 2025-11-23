<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M23 19a1 1 0 0 1-1 1h-2v6a1 1 0 0 1-2 0v-6H9a1 1 0 0 1-.941-1.336l5-14a1 1 0 0 1 1.882.672L10.42 18H18v-6a1 1 0 1 1 2 0v6h2a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M22.5 19a.5.5 0 0 1-.5.5h-2.5V26a.5.5 0 0 1-1 0v-6.5H9a.5.5 0 0 1-.471-.669l5-14a.5.5 0 0 1 .942.336L9.711 18.5h8.79V12a.5.5 0 0 1 1 0v6.5H22a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M22.75 19a.75.75 0 0 1-.75.75h-2.25V26a.75.75 0 0 1-1.5 0v-6.25H9a.75.75 0 0 1-.706-1l5-14a.75.75 0 0 1 1.412.5l-4.642 13h8.186V12a.75.75 0 0 1 1.5 0v6.25H22a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M23.5 19a1.5 1.5 0 0 1-1.5 1.5h-1.5V26a1.5 1.5 0 1 1-3 0v-5.5H9a1.5 1.5 0 0 1-1.412-2l5-14a1.5 1.5 0 1 1 2.825 1l-4.288 12H17.5V12a1.5 1.5 0 0 1 3 0v5.5H22a1.5 1.5 0 0 1 1.5 1.5"/>`, 'fill': `<path fill="currentColor" d="M25 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-4 16h-1v4a1 1 0 0 1-2 0v-4h-7a1 1 0 0 1-.929-1.375l4-10a1.002 1.002 0 0 1 1.858.75L12.477 17H18v-4a1 1 0 0 1 2 0v4h1a1 1 0 0 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M27 5v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2" opacity=".08"/><path fill="currentColor" d="M23 19a1 1 0 0 1-1 1h-2v6a1 1 0 0 1-2 0v-6H9a1 1 0 0 1-.941-1.336l5-14a1 1 0 0 1 1.882.672L10.42 18H18v-6a1 1 0 1 1 2 0v6h2a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
