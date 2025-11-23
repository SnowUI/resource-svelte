<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 16a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1M5 9h22a1 1 0 1 0 0-2H5a1 1 0 0 0 0 2m22 14H5a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2"/>`, 'thin': `<path fill="currentColor" d="M27.5 16a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h22a.5.5 0 0 1 .5.5M5 8.5h22a.5.5 0 0 0 0-1H5a.5.5 0 1 0 0 1m22 15H5a.5.5 0 0 0 0 1h22a.5.5 0 0 0 0-1"/>`, 'light': `<path fill="currentColor" d="M27.75 16a.75.75 0 0 1-.75.75H5a.75.75 0 1 1 0-1.5h22a.75.75 0 0 1 .75.75M5 8.75h22a.75.75 0 1 0 0-1.5H5a.75.75 0 0 0 0 1.5m22 14.5H5a.75.75 0 1 0 0 1.5h22a.75.75 0 1 0 0-1.5"/>`, 'bold': `<path fill="currentColor" d="M28.5 16a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M5 9.5h22a1.5 1.5 0 0 0 0-3H5a1.5 1.5 0 0 0 0 3m22 13H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 1 0 0-3"/>`, 'fill': `<path fill="currentColor" d="M28 15v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1m-1 7H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m0-16H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1"/>`, 'duotone': `<path fill="currentColor" d="M27 8v16H5V8z" opacity=".08"/><path fill="currentColor" d="M28 16a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1M5 9h22a1 1 0 1 0 0-2H5a1 1 0 0 0 0 2m22 14H5a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
