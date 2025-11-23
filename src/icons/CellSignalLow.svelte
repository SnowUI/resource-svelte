<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M11 19v6a1 1 0 0 1-2 0v-6a1 1 0 1 1 2 0m-6 4a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1"/>`, 'thin': `<path fill="currentColor" d="M10.5 19v6a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 1 0M5 23.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5"/>`, 'light': `<path fill="currentColor" d="M10.75 19v6a.75.75 0 1 1-1.5 0v-6a.75.75 0 1 1 1.5 0M5 23.25a.75.75 0 0 0-.75.75v1a.75.75 0 1 0 1.5 0v-1a.75.75 0 0 0-.75-.75"/>`, 'bold': `<path fill="currentColor" d="M11.5 19v6a1.5 1.5 0 1 1-3 0v-6a1.5 1.5 0 0 1 3 0M5 22.5A1.5 1.5 0 0 0 3.5 24v1a1.5 1.5 0 0 0 3 0v-1A1.5 1.5 0 0 0 5 22.5"/>`, 'fill': `<path fill="currentColor" d="M24.765 3.154a2 2 0 0 0-2.18.432l-20 20A2 2 0 0 0 4 27h20a2 2 0 0 0 2-2V5a1.99 1.99 0 0 0-1.235-1.846M24 25H11v-7L24 5z"/>`, 'duotone': `<path fill="currentColor" d="M10 17.588V26H4a1 1 0 0 1-.707-1.707z" opacity=".08"/><path fill="currentColor" d="M24.765 3.154a2 2 0 0 0-2.18.432l-20 20A2 2 0 0 0 4 27h20a2 2 0 0 0 2-2V5a1.99 1.99 0 0 0-1.235-1.846M9 20v5H4zm15 5H11v-7L24 5z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
