<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M19.439 3.101a1 1 0 0 0-1.053.11L9.656 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.656l8.73 6.789A1.001 1.001 0 0 0 20 28V4a1 1 0 0 0-.561-.899M4 12h5v8H4zm14 13.955-7-5.444V11.49l7-5.444z"/>`, 'thin': `<path fill="currentColor" d="M19.22 3.551a.5.5 0 0 0-.527.054L9.828 10.5H4A1.5 1.5 0 0 0 2.5 12v8A1.5 1.5 0 0 0 4 21.5h5.829l8.863 6.895a.51.51 0 0 0 .528.054.5.5 0 0 0 .28-.45V4a.5.5 0 0 0-.28-.448M3.5 20v-8a.5.5 0 0 1 .5-.5h5.5v9H4a.5.5 0 0 1-.5-.5m15 6.977-8-6.227v-9.5l8-6.223z"/>`, 'light': `<path fill="currentColor" d="M19.33 3.326a.75.75 0 0 0-.79.081L9.743 10.25H4A1.75 1.75 0 0 0 2.25 12v8A1.75 1.75 0 0 0 4 21.75h5.743l8.797 6.843A.75.75 0 0 0 19.75 28V4a.75.75 0 0 0-.42-.674M3.75 20v-8a.25.25 0 0 1 .25-.25h5.25v8.5H4a.25.25 0 0 1-.25-.25m14.5 6.466-7.5-5.834v-9.265l7.5-5.833z"/>`, 'bold': `<path fill="currentColor" d="M19.659 2.652a1.5 1.5 0 0 0-1.58.164L9.485 9.5H4A2.5 2.5 0 0 0 1.5 12v8A2.5 2.5 0 0 0 4 22.5h5.485l8.594 6.684A1.5 1.5 0 0 0 20.5 28V4a1.5 1.5 0 0 0-.841-1.348M4.5 12.5h4v7h-4zm13 12.432-6-4.667v-8.53l6-4.668z"/>`, 'fill': `<path fill="currentColor" d="M19.439 3.101a1 1 0 0 0-1.053.11L9.656 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.656l8.73 6.789A1.001 1.001 0 0 0 20 28V4a1 1 0 0 0-.561-.899M4 12h5v8H4z"/>`, 'duotone': `<path fill="currentColor" d="M10 11v10H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z" opacity=".08"/><path fill="currentColor" d="M19.439 3.101a1 1 0 0 0-1.053.11L9.656 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.656l8.73 6.789A1.001 1.001 0 0 0 20 28V4a1 1 0 0 0-.561-.899M4 12h5v8H4zm14 13.955-7-5.446v-9.016l7-5.448z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
