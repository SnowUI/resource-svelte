<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M23.6 21.2 16.666 16l6.934-5.2a1 1 0 0 0 0-1.6l-8-6A1 1 0 0 0 14 4v10L7.6 9.2a1 1 0 1 0-1.2 1.6l6.934 5.2L6.4 21.2a1 1 0 0 0 1.2 1.6L14 18v10a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6M16 6l5.334 4L16 14zm0 20v-8l5.334 4z"/>`, 'thin': `<path fill="currentColor" d="M23.3 21.6 15.834 16l7.466-5.6a.5.5 0 0 0 0-.8l-8-6a.5.5 0 0 0-.8.4v11L7.3 9.6a.5.5 0 1 0-.6.8l7.466 5.6L6.7 21.6a.5.5 0 0 0 .6.8l7.2-5.4v11a.5.5 0 0 0 .8.4l8-6a.5.5 0 0 0 0-.8M15.5 5l6.666 5-6.666 5zm0 22V17l6.666 5z"/>`, 'light': `<path fill="currentColor" d="m23.45 21.4-7.2-5.4 7.2-5.4a.75.75 0 0 0 0-1.2l-8-6a.75.75 0 0 0-1.2.6v10.5l-6.8-5.1a.75.75 0 0 0-.9 1.2l7.2 5.4-7.2 5.4a.75.75 0 1 0 .9 1.2l6.8-5.1V28a.75.75 0 0 0 1.2.6l8-6a.75.75 0 0 0 0-1.2m-7.7-15.9 6 4.5-6 4.5zm0 21v-9l6 4.5z"/>`, 'bold': `<path fill="currentColor" d="M23.9 20.8 17.5 16l6.4-4.8a1.5 1.5 0 0 0 0-2.4l-8-6A1.5 1.5 0 0 0 13.5 4v9L7.9 8.8a1.5 1.5 0 0 0-1.8 2.4l6.4 4.8-6.4 4.8a1.5 1.5 0 0 0 1.8 2.4l5.6-4.2v9a1.5 1.5 0 0 0 2.4 1.2l8-6a1.5 1.5 0 0 0 0-2.4M16.5 7l4 3-4 3zm0 18v-6l4 3z"/>`, 'fill': `<path fill="currentColor" d="M24 22a1 1 0 0 1-.4.8l-8 6A1 1 0 0 1 14 28V18l-6.4 4.8a1 1 0 0 1-1.2-1.6l6.934-5.2L6.4 10.8a1 1 0 1 1 1.2-1.6L14 14V4a1 1 0 0 1 1.6-.8l8 6a1 1 0 0 1 0 1.6L16.666 16l6.934 5.2a1 1 0 0 1 .4.8"/>`, 'duotone': `<path fill="currentColor" d="m23 10-8 6V4zm-8 18 8-6-8-6z" opacity=".08"/><path fill="currentColor" d="M23.6 21.2 16.666 16l6.934-5.2a1 1 0 0 0 0-1.6l-8-6A1 1 0 0 0 14 4v10L7.6 9.2a1 1 0 1 0-1.2 1.6l6.934 5.2L6.4 21.2a1 1 0 0 0 1.2 1.6L14 18v10a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6M16 6l5.334 4L16 14zm0 20v-8l5.334 4z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
