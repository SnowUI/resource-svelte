<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m27.708 22.708-6 6a1 1 0 0 1-1.415 0l-6-6a1 1 0 1 1 1.415-1.415L20 25.586V11a6 6 0 1 0-12 0v11a1 1 0 1 1-2 0V11a8 8 0 1 1 16 0v14.586l4.293-4.293a1 1 0 1 1 1.415 1.415"/>`, 'thin': `<path fill="currentColor" d="m27.354 22.354-6 6a.503.503 0 0 1-.708 0l-6-6a.5.5 0 0 1 .708-.708l5.146 5.147V11a6.5 6.5 0 1 0-13 0v11a.5.5 0 0 1-1 0V11a7.5 7.5 0 0 1 15 0v15.793l5.146-5.147a.501.501 0 0 1 .708.708"/>`, 'light': `<path fill="currentColor" d="m27.53 22.53-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 1.06-1.06l4.72 4.719V11a6.25 6.25 0 0 0-12.5 0v11a.75.75 0 1 1-1.5 0V11a7.75 7.75 0 0 1 15.5 0v15.189l4.72-4.719a.75.75 0 0 1 1.06 1.06"/>`, 'bold': `<path fill="currentColor" d="m28.061 23.061-6 6a1.503 1.503 0 0 1-2.125 0l-6-6a1.504 1.504 0 0 1 2.125-2.125l3.439 3.439V11a5.5 5.5 0 0 0-11 0v11a1.5 1.5 0 0 1-3 0V11a8.5 8.5 0 1 1 17 0v13.375l3.439-3.44a1.504 1.504 0 0 1 2.125 2.125z"/>`, 'fill': `<path fill="currentColor" d="m27.708 22.708-6 6a1 1 0 0 1-1.415 0l-6-6A1 1 0 0 1 15 21h5V11a6 6 0 1 0-12 0v11a1 1 0 1 1-2 0V11a8 8 0 1 1 16 0v10h5a1 1 0 0 1 .707 1.707"/>`, 'duotone': `<path fill="currentColor" d="m27 22-6 6-6-6z" opacity=".08"/><path fill="currentColor" d="M27.924 21.618A1 1 0 0 0 27 21h-5V11a8 8 0 0 0-16 0v11a1 1 0 1 0 2 0V11a6 6 0 1 1 12 0v10h-5a1 1 0 0 0-.707 1.707l6 6a1 1 0 0 0 1.415 0l6-6a1 1 0 0 0 .216-1.09M21 26.586 17.414 23h7.172z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
