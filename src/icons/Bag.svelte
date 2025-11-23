<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 8h-5a6 6 0 1 0-12 0H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M16 4a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4m11 21H5V10h5v2a1 1 0 0 0 2 0v-2h8v2a1 1 0 0 0 2 0v-2h5z"/>`, 'thin': `<path fill="currentColor" d="M27 8.5h-5.5V8a5.5 5.5 0 0 0-11 0v.5H5A1.5 1.5 0 0 0 3.5 10v15A1.5 1.5 0 0 0 5 26.5h22a1.5 1.5 0 0 0 1.5-1.5V10A1.5 1.5 0 0 0 27 8.5M11.5 8a4.5 4.5 0 1 1 9 0v.5h-9zm16 17a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .5-.5h5.5V12a.5.5 0 0 0 1 0V9.5h9V12a.5.5 0 0 0 1 0V9.5H27a.5.5 0 0 1 .5.5z"/>`, 'light': `<path fill="currentColor" d="M27 8.25h-5.25V8a5.75 5.75 0 0 0-11.5 0v.25H5A1.75 1.75 0 0 0 3.25 10v15A1.75 1.75 0 0 0 5 26.75h22A1.75 1.75 0 0 0 28.75 25V10A1.75 1.75 0 0 0 27 8.25M11.75 8a4.25 4.25 0 0 1 8.5 0v.25h-8.5zm15.5 17a.25.25 0 0 1-.25.25H5a.25.25 0 0 1-.25-.25V10A.25.25 0 0 1 5 9.75h5.25V12a.75.75 0 1 0 1.5 0V9.75h8.5V12a.75.75 0 1 0 1.5 0V9.75H27a.25.25 0 0 1 .25.25z"/>`, 'bold': `<path fill="currentColor" d="M27 7.5h-4.521a6.5 6.5 0 0 0-12.958 0H5A2.5 2.5 0 0 0 2.5 10v15A2.5 2.5 0 0 0 5 27.5h22a2.5 2.5 0 0 0 2.5-2.5V10A2.5 2.5 0 0 0 27 7.5m-11-3a3.5 3.5 0 0 1 3.464 3h-6.928A3.5 3.5 0 0 1 16 4.5m10.5 20h-21v-14h4V12a1.5 1.5 0 0 0 3 0v-1.5h7V12a1.5 1.5 0 1 0 3 0v-1.5h4z"/>`, 'fill': `<path fill="currentColor" d="M27 8h-5a6 6 0 1 0-12 0H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m-15 5a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0zm4-9a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4m6 9a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0z"/>`, 'duotone': `<path fill="currentColor" d="M28 10v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M27 8h-5a6 6 0 1 0-12 0H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M16 4a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4m11 21H5V10h5v2a1 1 0 0 0 2 0v-2h8v2a1 1 0 0 0 2 0v-2h5z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
