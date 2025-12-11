<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" fill-rule="evenodd" d="M6 16a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" clip-rule="evenodd"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
