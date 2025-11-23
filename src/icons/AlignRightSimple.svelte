<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M29 7v18a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0m-4 5v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2m-2 0H4v8h19z"/>`, 'thin': `<path fill="currentColor" d="M28.5 7v18a.5.5 0 0 1-1 0V7a.5.5 0 0 1 1 0m-4 5v8a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20v-8A1.5 1.5 0 0 1 4 10.5h19a1.5 1.5 0 0 1 1.5 1.5m-1 0a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5z"/>`, 'light': `<path fill="currentColor" d="M28.75 7v18a.75.75 0 1 1-1.5 0V7a.75.75 0 1 1 1.5 0m-4 5v8A1.75 1.75 0 0 1 23 21.75H4A1.75 1.75 0 0 1 2.25 20v-8A1.75 1.75 0 0 1 4 10.25h19A1.75 1.75 0 0 1 24.75 12m-1.5 0a.25.25 0 0 0-.25-.25H4a.25.25 0 0 0-.25.25v8a.25.25 0 0 0 .25.25h19a.25.25 0 0 0 .25-.25z"/>`, 'bold': `<path fill="currentColor" d="M29.5 7v18a1.5 1.5 0 1 1-3 0V7a1.5 1.5 0 1 1 3 0m-5 5v8a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 20v-8A2.5 2.5 0 0 1 4 9.5h18a2.5 2.5 0 0 1 2.5 2.5m-3 .5h-17v7h17z"/>`, 'fill': `<path fill="currentColor" d="M29 7v18a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0m-6 3H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h19a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2"/>`, 'duotone': `<path fill="currentColor" d="M24 12v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h19a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M29 7v18a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0m-4 5v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2m-2 0H4v8h19z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
