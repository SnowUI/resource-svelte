<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M4 8a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 9h22a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2m13 6H5a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2m11 0h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2"/>`, 'thin': `<path fill="currentColor" d="M4.5 8a.5.5 0 0 1 .5-.5h22a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m.5 8.5h22a.5.5 0 0 0 0-1H5a.5.5 0 0 0 0 1m13 7H5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1m11 0h-2.5V21a.5.5 0 0 0-1 0v2.5H23a.5.5 0 0 0 0 1h2.5V27a.5.5 0 0 0 1 0v-2.5H29a.5.5 0 0 0 0-1"/>`, 'light': `<path fill="currentColor" d="M4.25 8A.75.75 0 0 1 5 7.25h22a.75.75 0 1 1 0 1.5H5A.75.75 0 0 1 4.25 8M5 16.75h22a.75.75 0 1 0 0-1.5H5a.75.75 0 1 0 0 1.5m13 6.5H5a.75.75 0 1 0 0 1.5h13a.75.75 0 1 0 0-1.5m11 0h-2.25V21a.75.75 0 1 0-1.5 0v2.25H23a.75.75 0 1 0 0 1.5h2.25V27a.75.75 0 1 0 1.5 0v-2.25H29a.75.75 0 1 0 0-1.5"/>`, 'bold': `<path fill="currentColor" d="M3.5 8A1.5 1.5 0 0 1 5 6.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 8M5 17.5h22a1.5 1.5 0 1 0 0-3H5a1.5 1.5 0 1 0 0 3m13 5H5a1.5 1.5 0 1 0 0 3h13a1.5 1.5 0 1 0 0-3m11 0h-1.5V21a1.5 1.5 0 1 0-3 0v1.5H23a1.5 1.5 0 1 0 0 3h1.5V27a1.5 1.5 0 1 0 3 0v-1.5H29a1.5 1.5 0 1 0 0-3"/>`, 'fill': `<path fill="currentColor" d="M4 9V7a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1m1 9h22a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1m14 4H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m10 1h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2"/>`, 'duotone': `<path fill="currentColor" d="M27 8v16H5V8z" opacity=".08"/><path fill="currentColor" d="M4 8a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 9h22a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2m13 6H5a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2m11 0h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
