<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M15.463 4.403c.157-.537.917-.537 1.074 0l1.127 3.851a8.96 8.96 0 0 0 6.082 6.082l3.851 1.127c.537.157.537.917 0 1.074l-3.851 1.127a8.96 8.96 0 0 0-6.082 6.082l-1.127 3.851c-.157.537-.917.537-1.074 0l-1.127-3.851a8.96 8.96 0 0 0-6.082-6.082l-3.851-1.127c-.537-.157-.537-.917 0-1.074l3.851-1.127a8.96 8.96 0 0 0 6.082-6.082z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
