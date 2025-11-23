<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a1 1 0 1 1 0 2H6v19h19V16a1 1 0 0 1 2 0m2-8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0"/>`, 'thin': `<path fill="currentColor" d="M26.5 16v10a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 26V7A1.5 1.5 0 0 1 6 5.5h10a.5.5 0 0 1 0 1H6a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5V16a.5.5 0 0 1 1 0m2-8.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0"/>`, 'light': `<path fill="currentColor" d="M26.75 16v10A1.75 1.75 0 0 1 25 27.75H6A1.75 1.75 0 0 1 4.25 26V7A1.75 1.75 0 0 1 6 5.25h10a.75.75 0 1 1 0 1.5H6a.25.25 0 0 0-.25.25v19a.25.25 0 0 0 .25.25h19a.25.25 0 0 0 .25-.25V16a.75.75 0 1 1 1.5 0m2-8.5a4.25 4.25 0 1 1-8.5 0 4.25 4.25 0 0 1 8.5 0m-1.5 0a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0"/>`, 'bold': `<path fill="currentColor" d="M27.5 16.5V26a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26V7A2.5 2.5 0 0 1 6 4.5h9.5a1.5 1.5 0 0 1 0 3h-9v18h18v-9a1.5 1.5 0 1 1 3 0m2-9a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-3 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>`, 'fill': `<path fill="currentColor" d="M27 16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a1 1 0 1 1 0 2H6v19h19V16a1 1 0 0 1 2 0M24.5 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9"/>`, 'duotone': `<path fill="currentColor" d="M28 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" opacity=".08"/><path fill="currentColor" d="M27 16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a1 1 0 1 1 0 2H6v19h19V16a1 1 0 0 1 2 0m2-8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
