<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M23 9h-7V4a1.001 1.001 0 0 0-1.707-.707l-12 12a1 1 0 0 0 0 1.415l12 12A1 1 0 0 0 16 28v-5h7a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1m-1 12h-7a1 1 0 0 0-1 1v3.586L4.414 16 14 6.414V10a1 1 0 0 0 1 1h7zm6-11v12a1 1 0 0 1-2 0V10a1 1 0 1 1 2 0"/>`, 'thin': `<path fill="currentColor" d="M23 9.5h-7.5V4a.5.5 0 0 0-.854-.354l-12 12a.5.5 0 0 0 0 .708l12 12A.5.5 0 0 0 15.5 28v-5.5H23a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5m-.5 12H15a.5.5 0 0 0-.5.5v4.792L3.707 16 14.5 5.207V10a.5.5 0 0 0 .5.5h7.5zm5-11.5v12a.5.5 0 0 1-1 0V10a.5.5 0 0 1 1 0"/>`, 'light': `<path fill="currentColor" d="M23 9.25h-7.25V4a.75.75 0 0 0-1.28-.53l-12 12a.75.75 0 0 0 0 1.06l12 12a.75.75 0 0 0 1.28-.53v-5.25H23a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75m-.75 12H15a.75.75 0 0 0-.75.75v4.189L4.061 16l10.19-10.189v4.19a.75.75 0 0 0 .75.75h7.25zM27.75 10v12a.75.75 0 1 1-1.5 0V10a.75.75 0 1 1 1.5 0"/>`, 'bold': `<path fill="currentColor" d="M22 8.5h-5.5V4a1.5 1.5 0 0 0-2.561-1.061l-12 12a1.5 1.5 0 0 0 0 2.125l12 12A1.5 1.5 0 0 0 16.5 28v-4.5H22a1.5 1.5 0 0 0 1.5-1.5V10A1.5 1.5 0 0 0 22 8.5m-1.5 12H15a1.5 1.5 0 0 0-1.5 1.5v2.375L5.125 16 13.5 7.625V10a1.5 1.5 0 0 0 1.5 1.5h5.5zm8-10.5v12a1.5 1.5 0 1 1-3 0V10a1.5 1.5 0 1 1 3 0"/>`, 'fill': `<path fill="currentColor" d="M24 10v12a1 1 0 0 1-1 1h-7v5a1 1 0 0 1-1.707.708l-12-12a1 1 0 0 1 0-1.415l12-12A1 1 0 0 1 16 4v5h7a1 1 0 0 1 1 1m3-1a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V10a1 1 0 0 0-1-1"/>`, 'duotone': `<path fill="currentColor" d="M23 10v12h-8v6L3 16 15 4v6z" opacity=".08"/><path fill="currentColor" d="M23 9h-7V4a1.001 1.001 0 0 0-1.707-.707l-12 12a1 1 0 0 0 0 1.415l12 12A1 1 0 0 0 16 28v-5h7a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1m-1 12h-7a1 1 0 0 0-1 1v3.586L4.414 16 14 6.414V10a1 1 0 0 0 1 1h7zm6-11v12a1 1 0 0 1-2 0V10a1 1 0 1 1 2 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
