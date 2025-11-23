<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M3 21V7a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v14a1 1 0 0 1-2 0V7H5v14a1 1 0 1 1-2 0m28 4a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h12v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h6a1 1 0 0 1 1 1m-15-1h6v-2h-6z"/>`, 'thin': `<path fill="currentColor" d="M3.5 21V7A1.5 1.5 0 0 1 5 5.5h22A1.5 1.5 0 0 1 28.5 7v14a.5.5 0 0 1-1 0V7a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5v14a.5.5 0 0 1-1 0m27 4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1 0-1h12.5V21a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v3.5H30a.5.5 0 0 1 .5.5m-15-.5h7v-3h-7z"/>`, 'light': `<path fill="currentColor" d="M3.25 21V7A1.75 1.75 0 0 1 5 5.25h22A1.75 1.75 0 0 1 28.75 7v14a.75.75 0 1 1-1.5 0V7a.25.25 0 0 0-.25-.25H5a.25.25 0 0 0-.25.25v14a.75.75 0 1 1-1.5 0m27.5 4a.75.75 0 0 1-.75.75H2a.75.75 0 1 1 0-1.5h12.25V21a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v3.25H30a.75.75 0 0 1 .75.75m-15-.75h6.5v-2.5h-6.5z"/>`, 'bold': `<path fill="currentColor" d="M2.5 20V7A2.5 2.5 0 0 1 5 4.5h22A2.5 2.5 0 0 1 29.5 7v13a1.5 1.5 0 1 1-3 0V7.5h-21V20a1.5 1.5 0 0 1-3 0m29 5a1.5 1.5 0 0 1-1.5 1.5H2a1.5 1.5 0 1 1 0-3h11.5V20a1.5 1.5 0 0 1 1.5-1.5h8a1.5 1.5 0 0 1 1.5 1.5v3.5H30a1.5 1.5 0 0 1 1.5 1.5m-15-1.5h5v-2h-5z"/>`, 'fill': `<path fill="currentColor" d="M30 24h-1V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v17H2a1 1 0 0 0 0 2h28a1 1 0 0 0 0-2m-5 0h-9v-2a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1z"/>`, 'duotone': `<path fill="currentColor" d="M23 21v4h-8v-4z" opacity=".08"/><path fill="currentColor" d="M3 21V7a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v14a1 1 0 0 1-2 0V7H5v14a1 1 0 1 1-2 0m28 4a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h12v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h6a1 1 0 0 1 1 1m-15-1h6v-2h-6z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
