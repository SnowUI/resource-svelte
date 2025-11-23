<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 13a9.999 9.999 0 1 0-11 9.95V29a1 1 0 0 0 2 0v-6.05A10.014 10.014 0 0 0 26 13m-10 8a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8"/>`, 'thin': `<path fill="currentColor" d="M25.5 13a9.5 9.5 0 1 0-10 9.486V29a.5.5 0 0 0 1 0v-6.514a9.51 9.51 0 0 0 9-9.486M16 21.5a8.5 8.5 0 1 1 8.5-8.5 8.51 8.51 0 0 1-8.5 8.5"/>`, 'light': `<path fill="currentColor" d="M25.75 13a9.75 9.75 0 1 0-10.5 9.719V29a.75.75 0 1 0 1.5 0v-6.281a9.76 9.76 0 0 0 9-9.719M16 21.25A8.25 8.25 0 1 1 24.25 13 8.26 8.26 0 0 1 16 21.25"/>`, 'bold': `<path fill="currentColor" d="M26.5 13a10.5 10.5 0 1 0-12 10.391V29a1.5 1.5 0 1 0 3 0v-5.609A10.516 10.516 0 0 0 26.5 13M16 20.5a7.5 7.5 0 1 1 7.5-7.5 7.51 7.51 0 0 1-7.5 7.5"/>`, 'fill': `<path fill="currentColor" d="M20.98 13.544a5 5 0 1 1-9.958.91 5 5 0 0 1 9.958-.91M27 5v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2m-4 9a7 7 0 1 0-8 6.927v4.04a1.02 1.02 0 0 0 .934 1.03 1 1 0 0 0 1.066-1v-4.07A7.01 7.01 0 0 0 23 14"/>`, 'duotone': `<path fill="currentColor" d="M25 13a9 9 0 1 1-17.999 0A9 9 0 0 1 25 13" opacity=".08"/><path fill="currentColor" d="M26 13a9.999 9.999 0 1 0-11 9.95V29a1 1 0 0 0 2 0v-6.05A10.014 10.014 0 0 0 26 13m-10 8a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
