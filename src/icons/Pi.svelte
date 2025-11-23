<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M29 21.5a4.5 4.5 0 1 1-9 0V9h-8v16a1 1 0 0 1-2 0V9H9a5 5 0 0 0-5 5 1 1 0 1 1-2 0 7.01 7.01 0 0 1 7-7h19a1 1 0 1 1 0 2h-6v12.5a2.5 2.5 0 0 0 5 0 1 1 0 0 1 2 0"/>`, 'thin': `<path fill="currentColor" d="M28.5 21.5a4 4 0 1 1-8 0v-13h-9V25a.5.5 0 0 1-1 0V8.5H9A5.506 5.506 0 0 0 3.5 14a.5.5 0 0 1-1 0A6.51 6.51 0 0 1 9 7.5h19a.5.5 0 0 1 0 1h-6.5v13a3 3 0 0 0 6 0 .5.5 0 0 1 1 0"/>`, 'light': `<path fill="currentColor" d="M28.75 21.5a4.25 4.25 0 0 1-8.5 0V8.75h-8.5V25a.75.75 0 1 1-1.5 0V8.75H9A5.25 5.25 0 0 0 3.75 14a.75.75 0 1 1-1.5 0A6.76 6.76 0 0 1 9 7.25h19a.75.75 0 1 1 0 1.5h-6.25V21.5a2.75 2.75 0 1 0 5.5 0 .75.75 0 1 1 1.5 0"/>`, 'bold': `<path fill="currentColor" d="M29.5 21.5a5 5 0 1 1-10 0v-12h-7V25a1.5 1.5 0 1 1-3 0V9.5H9A4.5 4.5 0 0 0 4.5 14a1.5 1.5 0 0 1-3 0A7.51 7.51 0 0 1 9 6.5h19a1.5 1.5 0 0 1 0 3h-5.5v12a2 2 0 0 0 4 0 1.5 1.5 0 1 1 3 0"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-4.5 17a1.5 1.5 0 0 0 1.5-1.5 1 1 0 0 1 2 0 3.5 3.5 0 1 1-7 0V12h-4v10a1 1 0 0 1-2 0V12h-1a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5h13a1 1 0 0 1 0 2h-4v7.5a1.5 1.5 0 0 0 1.5 1.5"/>`, 'duotone': `<path fill="currentColor" d="M24.5 25H11V8h10v13.5a3.5 3.5 0 0 0 3.5 3.5" opacity=".08"/><path fill="currentColor" d="M29 21.5a4.5 4.5 0 1 1-9 0V9h-8v16a1 1 0 0 1-2 0V9H9a5 5 0 0 0-5 5 1 1 0 1 1-2 0 7.01 7.01 0 0 1 7-7h19a1 1 0 1 1 0 2h-6v12.5a2.5 2.5 0 0 0 5 0 1 1 0 0 1 2 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
