<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25.708 15.708a1 1 0 0 1-1.415 0L16 7.414l-8.292 8.294a1 1 0 0 1-1.415-1.415l9-9a1 1 0 0 1 1.415 0l9 9a1 1 0 0 1 0 1.415"/>`, 'thin': `<path fill="currentColor" d="M25.354 15.354a.503.503 0 0 1-.708 0L16 6.707l-8.646 8.647a.5.5 0 0 1-.708-.708l9-9a.5.5 0 0 1 .708 0l9 9a.5.5 0 0 1 0 .708"/>`, 'light': `<path fill="currentColor" d="M25.53 15.53a.75.75 0 0 1-1.06 0L16 7.061l-8.47 8.47a.75.75 0 0 1-1.06-1.06l9-9a.75.75 0 0 1 1.06 0l9 9a.75.75 0 0 1 0 1.06"/>`, 'bold': `<path fill="currentColor" d="M26.061 16.061a1.5 1.5 0 0 1-2.125 0L16 8.125 8.06 16.061a1.503 1.503 0 1 1-2.125-2.125l9-9a1.5 1.5 0 0 1 2.125 0l9 9a1.5 1.5 0 0 1 0 2.125"/>`, 'fill': `<path fill="currentColor" d="M25.924 15.383A1 1 0 0 1 25 16H7a1.001 1.001 0 0 1-.707-1.707l9-9a1 1 0 0 1 1.415 0l9 9a1 1 0 0 1 .216 1.09"/>`, 'duotone': `<path fill="currentColor" d="M25 15H7l9-9z" opacity=".08"/><path fill="currentColor" d="m25.708 14.293-9-9a1 1 0 0 0-1.415 0l-9 9A1 1 0 0 0 7 16h18a1 1 0 0 0 .708-1.707M9.414 14 16 7.414 22.586 14z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
