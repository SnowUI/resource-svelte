<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M20.708 25.293a1 1 0 0 1-.325 1.631 1 1 0 0 1-1.09-.216l-10-10a1 1 0 0 1 0-1.415l10-10a1 1 0 1 1 1.415 1.415L11.414 16z"/>`, 'thin': `<path fill="currentColor" d="M20.354 25.646a.5.5 0 0 1-.708.707l-10-10a.5.5 0 0 1 0-.707l10-10a.5.5 0 1 1 .708.708L10.707 16z"/>`, 'light': `<path fill="currentColor" d="M20.53 25.47a.75.75 0 1 1-1.06 1.06l-10-10a.75.75 0 0 1 0-1.06l10-10a.75.75 0 0 1 1.06 1.06L11.061 16z"/>`, 'bold': `<path fill="currentColor" d="M21.061 24.939a1.503 1.503 0 0 1-2.125 2.125l-10-10a1.5 1.5 0 0 1 0-2.125l10-10a1.503 1.503 0 0 1 2.125 2.125L12.125 16z"/>`, 'fill': `<path fill="currentColor" d="M21 6v20a1.001 1.001 0 0 1-1.707.707l-10-10a1 1 0 0 1 0-1.415l10-10A1 1 0 0 1 21 6"/>`, 'duotone': `<path fill="currentColor" d="M20 6v20L10 16z" opacity=".08"/><path fill="currentColor" d="M20.383 5.076a1 1 0 0 0-1.09.217l-10 10a1 1 0 0 0 0 1.415l10 10A1 1 0 0 0 21 26V6a1 1 0 0 0-.617-.924M19 23.586 11.414 16 19 8.414z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
