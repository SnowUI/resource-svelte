<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M29 8a1 1 0 0 1-1 1H11v14.586l4.293-4.293a1 1 0 1 1 1.415 1.415l-6 6a1 1 0 0 1-1.415 0l-6-6a1 1 0 1 1 1.415-1.415L9 23.586V8a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M28.5 8a.5.5 0 0 1-.5.5H10.5v16.293l5.146-5.147a.5.5 0 0 1 .708.708l-6 6a.503.503 0 0 1-.708 0l-6-6a.5.5 0 0 1 .708-.708L9.5 24.793V8a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M28.75 8a.75.75 0 0 1-.75.75H10.75v15.439l4.72-4.719a.75.75 0 0 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 1.06-1.06l4.72 4.719V8a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M29.5 8A1.5 1.5 0 0 1 28 9.5H11.5v12.875l3.439-3.44a1.503 1.503 0 0 1 2.125 2.125l-6 6a1.5 1.5 0 0 1-2.125 0l-6-6a1.503 1.503 0 0 1 2.125-2.125l3.436 3.44V8A1.5 1.5 0 0 1 10 6.5h18A1.5 1.5 0 0 1 29.5 8"/>`, 'fill': `<path fill="currentColor" d="M29 8a1 1 0 0 1-1 1H11v10h5a1 1 0 0 1 .708 1.707l-6 6a1 1 0 0 1-1.415 0l-6-6A1 1 0 0 1 4 19h5V8a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1"/>`, 'duotone': `<path fill="currentColor" d="m16 20-6 6-6-6z" opacity=".08"/><path fill="currentColor" d="M28 7H10a1 1 0 0 0-1 1v11H4a1 1 0 0 0-.707 1.707l6 6a1 1 0 0 0 1.415 0l6-6A1 1 0 0 0 16 19h-5V9h17a1 1 0 0 0 0-2M10 24.586 6.414 21h7.172z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
