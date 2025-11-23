<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m25.708 18.708-9 9a1 1 0 0 1-1.415 0l-9-9a1 1 0 1 1 1.415-1.415L15 24.586V5a1 1 0 1 1 2 0v19.586l7.293-7.293a1 1 0 1 1 1.415 1.415"/>`, 'thin': `<path fill="currentColor" d="m25.354 18.354-9 9a.503.503 0 0 1-.708 0l-9-9a.5.5 0 0 1 .708-.708l8.146 8.147V5a.5.5 0 0 1 1 0v20.793l8.146-8.147a.5.5 0 0 1 .708.708"/>`, 'light': `<path fill="currentColor" d="m25.53 18.53-9 9a.75.75 0 0 1-1.06 0l-9-9a.75.75 0 0 1 1.06-1.06l7.72 7.719V5a.75.75 0 1 1 1.5 0v20.189l7.72-7.719a.75.75 0 0 1 1.06 1.06"/>`, 'bold': `<path fill="currentColor" d="m26.061 19.061-9 9a1.5 1.5 0 0 1-2.125 0l-9-9a1.503 1.503 0 1 1 2.125-2.125l6.439 6.439V5a1.5 1.5 0 0 1 3 0v18.375l6.439-6.44a1.503 1.503 0 0 1 2.125 2.125z"/>`, 'fill': `<path fill="currentColor" d="m25.708 18.708-9 9a1 1 0 0 1-1.415 0l-9-9A1 1 0 0 1 7 17h8V5a1 1 0 1 1 2 0v12h8a1 1 0 0 1 .708 1.707"/>`, 'duotone': `<path fill="currentColor" d="m25 18-9 9-9-9z" opacity=".08"/><path fill="currentColor" d="M25.924 17.618A1 1 0 0 0 25 17h-8V5a1 1 0 0 0-2 0v12H7a1 1 0 0 0-.707 1.707l9 9a1 1 0 0 0 1.415 0l9-9a1 1 0 0 0 .216-1.09M16 25.586 9.414 19h13.172z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
