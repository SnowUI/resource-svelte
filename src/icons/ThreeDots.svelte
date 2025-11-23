<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M8 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4M16 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4M26 16a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
