<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26.708 25.292a1 1 0 0 1-1.415 1.415L16 17.414l-9.292 9.293a1 1 0 1 1-1.415-1.415l10-10a1 1 0 0 1 1.415 0zm-20-8.585L16 7.414l9.293 9.293a1 1 0 0 0 1.415-1.415l-10-10a1 1 0 0 0-1.415 0l-10 10a1 1 0 1 0 1.415 1.415"/>`, 'thin': `<path fill="currentColor" d="M26.354 25.646a.5.5 0 1 1-.708.708L16 16.707l-9.646 9.647a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0zm-20-9.292L16 6.707l9.646 9.647a.5.5 0 0 0 .708-.708l-10-10a.5.5 0 0 0-.708 0l-10 10a.5.5 0 1 0 .708.708"/>`, 'light': `<path fill="currentColor" d="M26.53 25.47a.75.75 0 1 1-1.06 1.06L16 17.06 6.53 26.53a.75.75 0 0 1-1.06-1.06l10-10a.75.75 0 0 1 1.06 0zm-20-8.94L16 7.06l9.47 9.469a.75.75 0 0 0 1.06-1.06l-10-10a.75.75 0 0 0-1.06 0l-10 10a.75.75 0 0 0 1.06 1.06"/>`, 'bold': `<path fill="currentColor" d="M27.061 24.939a1.502 1.502 0 1 1-2.125 2.125L16 18.125 7.06 27.061a1.503 1.503 0 0 1-2.125-2.125l10-10a1.5 1.5 0 0 1 2.125 0zm-20-7.875L16 8.125l8.939 8.94a1.503 1.503 0 0 0 2.125-2.125l-10-10a1.5 1.5 0 0 0-2.125 0l-10 10a1.503 1.503 0 1 0 2.125 2.125z"/>`, 'fill': `<path fill="currentColor" d="M26.708 25.292A1 1 0 0 1 26 27H6a1 1 0 0 1-.707-1.708L13.586 17H6a1 1 0 0 1-.707-1.708l10-10a1 1 0 0 1 1.415 0l10 10A1 1 0 0 1 26 17h-7.586z"/>`, 'duotone': `<path fill="currentColor" d="M26 26H6l10-10z" opacity=".08"/><path fill="currentColor" d="M16.707 15.292a1 1 0 0 0-1.415 0l-10 10A1 1 0 0 0 6 27h20a1 1 0 0 0 .707-1.708zM8.414 25 16 17.414 23.586 25zm-3.125-8.293a1 1 0 0 1 0-1.415l10-10a1 1 0 0 1 1.415 0l10 10a1 1 0 1 1-1.415 1.415l-9.29-9.293-9.292 9.293a1 1 0 0 1-1.415 0z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
