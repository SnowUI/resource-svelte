<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28.924 16.618A1 1 0 0 0 28 16h-5V6a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v10H4a1 1 0 0 0-.707 1.707l12 12a1 1 0 0 0 1.415 0l12-12a1 1 0 0 0 .216-1.09M16 27.586 6.414 18H10a1 1 0 0 0 1-1V6h10v11a1 1 0 0 0 1 1h3.586z"/>`, 'thin': `<path fill="currentColor" d="M28.462 16.809A.5.5 0 0 0 28 16.5h-5.5V6A1.5 1.5 0 0 0 21 4.5H11A1.5 1.5 0 0 0 9.5 6v10.5H4a.5.5 0 0 0-.354.854l12 12a.5.5 0 0 0 .708 0l12-12a.5.5 0 0 0 .108-.545M16 28.293 5.207 17.5H10a.5.5 0 0 0 .5-.5V6a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v11a.5.5 0 0 0 .5.5h4.792z"/>`, 'light': `<path fill="currentColor" d="M28.693 16.713A.75.75 0 0 0 28 16.25h-5.25V6A1.75 1.75 0 0 0 21 4.25H11A1.75 1.75 0 0 0 9.25 6v10.25H4a.75.75 0 0 0-.53 1.28l12 12a.75.75 0 0 0 1.06 0l12-12a.75.75 0 0 0 .163-.818M16 27.938 5.811 17.75h4.19a.75.75 0 0 0 .75-.75V6a.25.25 0 0 1 .25-.25h10a.25.25 0 0 1 .25.25v11a.75.75 0 0 0 .75.75h4.188z"/>`, 'bold': `<path fill="currentColor" d="M29.386 16.426A1.5 1.5 0 0 0 28 15.5h-4.5V6A2.5 2.5 0 0 0 21 3.5H11A2.5 2.5 0 0 0 8.5 6v9.5H4a1.5 1.5 0 0 0-1.06 2.561l12 12a1.503 1.503 0 0 0 2.125 0l12-12a1.5 1.5 0 0 0 .321-1.635M16 26.875 7.625 18.5H10a1.5 1.5 0 0 0 1.5-1.5V6.5h9V17a1.5 1.5 0 0 0 1.5 1.5h2.375z"/>`, 'fill': `<path fill="currentColor" d="m28.708 17.708-12 12a1 1 0 0 1-1.415 0l-12-12A1 1 0 0 1 4 16h5V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10h5a1 1 0 0 1 .708 1.707"/>`, 'duotone': `<path fill="currentColor" d="M28 17 16 29 4 17h6V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v11z" opacity=".08"/><path fill="currentColor" d="M28.924 16.618A1 1 0 0 0 28 16h-5V6a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v10H4a1 1 0 0 0-.707 1.707l12 12a1 1 0 0 0 1.415 0l12-12a1 1 0 0 0 .216-1.09M16 27.586 6.414 18H10a1 1 0 0 0 1-1V6h10v11a1 1 0 0 0 1 1h3.586z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
