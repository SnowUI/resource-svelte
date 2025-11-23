<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 12h-5V7a1 1 0 0 0-1-1H6V5a1 1 0 0 0-2 0v22a1 1 0 1 0 2 0v-1h11a1 1 0 0 0 1-1v-5h9a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-7-4v4H6V8zm-4 16H6v-4h10zm10-6H6v-4h20z"/>`, 'thin': `<path fill="currentColor" d="M27 12.5h-5.5V7a.5.5 0 0 0-.5-.5H5.5V5a.5.5 0 1 0-1 0v22a.5.5 0 0 0 1 0v-1.5H17a.5.5 0 0 0 .5-.5v-5.5H27a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5m-6.5-5v5h-15v-5zm-4 17h-11v-5h11zm10-6h-21v-5h21z"/>`, 'light': `<path fill="currentColor" d="M27 12.25h-5.25V7a.75.75 0 0 0-.75-.75H5.75V5a.75.75 0 0 0-1.5 0v22a.75.75 0 1 0 1.5 0v-1.25H17a.75.75 0 0 0 .75-.75v-5.25H27a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75m-6.75-4.5v4.5H5.75v-4.5zm-4 16.5H5.75v-4.5h10.5zm10-6H5.75v-4.5h20.5z"/>`, 'bold': `<path fill="currentColor" d="M27 11.5h-4.5V7A1.5 1.5 0 0 0 21 5.5H6.5V5a1.5 1.5 0 0 0-3 0v22a1.5 1.5 0 0 0 3 0v-.5H17a1.5 1.5 0 0 0 1.5-1.5v-4.5H27a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5m-7.5-3v3h-13v-3zm-4 15h-9v-3h9zm10-6h-19v-3h19z"/>`, 'fill': `<path fill="currentColor" d="M28 14v4a1 1 0 0 1-1 1H6v2h11a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6v1a1 1 0 1 1-2 0V5a1 1 0 0 1 2 0v1h15a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6v2h21a1 1 0 0 1 1 1"/>`, 'duotone': `<path fill="currentColor" d="M27 13v6H5v-6z" opacity=".08"/><path fill="currentColor" d="M27 12h-5V7a1 1 0 0 0-1-1H6V5a1 1 0 0 0-2 0v22a1 1 0 1 0 2 0v-1h11a1 1 0 0 0 1-1v-5h9a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-7-4v4H6V8zm-4 16H6v-4h10zm10-6H6v-4h20z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
