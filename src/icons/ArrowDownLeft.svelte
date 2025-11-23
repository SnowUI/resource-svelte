<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M24.708 8.707 10.414 23H21a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1V11a1 1 0 0 1 2 0v10.586L23.293 7.292a1 1 0 1 1 1.415 1.415"/>`, 'thin': `<path fill="currentColor" d="M24.354 8.354 9.208 23.5H21a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5V11a.5.5 0 1 1 1 0v11.793L23.646 7.646a.501.501 0 0 1 .708.708"/>`, 'light': `<path fill="currentColor" d="M24.53 8.53 9.81 23.25H21a.75.75 0 1 1 0 1.5H8a.75.75 0 0 1-.75-.75V11a.75.75 0 0 1 1.5 0v11.19L23.47 7.47a.75.75 0 0 1 1.06 1.06"/>`, 'bold': `<path fill="currentColor" d="M25.061 9.06 11.625 22.5H21a1.5 1.5 0 1 1 0 3H8A1.5 1.5 0 0 1 6.5 24V11a1.5 1.5 0 0 1 3 0v9.375L22.939 6.939a1.503 1.503 0 0 1 2.125 2.125z"/>`, 'fill': `<path fill="currentColor" d="M24.708 8.707 15.914 17.5l5.794 5.792A1 1 0 0 1 21 25H8a1 1 0 0 1-1-1V11a1 1 0 0 1 1.707-.708l5.793 5.794 8.793-8.794a1 1 0 1 1 1.415 1.415"/>`, 'duotone': `<path fill="currentColor" d="M21 24H8V11z" opacity=".08"/><path fill="currentColor" d="M24.708 7.293a1 1 0 0 0-1.415 0L14.5 16.086l-5.792-5.793A1 1 0 0 0 7 11v13a1 1 0 0 0 1 1h13a1.001 1.001 0 0 0 .707-1.707L15.915 17.5l8.794-8.792a1 1 0 0 0 0-1.415M9 23v-9.586l4.793 4.792L18.586 23z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
