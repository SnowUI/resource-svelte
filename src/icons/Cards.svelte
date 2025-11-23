<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M23 9H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m0 16H5V11h18zm6-18v15a1 1 0 0 1-2 0V7H8a1 1 0 0 1 0-2h19a2 2 0 0 1 2 2"/>`, 'thin': `<path fill="currentColor" d="M23 9.5H5A1.5 1.5 0 0 0 3.5 11v14A1.5 1.5 0 0 0 5 26.5h18a1.5 1.5 0 0 0 1.5-1.5V11A1.5 1.5 0 0 0 23 9.5m.5 15.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V11a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 .5.5zm5-18v15a.5.5 0 0 1-1 0V7a.5.5 0 0 0-.5-.5H8a.5.5 0 1 1 0-1h19A1.5 1.5 0 0 1 28.5 7"/>`, 'light': `<path fill="currentColor" d="M23 9.25H5A1.75 1.75 0 0 0 3.25 11v14A1.75 1.75 0 0 0 5 26.75h18A1.75 1.75 0 0 0 24.75 25V11A1.75 1.75 0 0 0 23 9.25M23.25 25a.25.25 0 0 1-.25.25H5a.25.25 0 0 1-.25-.25V11a.25.25 0 0 1 .25-.25h18a.25.25 0 0 1 .25.25zm5.5-18v15a.75.75 0 1 1-1.5 0V7a.25.25 0 0 0-.25-.25H8a.75.75 0 0 1 0-1.5h19A1.75 1.75 0 0 1 28.75 7"/>`, 'bold': `<path fill="currentColor" d="M22.5 9h-18A2.5 2.5 0 0 0 2 11.5v14A2.5 2.5 0 0 0 4.5 28h18a2.5 2.5 0 0 0 2.5-2.5v-14A2.5 2.5 0 0 0 22.5 9M22 25H5V12h17zm8-18.5V22a1.5 1.5 0 1 1-3 0V7H8a1.5 1.5 0 0 1 0-3h19.5A2.5 2.5 0 0 1 30 6.5"/>`, 'fill': `<path fill="currentColor" d="M23 9H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2"/><path fill="currentColor" d="M27 5H8a1 1 0 0 0 0 2h19v15a1 1 0 0 0 2 0V7a2 2 0 0 0-2-2"/>`, 'duotone': `<path fill="currentColor" d="M24 11v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M23 9H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m0 16H5V11h18zm6-18v15a1 1 0 0 1-2 0V7H8a1 1 0 0 1 0-2h19a2 2 0 0 1 2 2"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
