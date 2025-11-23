<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 5a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1m-4 7a1 1 0 0 0-1 1v9.586L10.708 10.293a1 1 0 0 0-1.415 1.415L21.586 24H12a1 1 0 0 0 0 2h12a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1"/>`, 'thin': `<path fill="currentColor" d="M27.5 5a.5.5 0 0 1-.5.5H5a.5.5 0 1 1 0-1h22a.5.5 0 0 1 .5.5M24 12.5a.5.5 0 0 0-.5.5v10.793L10.354 10.646a.5.5 0 0 0-.708.708L22.793 24.5H12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 .5-.5V13a.5.5 0 0 0-.5-.5"/>`, 'light': `<path fill="currentColor" d="M27.75 5a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h22a.75.75 0 0 1 .75.75M24 12.25a.75.75 0 0 0-.75.75v10.19L10.53 10.47a.75.75 0 0 0-1.06 1.06l12.72 12.72H12a.75.75 0 1 0 0 1.5h12a.75.75 0 0 0 .75-.75V13a.75.75 0 0 0-.75-.75"/>`, 'bold': `<path fill="currentColor" d="M28.5 5A1.5 1.5 0 0 1 27 6.5H5a1.5 1.5 0 0 1 0-3h22A1.5 1.5 0 0 1 28.5 5M24 11.5a1.5 1.5 0 0 0-1.5 1.5v8.375L11.061 9.939a1.502 1.502 0 1 0-2.125 2.125L20.375 23.5H12a1.5 1.5 0 1 0 0 3h12a1.5 1.5 0 0 0 1.5-1.5V13a1.5 1.5 0 0 0-1.5-1.5"/>`, 'fill': `<path fill="currentColor" d="M28 5a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1m-3.617 7.076a1 1 0 0 0-1.09.216L18 17.587l-7.292-7.293a1 1 0 0 0-1.415 1.415L16.586 19l-5.293 5.293A1 1 0 0 0 12 26h12a1 1 0 0 0 1-1V13a1 1 0 0 0-.617-.924"/>`, 'duotone': `<path fill="currentColor" d="M24 13v12H12z" opacity=".08"/><path fill="currentColor" d="M28 5a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1m-3 8v12a1 1 0 0 1-1 1H12a1 1 0 0 1-.707-1.707L16.586 19l-7.293-7.292a1 1 0 1 1 1.415-1.415L18 17.586l5.293-5.293A1 1 0 0 1 25 13m-2 2.414-4.292 4.294L14.414 24H23z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
