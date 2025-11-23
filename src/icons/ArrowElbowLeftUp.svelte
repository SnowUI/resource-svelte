<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M29 24a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V8.414l-4.292 4.294a1 1 0 0 1-1.415-1.415l6-6a1 1 0 0 1 1.415 0l6 6a1 1 0 0 1-1.415 1.415L11 8.414V23h17a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M28.5 24a.5.5 0 0 1-.5.5H10a.5.5 0 0 1-.5-.5V7.208l-5.146 5.146a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 1 1-.708.708L10.5 7.208V23.5H28a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M28.75 24a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V7.811L4.53 12.53a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06l-4.72-4.719V23.25H28a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M29.5 24a1.5 1.5 0 0 1-1.5 1.5H10A1.5 1.5 0 0 1 8.5 24V9.625l-3.439 3.436a1.503 1.503 0 1 1-2.125-2.125l6-6a1.5 1.5 0 0 1 2.125 0l6 6a1.503 1.503 0 0 1-2.125 2.125L11.5 9.625V22.5H28a1.5 1.5 0 0 1 1.5 1.5"/>`, 'fill': `<path fill="currentColor" d="M29 24a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V13H4a1.001 1.001 0 0 1-.707-1.707l6-6a1 1 0 0 1 1.415 0l6 6A1 1 0 0 1 16 13h-5v10h17a1 1 0 0 1 1 1"/>`, 'duotone': `<path fill="currentColor" d="M16 12H4l6-6z" opacity=".08"/><path fill="currentColor" d="M28 23H11V13h5a1 1 0 0 0 .708-1.707l-6-6a1 1 0 0 0-1.415 0l-6 6A1 1 0 0 0 4 13h5v11a1 1 0 0 0 1 1h18a1 1 0 0 0 0-2M10 7.414 13.586 11H6.414z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
