<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25 5H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m0 10h-8V7h8zM15 7v8H7V7zM7 17h8v8H7zm18 8h-8v-8h8z"/>`, 'thin': `<path fill="currentColor" d="M25 5.5H7A1.5 1.5 0 0 0 5.5 7v18A1.5 1.5 0 0 0 7 26.5h18a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 25 5.5m.5 1.5v8.5h-9v-9H25a.5.5 0 0 1 .5.5M7 6.5h8.5v9h-9V7a.5.5 0 0 1 .5-.5M6.5 25v-8.5h9v9H7a.5.5 0 0 1-.5-.5m18.5.5h-8.5v-9h9V25a.5.5 0 0 1-.5.5"/>`, 'light': `<path fill="currentColor" d="M25 5.25H7A1.75 1.75 0 0 0 5.25 7v18A1.75 1.75 0 0 0 7 26.75h18A1.75 1.75 0 0 0 26.75 25V7A1.75 1.75 0 0 0 25 5.25M25.25 7v8.25h-8.5v-8.5H25a.25.25 0 0 1 .25.25M7 6.75h8.25v8.5h-8.5V7A.25.25 0 0 1 7 6.75M6.75 25v-8.25h8.5v8.5H7a.25.25 0 0 1-.25-.25m18.25.25h-8.25v-8.5h8.5V25a.25.25 0 0 1-.25.25"/>`, 'bold': `<path fill="currentColor" d="M25 4.5H7A2.5 2.5 0 0 0 4.5 7v18A2.5 2.5 0 0 0 7 27.5h18a2.5 2.5 0 0 0 2.5-2.5V7A2.5 2.5 0 0 0 25 4.5m-.5 10h-7v-7h7zm-10-7v7h-7v-7zm-7 10h7v7h-7zm10 7v-7h7v7z"/>`, 'fill': `<path fill="currentColor" d="M27 7v7.5a.5.5 0 0 1-.5.5H17V5.5a.5.5 0 0 1 .5-.5H25a2 2 0 0 1 2 2M14.5 5H7a2 2 0 0 0-2 2v7.5a.5.5 0 0 0 .5.5H15V5.5a.5.5 0 0 0-.5-.5m12 12H17v9.5a.5.5 0 0 0 .5.5H25a2 2 0 0 0 2-2v-7.5a.5.5 0 0 0-.5-.5M5 17.5V25a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 .5-.5V17H5.5a.5.5 0 0 0-.5.5"/>`, 'duotone': `<path fill="currentColor" d="M26 7v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M25 5H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m0 10h-8V7h8zM15 7v8H7V7zM7 17h8v8H7zm18 8h-8v-8h8z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
