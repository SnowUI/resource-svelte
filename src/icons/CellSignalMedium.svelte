<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M16 14v11a1 1 0 0 1-2 0V14a1 1 0 0 1 2 0m-6 4a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1m-5 5a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1"/>`, 'thin': `<path fill="currentColor" d="M15.5 14v11a.5.5 0 0 1-1 0V14a.5.5 0 0 1 1 0M10 18.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5m-5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5"/>`, 'light': `<path fill="currentColor" d="M15.75 14v11a.75.75 0 1 1-1.5 0V14a.75.75 0 1 1 1.5 0M10 18.25a.75.75 0 0 0-.75.75v6a.75.75 0 1 0 1.5 0v-6a.75.75 0 0 0-.75-.75m-5 5a.75.75 0 0 0-.75.75v1a.75.75 0 1 0 1.5 0v-1a.75.75 0 0 0-.75-.75"/>`, 'bold': `<path fill="currentColor" d="M16.5 14v11a1.5 1.5 0 1 1-3 0V14a1.5 1.5 0 1 1 3 0M10 17.5A1.5 1.5 0 0 0 8.5 19v6a1.5 1.5 0 0 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5m-5 5A1.5 1.5 0 0 0 3.5 24v1a1.5 1.5 0 0 0 3 0v-1A1.5 1.5 0 0 0 5 22.5"/>`, 'fill': `<path fill="currentColor" d="M24.765 3.154a2 2 0 0 0-2.18.432l-20 20A2 2 0 0 0 4 27h20a2 2 0 0 0 2-2V5a1.99 1.99 0 0 0-1.235-1.846M24 25h-8V13l8-8z"/>`, 'duotone': `<path fill="currentColor" d="M15 12.588V26H4a1 1 0 0 1-.707-1.707z" opacity=".08"/><path fill="currentColor" d="M24.765 3.154a2 2 0 0 0-2.18.432l-20 20A2 2 0 0 0 4 27h20a2 2 0 0 0 2-2V5a1.99 1.99 0 0 0-1.235-1.846M14 15v10H4zm10 10h-8V13l8-8z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
