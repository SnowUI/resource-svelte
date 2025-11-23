<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M19 7v15a1 1 0 0 1-2 0v-6.5H6V22a1 1 0 1 1-2 0V7a1 1 0 0 1 2 0v6.5h11V7a1 1 0 0 1 2 0m9.471 6.125a1 1 0 0 0-1.026.049l-3 2a1 1 0 0 0 1.11 1.665L27 15.875V26a1 1 0 0 0 2 0V14a1 1 0 0 0-.529-.875"/>`, 'thin': `<path fill="currentColor" d="M28.5 14v12a.5.5 0 0 1-1 0V14.934l-2.222 1.482a.5.5 0 0 1-.694-.139.5.5 0 0 1 .139-.693l3-2A.5.5 0 0 1 28.5 14M18 6.5a.5.5 0 0 0-.5.5v7h-12V7a.5.5 0 1 0-1 0v15a.5.5 0 0 0 1 0v-7h12v7a.5.5 0 0 0 1 0V7a.5.5 0 0 0-.5-.5"/>`, 'light': `<path fill="currentColor" d="M28.75 14v12a.75.75 0 1 1-1.5 0V15.401l-1.834 1.224a.751.751 0 0 1-.832-1.25l3-2A.75.75 0 0 1 28.75 14M18 6.25a.75.75 0 0 0-.75.75v6.75H5.75V7a.75.75 0 0 0-1.5 0v15a.75.75 0 1 0 1.5 0v-6.75h11.5V22a.75.75 0 1 0 1.5 0V7a.75.75 0 0 0-.75-.75"/>`, 'bold': `<path fill="currentColor" d="M29.5 14v12a1.5 1.5 0 1 1-3 0v-9.198l-.668.448a1.503 1.503 0 0 1-1.665-2.5l3-2A1.5 1.5 0 0 1 29.5 14M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-8 16a1 1 0 0 1-2 0v-4H9v4a1 1 0 1 1-2 0V10a1 1 0 0 1 2 0v4h7v-4a1 1 0 0 1 2 0zm7 2a1 1 0 0 1-2 0v-8.125l-1.445.964a1 1 0 1 1-1.11-1.665l3-2A1 1 0 0 1 25 12z"/>`, 'duotone': `<path fill="currentColor" d="M28 8v18H6a1 1 0 0 1-1-1V7h22a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M19 7v15a1 1 0 0 1-2 0v-6.5H6V22a1 1 0 1 1-2 0V7a1 1 0 0 1 2 0v6.5h11V7a1 1 0 0 1 2 0m9.471 6.125a1 1 0 0 0-1.026.049l-3 2a1 1 0 0 0 1.11 1.665L27 15.875V26a1 1 0 0 0 2 0V14a1 1 0 0 0-.529-.875"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
