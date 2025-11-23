<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M4 8a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m4 4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zm19 5H5a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2m-3 5H8a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2"/>`, 'thin': `<path fill="currentColor" d="M4.5 8a.5.5 0 0 1 .5-.5h22a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M8 12.5a.5.5 0 0 0 0 1h16a.5.5 0 0 0 0-1zm19 5H5a.5.5 0 0 0 0 1h22a.5.5 0 0 0 0-1m-3 5H8a.5.5 0 0 0 0 1h16a.5.5 0 0 0 0-1"/>`, 'light': `<path fill="currentColor" d="M4.25 8A.75.75 0 0 1 5 7.25h22a.75.75 0 1 1 0 1.5H5A.75.75 0 0 1 4.25 8M8 12.25a.75.75 0 1 0 0 1.5h16a.75.75 0 1 0 0-1.5zm19 5H5a.75.75 0 1 0 0 1.5h22a.75.75 0 1 0 0-1.5m-3 5H8a.75.75 0 1 0 0 1.5h16a.75.75 0 1 0 0-1.5"/>`, 'bold': `<path fill="currentColor" d="M3.5 8A1.5 1.5 0 0 1 5 6.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 8M8 11.5a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3zm19 5H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 1 0 0-3m-3 5H8a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3"/>`, 'fill': `<path fill="currentColor" d="M28 8v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1m-4 7a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1zm3 2H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1m-3 5H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1"/>`, 'duotone': `<path fill="currentColor" d="M27 8v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8z" opacity=".08"/><path fill="currentColor" d="M4 8a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m4 4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zm19 5H5a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2m-3 5H8a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
