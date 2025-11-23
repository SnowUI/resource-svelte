<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 12a1 1 0 0 1-1 1h-8v14a1 1 0 0 1-2 0V13H7a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1M7 8h18a1 1 0 1 0 0-2H7a1 1 0 0 0 0 2"/>`, 'thin': `<path fill="currentColor" d="M25.5 12a.5.5 0 0 1-.5.5h-8.5V27a.5.5 0 0 1-1 0V12.5H7a.5.5 0 0 1 0-1h18a.5.5 0 0 1 .5.5M7 7.5h18a.5.5 0 0 0 0-1H7a.5.5 0 1 0 0 1"/>`, 'light': `<path fill="currentColor" d="M25.75 12a.75.75 0 0 1-.75.75h-8.25V27a.75.75 0 1 1-1.5 0V12.75H7a.75.75 0 1 1 0-1.5h18a.75.75 0 0 1 .75.75M7 7.75h18a.75.75 0 1 0 0-1.5H7a.75.75 0 0 0 0 1.5"/>`, 'bold': `<path fill="currentColor" d="M26.5 12.5A1.5 1.5 0 0 1 25 14h-7.5v12.5a1.5 1.5 0 1 1-3 0V14H7a1.5 1.5 0 1 1 0-3h18a1.5 1.5 0 0 1 1.5 1.5M7 8h18a1.5 1.5 0 0 0 0-3H7a1.5 1.5 0 0 0 0 3"/>`, 'fill': `<path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m6 12h-5v9a1 1 0 0 1-2 0v-9h-5a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2m0-4H10a1 1 0 0 1 0-2h12a1 1 0 1 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M25 7v5H7V7z" opacity=".08"/><path fill="currentColor" d="M26 12a1 1 0 0 1-1 1h-8v14a1 1 0 0 1-2 0V13H7a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1M7 8h18a1 1 0 1 0 0-2H7a1 1 0 0 0 0 2"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
