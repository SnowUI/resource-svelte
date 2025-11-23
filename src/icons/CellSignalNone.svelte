<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M6 24v1a1 1 0 1 1-2 0v-1a1 1 0 1 1 2 0"/>`, 'thin': `<path fill="currentColor" d="M5.5 24v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0"/>`, 'light': `<path fill="currentColor" d="M5.75 24v1a.75.75 0 1 1-1.5 0v-1a.75.75 0 1 1 1.5 0"/>`, 'bold': `<path fill="currentColor" d="M6.5 24v1a1.5 1.5 0 0 1-3 0v-1a1.5 1.5 0 0 1 3 0"/>`, 'fill': `<path fill="currentColor" d="M24.765 3.154a2 2 0 0 0-2.18.432l-20 20A2 2 0 0 0 4 27h20a2 2 0 0 0 2-2V5a1.99 1.99 0 0 0-1.235-1.846M24 25H4L24 5z"/>`, 'duotone': `<path fill="currentColor" d="M24.765 3.154a2 2 0 0 0-2.179.434l-20 20A2 2 0 0 0 4 27h20a2 2 0 0 0 2-2V5a2 2 0 0 0-1.235-1.846M24 25H4L24 5z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
