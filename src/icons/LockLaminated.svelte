<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 10h-4V7a6 6 0 1 0-12 0v3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M6 16h20v2H6zm0 4h20v2H6zm6-13a4 4 0 1 1 8 0v3h-8zm14 5v2H6v-2zm0 14H6v-2h20z"/>`, 'thin': `<path fill="currentColor" d="M26 10.5h-4.5V7a5.5 5.5 0 0 0-11 0v3.5H6A1.5 1.5 0 0 0 4.5 12v14A1.5 1.5 0 0 0 6 27.5h20a1.5 1.5 0 0 0 1.5-1.5V12a1.5 1.5 0 0 0-1.5-1.5m-20.5 5h21v3h-21zm0 4h21v3h-21zm6-12.5a4.5 4.5 0 1 1 9 0v3.5h-9zM6 11.5h20a.5.5 0 0 1 .5.5v2.5h-21V12a.5.5 0 0 1 .5-.5m20 15H6a.5.5 0 0 1-.5-.5v-2.5h21V26a.5.5 0 0 1-.5.5"/>`, 'light': `<path fill="currentColor" d="M26 10.25h-4.25V7a5.75 5.75 0 0 0-11.5 0v3.25H6A1.75 1.75 0 0 0 4.25 12v14A1.75 1.75 0 0 0 6 27.75h20A1.75 1.75 0 0 0 27.75 26V12A1.75 1.75 0 0 0 26 10.25m-20.25 5.5h20.5v2.5H5.75zm0 4h20.5v2.5H5.75zm6-12.75a4.25 4.25 0 0 1 8.5 0v3.25h-8.5zM6 11.75h20a.25.25 0 0 1 .25.25v2.25H5.75V12a.25.25 0 0 1 .25-.25m20 14.5H6a.25.25 0 0 1-.25-.25v-2.25h20.5V26a.25.25 0 0 1-.25.25"/>`, 'bold': `<path fill="currentColor" d="M26 9.5h-3.5V7a6.5 6.5 0 1 0-13 0v2.5H6A2.5 2.5 0 0 0 3.5 12v14A2.5 2.5 0 0 0 6 28.5h20a2.5 2.5 0 0 0 2.5-2.5V12A2.5 2.5 0 0 0 26 9.5M6.5 18h19v2h-19zm6-11a3.5 3.5 0 1 1 7 0v2.5h-7zm13 5.5V15h-19v-2.5zm-19 13V23h19v2.5z"/>`, 'fill': `<path fill="currentColor" d="M26 10h-4V7a6 6 0 1 0-12 0v3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M12 7a4 4 0 1 1 8 0v3h-8zm11 17H9a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2m0-4H9a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2m0-4H9a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M27 12v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M26 10h-4V7a6 6 0 1 0-12 0v3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M6 16h20v2H6zm0 4h20v2H6zm6-13a4 4 0 1 1 8 0v3h-8zm14 5v2H6v-2zm0 14H6v-2h20z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
