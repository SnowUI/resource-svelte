<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 12a9.999 9.999 0 1 0-11 9.95V25h-4a1 1 0 0 0 0 2h4v3a1 1 0 0 0 2 0v-3h4a1 1 0 0 0 0-2h-4v-3.05A10.014 10.014 0 0 0 26 12M8 12a8 8 0 1 1 8 8 8.01 8.01 0 0 1-8-8"/>`, 'thin': `<path fill="currentColor" d="M25.5 12a9.5 9.5 0 1 0-10 9.486V25.5H11a.5.5 0 0 0 0 1h4.5V30a.5.5 0 0 0 1 0v-3.5H21a.5.5 0 0 0 0-1h-4.5v-4.014a9.51 9.51 0 0 0 9-9.486m-18 0a8.5 8.5 0 1 1 8.5 8.5A8.51 8.51 0 0 1 7.5 12"/>`, 'light': `<path fill="currentColor" d="M25.75 12a9.75 9.75 0 1 0-10.5 9.719v3.531H11a.75.75 0 1 0 0 1.5h4.25V30a.75.75 0 1 0 1.5 0v-3.25H21a.75.75 0 1 0 0-1.5h-4.25v-3.531a9.76 9.76 0 0 0 9-9.719m-18 0A8.25 8.25 0 1 1 16 20.25 8.26 8.26 0 0 1 7.75 12"/>`, 'bold': `<path fill="currentColor" d="M26.5 12a10.5 10.5 0 1 0-12 10.391V24.5H11a1.5 1.5 0 0 0 0 3h3.5V30a1.5 1.5 0 1 0 3 0v-2.5H21a1.5 1.5 0 1 0 0-3h-3.5v-2.109A10.516 10.516 0 0 0 26.5 12m-18 0a7.5 7.5 0 1 1 7.5 7.5A7.51 7.51 0 0 1 8.5 12"/>`, 'fill': `<path fill="currentColor" d="M16 18a5 5 0 1 1 0-10 5 5 0 0 1 0 10M27 5v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2M17 22v-2.073a7 7 0 1 0-2 0V22h-3a1 1 0 0 0 0 2h3v2a1 1 0 0 0 2 0v-2h3a1 1 0 0 0 0-2z"/>`, 'duotone': `<path fill="currentColor" d="M25 12a9 9 0 1 1-17.999 0A9 9 0 0 1 25 12" opacity=".08"/><path fill="currentColor" d="M26 12a9.999 9.999 0 1 0-11 9.95V25h-4a1 1 0 0 0 0 2h4v3a1 1 0 0 0 2 0v-3h4a1 1 0 0 0 0-2h-4v-3.05A10.014 10.014 0 0 0 26 12M8 12a8 8 0 1 1 8 8 8.01 8.01 0 0 1-8-8"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
