<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4M6 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4m20-6a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/>`, 'thin': `<path fill="currentColor" d="M16 12.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m-10-6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m20-6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"/>`, 'light': `<path fill="currentColor" d="M16 12.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 6a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m-10-6a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 6a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m20-6a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 6a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5"/>`, 'bold': `<path fill="currentColor" d="M16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m10-5a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2M6 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>`, 'fill': `<path fill="currentColor" d="M19.5 16a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M6 12.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m20 0a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"/>`, 'duotone': `<path fill="currentColor" d="M19 16a3 3 0 1 1-5.999 0A3 3 0 0 1 19 16M6 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6m20 0a3 3 0 1 0 0 5.999A3 3 0 0 0 26 13" opacity=".08"/><path fill="currentColor" d="M16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4M6 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4m20-6a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
