<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 19v-7a1 1 0 0 0-1-1h-6V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h6v6a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1zm-8.586 7L6 12.586V7.414L24.586 26zm-12-20h5.172L26 19.414v5.172zM26 16.586 22.414 13H26zm-7-7L15.414 6H19zM6 15.414 9.586 19H6zm7 7L16.586 26H13z"/>`, 'thin': `<path fill="currentColor" d="M27 11.5h-6.5V5a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h6.5V27a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V12a.5.5 0 0 0-.5-.5m-7.792 15L5.5 12.793V6.208L25.793 26.5zm-13-21h6.585L26.5 19.208v6.585zM26.5 17.793 21.208 12.5H26.5zm-7-7L14.208 5.5H19.5zm-14 3.415 5.293 5.292H5.5zm7 7 5.293 5.292H12.5z"/>`, 'light': `<path fill="currentColor" d="M27 11.25h-6.25V5a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0-.75.75v15a.75.75 0 0 0 .75.75h6.25V27a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75m-7.69 15L5.75 12.69V6.815L25.19 26.25zM6.81 5.75h5.875L26.25 19.31v5.875zm19.44 11.44-4.44-4.44h4.44zm-7-7-4.44-4.44h4.44zm-13.5 4.625 4.44 4.435H5.75zm7 7 4.44 4.435h-4.44z"/>`, 'bold': `<path fill="currentColor" d="M28.5 20v-8a1.5 1.5 0 0 0-1.5-1.5h-5.5V5A1.5 1.5 0 0 0 20 3.5H5A1.5 1.5 0 0 0 3.5 5v15A1.5 1.5 0 0 0 5 21.5h5.5V27a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5zm-7.875 5.5L6.5 11.375v-2.75L23.375 25.5zm-12-19h2.75L25.5 20.625v2.75zM25.5 16.375 22.625 13.5H25.5zm-7-7L15.625 6.5H18.5zm-12 6.25L9.375 18.5H6.5zm7 7 2.875 2.875H13.5z"/>`, 'fill': `<path fill="currentColor" d="M28 12v15a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1v-6H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v6h6a1 1 0 0 1 1 1"/>`, 'duotone': `<path fill="currentColor" d="M27 12v15H12v-7H5V5h15v7z" opacity=".08"/><path fill="currentColor" d="M27 11h-6V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h6v6a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1m-1 15H13v-6a1 1 0 0 0-1-1H6V6h13v6a1 1 0 0 0 1 1h6z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
