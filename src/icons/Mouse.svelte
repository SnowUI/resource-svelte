<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M18 2h-4a8.01 8.01 0 0 0-8 8v12a8.01 8.01 0 0 0 8 8h4a8.01 8.01 0 0 0 8-8V10a8.01 8.01 0 0 0-8-8m6 8v3h-7V4h1a6.006 6.006 0 0 1 6 6M14 4h1v9H8v-3a6.006 6.006 0 0 1 6-6m4 24h-4a6.006 6.006 0 0 1-6-6v-7h16v7a6.006 6.006 0 0 1-6 6"/>`, 'thin': `<path fill="currentColor" d="M18 2.5h-4A7.51 7.51 0 0 0 6.5 10v12a7.51 7.51 0 0 0 7.5 7.5h4a7.51 7.51 0 0 0 7.5-7.5V10A7.51 7.51 0 0 0 18 2.5m6.5 7.5v3.5h-8v-10H18a6.51 6.51 0 0 1 6.5 6.5M14 3.5h1.5v10h-8V10A6.507 6.507 0 0 1 14 3.5m4 25h-4A6.507 6.507 0 0 1 7.5 22v-7.5h17V22a6.507 6.507 0 0 1-6.5 6.5"/>`, 'light': `<path fill="currentColor" d="M18 2.25h-4A7.76 7.76 0 0 0 6.25 10v12A7.76 7.76 0 0 0 14 29.75h4A7.76 7.76 0 0 0 25.75 22V10A7.76 7.76 0 0 0 18 2.25M24.25 10v3.25h-7.5v-9.5H18A6.257 6.257 0 0 1 24.25 10M14 3.75h1.25v9.5h-7.5V10A6.257 6.257 0 0 1 14 3.75m4 24.5h-4A6.257 6.257 0 0 1 7.75 22v-7.25h16.5V22A6.257 6.257 0 0 1 18 28.25"/>`, 'bold': `<path fill="currentColor" d="M18 1.5h-4A8.51 8.51 0 0 0 5.5 10v12a8.51 8.51 0 0 0 8.5 8.5h4a8.51 8.51 0 0 0 8.5-8.5V10A8.51 8.51 0 0 0 18 1.5m5.5 8.5v2.5h-6v-8h.5a5.506 5.506 0 0 1 5.5 5.5M14 4.5h.5v8h-6V10A5.506 5.506 0 0 1 14 4.5m4 23h-4A5.506 5.506 0 0 1 8.5 22v-6.5h15V22a5.506 5.506 0 0 1-5.5 5.5"/>`, 'fill': `<path fill="currentColor" d="M18 2h-4a8.01 8.01 0 0 0-8 8v12a8.01 8.01 0 0 0 8 8h4a8.01 8.01 0 0 0 8-8V10a8.01 8.01 0 0 0-8-8m6 8v3h-7V4h1a6.006 6.006 0 0 1 6 6M14 4h1v9H8v-3a6.006 6.006 0 0 1 6-6"/>`, 'duotone': `<path fill="currentColor" d="M16 3v11H7v-4a7 7 0 0 1 7-7z" opacity=".08"/><path fill="currentColor" d="M18 2h-4a8.01 8.01 0 0 0-8 8v12a8.01 8.01 0 0 0 8 8h4a8.01 8.01 0 0 0 8-8V10a8.01 8.01 0 0 0-8-8m6 8v3h-7V4h1a6.006 6.006 0 0 1 6 6M14 4h1v9H8v-3a6.006 6.006 0 0 1 6-6m4 24h-4a6.006 6.006 0 0 1-6-6v-7h16v7a6.006 6.006 0 0 1-6 6"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
