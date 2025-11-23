<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 11v11a1 1 0 0 1-2 0V11a6 6 0 0 0-12 0v14.586l4.293-4.293a1 1 0 1 1 1.415 1.415l-6 6a1 1 0 0 1-1.415 0l-6-6a1 1 0 1 1 1.415-1.415L10 25.586V11a8 8 0 1 1 16 0"/>`, 'thin': `<path fill="currentColor" d="M25.5 11v11a.5.5 0 1 1-1 0V11a6.5 6.5 0 1 0-13 0v15.793l5.146-5.147a.5.5 0 0 1 .708.708l-6 6a.503.503 0 0 1-.708 0l-6-6a.5.5 0 0 1 .708-.708l5.146 5.147V11a7.5 7.5 0 0 1 15 0"/>`, 'light': `<path fill="currentColor" d="M25.75 11v11a.75.75 0 1 1-1.5 0V11a6.25 6.25 0 0 0-12.5 0v15.189l4.72-4.719a.75.75 0 0 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 1.06-1.06l4.72 4.719V11a7.75 7.75 0 1 1 15.5 0"/>`, 'bold': `<path fill="currentColor" d="M26.5 11v11a1.5 1.5 0 1 1-3 0V11a5.5 5.5 0 0 0-11 0v13.375l3.439-3.44a1.503 1.503 0 0 1 2.125 2.125l-6 6a1.5 1.5 0 0 1-2.125 0l-6-6a1.503 1.503 0 0 1 2.125-2.125l3.436 3.44V11a8.5 8.5 0 1 1 17 0"/>`, 'fill': `<path fill="currentColor" d="M26 11v11a1 1 0 0 1-2 0V11a6 6 0 0 0-12 0v10h5a1 1 0 0 1 .708 1.707l-6 6a1 1 0 0 1-1.415 0l-6-6A1 1 0 0 1 5 21h5V11a8 8 0 1 1 16 0"/>`, 'duotone': `<path fill="currentColor" d="m17 22-6 6-6-6z" opacity=".08"/><path fill="currentColor" d="M18 3a8.01 8.01 0 0 0-8 8v10H5a1 1 0 0 0-.707 1.707l6 6a1 1 0 0 0 1.415 0l6-6A1 1 0 0 0 17 21h-5V11a6 6 0 1 1 12 0v11a1 1 0 1 0 2 0V11a8.01 8.01 0 0 0-8-8m-7 23.586L7.414 23h7.172z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
