<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 5H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h9v2h-3a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2h9a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3M6 7h20a1 1 0 0 1 1 1v10H5V8a1 1 0 0 1 1-1m20 16H6a1 1 0 0 1-1-1v-2h22v2a1 1 0 0 1-1 1"/>`, 'thin': `<path fill="currentColor" d="M26 5.5H6A2.5 2.5 0 0 0 3.5 8v14A2.5 2.5 0 0 0 6 24.5h9.5v3H12a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-3.5v-3H26a2.5 2.5 0 0 0 2.5-2.5V8A2.5 2.5 0 0 0 26 5.5m-20 1h20A1.5 1.5 0 0 1 27.5 8v10.5h-23V8A1.5 1.5 0 0 1 6 6.5m20 17H6A1.5 1.5 0 0 1 4.5 22v-2.5h23V22a1.5 1.5 0 0 1-1.5 1.5"/>`, 'light': `<path fill="currentColor" d="M26 5.25H6A2.75 2.75 0 0 0 3.25 8v14A2.75 2.75 0 0 0 6 24.75h9.25v2.5H12a.75.75 0 1 0 0 1.5h8a.75.75 0 1 0 0-1.5h-3.25v-2.5H26A2.75 2.75 0 0 0 28.75 22V8A2.75 2.75 0 0 0 26 5.25M6 6.75h20A1.25 1.25 0 0 1 27.25 8v10.25H4.75V8A1.25 1.25 0 0 1 6 6.75m20 16.5H6A1.25 1.25 0 0 1 4.75 22v-2.25h22.5V22A1.25 1.25 0 0 1 26 23.25"/>`, 'bold': `<path fill="currentColor" d="M26 4.5H6A3.5 3.5 0 0 0 2.5 8v13.5A3.5 3.5 0 0 0 6 25h8.5v1.5H12a1.5 1.5 0 1 0 0 3h8a1.5 1.5 0 1 0 0-3h-2.5V25H26a3.5 3.5 0 0 0 3.5-3.5V8A3.5 3.5 0 0 0 26 4.5m-20 3h20a.5.5 0 0 1 .5.5v9h-21V8a.5.5 0 0 1 .5-.5M26 22H6a.5.5 0 0 1-.5-.5V20h21v1.5a.5.5 0 0 1-.5.5"/>`, 'fill': `<path fill="currentColor" d="M26 5H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h9v2h-3a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2h9a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m0 18H6a1 1 0 0 1-1-1v-2h22v2a1 1 0 0 1-1 1"/>`, 'duotone': `<path fill="currentColor" d="M28 8v11H4V8a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2" opacity=".08"/><path fill="currentColor" d="M26 5H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h9v2h-3a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2h9a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3M6 7h20a1 1 0 0 1 1 1v10H5V8a1 1 0 0 1 1-1m20 16H6a1 1 0 0 1-1-1v-2h22v2a1 1 0 0 1-1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
