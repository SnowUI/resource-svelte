<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M18 3H8a1 1 0 0 0-1 1v16a10.01 10.01 0 0 0 10 10 1 1 0 0 0 1-1v-8a9 9 0 0 0 0-18M9 7.818 15.29 19H9zm7 8.365L9.71 5H16zM9.064 21H16v6.938A8.02 8.02 0 0 1 9.064 21M18 19V5a7 7 0 1 1 0 14"/>`, 'thin': `<path fill="currentColor" d="M18 3.5H8a.5.5 0 0 0-.5.5v16a9.51 9.51 0 0 0 9.5 9.5.5.5 0 0 0 .5-.5v-8.5h.5a8.5 8.5 0 1 0 0-17M8.5 5.909 16.145 19.5H8.5zm8 12.182L8.855 4.5H16.5zM8.516 20.5H16.5v7.985A8.513 8.513 0 0 1 8.516 20.5m9.484-1h-.5v-15h.5a7.5 7.5 0 0 1 0 15"/>`, 'light': `<path fill="currentColor" d="M18 3.25H8a.75.75 0 0 0-.75.75v16A9.76 9.76 0 0 0 17 29.75a.75.75 0 0 0 .75-.75v-8.25H18a8.75 8.75 0 0 0 0-17.5M8.75 6.864l6.967 12.386H8.75zm7.5 10.273L9.283 4.75h6.967zM8.785 20.75h7.465v7.466a8.26 8.26 0 0 1-7.465-7.466M18 19.25h-.25V4.75H18a7.25 7.25 0 1 1 0 14.5"/>`, 'bold': `<path fill="currentColor" d="M27.5 12A9.51 9.51 0 0 0 18 2.5H8A1.5 1.5 0 0 0 6.5 4v16A10.51 10.51 0 0 0 17 30.5a1.5 1.5 0 0 0 1.5-1.5v-7.514a9.51 9.51 0 0 0 9-9.486m-18-2.274 4.935 8.774H9.5zm6 4.548L10.565 5.5H15.5zM9.653 21.5H15.5v5.849A7.52 7.52 0 0 1 9.653 21.5m8.847-3.021V5.52a6.5 6.5 0 0 1 0 12.958"/>`, 'fill': `<path fill="currentColor" d="M18 3H8a1 1 0 0 0-1 1v16a10.01 10.01 0 0 0 10 10 1 1 0 0 0 1-1v-8a9 9 0 0 0 0-18m-2 24.938A8.02 8.02 0 0 1 9.064 21H16zm0-11.75L9.71 5H16zM18 19V5a7 7 0 1 1 0 14"/>`, 'duotone': `<path fill="currentColor" d="M26 12a8 8 0 0 1-8 8h-1V4h1a8 8 0 0 1 8 8M8 20h9L8 4z" opacity=".08"/><path fill="currentColor" d="M18 3H8a1 1 0 0 0-1 1v16a10.01 10.01 0 0 0 10 10 1 1 0 0 0 1-1v-8a9 9 0 0 0 0-18M9 7.818 15.29 19H9zm7 20.125A8.02 8.02 0 0 1 9.064 21H16zm0-11.75L9.71 5H16zM18 19V5a7 7 0 1 1 0 14"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
