<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 5a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1m-6.707 5.293L9 22.586V13a1 1 0 1 0-2 0v12a1 1 0 0 0 1 1h12a1 1 0 0 0 0-2h-9.586l12.294-12.292a1 1 0 0 0-1.415-1.415"/>`, 'thin': `<path fill="currentColor" d="M27.5 5a.5.5 0 0 1-.5.5H5a.5.5 0 1 1 0-1h22a.5.5 0 0 1 .5.5m-5.854 5.646L8.5 23.793V13a.5.5 0 0 0-1 0v12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 0-1H9.208l13.146-13.146a.501.501 0 0 0-.708-.708"/>`, 'light': `<path fill="currentColor" d="M27.75 5a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h22a.75.75 0 0 1 .75.75m-6.28 5.47L8.75 23.19V13a.75.75 0 1 0-1.5 0v12a.75.75 0 0 0 .75.75h12a.75.75 0 1 0 0-1.5H9.81l12.72-12.72a.75.75 0 0 0-1.06-1.06"/>`, 'bold': `<path fill="currentColor" d="M28.5 5A1.5 1.5 0 0 1 27 6.5H5a1.5 1.5 0 0 1 0-3h22A1.5 1.5 0 0 1 28.5 5m-7.561 4.939L9.5 21.375V13a1.5 1.5 0 0 0-3 0v12A1.5 1.5 0 0 0 8 26.5h12a1.5 1.5 0 1 0 0-3h-8.375l11.44-11.439a1.502 1.502 0 1 0-2.125-2.125z"/>`, 'fill': `<path fill="currentColor" d="M22.708 10.293a1 1 0 0 1 0 1.415L15.414 19l5.294 5.293A1 1 0 0 1 20 26H8a1 1 0 0 1-1-1V13a1 1 0 0 1 1.707-.707L14 17.586l7.293-7.293a1 1 0 0 1 1.415 0M27 4H5a1 1 0 0 0 0 2h22a1 1 0 1 0 0-2"/>`, 'duotone': `<path fill="currentColor" d="M20 25H8V13z" opacity=".08"/><path fill="currentColor" d="M28 5a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1m-5.292 5.293a1 1 0 0 1 0 1.415L15.414 19l5.294 5.293A1 1 0 0 1 20 26H8a1 1 0 0 1-1-1V13a1 1 0 0 1 1.707-.707L14 17.586l7.293-7.293a1 1 0 0 1 1.415 0M17.586 24l-4.292-4.292L9 15.414V24z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
