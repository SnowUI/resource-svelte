<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M30 10v9a1 1 0 0 1-2 0v-6.586L15.708 24.708a1 1 0 0 1-1.415 0l-12-12a1 1 0 1 1 1.415-1.415L15 22.586 26.586 11H20a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M29.5 10v9a.5.5 0 1 1-1 0v-7.792L15.354 24.354a.503.503 0 0 1-.708 0l-12-12a.5.5 0 0 1 .708-.708L15 23.293 27.793 10.5H20a.5.5 0 0 1 0-1h9a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M29.75 10v9a.75.75 0 1 1-1.5 0v-7.19L15.53 24.53a.75.75 0 0 1-1.06 0l-12-12a.75.75 0 0 1 1.06-1.06L15 22.939 27.19 10.75H20a.75.75 0 1 1 0-1.5h9a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M30.5 10v9a1.5 1.5 0 1 1-3 0v-5.375L16.06 25.065a1.5 1.5 0 0 1-2.125 0l-12-12a1.503 1.503 0 1 1 2.125-2.125L15 21.875 25.375 11.5H20a1.5 1.5 0 1 1 0-3h9a1.5 1.5 0 0 1 1.5 1.5"/>`, 'fill': `<path fill="currentColor" d="M30 10v9a1 1 0 0 1-1.707.707L24.5 15.915l-8.792 8.794a1 1 0 0 1-1.415 0l-12-12a1 1 0 1 1 1.415-1.415L15 22.586l8.086-8.086-3.793-3.793A1 1 0 0 1 20 9h9a1 1 0 0 1 1 1"/>`, 'duotone': `<path fill="currentColor" d="M29 10v9l-9-9z" opacity=".08"/><path fill="currentColor" d="M29 9h-9a1 1 0 0 0-.707 1.707l3.793 3.793L15 22.586 3.708 11.293a1 1 0 0 0-1.415 1.415l12 12a1 1 0 0 0 1.415 0l8.792-8.794 3.793 3.794A1 1 0 0 0 30 19v-9a1 1 0 0 0-1-1m-1 7.586L22.414 11H28z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
