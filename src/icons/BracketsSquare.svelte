<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M6 6v20h4a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2zm21-2h-5a1 1 0 1 0 0 2h4v20h-4a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1"/>`, 'thin': `<path fill="currentColor" d="M5.5 5.5v21H10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1zm21.5-1h-5a.5.5 0 0 0 0 1h4.5v21H22a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5"/>`, 'light': `<path fill="currentColor" d="M5.75 5.75v20.5H10a.75.75 0 1 1 0 1.5H5a.75.75 0 0 1-.75-.75V5A.75.75 0 0 1 5 4.25h5a.75.75 0 1 1 0 1.5zM27 4.25h-5a.75.75 0 1 0 0 1.5h4.25v20.5H22a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75"/>`, 'bold': `<path fill="currentColor" d="M6.5 6.5v19H10a1.5 1.5 0 1 1 0 3H5A1.5 1.5 0 0 1 3.5 27V5A1.5 1.5 0 0 1 5 3.5h5a1.5 1.5 0 0 1 0 3zm20.5-3h-5a1.5 1.5 0 0 0 0 3h3.5v19H22a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 27 3.5"/>`, 'fill': `<path fill="currentColor" d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 22a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-3v12zm11 1a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h3V10h-3a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1z"/>`, 'duotone': `<path fill="currentColor" d="M27 5v22H5V5z" opacity=".08"/><path fill="currentColor" d="M6 6v20h4a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2zm21-2h-5a1 1 0 1 0 0 2h4v20h-4a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
