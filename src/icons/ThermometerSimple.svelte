<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M17 19.125V11a1 1 0 0 0-2 0v8.125a4 4 0 1 0 2 0M16 25a2 2 0 1 1 0-4 2 2 0 0 1 0 4m5-8.25V6a5 5 0 0 0-10 0v10.75a8 8 0 1 0 10 0M16 29a6 6 0 0 1-3.427-10.925A1 1 0 0 0 13 17.25V6a3 3 0 0 1 6 0v11.25a1 1 0 0 0 .427.82A6 6 0 0 1 16 29"/>`, 'thin': `<path fill="currentColor" d="M16.5 19.536V11a.5.5 0 0 0-1 0v8.536a3.5 3.5 0 1 0 1 0M16 25.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m4.5-8.5V6a4.5 4.5 0 1 0-9 0v11a7.5 7.5 0 1 0 9 0M16 29.5a6.5 6.5 0 0 1-3.714-11.835.5.5 0 0 0 .214-.415V6a3.5 3.5 0 1 1 7 0v11.25a.5.5 0 0 0 .214.41A6.5 6.5 0 0 1 16 29.5"/>`, 'light': `<path fill="currentColor" d="M16.75 19.325V11a.75.75 0 1 0-1.5 0v8.325a3.75 3.75 0 1 0 1.5 0M16 25.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m4.75-8.375V6a4.75 4.75 0 1 0-9.5 0v10.875a7.75 7.75 0 1 0 9.5 0M16 29.25a6.25 6.25 0 0 1-3.571-11.375.75.75 0 0 0 .321-.625V6a3.25 3.25 0 1 1 6.5 0v11.25a.75.75 0 0 0 .321.615A6.25 6.25 0 0 1 16 29.25"/>`, 'bold': `<path fill="currentColor" d="M22.5 18.836V7a6.5 6.5 0 1 0-13 0v11.836a8 8 0 1 0 13 0M16 28.5a5 5 0 0 1-3.864-8.174 1.5 1.5 0 0 0 .364-.979V7a3.5 3.5 0 0 1 7 0v12.346c0 .35.122.69.346.96A5 5 0 0 1 16 28.5m3-5a3 3 0 1 1-4.5-2.597V11.5a1.5 1.5 0 1 1 3 0v9.403A3 3 0 0 1 19 23.5"/>`, 'fill': `<path fill="currentColor" d="M20 18.26V5a4 4 0 1 0-8 0v13.26a7 7 0 1 0 8 0M16 3a2 2 0 0 1 2 2v5h-4V5a2 2 0 0 1 2-2"/>`, 'duotone': `<path fill="currentColor" d="M20 17.25V6a4 4 0 1 0-8 0v11.25a7 7 0 1 0 8 0M16 26a3 3 0 1 1 0-5.999A3 3 0 0 1 16 26" opacity=".08"/><path fill="currentColor" d="M17 19.125V11a1 1 0 0 0-2 0v8.125a4 4 0 1 0 2 0M16 25a2 2 0 1 1 0-4 2 2 0 0 1 0 4m5-8.25V6a5 5 0 0 0-10 0v10.75a8 8 0 1 0 10 0M16 29a6 6 0 0 1-3.427-10.925A1 1 0 0 0 13 17.25V6a3 3 0 0 1 6 0v11.25a1 1 0 0 0 .427.82A6 6 0 0 1 16 29"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
