<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M30 24a1 1 0 0 1-1 1h-4v4a1 1 0 0 1-2 0v-4H8a1 1 0 0 1-1-1V9H3a1 1 0 0 1 0-2h4V3a1 1 0 0 1 2 0v20h20a1 1 0 0 1 1 1M12 9h11v11a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1H12a1 1 0 1 0 0 2"/>`, 'thin': `<path fill="currentColor" d="M29.5 24a.5.5 0 0 1-.5.5h-4.5V29a.5.5 0 0 1-1 0v-4.5H8a.5.5 0 0 1-.5-.5V8.5H3a.5.5 0 1 1 0-1h4.5V3a.5.5 0 1 1 1 0v20.5H29a.5.5 0 0 1 .5.5M12 8.5h11.5V20a.5.5 0 0 0 1 0V8a.5.5 0 0 0-.5-.5H12a.5.5 0 0 0 0 1"/>`, 'light': `<path fill="currentColor" d="M29.75 24a.75.75 0 0 1-.75.75h-4.25V29a.75.75 0 1 1-1.5 0v-4.25H8a.75.75 0 0 1-.75-.75V8.75H3a.75.75 0 0 1 0-1.5h4.25V3a.75.75 0 0 1 1.5 0v20.25H29a.75.75 0 0 1 .75.75M12 8.75h11.25V20a.75.75 0 1 0 1.5 0V8a.75.75 0 0 0-.75-.75H12a.75.75 0 1 0 0 1.5"/>`, 'bold': `<path fill="currentColor" d="M30.5 24a1.5 1.5 0 0 1-1.5 1.5h-3.5V29a1.5 1.5 0 1 1-3 0v-3.5H8A1.5 1.5 0 0 1 6.5 24V9.5H3a1.5 1.5 0 0 1 0-3h3.5V3a1.5 1.5 0 0 1 3 0v19.5H29a1.5 1.5 0 0 1 1.5 1.5M13 9.5h9.5V19a1.5 1.5 0 1 0 3 0V8A1.5 1.5 0 0 0 24 6.5H13a1.5 1.5 0 0 0 0 3"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-11 6h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-5h-5a1 1 0 0 1 0-2m9 12h-2v2a1 1 0 0 1-2 0v-2h-9a1 1 0 0 1-1-1v-9H8a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v12h12a1 1 0 0 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M24 8v16H8V8z" opacity=".08"/><path fill="currentColor" d="M30 24a1 1 0 0 1-1 1h-4v4a1 1 0 0 1-2 0v-4H8a1 1 0 0 1-1-1V9H3a1 1 0 0 1 0-2h4V3a1 1 0 0 1 2 0v20h20a1 1 0 0 1 1 1M12 9h11v11a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1H12a1 1 0 1 0 0 2"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
