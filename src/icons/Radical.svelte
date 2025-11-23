<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M30 9v3a1 1 0 1 1-2 0v-2H15.694L9.936 25.35a1 1 0 0 1-1.875 0l-6-16a1.001 1.001 0 0 1 1.875-.702L9 22.152l5.064-13.5A1 1 0 0 1 15 8h14a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M29.5 9v3a.5.5 0 0 1-1 0V9.5H15.346L9.471 25.175a.5.5 0 0 1-.936 0l-6-16a.5.5 0 0 1 .936-.351L9 23.576l5.532-14.75A.5.5 0 0 1 15 8.5h14a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M29.75 9v3a.75.75 0 1 1-1.5 0V9.75H15.52L9.702 25.264a.75.75 0 0 1-1.405 0l-6-16a.75.75 0 0 1 1.405-.528L9 22.864l5.297-14.125a.75.75 0 0 1 .703-.49h14a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M30.5 9v3a1.5 1.5 0 1 1-3 0v-1.5H16.04l-5.635 15.026a1.5 1.5 0 0 1-2.809 0l-6-16a1.5 1.5 0 1 1 2.809-1.054L9 20.722l4.596-12.25A1.5 1.5 0 0 1 15 7.5h14A1.5 1.5 0 0 1 30.5 9"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 10a1 1 0 0 1-2 0v-1h-8.322l-3.75 9.375a1 1 0 0 1-1.858 0l-4-10a1.002 1.002 0 1 1 1.859-.75L11 19.308l3.071-7.683A1 1 0 0 1 15 11h10a1 1 0 0 1 1 1z"/>`, 'duotone': `<path fill="currentColor" d="M29 9v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" opacity=".08"/><path fill="currentColor" d="M30 9v3a1 1 0 1 1-2 0v-2H15.694L9.936 25.35a1 1 0 0 1-1.875 0l-6-16a1.001 1.001 0 0 1 1.875-.702L9 22.152l5.064-13.5A1 1 0 0 1 15 8h14a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
