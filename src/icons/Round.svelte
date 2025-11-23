<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25 16a9 9 0 1 1-18 0 9 9 0 0 1 18 0" opacity=".08"/><path fill="currentColor" fillRule="evenodd" d="M16 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 1a9 9 0 1 0 0-18 9 9 0 0 0 0 18" clipRule="evenodd"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
