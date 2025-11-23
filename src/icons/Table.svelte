<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 6H4a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1M5 14h5v4H5zm7 0h15v4H12zm15-6v4H5V8zM5 20h5v4H5zm22 4H12v-4h15z"/>`, 'thin': `<path fill="currentColor" d="M28 6.5H4a.5.5 0 0 0-.5.5v17A1.5 1.5 0 0 0 5 25.5h22a1.5 1.5 0 0 0 1.5-1.5V7a.5.5 0 0 0-.5-.5m-23.5 7h6v5h-6zm7 0h16v5h-16zm16-6v5h-23v-5zM4.5 24v-4.5h6v5H5a.5.5 0 0 1-.5-.5m22.5.5H11.5v-5h16V24a.5.5 0 0 1-.5.5"/>`, 'light': `<path fill="currentColor" d="M28 6.25H4a.75.75 0 0 0-.75.75v17A1.75 1.75 0 0 0 5 25.75h22A1.75 1.75 0 0 0 28.75 24V7a.75.75 0 0 0-.75-.75m-23.25 7.5h5.5v4.5h-5.5zm7 0h15.5v4.5h-15.5zm15.5-6v4.5H4.75v-4.5zM4.75 24v-4.25h5.5v4.5H5a.25.25 0 0 1-.25-.25m22.25.25H11.75v-4.5h15.5V24a.25.25 0 0 1-.25.25"/>`, 'bold': `<path fill="currentColor" d="M28 5.5H4A1.5 1.5 0 0 0 2.5 7v17A2.5 2.5 0 0 0 5 26.5h22a2.5 2.5 0 0 0 2.5-2.5V7A1.5 1.5 0 0 0 28 5.5m-22.5 9h4v3h-4zm7 0h14v3h-14zm14-6v3h-21v-3zm-21 12h4v3h-4zm7 3v-3h14v3z"/>`, 'fill': `<path fill="currentColor" d="M28 6H4a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1M5 14h5v4H5zm7 0h15v4H12zm-7 6h5v4H5zm22 4H12v-4h15z"/>`, 'duotone': `<path fill="currentColor" d="M11 13v12H4V13z" opacity=".08"/><path fill="currentColor" d="M28 6H4a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1M5 14h5v4H5zm7 0h15v4H12zm15-6v4H5V8zM5 20h5v4H5zm22 4H12v-4h15z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
