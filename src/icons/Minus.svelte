<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 16a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M27.5 16a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h22a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M27.75 16a.75.75 0 0 1-.75.75H5a.75.75 0 1 1 0-1.5h22a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M28.5 16a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-3 13H9a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M27 6v20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M28 16a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
