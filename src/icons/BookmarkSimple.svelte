<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M23 4H9a2 2 0 0 0-2 2v22a1 1 0 0 0 1.53.848l7.47-4.67 7.471 4.67A.999.999 0 0 0 25 28V6a2 2 0 0 0-2-2m0 22.196-6.471-4.044a1 1 0 0 0-1.06 0L9 26.197V6h14z"/>`, 'thin': `<path fill="currentColor" d="M23 4.5H9A1.5 1.5 0 0 0 7.5 6v22a.5.5 0 0 0 .765.424L16 23.59l7.736 4.834A.5.5 0 0 0 24.5 28V6A1.5 1.5 0 0 0 23 4.5m.5 22.598-7.236-4.522a.5.5 0 0 0-.53 0L8.5 27.098V6a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5z"/>`, 'light': `<path fill="currentColor" d="M23 4.25H9A1.75 1.75 0 0 0 7.25 6v22a.75.75 0 0 0 1.148.636l7.6-4.75 7.605 4.75A.75.75 0 0 0 24.75 28V6A1.75 1.75 0 0 0 23 4.25m.25 22.396-6.854-4.282a.75.75 0 0 0-.795 0L8.75 26.646V6A.25.25 0 0 1 9 5.75h14a.25.25 0 0 1 .25.25z"/>`, 'bold': `<path fill="currentColor" d="M23 3.5H9A2.5 2.5 0 0 0 6.5 6v22a1.5 1.5 0 0 0 2.295 1.273l7.204-4.5 7.206 4.5A1.5 1.5 0 0 0 25.5 28V6A2.5 2.5 0 0 0 23 3.5m-.5 21.794-5.706-3.567a1.5 1.5 0 0 0-1.59 0L9.5 25.295V6.5h13z"/>`, 'fill': `<path fill="currentColor" d="M23 4H9a2 2 0 0 0-2 2v22a1 1 0 0 0 1.53.848l7.47-4.67 7.471 4.67A.999.999 0 0 0 25 28V6a2 2 0 0 0-2-2"/>`, 'duotone': `<path fill="currentColor" d="M24 6v22l-8-5-8 5V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M23 4H9a2 2 0 0 0-2 2v22a1 1 0 0 0 1.53.848l7.47-4.67 7.471 4.67A.999.999 0 0 0 25 28V6a2 2 0 0 0-2-2m0 22.196-6.471-4.044a1 1 0 0 0-1.06 0L9 26.197V6h14z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
