<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M29 26h-2.289L19.178 4.344A2 2 0 0 0 17.287 3h-2.577a2 2 0 0 0-1.889 1.343L5.29 26H3a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2M11.929 13h8.142l2.088 6H9.84zm2.782-8h2.578l2.086 6h-6.75zM9.146 21h13.708l1.74 5H7.406z"/>`, 'thin': `<path fill="currentColor" d="M29 26.5h-2.645L18.706 4.508A1.5 1.5 0 0 0 17.29 3.5H14.71a1.5 1.5 0 0 0-1.417 1.008L5.645 26.5H3a.5.5 0 0 0 0 1h26a.5.5 0 0 0 0-1m-17.428-14h8.856l2.433 7H9.14zm2.667-7.664a.5.5 0 0 1 .472-.336h2.578a.5.5 0 0 1 .472.336L20.08 11.5H11.92zM8.79 20.5h14.42l2.086 6H6.704z"/>`, 'light': `<path fill="currentColor" d="M29 26.25h-2.466L18.943 4.425a1.75 1.75 0 0 0-1.654-1.175H14.71a1.75 1.75 0 0 0-1.654 1.175L5.467 26.25H3a.75.75 0 1 0 0 1.5h26a.75.75 0 1 0 0-1.5m-17.25-13.5h8.5l2.26 6.5H9.49zm2.725-7.832a.25.25 0 0 1 .236-.168h2.578a.25.25 0 0 1 .236.168l2.203 6.332h-7.456zM8.968 20.75h14.064l1.913 5.5H7.055z"/>`, 'bold': `<path fill="currentColor" d="M29 25.5h-1.934L19.65 4.179A2.5 2.5 0 0 0 17.289 2.5H14.71a2.5 2.5 0 0 0-2.361 1.679L4.934 25.5H3a1.5 1.5 0 1 0 0 3h26a1.5 1.5 0 1 0 0-3m-16.716-12h7.432l1.739 5h-10.91zm2.782-8h1.868l1.738 5h-5.344zM9.5 21.5h13l1.391 4H8.11z"/>`, 'fill': `<path fill="currentColor" d="M29 26h-2.289L19.178 4.344A2 2 0 0 0 17.287 3h-2.577a2 2 0 0 0-1.889 1.343L5.29 26H3a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2M11.929 13h8.142l2.088 6H9.84z"/>`, 'duotone': `<path fill="currentColor" d="M23.565 20H8.44l2.778-8h9.564z" opacity=".08"/><path fill="currentColor" d="M29 26h-2.289L19.178 4.344A2 2 0 0 0 17.287 3h-2.577a2 2 0 0 0-1.889 1.343L5.29 26H3a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2M14.711 5h2.578l2.086 6h-6.75zm-2.782 8h8.142l2.088 6H9.84zM7.406 26l1.74-5h13.708l1.74 5z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
