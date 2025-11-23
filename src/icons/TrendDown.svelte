<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M30 17v8a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h5.586L17 14.414l-4.292 4.294a1 1 0 0 1-1.415 0l-9-9a1 1 0 1 1 1.415-1.415L12 16.586l4.293-4.293a1 1 0 0 1 1.415 0L28 22.586V17a1 1 0 1 1 2 0"/>`, 'thin': `<path fill="currentColor" d="M29.5 17v8a.5.5 0 0 1-.5.5h-8a.5.5 0 1 1 0-1h6.792L17 13.708l-4.646 4.646a.5.5 0 0 1-.708 0l-9-9a.5.5 0 1 1 .708-.708L12 17.293l4.646-4.647a.5.5 0 0 1 .707 0L28.5 23.793V17a.5.5 0 0 1 1 0"/>`, 'light': `<path fill="currentColor" d="M29.75 17v8a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1 0-1.5h6.19L17 14.061l-4.47 4.47a.75.75 0 0 1-1.06 0l-9-9a.75.75 0 0 1 1.06-1.06L12 16.938l4.47-4.469a.75.75 0 0 1 1.06 0l10.72 10.72V17a.75.75 0 0 1 1.5 0"/>`, 'bold': `<path fill="currentColor" d="M30.5 17v8a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 1 1 0-3h4.375L17 15.125l-3.939 3.94a1.5 1.5 0 0 1-2.125 0l-9-9A1.503 1.503 0 1 1 4.061 7.94L12 15.875l3.939-3.94a1.5 1.5 0 0 1 2.125 0l9.436 9.44V17a1.5 1.5 0 0 1 3 0"/>`, 'fill': `<path fill="currentColor" d="M30 17v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-.707-1.707L23.586 21 17 14.414l-4.292 4.294a1 1 0 0 1-1.415 0l-9-9a1 1 0 1 1 1.415-1.415L12 16.586l4.293-4.293a1 1 0 0 1 1.415 0L25 19.586l3.293-3.293A1 1 0 0 1 30 17"/>`, 'duotone': `<path fill="currentColor" d="M29 17v8h-8z" opacity=".08"/><path fill="currentColor" d="M29.383 16.076a1 1 0 0 0-1.09.217L25 19.586l-7.292-7.293a1 1 0 0 0-1.415 0L12 16.586 3.708 8.293a1 1 0 1 0-1.415 1.415l9 9a1 1 0 0 0 1.415 0L17 14.414 23.586 21l-3.293 3.293A1 1 0 0 0 21 26h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-.617-.924M28 24h-4.586L28 19.414z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
