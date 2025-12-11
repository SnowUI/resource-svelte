<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" fill-rule="evenodd" d="M16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 8c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14" clip-rule="evenodd"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
