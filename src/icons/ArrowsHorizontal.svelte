<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m29.708 16.708-4 4a1 1 0 0 1-1.415-1.415L26.586 17H5.414l2.294 2.293a1 1 0 1 1-1.415 1.415l-4-4a1 1 0 0 1 0-1.415l4-4a1 1 0 1 1 1.415 1.415L5.414 15h21.172l-2.293-2.292a1 1 0 1 1 1.415-1.415l4 4a1 1 0 0 1 0 1.415"/>`, 'thin': `<path fill="currentColor" d="m29.354 16.354-4 4a.5.5 0 0 1-.708-.708l3.146-3.146H4.207l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L4.207 15.5h23.585l-3.146-3.146a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708"/>`, 'light': `<path fill="currentColor" d="m29.53 16.53-4 4a.75.75 0 0 1-1.06-1.06l2.719-2.72H4.814l2.719 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L4.81 15.25h22.375l-2.718-2.72a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 .002 1.06"/>`, 'bold': `<path fill="currentColor" d="m30.061 17.061-4 4a1.503 1.503 0 0 1-2.125-2.125l1.439-1.436H6.625l1.44 1.439a1.503 1.503 0 0 1-2.125 2.125l-4-4a1.5 1.5 0 0 1 0-2.125l4-4a1.503 1.503 0 1 1 2.125 2.125L6.625 14.5h18.75l-1.44-1.439a1.503 1.503 0 1 1 2.125-2.125l4 4a1.5 1.5 0 0 1 .001 2.125"/>`, 'fill': `<path fill="currentColor" d="m29.708 16.708-4 4A1 1 0 0 1 24 20v-3H8v3a1 1 0 0 1-1.707.708l-4-4a1 1 0 0 1 0-1.415l4-4A1 1 0 0 1 8 12v3h16v-3a1 1 0 0 1 1.708-.707l4 4a1 1 0 0 1 0 1.415"/>`, 'duotone': `<path fill="currentColor" d="m3 16 4-4v8zm22-4v8l4-4z" opacity=".08"/><path fill="currentColor" d="m29.708 15.293-4-4A1 1 0 0 0 24 12v3H8v-3a1 1 0 0 0-1.707-.707l-4 4a1 1 0 0 0 0 1.415l4 4A1 1 0 0 0 8 20v-3h16v3a1 1 0 0 0 1.708.708l4-4a1 1 0 0 0 0-1.415M6 17.586 4.414 16 6 14.414zm20 0v-3.172L27.586 16z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
