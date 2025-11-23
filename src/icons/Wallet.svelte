<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 9H7a1 1 0 0 1 0-2h17a1 1 0 1 0 0-2H7a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h20a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m0 16H7a1 1 0 0 1-1-1V10.829c.321.114.66.172 1 .171h20zm-6-7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"/>`, 'thin': `<path fill="currentColor" d="M27 9.5H7a1.5 1.5 0 0 1 0-3h17a.5.5 0 0 0 0-1H7A2.5 2.5 0 0 0 4.5 8v16A2.5 2.5 0 0 0 7 26.5h20a1.5 1.5 0 0 0 1.5-1.5V11A1.5 1.5 0 0 0 27 9.5m.5 15.5a.5.5 0 0 1-.5.5H7A1.5 1.5 0 0 1 5.5 24V10c.432.326.959.501 1.5.5h20a.5.5 0 0 1 .5.5zm-4-7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`, 'light': `<path fill="currentColor" d="M27 9.25H7a1.25 1.25 0 0 1 0-2.5h17a.75.75 0 1 0 0-1.5H7A2.75 2.75 0 0 0 4.25 8v16A2.75 2.75 0 0 0 7 26.75h20A1.75 1.75 0 0 0 28.75 25V11A1.75 1.75 0 0 0 27 9.25M27.25 25a.25.25 0 0 1-.25.25H7A1.25 1.25 0 0 1 5.75 24V10.449A2.7 2.7 0 0 0 7 10.75h20a.25.25 0 0 1 .25.25zm-3.5-7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"/>`, 'bold': `<path fill="currentColor" d="M24.5 17.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m5-4v10a4 4 0 0 1-4 4h-18a4 4 0 0 1-4-4V8.615a4 4 0 0 1 4-4.115H24a1.5 1.5 0 1 1 0 3H7.5a1 1 0 0 0-1 1.033v.01a1.04 1.04 0 0 0 1.06.957H25.5a4 4 0 0 1 4 4m-3 0a1 1 0 0 0-1-1H7.56c-.358 0-.714-.045-1.06-.135V23.5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1z"/>`, 'fill': `<path fill="currentColor" d="M27 9H7a1 1 0 0 1 0-2h17a1 1 0 1 0 0-2H7a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h20a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m-4.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>`, 'duotone': `<path fill="currentColor" d="M28 11v14a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V8a2 2 0 0 0 2 2h20a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M27 9H7a1 1 0 0 1 0-2h17a1 1 0 1 0 0-2H7a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h20a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m0 16H7a1 1 0 0 1-1-1V10.829c.321.114.66.172 1 .171h20zm-6-7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
