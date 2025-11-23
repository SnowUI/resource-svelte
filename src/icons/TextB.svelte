<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M21.31 14.463A5.5 5.5 0 0 0 17.5 5H9a1 1 0 0 0-1 1v19a1 1 0 0 0 1 1h10a6 6 0 0 0 2.31-11.537M10 7h7.5a3.5 3.5 0 1 1 0 7H10zm9 17h-9v-8h9a4 4 0 1 1 0 8"/>`, 'thin': `<path fill="currentColor" d="M20.284 14.651A5 5 0 0 0 17.5 5.5H9a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h10a5.5 5.5 0 0 0 1.284-10.849M9.5 6.5h8a4 4 0 1 1 0 8h-8zm9.5 18H9.5v-9H19a4.5 4.5 0 1 1 0 9"/>`, 'light': `<path fill="currentColor" d="M20.836 14.551A5.251 5.251 0 0 0 17.5 5.25H9a.75.75 0 0 0-.75.75v19a.75.75 0 0 0 .75.75h10a5.75 5.75 0 0 0 1.836-11.199M9.75 6.75h7.75a3.75 3.75 0 1 1 0 7.5H9.75zM19 24.25H9.75v-8.5H19a4.25 4.25 0 0 1 0 8.5"/>`, 'bold': `<path fill="currentColor" d="M22.135 14.308A6.001 6.001 0 0 0 17.5 4.5H9A1.5 1.5 0 0 0 7.5 6v19A1.5 1.5 0 0 0 9 26.5h10a6.5 6.5 0 0 0 3.135-12.192M10.5 7.5h7a3 3 0 0 1 0 6h-7zm8.5 16h-8.5v-7H19a3.5 3.5 0 1 1 0 7"/>`, 'fill': `<path fill="currentColor" d="M21 19.5a2.5 2.5 0 0 1-2.5 2.5H12v-5h6.5a2.5 2.5 0 0 1 2.5 2.5M28 6v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2m-5 13.5a4.5 4.5 0 0 0-2.25-3.894A4.5 4.5 0 0 0 17.5 8H11a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7.5a4.5 4.5 0 0 0 4.5-4.5m-3-7a2.5 2.5 0 0 0-2.5-2.5H12v5h5.5a2.5 2.5 0 0 0 2.5-2.5"/>`, 'duotone': `<path fill="currentColor" d="M24 20a5 5 0 0 1-5 5H9V6h8.5a4.5 4.5 0 1 1 0 9H19a5 5 0 0 1 5 5" opacity=".08"/><path fill="currentColor" d="M21.31 14.463A5.5 5.5 0 0 0 17.5 5H9a1 1 0 0 0-1 1v19a1 1 0 0 0 1 1h10a6 6 0 0 0 2.31-11.537M10 7h7.5a3.5 3.5 0 1 1 0 7H10zm9 17h-9v-8h9a4 4 0 1 1 0 8"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
