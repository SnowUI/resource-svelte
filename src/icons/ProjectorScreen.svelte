<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M29 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v12H4a1 1 0 0 0 0 2h11v2.172a3 3 0 1 0 2 0V24h11a1 1 0 0 0 0-2h-1V10a2 2 0 0 0 2-2M16 30a1 1 0 1 1 0-2 1 1 0 0 1 0 2M5 6h22v2H5zm20 16H7V10h18z"/>`, 'thin': `<path fill="currentColor" d="M27 9.5A1.5 1.5 0 0 0 28.5 8V6A1.5 1.5 0 0 0 27 4.5H5A1.5 1.5 0 0 0 3.5 6v2A1.5 1.5 0 0 0 5 9.5h.5v13H4a.5.5 0 0 0 0 1h11.5v3.05a2.5 2.5 0 1 0 1 0V23.5H28a.5.5 0 0 0 0-1h-1.5v-13zM17.5 29a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4.5 8V6a.5.5 0 0 1 .5-.5h22a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5m21 14.5h-19v-13h19z"/>`, 'light': `<path fill="currentColor" d="M27 9.75A1.75 1.75 0 0 0 28.75 8V6A1.75 1.75 0 0 0 27 4.25H5A1.75 1.75 0 0 0 3.25 6v2A1.75 1.75 0 0 0 5 9.75h.25v12.5H4a.75.75 0 1 0 0 1.5h11.25v2.605a2.75 2.75 0 1 0 1.5 0V23.75H28a.75.75 0 1 0 0-1.5h-1.25V9.75zM17.25 29a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M4.75 8V6A.25.25 0 0 1 5 5.75h22a.25.25 0 0 1 .25.25v2a.25.25 0 0 1-.25.25H5A.25.25 0 0 1 4.75 8m20.5 14.25H6.75V9.75h18.5z"/>`, 'bold': `<path fill="currentColor" d="M29.5 9V6A2.5 2.5 0 0 0 27 3.5H5A2.5 2.5 0 0 0 2.5 6v3a2.5 2.5 0 0 0 2 2.45v9.05H4a1.5 1.5 0 1 0 0 3h10.5v2.903a3 3 0 1 0 3 0V23.5H28a1.5 1.5 0 1 0 0-3h-.5v-9.05a2.5 2.5 0 0 0 2-2.45m-24-2.5h21v2h-21zm2 14v-9h17v9z"/>`, 'fill': `<path fill="currentColor" d="M29 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v12H4a1 1 0 0 0 0 2h11v2.172a3 3 0 1 0 2 0V24h11a1 1 0 0 0 0-2h-1V10a2 2 0 0 0 2-2M16 30a1 1 0 1 1 0-2 1 1 0 0 1 0 2M5 6h22v2H5z"/>`, 'duotone': `<path fill="currentColor" d="M26 9v14H6V9z" opacity=".08"/><path fill="currentColor" d="M29 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v12H4a1 1 0 0 0 0 2h11v2.172a3 3 0 1 0 2 0V24h11a1 1 0 0 0 0-2h-1V10a2 2 0 0 0 2-2M16 30a1 1 0 1 1 0-2 1 1 0 0 1 0 2M5 6h22v2H5zm20 16H7V10h18z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
