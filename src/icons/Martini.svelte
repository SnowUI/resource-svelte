<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M29.708 5.708A1 1 0 0 0 29 4H3a1 1 0 0 0-.707 1.707L15 18.415V26h-4a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-7.586zM5.414 6h21.172l-2 2H7.414zM16 16.586 9.414 10h13.172z"/>`, 'thin': `<path fill="currentColor" d="M29.354 5.354A.5.5 0 0 0 29 4.5H3a.5.5 0 0 0-.354.854L15.5 18.208V26.5H11a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1h-4.5v-8.292zM4.207 5.5h23.585l-3 3H7.207zM16 17.293 8.207 9.5h15.585z"/>`, 'light': `<path fill="currentColor" d="M29.53 5.53A.75.75 0 0 0 29 4.25H3a.75.75 0 0 0-.53 1.28l12.78 12.781v7.939H11a.75.75 0 1 0 0 1.5h10a.75.75 0 1 0 0-1.5h-4.25v-7.939zM8.811 9.75h14.375L16 16.939zm18.375-4-2.5 2.5H7.311l-2.5-2.5z"/>`, 'bold': `<path fill="currentColor" d="M30.386 4.426A1.5 1.5 0 0 0 29 3.5H3a1.5 1.5 0 0 0-1.06 2.561L14.5 18.625V25.5H11a1.5 1.5 0 1 0 0 3h10a1.5 1.5 0 1 0 0-3h-3.5v-6.875L30.06 6.061a1.5 1.5 0 0 0 .326-1.635M25.375 6.5l-1.5 1.5H8.125l-1.5-1.5zM16 15.875 11.125 11h9.75z"/>`, 'fill': `<path fill="currentColor" d="M29.708 5.708A1 1 0 0 0 29 4H3a1 1 0 0 0-.707 1.707L15 18.415V26h-4a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-7.586zM26.583 6l-2 2H7.413l-2-2z"/>`, 'duotone': `<path fill="currentColor" d="m25 9-9 9-9-9z" opacity=".08"/><path fill="currentColor" d="M29.708 5.708A1 1 0 0 0 29 4H3a1 1 0 0 0-.707 1.707L15 18.415V26h-4a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-7.586zM9.414 10h13.172L16 16.586zm17.172-4-2 2H7.414l-2-2z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
