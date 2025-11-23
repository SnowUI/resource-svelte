<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M6.293 14.708a1 1 0 1 1 1.414-1.415L15 20.586V4a1 1 0 0 1 2 0v16.586l7.293-7.293a1 1 0 0 1 1.415 1.415l-9 9a1 1 0 0 1-1.415 0zM27 26H5a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2"/>`, 'thin': `<path fill="currentColor" d="M6.646 14.354a.5.5 0 0 1 .708-.708l8.146 8.147V4a.5.5 0 0 1 1 0v17.793l8.146-8.147a.501.501 0 0 1 .708.708l-9 9a.503.503 0 0 1-.708 0zM27 26.5H5a.5.5 0 0 0 0 1h22a.5.5 0 0 0 0-1"/>`, 'light': `<path fill="currentColor" d="M6.47 14.53a.75.75 0 0 1 1.06-1.06l7.72 7.719V4a.75.75 0 1 1 1.5 0v17.189l7.72-7.719a.75.75 0 0 1 1.06 1.06l-9 9a.75.75 0 0 1-1.06 0zM27 26.25H5a.75.75 0 1 0 0 1.5h22a.75.75 0 1 0 0-1.5"/>`, 'bold': `<path fill="currentColor" d="M5.939 14.061a1.502 1.502 0 1 1 2.125-2.125l6.436 6.439V4a1.5 1.5 0 1 1 3 0v14.375l6.439-6.44a1.503 1.503 0 0 1 2.125 2.125l-9 9a1.5 1.5 0 0 1-2.125 0zM27 25.5H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 1 0 0-3"/>`, 'fill': `<path fill="currentColor" d="M6.293 14.708A1 1 0 0 1 7 13h8V4a1 1 0 0 1 2 0v9h8a1 1 0 0 1 .707 1.707l-9 9a1 1 0 0 1-1.415 0zM27 26H5a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2"/>`, 'duotone': `<path fill="currentColor" d="m25 14-9 9-9-9z" opacity=".08"/><path fill="currentColor" d="M15.293 23.708a1 1 0 0 0 1.415 0l9-9A1 1 0 0 0 25 13h-8V4a1 1 0 0 0-2 0v9H7a1 1 0 0 0-.707 1.707zM22.586 15 16 21.586 9.414 15zM28 27a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
