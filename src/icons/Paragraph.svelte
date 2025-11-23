<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 5H12a8 8 0 1 0 0 16h5v5a1 1 0 0 0 2 0V7h3v19a1 1 0 0 0 2 0V7h2a1 1 0 1 0 0-2m-9 14h-5a6 6 0 1 1 0-12h5z"/>`, 'thin': `<path fill="currentColor" d="M26 5.5H12a7.5 7.5 0 0 0 0 15h5.5V26a.5.5 0 0 0 1 0V6.5h4V26a.5.5 0 0 0 1 0V6.5H26a.5.5 0 0 0 0-1m-8.5 14H12a6.5 6.5 0 1 1 0-13h5.5z"/>`, 'light': `<path fill="currentColor" d="M26 5.25H12a7.75 7.75 0 0 0 0 15.5h5.25V26a.75.75 0 1 0 1.5 0V6.75h3.5V26a.75.75 0 1 0 1.5 0V6.75H26a.75.75 0 1 0 0-1.5m-8.75 14H12a6.25 6.25 0 0 1 0-12.5h5.25z"/>`, 'bold': `<path fill="currentColor" d="M26 4.5H12a8.5 8.5 0 1 0 0 17h4.5V26a1.5 1.5 0 1 0 3 0V7.5h2V26a1.5 1.5 0 1 0 3 0V7.5H26a1.5 1.5 0 0 0 0-3m-9.5 14H12a5.5 5.5 0 0 1 0-11h4.5z"/>`, 'fill': `<path fill="currentColor" d="M27 6a1 1 0 0 1-1 1h-2v19a1 1 0 0 1-2 0V7h-3v19a1 1 0 0 1-2 0v-5h-5a8 8 0 0 1 0-16h14a1 1 0 0 1 1 1"/>`, 'duotone': `<path fill="currentColor" d="M18 6v14h-6a7 7 0 0 1 0-14z" opacity=".08"/><path fill="currentColor" d="M26 5H12a8 8 0 1 0 0 16h5v5a1 1 0 0 0 2 0V7h3v19a1 1 0 0 0 2 0V7h2a1 1 0 1 0 0-2m-9 14h-5a6 6 0 1 1 0-12h5z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
