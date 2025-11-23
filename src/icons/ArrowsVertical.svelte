<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M20.708 24.292a1 1 0 0 1 0 1.415l-4 4a1 1 0 0 1-1.415 0l-4-4a1 1 0 1 1 1.415-1.415L15 26.586V5.414l-2.292 2.293a1 1 0 0 1-1.415-1.415l4-4a1 1 0 0 1 1.415 0l4 4a1 1 0 0 1-1.415 1.415L17 5.414v21.172l2.293-2.294a1 1 0 0 1 1.415 0"/>`, 'thin': `<path fill="currentColor" d="M20.354 24.646a.5.5 0 0 1 0 .708l-4 4a.503.503 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708l3.146 3.146V4.207l-3.146 3.147a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L16.5 4.207v23.585l3.146-3.146a.5.5 0 0 1 .708 0"/>`, 'light': `<path fill="currentColor" d="M20.53 24.47a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06l2.72 2.719V4.814L12.53 7.53a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06L16.75 4.81v22.375l2.72-2.719a.75.75 0 0 1 1.06.003"/>`, 'bold': `<path fill="currentColor" d="M21.061 23.939a1.5 1.5 0 0 1 0 2.125l-4 4a1.5 1.5 0 0 1-2.125 0l-4-4a1.503 1.503 0 0 1 2.125-2.125l1.439 1.436V6.625L13.06 8.061a1.502 1.502 0 1 1-2.125-2.125l4-4a1.5 1.5 0 0 1 2.125 0l4 4a1.503 1.503 0 1 1-2.125 2.125L17.5 6.625v18.75l1.439-1.44a1.5 1.5 0 0 1 2.122.004"/>`, 'fill': `<path fill="currentColor" d="M20.924 24.617a1 1 0 0 1-.216 1.09l-4 4a1 1 0 0 1-1.415 0l-4-4A1 1 0 0 1 12 24h3V8h-3a1 1 0 0 1-.707-1.708l4-4a1 1 0 0 1 1.415 0l4 4A1 1 0 0 1 20 8h-3v16h3a1 1 0 0 1 .924.617"/>`, 'duotone': `<path fill="currentColor" d="M20 7h-8l4-4zm-4 22 4-4h-8z" opacity=".08"/><path fill="currentColor" d="M20 24h-3V8h3a1 1 0 0 0 .708-1.708l-4-4a1 1 0 0 0-1.415 0l-4 4A1 1 0 0 0 12 8h3v16h-3a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.415 0l4-4A1 1 0 0 0 20 24M16 4.414 17.586 6h-3.172zm0 23.172L14.414 26h3.172z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
