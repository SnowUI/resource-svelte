<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m28.708 20.708-6 6a1 1 0 0 1-1.415 0l-6-6a1 1 0 1 1 1.415-1.415L21 23.586V9H4a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1v15.586l4.293-4.293a1 1 0 1 1 1.415 1.415"/>`, 'thin': `<path fill="currentColor" d="m28.354 20.354-6 6a.503.503 0 0 1-.708 0l-6-6a.501.501 0 0 1 .708-.708l5.146 5.147V8.5H4a.5.5 0 1 1 0-1h18a.5.5 0 0 1 .5.5v16.793l5.146-5.147a.501.501 0 0 1 .708.708"/>`, 'light': `<path fill="currentColor" d="m28.53 20.53-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.719V8.75H4a.75.75 0 0 1 0-1.5h18a.75.75 0 0 1 .75.75v16.189l4.72-4.719a.75.75 0 0 1 1.06 1.06"/>`, 'bold': `<path fill="currentColor" d="m29.061 21.061-6 6a1.503 1.503 0 0 1-2.125 0l-6-6a1.504 1.504 0 0 1 2.125-2.125l3.439 3.439V9.5H4a1.5 1.5 0 0 1 0-3h18A1.5 1.5 0 0 1 23.5 8v14.375l3.439-3.44a1.504 1.504 0 0 1 2.125 2.125z"/>`, 'fill': `<path fill="currentColor" d="m28.708 20.708-6 6a1 1 0 0 1-1.415 0l-6-6A1 1 0 0 1 16 19h5V9H4a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1v11h5a1 1 0 0 1 .707 1.707"/>`, 'duotone': `<path fill="currentColor" d="m28 20-6 6-6-6z" opacity=".08"/><path fill="currentColor" d="M28.924 19.618A1 1 0 0 0 28 19h-5V8a1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h17v10h-5a1 1 0 0 0-.707 1.707l6 6a1 1 0 0 0 1.415 0l6-6a1 1 0 0 0 .216-1.09M22 24.586 18.414 21h7.172z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
