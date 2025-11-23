<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 20a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1M5 13h22a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2"/>`, 'thin': `<path fill="currentColor" d="M27.5 20a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h22a.5.5 0 0 1 .5.5M5 12.5h22a.5.5 0 0 0 0-1H5a.5.5 0 0 0 0 1"/>`, 'light': `<path fill="currentColor" d="M27.75 20a.75.75 0 0 1-.75.75H5a.75.75 0 1 1 0-1.5h22a.75.75 0 0 1 .75.75M5 12.75h22a.75.75 0 1 0 0-1.5H5a.75.75 0 1 0 0 1.5"/>`, 'bold': `<path fill="currentColor" d="M28.5 20a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M5 13.5h22a1.5 1.5 0 1 0 0-3H5a1.5 1.5 0 1 0 0 3"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-3 16H9a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2m0-6H9a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M27 6v20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M28 20a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1M5 13h22a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
