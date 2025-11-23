<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 5h-6a1 1 0 1 0 0 2h2v15.106L13.875 5.518A1 1 0 0 0 13 5H5a1 1 0 0 0 0 2h2v18H5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9V9.894l9.125 16.589A1 1 0 0 0 19 27h5a1 1 0 0 0 1-1V7h2a1 1 0 1 0 0-2M9.691 7h2.718l9.9 18H19.59z"/>`, 'thin': `<path fill="currentColor" d="M27 5.5h-6a.5.5 0 0 0 0 1h2.5v17.554L13.438 5.759A.5.5 0 0 0 13 5.5H5a.5.5 0 1 0 0 1h2.5v19H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H8.5V7.946l10.063 18.295A.5.5 0 0 0 19 26.5h5a.5.5 0 0 0 .5-.5V6.5H27a.5.5 0 0 0 0-1m-18.154 1h3.858l10.45 19h-3.858z"/>`, 'light': `<path fill="currentColor" d="M27 5.25h-6a.75.75 0 1 0 0 1.5h2.25v16.33L13.658 5.639A.75.75 0 0 0 13 5.25H5a.75.75 0 0 0 0 1.5h2.25v18.5H5a.75.75 0 1 0 0 1.5h6a.75.75 0 1 0 0-1.5H8.75V8.92l9.593 17.441a.75.75 0 0 0 .657.389h5a.75.75 0 0 0 .75-.75V6.75H27a.75.75 0 1 0 0-1.5M9.269 6.75h3.287l10.175 18.5h-3.287z"/>`, 'bold': `<path fill="currentColor" d="M27 4.5h-5a1.5 1.5 0 0 0 0 3h1v12.66L14.814 5.278A1.5 1.5 0 0 0 13.5 4.5H5a1.5 1.5 0 0 0 0 3h1v17H5a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 1 0 0-3H9V11.84l8.186 14.883a1.5 1.5 0 0 0 1.314.777h6A1.5 1.5 0 0 0 26 26V7.5h1a1.5 1.5 0 0 0 0-3m-16.962 3h2.575l9.35 17h-2.576z"/>`, 'fill': `<path fill="currentColor" d="M28 6a1 1 0 0 1-1 1h-2v19a1 1 0 0 1-1 1h-5a1 1 0 0 1-.875-.517L9 9.893V25h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h2V7H5a1 1 0 0 1 0-2h8a1 1 0 0 1 .875.518L23 22.106V7h-2a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1"/>`, 'duotone': `<path fill="currentColor" d="M24 26h-5L8 6h5z" opacity=".08"/><path fill="currentColor" d="M27 5h-6a1 1 0 1 0 0 2h2v15.106L13.875 5.518A1 1 0 0 0 13 5H5a1 1 0 0 0 0 2h2v18H5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9V9.894l9.125 16.589A1 1 0 0 0 19 27h5a1 1 0 0 0 1-1V7h2a1 1 0 1 0 0-2m-7.409 20-9.9-18h2.718l9.9 18z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
