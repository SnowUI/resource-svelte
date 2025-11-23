<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m26.708 12.708-10 10a1 1 0 0 1-1.415 0l-10-10a1 1 0 0 1 1.415-1.415L16 20.586l9.293-9.293a1 1 0 0 1 1.415 1.415"/>`, 'thin': `<path fill="currentColor" d="m26.354 12.354-10 10a.5.5 0 0 1-.708 0l-10-10a.5.5 0 1 1 .708-.708L16 21.292l9.646-9.646a.5.5 0 0 1 .708.707"/>`, 'light': `<path fill="currentColor" d="m26.53 12.53-10 10a.75.75 0 0 1-1.06 0l-10-10a.75.75 0 0 1 1.06-1.06L16 20.939l9.47-9.47a.75.75 0 0 1 1.06 1.06"/>`, 'bold': `<path fill="currentColor" d="m27.061 13.062-10 10a1.5 1.5 0 0 1-2.125 0l-10-10a1.503 1.503 0 1 1 2.125-2.125L16 19.875l8.939-8.94a1.503 1.503 0 0 1 2.125 2.125z"/>`, 'fill': `<path fill="currentColor" d="m26.708 12.708-10 10a1 1 0 0 1-1.415 0l-10-10A1 1 0 0 1 6 11h20a1 1 0 0 1 .708 1.707"/>`, 'duotone': `<path fill="currentColor" d="M26 12 16 22 6 12z" opacity=".08"/><path fill="currentColor" d="M26.924 11.618A1 1 0 0 0 26 11H6a1 1 0 0 0-.707 1.707l10 10a1 1 0 0 0 1.415 0l10-10a1 1 0 0 0 .216-1.09M16 20.586 8.414 13h15.172z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
