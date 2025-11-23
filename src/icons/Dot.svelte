<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M17.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`, 'thin': `<path fill="currentColor" d="M17 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`, 'light': `<path fill="currentColor" d="M17.25 16a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"/>`, 'bold': `<path fill="currentColor" d="M18 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`, 'fill': `<path fill="currentColor" d="M16 10a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>`, 'duotone': `<path fill="currentColor" d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0" opacity=".08"/><path fill="currentColor" d="M17.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
