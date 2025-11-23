<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M31 16a7.01 7.01 0 0 1-7 7H6a5 5 0 0 1 0-10h18a3 3 0 0 1 0 6H10a1 1 0 0 1 0-2h14a1 1 0 0 0 0-2H6a3 3 0 0 0 0 6h18a5 5 0 1 0 0-10H10a1 1 0 0 1 0-2h14a7.01 7.01 0 0 1 7 7"/>`, 'thin': `<path fill="currentColor" d="M30.5 16a6.507 6.507 0 0 1-6.5 6.5H6a4.5 4.5 0 1 1 0-9h18a2.5 2.5 0 0 1 0 5H10a.5.5 0 0 1 0-1h14a1.5 1.5 0 1 0 0-3H6a3.5 3.5 0 1 0 0 7h18a5.5 5.5 0 0 0 0-11H10a.5.5 0 0 1 0-1h14a6.507 6.507 0 0 1 6.5 6.5"/>`, 'light': `<path fill="currentColor" d="M30.75 16A6.76 6.76 0 0 1 24 22.75H6a4.75 4.75 0 1 1 0-9.5h18a2.75 2.75 0 1 1 0 5.5H10a.75.75 0 1 1 0-1.5h14a1.25 1.25 0 0 0 0-2.5H6a3.25 3.25 0 1 0 0 6.5h18a5.25 5.25 0 1 0 0-10.5H10a.75.75 0 1 1 0-1.5h14A6.76 6.76 0 0 1 30.75 16"/>`, 'bold': `<path fill="currentColor" d="M31.5 16a7.51 7.51 0 0 1-7.5 7.5H5.5a5 5 0 0 1 0-10H23a1.5 1.5 0 1 1 0 3H5.5a2 2 0 1 0 0 4H24a4.5 4.5 0 1 0 0-9H10a1.5 1.5 0 1 1 0-3h14a7.51 7.51 0 0 1 7.5 7.5"/>`, 'fill': `<path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m5 18H9a3 3 0 0 1 0-6h12a1 1 0 0 1 0 2H9a1 1 0 0 0 0 2h12a3 3 0 0 0 0-6h-9a1 1 0 0 1 0-2h9a5 5 0 1 1 0 10"/>`, 'duotone': `<path fill="currentColor" d="M30 16a6 6 0 0 1-6 6H6a4 4 0 1 1 0-8h4v-4h14a6 6 0 0 1 6 6" opacity=".08"/><path fill="currentColor" d="M31 16a7.01 7.01 0 0 1-7 7H6a5 5 0 0 1 0-10h18a3 3 0 0 1 0 6H10a1 1 0 0 1 0-2h14a1 1 0 0 0 0-2H6a3 3 0 0 0 0 6h18a5 5 0 1 0 0-10H10a1 1 0 0 1 0-2h14a7.01 7.01 0 0 1 7 7"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
