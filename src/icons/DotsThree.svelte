<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M17.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-17 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>`, 'thin': `<path fill="currentColor" d="M17 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-9.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m17 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>`, 'light': `<path fill="currentColor" d="M17.25 16a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M7.5 14.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m17 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"/>`, 'bold': `<path fill="currentColor" d="M18 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m17 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>`, 'fill': `<path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M7.5 17.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>`, 'duotone': `<path fill="currentColor" d="M30 8v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2" opacity=".08"/><path fill="currentColor" d="M17.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-17 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
