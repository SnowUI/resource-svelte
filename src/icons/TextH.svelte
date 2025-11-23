<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 7v18a1 1 0 0 1-2 0v-8H8v8a1 1 0 1 1-2 0V7a1 1 0 0 1 2 0v8h16V7a1 1 0 0 1 2 0"/>`, 'thin': `<path fill="currentColor" d="M25.5 7v18a.5.5 0 0 1-1 0v-8.5h-17V25a.5.5 0 0 1-1 0V7a.5.5 0 1 1 1 0v8.5h17V7a.5.5 0 0 1 1 0"/>`, 'light': `<path fill="currentColor" d="M25.75 7v18a.75.75 0 1 1-1.5 0v-8.25H7.75V25a.75.75 0 1 1-1.5 0V7a.75.75 0 0 1 1.5 0v8.25h16.5V7a.75.75 0 1 1 1.5 0"/>`, 'bold': `<path fill="currentColor" d="M26.5 7v18a1.5 1.5 0 1 1-3 0v-7.5h-15V25a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 0 1 3 0v7.5h15V7a1.5 1.5 0 1 1 3 0"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-3 18a1 1 0 0 1-2 0v-5H11v5a1 1 0 0 1-2 0V10a1 1 0 0 1 2 0v5h10v-5a1 1 0 0 1 2 0z"/>`, 'duotone': `<path fill="currentColor" d="M25 7v18H7V7z" opacity=".08"/><path fill="currentColor" d="M26 7v18a1 1 0 0 1-2 0v-8H8v8a1 1 0 1 1-2 0V7a1 1 0 0 1 2 0v8h16V7a1 1 0 0 1 2 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
