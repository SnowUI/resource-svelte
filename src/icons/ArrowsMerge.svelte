<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M24 5v8a1 1 0 0 1-.293.707L17 20.415v6.172l2.293-2.293a1 1 0 1 1 1.415 1.415l-4 4a1 1 0 0 1-1.415 0l-4-4a1 1 0 1 1 1.415-1.415L15 26.586v-6.172l-6.707-6.707A1 1 0 0 1 8 13V5a1 1 0 0 1 2 0v7.586l6 6 6-6V5a1 1 0 0 1 2 0"/>`, 'thin': `<path fill="currentColor" d="M23.5 5v8a.5.5 0 0 1-.146.354L16.5 20.208v7.585l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.503.503 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708l3.146 3.146v-7.585l-6.854-6.853A.5.5 0 0 1 8.5 13V5a.5.5 0 1 1 1 0v7.793l6.5 6.5 6.5-6.5V5a.5.5 0 0 1 1 0"/>`, 'light': `<path fill="currentColor" d="M23.75 5v8a.75.75 0 0 1-.22.53l-6.78 6.781v6.875l2.72-2.718a.75.75 0 0 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06l2.72 2.72v-6.874L8.47 13.53a.75.75 0 0 1-.22-.53V5a.75.75 0 0 1 1.5 0v7.689l6.25 6.25 6.25-6.25V5a.75.75 0 1 1 1.5 0"/>`, 'bold': `<path fill="currentColor" d="M24.5 5v8a1.5 1.5 0 0 1-.439 1.061L17.5 20.625v4.75l1.439-1.44a1.503 1.503 0 0 1 2.125 2.125l-4 4a1.5 1.5 0 0 1-2.125 0l-4-4a1.501 1.501 0 0 1 1.637-2.45c.183.075.348.186.488.325l1.436 1.44v-4.75l-6.561-6.564A1.5 1.5 0 0 1 7.5 13V5a1.5 1.5 0 0 1 3 0v7.375l5.5 5.5 5.5-5.5V5a1.5 1.5 0 1 1 3 0"/>`, 'fill': `<path fill="currentColor" d="M24 5v8a1 1 0 0 1-.293.707L17 20.415V24h3a1 1 0 0 1 .707 1.707l-4 4a1 1 0 0 1-1.415 0l-4-4A1 1 0 0 1 12 24h3v-3.586l-6.707-6.707A1 1 0 0 1 8 13V5a1 1 0 0 1 2 0v7.586l6 6 6-6V5a1 1 0 0 1 2 0"/>`, 'duotone': `<path fill="currentColor" d="m20 25-4 4-4-4z" opacity=".08"/><path fill="currentColor" d="M23 4a1 1 0 0 0-1 1v7.586l-6 6-6-6V5a1 1 0 0 0-2 0v8a1 1 0 0 0 .293.707L15 20.415V24h-3a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.415 0l4-4A1 1 0 0 0 20 24h-3v-3.586l6.708-6.707A1 1 0 0 0 24 13V5a1 1 0 0 0-1-1m-7 23.586L14.414 26h3.172z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
