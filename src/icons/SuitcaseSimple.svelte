<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 7h-5V6a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M12 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h-8zm15 3v9H5V9zm0 16H5v-5h22z"/>`, 'thin': `<path fill="currentColor" d="M27 7.5h-5.5V6A2.5 2.5 0 0 0 19 3.5h-6A2.5 2.5 0 0 0 10.5 6v1.5H5A1.5 1.5 0 0 0 3.5 9v16A1.5 1.5 0 0 0 5 26.5h22a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 27 7.5M11.5 6A1.5 1.5 0 0 1 13 4.5h6A1.5 1.5 0 0 1 20.5 6v1.5h-9zM5 8.5h22a.5.5 0 0 1 .5.5v9.5h-23V9a.5.5 0 0 1 .5-.5m22 17H5a.5.5 0 0 1-.5-.5v-5.5h23V25a.5.5 0 0 1-.5.5"/>`, 'light': `<path fill="currentColor" d="M27 7.25h-5.25V6A2.75 2.75 0 0 0 19 3.25h-6A2.75 2.75 0 0 0 10.25 6v1.25H5A1.75 1.75 0 0 0 3.25 9v16A1.75 1.75 0 0 0 5 26.75h22A1.75 1.75 0 0 0 28.75 25V9A1.75 1.75 0 0 0 27 7.25M11.75 6A1.25 1.25 0 0 1 13 4.75h6A1.25 1.25 0 0 1 20.25 6v1.25h-8.5zM5 8.75h22a.25.25 0 0 1 .25.25v9.25H4.75V9A.25.25 0 0 1 5 8.75m22 16.5H5a.25.25 0 0 1-.25-.25v-5.25h22.5V25a.25.25 0 0 1-.25.25"/>`, 'bold': `<path fill="currentColor" d="M27 6h-4.5V5A3.5 3.5 0 0 0 19 1.5h-6A3.5 3.5 0 0 0 9.5 5v1H5a2.5 2.5 0 0 0-2.5 2.5v16A2.5 2.5 0 0 0 5 27h22a2.5 2.5 0 0 0 2.5-2.5v-16A2.5 2.5 0 0 0 27 6M12.5 5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1h-7zm14 4v8h-21V9zm-21 15v-4h21v4z"/>`, 'fill': `<path fill="currentColor" d="M27 7h-5V6a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M12 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h-8zm15 3v9H5V9z"/>`, 'duotone': `<path fill="currentColor" d="M28 19v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6z" opacity=".08"/><path fill="currentColor" d="M27 7h-5V6a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M12 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h-8zm15 3v9H5V9zm0 16H5v-5h22z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
