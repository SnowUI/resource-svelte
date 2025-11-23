<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25 11v13a1 1 0 0 1-1 1H11a1 1 0 1 1 0-2h10.586L7.293 8.707a1 1 0 1 1 1.415-1.415L23 21.586V11a1 1 0 1 1 2 0"/>`, 'thin': `<path fill="currentColor" d="M24.5 11v13a.5.5 0 0 1-.5.5H11a.5.5 0 1 1 0-1h11.793L7.646 8.354a.5.5 0 0 1 .708-.708L23.5 22.793V11a.5.5 0 1 1 1 0"/>`, 'light': `<path fill="currentColor" d="M24.75 11v13a.75.75 0 0 1-.75.75H11a.75.75 0 1 1 0-1.5h11.19L7.47 8.53a.75.75 0 0 1 1.06-1.06l14.72 14.72V11a.75.75 0 1 1 1.5 0"/>`, 'bold': `<path fill="currentColor" d="M25.5 11v13a1.5 1.5 0 0 1-1.5 1.5H11a1.5 1.5 0 0 1 0-3h9.375L6.939 9.06a1.503 1.503 0 0 1 2.125-2.125L22.5 20.375V11a1.5 1.5 0 1 1 3 0"/>`, 'fill': `<path fill="currentColor" d="M25 11v13a1 1 0 0 1-1 1H11a1 1 0 0 1-.707-1.708l5.793-5.792-8.793-8.793a1 1 0 1 1 1.415-1.415l8.792 8.794 5.793-5.794A1 1 0 0 1 25 11"/>`, 'duotone': `<path fill="currentColor" d="M24 11v13H11z" opacity=".08"/><path fill="currentColor" d="M24.383 10.076a1 1 0 0 0-1.09.216L17.5 16.086 8.708 7.292a1 1 0 1 0-1.415 1.415l8.793 8.793-5.793 5.792A1.001 1.001 0 0 0 11 25h13a1 1 0 0 0 1-1V11a1 1 0 0 0-.617-.924M23 23h-9.586l4.792-4.793L23 13.414z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
