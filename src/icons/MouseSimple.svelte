<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M18 2h-4a8.01 8.01 0 0 0-8 8v12a8.01 8.01 0 0 0 8 8h4a8.01 8.01 0 0 0 8-8V10a8.01 8.01 0 0 0-8-8m6 20a6.006 6.006 0 0 1-6 6h-4a6.006 6.006 0 0 1-6-6V10a6.006 6.006 0 0 1 6-6h4a6.006 6.006 0 0 1 6 6zM17 8v6a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0"/>`, 'thin': `<path fill="currentColor" d="M18 2.5h-4A7.51 7.51 0 0 0 6.5 10v12a7.51 7.51 0 0 0 7.5 7.5h4a7.51 7.51 0 0 0 7.5-7.5V10A7.51 7.51 0 0 0 18 2.5M24.5 22a6.507 6.507 0 0 1-6.5 6.5h-4A6.507 6.507 0 0 1 7.5 22V10A6.507 6.507 0 0 1 14 3.5h4a6.51 6.51 0 0 1 6.5 6.5zm-8-14v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 1 0"/>`, 'light': `<path fill="currentColor" d="M18 2.25h-4A7.76 7.76 0 0 0 6.25 10v12A7.76 7.76 0 0 0 14 29.75h4A7.76 7.76 0 0 0 25.75 22V10A7.76 7.76 0 0 0 18 2.25M24.25 22A6.257 6.257 0 0 1 18 28.25h-4A6.257 6.257 0 0 1 7.75 22V10A6.257 6.257 0 0 1 14 3.75h4A6.257 6.257 0 0 1 24.25 10zm-7.5-14v6a.75.75 0 1 1-1.5 0V8a.75.75 0 1 1 1.5 0"/>`, 'bold': `<path fill="currentColor" d="M18 1.5h-4A8.51 8.51 0 0 0 5.5 10v12a8.51 8.51 0 0 0 8.5 8.5h4a8.51 8.51 0 0 0 8.5-8.5V10A8.51 8.51 0 0 0 18 1.5M23.5 22a5.506 5.506 0 0 1-5.5 5.5h-4A5.506 5.506 0 0 1 8.5 22V10A5.506 5.506 0 0 1 14 4.5h4a5.506 5.506 0 0 1 5.5 5.5zm-6-14v6a1.5 1.5 0 1 1-3 0V8a1.5 1.5 0 1 1 3 0"/>`, 'fill': `<path fill="currentColor" d="M18 2h-4a8.01 8.01 0 0 0-8 8v12a8.01 8.01 0 0 0 8 8h4a8.01 8.01 0 0 0 8-8V10a8.01 8.01 0 0 0-8-8m-1 12a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0z"/>`, 'duotone': `<path fill="currentColor" d="M25 10v12a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7V10a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7" opacity=".08"/><path fill="currentColor" d="M18 2h-4a8.01 8.01 0 0 0-8 8v12a8.01 8.01 0 0 0 8 8h4a8.01 8.01 0 0 0 8-8V10a8.01 8.01 0 0 0-8-8m6 20a6.006 6.006 0 0 1-6 6h-4a6.006 6.006 0 0 1-6-6V10a6.006 6.006 0 0 1 6-6h4a6.006 6.006 0 0 1 6 6zM17 8v6a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
