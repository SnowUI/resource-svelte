<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25.708 14.708a1 1 0 0 1-1.415 0L17 7.414V27a1 1 0 0 1-2 0V7.414l-7.292 7.294a1 1 0 0 1-1.415-1.415l9-9a1 1 0 0 1 1.415 0l9 9a1 1 0 0 1 0 1.415"/>`, 'thin': `<path fill="currentColor" d="M25.354 14.354a.503.503 0 0 1-.708 0L16.5 6.207V27a.5.5 0 1 1-1 0V6.207l-8.146 8.147a.5.5 0 0 1-.708-.708l9-9a.5.5 0 0 1 .708 0l9 9a.5.5 0 0 1 0 .708"/>`, 'light': `<path fill="currentColor" d="M25.53 14.53a.75.75 0 0 1-1.06 0l-7.72-7.719v20.19a.75.75 0 1 1-1.5 0V6.81l-7.72 7.72a.75.75 0 0 1-1.06-1.06l9-9a.75.75 0 0 1 1.06 0l9 9a.75.75 0 0 1 0 1.06"/>`, 'bold': `<path fill="currentColor" d="M26.061 15.061a1.5 1.5 0 0 1-2.125 0L17.5 8.625V27a1.5 1.5 0 1 1-3 0V8.625L8.06 15.061a1.503 1.503 0 1 1-2.125-2.125l9-9a1.5 1.5 0 0 1 2.125 0l9 9a1.5 1.5 0 0 1 0 2.125"/>`, 'fill': `<path fill="currentColor" d="M25.924 14.383A1 1 0 0 1 25 15h-8v12a1 1 0 0 1-2 0V15H7a1.001 1.001 0 0 1-.707-1.707l9-9a1 1 0 0 1 1.415 0l9 9a1 1 0 0 1 .216 1.09"/>`, 'duotone': `<path fill="currentColor" d="M25 14H7l9-9z" opacity=".08"/><path fill="currentColor" d="m25.708 13.293-9-9a1 1 0 0 0-1.415 0l-9 9A1 1 0 0 0 7 15h8v12a1 1 0 1 0 2 0V15h8a1 1 0 0 0 .708-1.707M9.414 13 16 6.414 22.586 13z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
