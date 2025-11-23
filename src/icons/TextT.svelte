<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 7v4a1 1 0 0 1-2 0V8h-7v16h3a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2h3V8H8v3a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M25.5 7v4a.5.5 0 0 1-1 0V7.5h-8v17H20a.5.5 0 0 1 0 1h-8a.5.5 0 0 1 0-1h3.5v-17h-8V11a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M25.75 7v4a.75.75 0 1 1-1.5 0V7.75h-7.5v16.5H20a.75.75 0 1 1 0 1.5h-8a.75.75 0 1 1 0-1.5h3.25V7.75h-7.5V11a.75.75 0 1 1-1.5 0V7A.75.75 0 0 1 7 6.25h18a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M26.5 7v4a1.5 1.5 0 1 1-3 0V8.5h-6v15H20a1.5 1.5 0 1 1 0 3h-8a1.5 1.5 0 1 1 0-3h2.5v-15h-6V11a1.5 1.5 0 0 1-3 0V7A1.5 1.5 0 0 1 7 5.5h18A1.5 1.5 0 0 1 26.5 7"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-3 8a1 1 0 0 1-2 0v-1h-4v11h2a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2h2V11h-4v1a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"/>`, 'duotone': `<path fill="currentColor" d="M25 7v17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7z" opacity=".08"/><path fill="currentColor" d="M26 7v4a1 1 0 0 1-2 0V8h-7v16h3a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2h3V8H8v3a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
