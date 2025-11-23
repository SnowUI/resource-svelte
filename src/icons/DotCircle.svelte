<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" fillRule="evenodd" d="M16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 3a7 7 0 1 0 0-14 7 7 0 0 0 0 14" clipRule="evenodd"/>`, 'fill': `<path fill="currentColor" d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
