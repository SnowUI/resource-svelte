<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m28.708 14.293-12-12a1 1 0 0 0-1.415 0l-12 12A1 1 0 0 0 4 16h5v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V16h5a1 1 0 0 0 .708-1.707M22 14a1 1 0 0 0-1 1v11H11V15a1 1 0 0 0-1-1H6.414L16 4.414 25.586 14z"/>`, 'thin': `<path fill="currentColor" d="m28.354 14.646-12-12a.5.5 0 0 0-.708 0l-12 12A.5.5 0 0 0 4 15.5h5.5V26a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5V15.5H28a.5.5 0 0 0 .354-.854M22 14.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 1-.5.5H11a.5.5 0 0 1-.5-.5V15a.5.5 0 0 0-.5-.5H5.207L16 3.707 26.792 14.5z"/>`, 'light': `<path fill="currentColor" d="m28.53 14.47-12-12a.75.75 0 0 0-1.06 0l-12 12A.75.75 0 0 0 4 15.75h5.25V26A1.75 1.75 0 0 0 11 27.75h10A1.75 1.75 0 0 0 22.75 26V15.75H28a.75.75 0 0 0 .53-1.28M22 14.25a.75.75 0 0 0-.75.75v11a.25.25 0 0 1-.25.25H11a.25.25 0 0 1-.25-.25V15a.75.75 0 0 0-.75-.75H5.811l10.19-10.189 10.188 10.19z"/>`, 'bold': `<path fill="currentColor" d="m29.06 13.939-12-12a1.5 1.5 0 0 0-2.125 0l-12 12A1.5 1.5 0 0 0 4 16.5h4.5V26a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5v-9.5H28a1.5 1.5 0 0 0 1.06-2.561M22 13.5a1.5 1.5 0 0 0-1.5 1.5v10.5h-9V15a1.5 1.5 0 0 0-1.5-1.5H7.625L16 5.125l8.375 8.375z"/>`, 'fill': `<path fill="currentColor" d="M28.924 15.383A1 1 0 0 1 28 16h-5v10a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V16H4a1.001 1.001 0 0 1-.707-1.707l12-12a1 1 0 0 1 1.415 0l12 12a1 1 0 0 1 .216 1.09"/>`, 'duotone': `<path fill="currentColor" d="M28 15h-6v11a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V15H4L16 3z" opacity=".08"/><path fill="currentColor" d="m28.708 14.293-12-12a1 1 0 0 0-1.415 0l-12 12A1 1 0 0 0 4 16h5v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V16h5a1 1 0 0 0 .708-1.707M22 14a1 1 0 0 0-1 1v11H11V15a1 1 0 0 0-1-1H6.414L16 4.414 25.586 14z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
