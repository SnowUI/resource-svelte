<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 9H16V4a1.001 1.001 0 0 0-1.707-.707l-12 12a1 1 0 0 0 0 1.415l12 12A1 1 0 0 0 16 28v-5h10a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m0 12H15a1 1 0 0 0-1 1v3.586L4.414 16 14 6.414V10a1 1 0 0 0 1 1h11z"/>`, 'thin': `<path fill="currentColor" d="M26 9.5H15.5V4a.5.5 0 0 0-.854-.354l-12 12a.5.5 0 0 0 0 .708l12 12A.5.5 0 0 0 15.5 28v-5.5H26a1.5 1.5 0 0 0 1.5-1.5V11A1.5 1.5 0 0 0 26 9.5m.5 11.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 0-.5.5v4.793L3.707 16 14.5 5.208V10a.5.5 0 0 0 .5.5h11a.5.5 0 0 1 .5.5z"/>`, 'light': `<path fill="currentColor" d="M26 9.25H15.75V4a.75.75 0 0 0-1.28-.53l-12 12a.75.75 0 0 0 0 1.06l12 12a.75.75 0 0 0 1.28-.53v-5.25H26A1.75 1.75 0 0 0 27.75 21V11A1.75 1.75 0 0 0 26 9.25M26.25 21a.25.25 0 0 1-.25.25H15a.75.75 0 0 0-.75.75v4.189L4.061 16l10.19-10.189V10a.75.75 0 0 0 .75.75h11a.25.25 0 0 1 .25.25z"/>`, 'bold': `<path fill="currentColor" d="M26 8.5h-9.5V4a1.5 1.5 0 0 0-2.561-1.06l-12 12a1.5 1.5 0 0 0 0 2.125l12 12A1.501 1.501 0 0 0 16.5 28v-4.5H26a2.5 2.5 0 0 0 2.5-2.5V11A2.5 2.5 0 0 0 26 8.5m-.5 12H15a1.5 1.5 0 0 0-1.5 1.5v2.375L5.125 16 13.5 7.625V10a1.5 1.5 0 0 0 1.5 1.5h10.5z"/>`, 'fill': `<path fill="currentColor" d="M28 11v10a2 2 0 0 1-2 2H16v5a1 1 0 0 1-1.707.708l-12-12a1 1 0 0 1 0-1.415l12-12A1 1 0 0 1 16 4v5h10a2 2 0 0 1 2 2"/>`, 'duotone': `<path fill="currentColor" d="M27 11v10a1 1 0 0 1-1 1H15v6L3 16 15 4v6h11a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M26 9H16V4a1.001 1.001 0 0 0-1.707-.707l-12 12a1 1 0 0 0 0 1.415l12 12A1 1 0 0 0 16 28v-5h10a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m0 12H15a1 1 0 0 0-1 1v3.586L4.414 16 14 6.414V10a1 1 0 0 0 1 1h11z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
