<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0M31 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0" opacity=".2"/><path fill="currentColor" d="M1 16a3 3 0 0 1 3-3h4a3 3 0 1 1 0 6H4a3 3 0 0 1-3-3"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
