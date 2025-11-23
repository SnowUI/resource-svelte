<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M14 27a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a1 1 0 1 1 0 2H6v20h7a1 1 0 0 1 1 1m13.708-11.707-5-5a1 1 0 0 0-1.415 1.415L24.586 15H13a1 1 0 0 0 0 2h11.586l-3.293 3.293a1 1 0 1 0 1.415 1.415l5-5a1 1 0 0 0 0-1.415"/>`, 'thin': `<path fill="currentColor" d="M13.5 27a.5.5 0 0 1-.5.5H6A1.5 1.5 0 0 1 4.5 26V6A1.5 1.5 0 0 1 6 4.5h7a.5.5 0 0 1 0 1H6a.5.5 0 0 0-.5.5v20a.5.5 0 0 0 .5.5h7a.5.5 0 0 1 .5.5m13.854-11.354-5-5a.5.5 0 0 0-.708.708l4.147 4.146H13a.5.5 0 0 0 0 1h12.793l-4.147 4.146a.5.5 0 0 0 .708.708l5-5a.503.503 0 0 0 0-.708"/>`, 'light': `<path fill="currentColor" d="M13.75 27a.75.75 0 0 1-.75.75H6A1.75 1.75 0 0 1 4.25 26V6A1.75 1.75 0 0 1 6 4.25h7a.75.75 0 1 1 0 1.5H6a.25.25 0 0 0-.25.25v20a.25.25 0 0 0 .25.25h7a.75.75 0 0 1 .75.75m13.78-11.53-5-5a.75.75 0 0 0-1.06 1.06l3.719 3.72H13a.75.75 0 1 0 0 1.5h12.189l-3.719 3.72a.75.75 0 1 0 1.06 1.06l5-5a.75.75 0 0 0 0-1.06"/>`, 'bold': `<path fill="currentColor" d="M14.5 27a1.5 1.5 0 0 1-1.5 1.5H6A2.5 2.5 0 0 1 3.5 26V6A2.5 2.5 0 0 1 6 3.5h7a1.5 1.5 0 0 1 0 3H6.5v19H13a1.5 1.5 0 0 1 1.5 1.5m13.561-12.061-5-5a1.503 1.503 0 0 0-2.125 2.125l2.439 2.436H13a1.5 1.5 0 1 0 0 3h10.375l-2.44 2.439a1.503 1.503 0 0 0 2.125 2.125l5-5a1.5 1.5 0 0 0 .001-2.125"/>`, 'fill': `<path fill="currentColor" d="M14 27a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a1 1 0 1 1 0 2H6v20h7a1 1 0 0 1 1 1m13.708-11.707-5-5A1 1 0 0 0 21 11v4h-8a1 1 0 0 0 0 2h8v4a1 1 0 0 0 1.707.707l5-5a1 1 0 0 0 0-1.415"/>`, 'duotone': `<path fill="currentColor" d="m27 16-5 5V11z" opacity=".08"/><path fill="currentColor" d="M14 27a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a1 1 0 1 1 0 2H6v20h7a1 1 0 0 1 1 1m13.708-10.292-5 5A1 1 0 0 1 21 21v-4h-8a1 1 0 0 1 0-2h8v-4a1 1 0 0 1 1.707-.707l5 5a1 1 0 0 1 0 1.415M25.583 16 23 13.414v5.172z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
