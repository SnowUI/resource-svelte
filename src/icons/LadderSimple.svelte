<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M24 3a1 1 0 0 0-1 1v4H9V4a1 1 0 0 0-2 0v24a1 1 0 1 0 2 0v-4h14v4a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1m-1 7v5H9v-5zM9 22v-5h14v5z"/>`, 'thin': `<path fill="currentColor" d="M24 3.5a.5.5 0 0 0-.5.5v4.5h-15V4a.5.5 0 1 0-1 0v24a.5.5 0 0 0 1 0v-4.5h15V28a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5m-.5 6v6h-15v-6zm-15 13v-6h15v6z"/>`, 'light': `<path fill="currentColor" d="M24 3.25a.75.75 0 0 0-.75.75v4.25H8.75V4a.75.75 0 0 0-1.5 0v24a.75.75 0 1 0 1.5 0v-4.25h14.5V28a.75.75 0 1 0 1.5 0V4a.75.75 0 0 0-.75-.75m-.75 6.5v5.5H8.75v-5.5zm-14.5 12.5v-5.5h14.5v5.5z"/>`, 'bold': `<path fill="currentColor" d="M24 2.5A1.5 1.5 0 0 0 22.5 4v3.5h-13V4a1.5 1.5 0 0 0-3 0v24a1.5 1.5 0 0 0 3 0v-3.5h13V28a1.5 1.5 0 1 0 3 0V4A1.5 1.5 0 0 0 24 2.5m-1.5 8v4h-13v-4zm-13 11v-4h13v4z"/>`, 'fill': `<path fill="currentColor" d="M24 3a1 1 0 0 0-1 1v1H9V4a1 1 0 0 0-2 0v24a1 1 0 1 0 2 0v-1h14v1a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1m-2 20H10a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2m0-6H10a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2m0-6H10a1 1 0 0 1 0-2h12a1 1 0 1 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M24 4v24H8V4z" opacity=".08"/><path fill="currentColor" d="M24 3a1 1 0 0 0-1 1v4H9V4a1 1 0 0 0-2 0v24a1 1 0 1 0 2 0v-4h14v4a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1m-1 7v5H9v-5zM9 22v-5h14v5z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
