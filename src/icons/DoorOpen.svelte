<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M29 27h-3V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v22H3a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2M24 5v22h-2V5zM8 5h12v22H8zm10 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`, 'thin': `<path fill="currentColor" d="M29 27.5h-3.5V5A1.5 1.5 0 0 0 24 3.5H8A1.5 1.5 0 0 0 6.5 5v22.5H3a.5.5 0 0 0 0 1h26a.5.5 0 0 0 0-1M24.5 5v22.5h-3V5c0-.17-.03-.34-.087-.5H24a.5.5 0 0 1 .5.5m-17 0a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v22.5h-13zM18 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`, 'light': `<path fill="currentColor" d="M29 27.25h-3.25V5A1.75 1.75 0 0 0 24 3.25H8A1.75 1.75 0 0 0 6.25 5v22.25H3a.75.75 0 1 0 0 1.5h26a.75.75 0 1 0 0-1.5M24.25 5v22.25h-2.5V5a2 2 0 0 0-.02-.25H24a.25.25 0 0 1 .25.25M7.75 5A.25.25 0 0 1 8 4.75h12a.25.25 0 0 1 .25.25v22.25H7.75zM18 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`, 'bold': `<path fill="currentColor" d="M29 26.5h-2.5V5A2.5 2.5 0 0 0 24 2.5H8A2.5 2.5 0 0 0 5.5 5v21.5H3a1.5 1.5 0 1 0 0 3h26a1.5 1.5 0 1 0 0-3m-5.5 0h-2v-21h2zm-15-21h10v21h-10zm8.5 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`, 'fill': `<path fill="currentColor" d="M29 27h-3V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v22H3a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2m-8 0H8V5h13zm-5-10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"/>`, 'duotone': `<path fill="currentColor" d="M25 5v23h-4V5a1 1 0 0 0-1-1h4a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M29 27h-3V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v22H3a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2M24 5v22h-2V5zM8 5h12v22H8zm10 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
