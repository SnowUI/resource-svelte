<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m22.708 16.708-10 10a1 1 0 0 1-1.415-1.415L20.586 16l-9.293-9.292a1 1 0 1 1 1.415-1.415l10 10a1 1 0 0 1 0 1.415"/>`, 'thin': `<path fill="currentColor" d="m22.354 16.354-10 10a.501.501 0 0 1-.708-.708L21.293 16l-9.647-9.646a.5.5 0 0 1 .708-.708l10 10a.5.5 0 0 1 0 .707"/>`, 'light': `<path fill="currentColor" d="m22.53 16.53-10 10a.75.75 0 0 1-1.06-1.06L20.94 16 11.47 6.53a.75.75 0 0 1 1.06-1.06l10 10a.75.75 0 0 1 0 1.06"/>`, 'bold': `<path fill="currentColor" d="m23.061 17.061-10 10a1.503 1.503 0 0 1-2.125-2.125L19.875 16 10.939 7.06a1.503 1.503 0 0 1 2.125-2.125l10 10a1.5 1.5 0 0 1-.003 2.125"/>`, 'fill': `<path fill="currentColor" d="m22.708 16.707-10 10A1 1 0 0 1 11 26V6a1 1 0 0 1 1.707-.708l10 10a1 1 0 0 1 0 1.415"/>`, 'duotone': `<path fill="currentColor" d="M22 16 12 26V6z" opacity=".08"/><path fill="currentColor" d="m22.708 15.292-10-10A1 1 0 0 0 11 6v20a1 1 0 0 0 1.707.707l10-10a1 1 0 0 0 0-1.415M13 23.586V8.414L20.586 16z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
