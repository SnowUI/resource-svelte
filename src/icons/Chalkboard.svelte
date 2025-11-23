<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M30 24h-1V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v17H2a1 1 0 0 0 0 2h28a1 1 0 0 0 0-2M5 7h22v17h-2v-3a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v3H9V11h14v6a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v14H5zm18 17h-7v-2h7z"/>`, 'thin': `<path fill="currentColor" d="M30 24.5h-1.5V7A1.5 1.5 0 0 0 27 5.5H5A1.5 1.5 0 0 0 3.5 7v17.5H2a.5.5 0 0 0 0 1h28a.5.5 0 0 0 0-1M4.5 7a.5.5 0 0 1 .5-.5h22a.5.5 0 0 1 .5.5v17.5h-3V21a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3.5h-6v-14h15V17a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5H8a.5.5 0 0 0-.5.5v14.5h-3zm19 17.5h-8v-3h8z"/>`, 'light': `<path fill="currentColor" d="M30 24.25h-1.25V7A1.75 1.75 0 0 0 27 5.25H5A1.75 1.75 0 0 0 3.25 7v17.25H2a.75.75 0 1 0 0 1.5h28a.75.75 0 1 0 0-1.5M4.75 7A.25.25 0 0 1 5 6.75h22a.25.25 0 0 1 .25.25v17.25h-2.5V21a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0-.75.75v3.25h-5.5v-13.5h14.5V17a.75.75 0 1 0 1.5 0v-7a.75.75 0 0 0-.75-.75H8a.75.75 0 0 0-.75.75v14.25h-2.5zm18.5 17.25h-7.5v-2.5h7.5z"/>`, 'bold': `<path fill="currentColor" d="M30 23.5h-.5V7A2.5 2.5 0 0 0 27 4.5H5A2.5 2.5 0 0 0 2.5 7v16.5H2a1.5 1.5 0 1 0 0 3h28a1.5 1.5 0 1 0 0-3M5.5 7.5h21v16h-2V20a1.5 1.5 0 0 0-1.5-1.5h-8a1.5 1.5 0 0 0-1.5 1.5v3.5h-3v-11h11V15a1.5 1.5 0 1 0 3 0v-4A1.5 1.5 0 0 0 23 9.5H9A1.5 1.5 0 0 0 7.5 11v12.5h-2zm16 16h-5v-2h5z"/>`, 'fill': `<path fill="currentColor" d="M30 24h-1V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v17H2a1 1 0 0 0 0 2h28a1 1 0 0 0 0-2m-3 0h-9v-2a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1zm0-6a1 1 0 0 1-2 0V9H7v14a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1z"/>`, 'duotone': `<path fill="currentColor" d="M24 10v11h-9v4H8V10z" opacity=".08"/><path fill="currentColor" d="M30 24h-1V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v17H2a1 1 0 0 0 0 2h28a1 1 0 0 0 0-2M5 7h22v17h-2v-3a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v3H9V11h14v6a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v14H5zm18 17h-7v-2h7z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
