<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25.708 25.293a1 1 0 0 1-.325 1.631 1 1 0 0 1-1.09-.216l-10-10a1 1 0 0 1 0-1.415l10-10a1 1 0 1 1 1.415 1.415L16.414 16zM6.414 16l9.294-9.292a1 1 0 0 0-1.415-1.415l-10 10a1 1 0 0 0 0 1.415l10 10a1 1 0 0 0 1.415-1.415z"/>`, 'thin': `<path fill="currentColor" d="M25.354 25.646a.5.5 0 0 1-.708.707l-10-10a.5.5 0 0 1 0-.707l10-10a.5.5 0 1 1 .708.708L15.707 16zM5.707 16l9.647-9.646a.5.5 0 0 0-.708-.708l-10 10a.5.5 0 0 0 0 .707l10 10a.5.5 0 1 0 .708-.707z"/>`, 'light': `<path fill="currentColor" d="M25.53 25.47a.75.75 0 1 1-1.06 1.06l-10-10a.75.75 0 0 1 0-1.06l10-10a.75.75 0 0 1 1.06 1.06L16.061 16zM6.061 16l9.47-9.47a.75.75 0 0 0-1.06-1.06l-10 10a.75.75 0 0 0 0 1.06l10 10a.75.75 0 1 0 1.06-1.06z"/>`, 'bold': `<path fill="currentColor" d="M26.061 24.939a1.503 1.503 0 0 1-2.125 2.125l-10-10a1.5 1.5 0 0 1 0-2.125l10-10a1.503 1.503 0 1 1 2.125 2.125L17.125 16zm-18.936-8.94 8.94-8.938a1.503 1.503 0 1 0-2.125-2.125l-10 10a1.5 1.5 0 0 0 0 2.125l10 10a1.502 1.502 0 1 0 2.125-2.125z"/>`, 'fill': `<path fill="currentColor" d="M26 6v20a1.001 1.001 0 0 1-1.707.707L16 18.414V26a1.001 1.001 0 0 1-1.707.707l-10-10a1 1 0 0 1 0-1.415l10-10A1 1 0 0 1 16 6v7.586l8.293-8.294A1 1 0 0 1 26 6"/>`, 'duotone': `<path fill="currentColor" d="M25 6v20L15 16z" opacity=".08"/><path fill="currentColor" d="M25.383 5.076a1 1 0 0 0-1.09.217l-10 10a1 1 0 0 0 0 1.415l10 10A1 1 0 0 0 26 26V6a1 1 0 0 0-.617-.924M24 23.586 16.414 16 24 8.414zm-8.292 1.707a1 1 0 0 1-.325 1.631 1 1 0 0 1-1.09-.216l-10-10a1 1 0 0 1 0-1.415l10-10a1 1 0 1 1 1.415 1.415L6.414 16z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
