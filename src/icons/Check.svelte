<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m28.708 9.708-16 16a1 1 0 0 1-1.415 0l-7-7a1 1 0 0 1 1.415-1.415L12 23.586 27.293 8.293a1 1 0 1 1 1.415 1.415"/>`, 'thin': `<path fill="currentColor" d="m28.354 9.354-16 16a.5.5 0 0 1-.708 0l-7-7a.5.5 0 0 1 .708-.708L12 24.293 27.646 8.646a.5.5 0 0 1 .708.708"/>`, 'light': `<path fill="currentColor" d="m28.53 9.53-16 16a.75.75 0 0 1-1.06 0l-7-7a.75.75 0 0 1 1.06-1.06L12 23.94 27.47 8.47a.75.75 0 0 1 1.06 1.06"/>`, 'bold': `<path fill="currentColor" d="m29.061 10.061-16 16a1.5 1.5 0 0 1-2.125 0l-7-7a1.502 1.502 0 1 1 2.125-2.125L12 22.875 26.939 7.939a1.503 1.503 0 0 1 2.125 2.125z"/>`, 'fill': `<path fill="currentColor" d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-1.293 5.708-12 12a1 1 0 0 1-1.415 0l-5-5a1 1 0 1 1 1.415-1.415L13 20.586 24.293 9.293a1 1 0 1 1 1.415 1.415"/>`, 'duotone': `<path fill="currentColor" d="M29 7v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2" opacity=".08"/><path fill="currentColor" d="m25.708 10.708-12 12a1 1 0 0 1-1.415 0l-5-5a1 1 0 0 1 1.415-1.415L13 20.586 24.293 9.293a1 1 0 1 1 1.415 1.415"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
