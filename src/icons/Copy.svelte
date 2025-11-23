<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 4H11a1 1 0 0 0-1 1v5H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-7 22H6V12h14zm6-6h-4v-9a1 1 0 0 0-1-1h-9V6h14z"/>`, 'thin': `<path fill="currentColor" d="M27 4.5H11a.5.5 0 0 0-.5.5v5.5H5a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5v-5.5H27a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5m-6.5 22h-15v-15h15zm6-6h-5V11a.5.5 0 0 0-.5-.5h-9.5v-5h15z"/>`, 'light': `<path fill="currentColor" d="M27 4.25H11a.75.75 0 0 0-.75.75v5.25H5a.75.75 0 0 0-.75.75v16a.75.75 0 0 0 .75.75h16a.75.75 0 0 0 .75-.75v-5.25H27a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75m-6.75 22H5.75v-14.5h14.5zm6-6h-4.5V11a.75.75 0 0 0-.75-.75h-9.25v-4.5h14.5z"/>`, 'bold': `<path fill="currentColor" d="M27 3.5H11A1.5 1.5 0 0 0 9.5 5v4.5H5A1.5 1.5 0 0 0 3.5 11v16A1.5 1.5 0 0 0 5 28.5h16a1.5 1.5 0 0 0 1.5-1.5v-4.5H27a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 27 3.5m-7.5 22h-13v-13h13zm6-6h-3V11A1.5 1.5 0 0 0 21 9.5h-8.5v-3h13z"/>`, 'fill': `<path fill="currentColor" d="M27 4H11a1 1 0 0 0-1 1v5H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 16h-4v-9a1 1 0 0 0-1-1h-9V6h14z"/>`, 'duotone': `<path fill="currentColor" d="M27 5v16h-6V11H11V5z" opacity=".08"/><path fill="currentColor" d="M27 4H11a1 1 0 0 0-1 1v5H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-7 22H6V12h14zm6-6h-4v-9a1 1 0 0 0-1-1h-9V6h14z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
