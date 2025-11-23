<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 20v-8a1 1 0 0 0-1-1h-6V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h6v6a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1zm-7.586 6-5-5h4.172l5 5zM21 19.586v-4.172l5 5v4.172zm5-2L21.414 13H26zM6 6h13v13H6zm7 15.414L17.586 26H13z"/>`, 'thin': `<path fill="currentColor" d="M27 11.5h-6.5V5a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h6.5V27a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V12a.5.5 0 0 0-.5-.5m-6.792 15-6-6h5.585l6 6zm.292-6.707v-5.585l6 6v5.585zm6-7.293v6.293l-6-6V12.5zm-21-7h14v14h-14zm7 15h.293l6 6H12.5z"/>`, 'light': `<path fill="currentColor" d="M27 11.25h-6.25V5a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0-.75.75v15a.75.75 0 0 0 .75.75h6.25V27a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75m-6.69 15-5.5-5.5h4.875l5.5 5.5zm.44-6.56v-4.875l5.5 5.5v4.875zm5.5-1.5-5.44-5.44h5.44zM5.75 5.75h13.5v13.5H5.75zm7 15.06 5.44 5.44h-5.44z"/>`, 'bold': `<path fill="currentColor" d="M28.5 20v-8a1.5 1.5 0 0 0-1.5-1.5h-5.5V5A1.5 1.5 0 0 0 20 3.5H5A1.5 1.5 0 0 0 3.5 5v15A1.5 1.5 0 0 0 5 21.5h5.5V27a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5zm-7.875 5.5-4-4h2.75l4 4zm.875-6.125v-2.75l4 4v2.75zm4-3L22.625 13.5H25.5zM6.5 6.5h12v12h-12zm7 16.125 2.875 2.875H13.5z"/>`, 'fill': `<path fill="currentColor" d="M27 11h-6V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h6v6a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1M6 6h13v13H6z"/>`, 'duotone': `<path fill="currentColor" d="M27 12v15H12v-7h8v-8z" opacity=".08"/><path fill="currentColor" d="M27 11h-6V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h6v6a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1M6 6h13v13H6zm20 20H13v-5h7a1 1 0 0 0 1-1v-7h5z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
