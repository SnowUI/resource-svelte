<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m14.664 16.75-9 8a1.002 1.002 0 0 1-1.329-1.5L12.5 16 4.336 8.75a1.002 1.002 0 0 1 1.33-1.5l9 8a.998.998 0 0 1 0 1.5zM27 23H15a1 1 0 1 0 0 2h12a1 1 0 0 0 0-2"/>`, 'thin': `<path fill="currentColor" d="M14.5 16a.5.5 0 0 1-.167.375l-9 8a.502.502 0 0 1-.665-.75L13.25 16 4.668 8.375a.501.501 0 0 1 .665-.75l9 8A.5.5 0 0 1 14.5 16M27 23.5H15a.5.5 0 1 0 0 1h12a.5.5 0 0 0 0-1"/>`, 'light': `<path fill="currentColor" d="m14.5 16.56-9 8a.752.752 0 1 1-1-1.125L12.875 16 4.5 8.56a.753.753 0 1 1 1-1.125l9 8a.75.75 0 0 1 0 1.125zM27 23.25H15a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5"/>`, 'bold': `<path fill="currentColor" d="m15 17.125-9 8a1.505 1.505 0 0 1-2-2.25L11.739 16l-7.74-6.875a1.505 1.505 0 1 1 2-2.25l9 8a1.498 1.498 0 0 1 0 2.25M27 22.5H15a1.5 1.5 0 1 0 0 3h12a1.5 1.5 0 0 0 0-3"/>`, 'fill': `<path fill="currentColor" d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M9.708 21.708a1 1 0 0 1-1.415-1.415L12.586 16l-4.293-4.292a1 1 0 1 1 1.415-1.415l5 5a1 1 0 0 1 0 1.415zM24 22h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M27 9v15H5V8h21a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="m14.664 16.75-9 8a1.002 1.002 0 0 1-1.329-1.5L12.5 16 4.336 8.75a1.002 1.002 0 0 1 1.33-1.5l9 8a.998.998 0 0 1 0 1.5zM27 23H15a1 1 0 1 0 0 2h12a1 1 0 0 0 0-2"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
