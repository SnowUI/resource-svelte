<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25 5H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m0 2v8H7V7zm0 18H7v-8h18z"/>`, 'thin': `<path fill="currentColor" d="M25 5.5H7A1.5 1.5 0 0 0 5.5 7v18A1.5 1.5 0 0 0 7 26.5h18a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 25 5.5m-18 1h18a.5.5 0 0 1 .5.5v8.5h-19V7a.5.5 0 0 1 .5-.5m18 19H7a.5.5 0 0 1-.5-.5v-8.5h19V25a.5.5 0 0 1-.5.5"/>`, 'light': `<path fill="currentColor" d="M25 5.25H7A1.75 1.75 0 0 0 5.25 7v18A1.75 1.75 0 0 0 7 26.75h18A1.75 1.75 0 0 0 26.75 25V7A1.75 1.75 0 0 0 25 5.25M7 6.75h18a.25.25 0 0 1 .25.25v8.25H6.75V7A.25.25 0 0 1 7 6.75m18 18.5H7a.25.25 0 0 1-.25-.25v-8.25h18.5V25a.25.25 0 0 1-.25.25"/>`, 'bold': `<path fill="currentColor" d="M25 4.5H7A2.5 2.5 0 0 0 4.5 7v18A2.5 2.5 0 0 0 7 27.5h18a2.5 2.5 0 0 0 2.5-2.5V7A2.5 2.5 0 0 0 25 4.5m-.5 3v7h-17v-7zm-17 17v-7h17v7z"/>`, 'fill': `<path fill="currentColor" d="M27 7v7.5a.5.5 0 0 1-.5.5h-21a.5.5 0 0 1-.5-.5V7a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2m-.5 10h-21a.5.5 0 0 0-.5.5V25a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-7.5a.5.5 0 0 0-.5-.5"/>`, 'duotone': `<path fill="currentColor" d="M26 7v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M25 5H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m0 2v8H7V7zm0 18H7v-8h18z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
