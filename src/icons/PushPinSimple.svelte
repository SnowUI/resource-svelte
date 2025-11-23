<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 21h-1.161L23.193 6H24a1 1 0 1 0 0-2H8a1 1 0 0 0 0 2h.807L6.161 21H5a1 1 0 0 0 0 2h10v7a1 1 0 0 0 2 0v-7h10a1 1 0 0 0 0-2M10.839 6H21.16l2.646 15H8.194z"/>`, 'thin': `<path fill="currentColor" d="M27 21.5h-1.58l-2.824-16H24a.5.5 0 0 0 0-1H8a.5.5 0 1 0 0 1h1.404l-2.824 16H5a.5.5 0 0 0 0 1h10.5V30a.5.5 0 0 0 1 0v-7.5H27a.5.5 0 0 0 0-1m-16.58-16h11.16l2.824 16H7.596z"/>`, 'light': `<path fill="currentColor" d="M27 21.25h-1.375l-2.731-15.5H24a.75.75 0 1 0 0-1.5H8a.75.75 0 0 0 0 1.5h1.106l-2.731 15.5H5a.75.75 0 1 0 0 1.5h10.25V30a.75.75 0 1 0 1.5 0v-7.25H27a.75.75 0 1 0 0-1.5M10.625 5.75h10.75l2.735 15.5H7.894z"/>`, 'bold': `<path fill="currentColor" d="M27 20.5h-.741l-2.471-14H24a1.5 1.5 0 0 0 0-3H8a1.5 1.5 0 0 0 0 3h.213l-2.472 14H5a1.5 1.5 0 1 0 0 3h9.5V30a1.5 1.5 0 1 0 3 0v-6.5H27a1.5 1.5 0 1 0 0-3m-15.741-14h9.482l2.471 14H8.789z"/>`, 'fill': `<path fill="currentColor" d="M28 22a1 1 0 0 1-1 1H17v7a1 1 0 0 1-2 0v-7H5a1 1 0 0 1 0-2h1.161L8.807 6H8a1 1 0 0 1 0-2h16a1 1 0 1 1 0 2h-.808l2.647 15H27a1 1 0 0 1 1 1"/>`, 'duotone': `<path fill="currentColor" d="M25 22H7l3-17h12z" opacity=".08"/><path fill="currentColor" d="M27 21h-1.161L23.193 6H24a1 1 0 1 0 0-2H8a1 1 0 0 0 0 2h.807L6.161 21H5a1 1 0 0 0 0 2h10v7a1 1 0 0 0 2 0v-7h10a1 1 0 0 0 0-2M10.839 6H21.16l2.646 15H8.194z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
