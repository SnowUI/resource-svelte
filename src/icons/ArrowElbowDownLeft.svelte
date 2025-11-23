<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25 4v18a1 1 0 0 1-1 1H8.414l4.294 4.293a1 1 0 0 1-.325 1.631 1 1 0 0 1-1.09-.216l-6-6a1 1 0 0 1 0-1.415l6-6a1 1 0 1 1 1.415 1.415L8.414 21H23V4a1 1 0 1 1 2 0"/>`, 'thin': `<path fill="currentColor" d="M24.5 4v18a.5.5 0 0 1-.5.5H7.207l5.147 5.146a.501.501 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 1 1 .708.708L7.207 21.5H23.5V4a.5.5 0 0 1 1 0"/>`, 'light': `<path fill="currentColor" d="M24.75 4v18a.75.75 0 0 1-.75.75H7.811l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 1 1 1.06 1.06l-4.72 4.72h15.44V4a.75.75 0 1 1 1.5 0"/>`, 'bold': `<path fill="currentColor" d="M25.5 4v18a1.5 1.5 0 0 1-1.5 1.5H9.625l3.44 3.439a1.504 1.504 0 0 1-2.125 2.125l-6-6a1.5 1.5 0 0 1 0-2.125l6-6A1.5 1.5 0 0 1 13.505 16a1.5 1.5 0 0 1-.44 1.063L9.625 20.5H22.5V4a1.5 1.5 0 1 1 3 0"/>`, 'fill': `<path fill="currentColor" d="M25 4v18a1 1 0 0 1-1 1H13v5a1.001 1.001 0 0 1-1.707.707l-6-6a1 1 0 0 1 0-1.415l6-6A1 1 0 0 1 13 16v5h10V4a1 1 0 1 1 2 0"/>`, 'duotone': `<path fill="currentColor" d="M12 16v12l-6-6z" opacity=".08"/><path fill="currentColor" d="M24 3a1 1 0 0 0-1 1v17H13v-5a1.001 1.001 0 0 0-1.707-.707l-6 6a1 1 0 0 0 0 1.415l6 6A1 1 0 0 0 13 28v-5h11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M11 25.586 7.414 22 11 18.414z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
