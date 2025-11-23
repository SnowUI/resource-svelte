<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M21 9v16a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0m4-6a1 1 0 0 0-1 1v21a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1M15 13a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V14a1 1 0 0 0-1-1m-5 5a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1m-5 5a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1"/>`, 'thin': `<path fill="currentColor" d="M20.5 9v16a.5.5 0 0 1-1 0V9a.5.5 0 0 1 1 0M25 3.5a.5.5 0 0 0-.5.5v21a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5m-10 10a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V14a.5.5 0 0 0-.5-.5m-5 5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5m-5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5"/>`, 'light': `<path fill="currentColor" d="M20.75 9v16a.75.75 0 1 1-1.5 0V9a.75.75 0 1 1 1.5 0M25 3.25a.75.75 0 0 0-.75.75v21a.75.75 0 1 0 1.5 0V4a.75.75 0 0 0-.75-.75m-10 10a.75.75 0 0 0-.75.75v11a.75.75 0 1 0 1.5 0V14a.75.75 0 0 0-.75-.75m-5 5a.75.75 0 0 0-.75.75v6a.75.75 0 1 0 1.5 0v-6a.75.75 0 0 0-.75-.75m-5 5a.75.75 0 0 0-.75.75v1a.75.75 0 1 0 1.5 0v-1a.75.75 0 0 0-.75-.75"/>`, 'bold': `<path fill="currentColor" d="M21.5 9v16a1.5 1.5 0 1 1-3 0V9a1.5 1.5 0 1 1 3 0M25 2.5A1.5 1.5 0 0 0 23.5 4v21a1.5 1.5 0 1 0 3 0V4A1.5 1.5 0 0 0 25 2.5m-10 10a1.5 1.5 0 0 0-1.5 1.5v11a1.5 1.5 0 1 0 3 0V14a1.5 1.5 0 0 0-1.5-1.5m-5 5A1.5 1.5 0 0 0 8.5 19v6a1.5 1.5 0 0 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5m-5 5A1.5 1.5 0 0 0 3.5 24v1a1.5 1.5 0 0 0 3 0v-1A1.5 1.5 0 0 0 5 22.5"/>`, 'fill': `<path fill="currentColor" d="M26 5v20a2 2 0 0 1-2 2H4a2 2 0 0 1-1.412-3.415l20-20A2 2 0 0 1 26 5"/>`, 'duotone': `<path fill="currentColor" d="M25 5v20a1 1 0 0 1-1 1H4a1.001 1.001 0 0 1-.707-1.707l20-20A1 1 0 0 1 25 5" opacity=".08"/><path fill="currentColor" d="M24.765 3.154a2 2 0 0 0-2.18.432l-20 20A2 2 0 0 0 4 27h20a2 2 0 0 0 2-2V5a1.99 1.99 0 0 0-1.235-1.846M24 25H4L24 5z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
