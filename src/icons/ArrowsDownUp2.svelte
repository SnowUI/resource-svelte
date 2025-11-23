<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M6.707 21.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1.001 1.001 0 0 0-1.414-1.414L10 24.586z"/><path fill="currentColor" d="M9 6v20a1 1 0 1 0 2 0V6a1 1 0 1 0-2 0M25.292 10.707A1.002 1.002 0 0 0 27 10a1 1 0 0 0-.293-.707l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L22 7.414z"/><path fill="currentColor" d="M23 26V6a1 1 0 1 0-2 0v20a1 1 0 1 0 2 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
