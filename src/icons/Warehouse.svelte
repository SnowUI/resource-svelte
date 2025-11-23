<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M30 23h-1V7.237l1.209-.26a1 1 0 1 0-.419-1.955l-28 6a1 1 0 0 0 .421 1.955L3 12.81V23H2a1 1 0 1 0 0 2h28a1 1 0 0 0 0-2M5 12.375l22-4.709V23h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5zM22 19H10v-2h12zm-12 2h12v2H10z"/>`, 'thin': `<path fill="currentColor" d="M30 23.5h-1.5V6.833l1.605-.344a.5.5 0 1 0-.21-.978l-28 6a.5.5 0 0 0 .21.978L3.5 12.19V23.5H2a.5.5 0 0 0 0 1h28a.5.5 0 1 0 0-1M4.5 11.976l23-4.928V23.5h-4V16a.5.5 0 0 0-.5-.5H9a.5.5 0 0 0-.5.5v7.5h-4zm18 7.524h-13v-3h13zm-13 1h13v3h-13z"/>`, 'light': `<path fill="currentColor" d="M30 23.25h-1.25V7.035l1.407-.301a.75.75 0 0 0-.314-1.468l-28 6a.75.75 0 0 0 .314 1.468L3.25 12.5v10.75H2a.75.75 0 1 0 0 1.5h28a.75.75 0 1 0 0-1.5M4.75 12.178l22.5-4.822V23.25h-3.5V16a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.75.75v7.25h-3.5zm17.5 7.072H9.75v-2.5h12.5zm-12.5 1.5h12.5v2.5H9.75z"/>`, 'bold': `<path fill="currentColor" d="M30 22.5h-.5V7.641l.814-.173a1.5 1.5 0 1 0-.625-2.934l-28 6a1.5 1.5 0 0 0 .627 2.934l.185-.04V22.5H2a1.5 1.5 0 1 0 0 3h28a1.5 1.5 0 0 0 0-3M5.5 12.784l21-4.5V22.5H24V15a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 8 15v7.5H5.5zM21 18H11v-1.5h10zm-10 3h10v1.5H11z"/>`, 'fill': `<path fill="currentColor" d="M30 23h-1V7.237l1.209-.26a1 1 0 1 0-.419-1.955l-28 6a1 1 0 0 0 .421 1.955L3 12.81V23H2a1 1 0 1 0 0 2h28a1 1 0 0 0 0-2m-7 0H9v-2h14zm0-4H9v-2h14z"/>`, 'duotone': `<path fill="currentColor" d="M23 16v8H9v-8z" opacity=".08"/><path fill="currentColor" d="M30 23h-1V7.237l1.209-.26a1 1 0 1 0-.419-1.955l-28 6a1 1 0 0 0 .421 1.955L3 12.81V23H2a1 1 0 1 0 0 2h28a1 1 0 0 0 0-2M5 12.375l22-4.709V23h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5zM22 19H10v-2h12zm-12 2h12v2H10z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
