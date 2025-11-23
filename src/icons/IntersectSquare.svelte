<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 11h-6V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h6v6a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1M6 19V6h13v5h-7a1 1 0 0 0-1 1v7zm7-4.586L17.586 19H13zm6 3.172L14.414 13H19zM26 26H13v-5h7a1 1 0 0 0 1-1v-7h5z"/>`, 'thin': `<path fill="currentColor" d="M27 11.5h-6.5V5a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h6.5V27a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V12a.5.5 0 0 0-.5-.5m-21.5 8v-14h14v6H12a.5.5 0 0 0-.5.5v7.5zm7-6.292 6.293 6.292H12.5zm7 5.585L13.208 12.5H19.5zm7 7.707h-14v-6H20a.5.5 0 0 0 .5-.5v-7.5h6z"/>`, 'light': `<path fill="currentColor" d="M27 11.25h-6.25V5a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0-.75.75v15a.75.75 0 0 0 .75.75h6.25V27a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75m-21.25 8V5.75h13.5v5.5H12a.75.75 0 0 0-.75.75v7.25zm7-5.44 5.44 5.44h-5.44zm6.5 4.375-5.44-5.435h5.44zm7 8.065h-13.5v-5.5H20a.75.75 0 0 0 .75-.75v-7.25h5.5z"/>`, 'bold': `<path fill="currentColor" d="M27 10.5h-5.5V5A1.5 1.5 0 0 0 20 3.5H5A1.5 1.5 0 0 0 3.5 5v15A1.5 1.5 0 0 0 5 21.5h5.5V27a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5V12a1.5 1.5 0 0 0-1.5-1.5m-20.5 8v-12h12v4H12a1.5 1.5 0 0 0-1.5 1.5v6.5zm7-2.875 2.875 2.875H13.5zm5 .75L15.625 13.5H18.5zm7 9.125h-12v-4H20a1.5 1.5 0 0 0 1.5-1.5v-6.5h4z"/>`, 'fill': `<path fill="currentColor" d="M27 11h-6V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h6v6a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1M6 19V6h13v5h-7a1 1 0 0 0-1 1v7zm20 7H13v-5h7a1 1 0 0 0 1-1v-7h5z"/>`, 'duotone': `<path fill="currentColor" d="M20 12v8h-8v-8z" opacity=".08"/><path fill="currentColor" d="M27 11h-6V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h6v6a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1M6 19V6h13v5h-7a1 1 0 0 0-1 1v7zm13-6v6h-6v-6zm7 13H13v-5h7a1 1 0 0 0 1-1v-7h5z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
