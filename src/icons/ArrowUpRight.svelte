<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25 8v13a1 1 0 0 1-2 0V10.414L8.708 24.708a1 1 0 0 1-1.415-1.415L21.586 9H11a1 1 0 1 1 0-2h13a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M24.5 8v13a.5.5 0 1 1-1 0V9.208L8.354 24.354a.5.5 0 0 1-.708-.708L22.793 8.5H11a.5.5 0 1 1 0-1h13a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M24.75 8v13a.75.75 0 1 1-1.5 0V9.81L8.53 24.53a.75.75 0 0 1-1.06-1.06L22.19 8.75H11a.75.75 0 1 1 0-1.5h13a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M25.5 8v13a1.5 1.5 0 1 1-3 0v-9.375L9.06 25.061a1.503 1.503 0 0 1-2.125-2.125L20.375 9.5H11a1.5 1.5 0 0 1 0-3h13A1.5 1.5 0 0 1 25.5 8"/>`, 'fill': `<path fill="currentColor" d="M25 8v13a1 1 0 0 1-1.707.707L17.5 15.915l-8.792 8.794a1 1 0 0 1-1.415-1.415l8.793-8.793-5.793-5.792A1 1 0 0 1 11 7h13a1 1 0 0 1 1 1"/>`, 'duotone': `<path fill="currentColor" d="M24 8v13L11 8z" opacity=".08"/><path fill="currentColor" d="M24 7H11a1 1 0 0 0-.707 1.707l5.793 5.793-8.793 8.793a1 1 0 1 0 1.415 1.415l8.792-8.794 5.793 5.794A1 1 0 0 0 25 21V8a1 1 0 0 0-1-1m-1 11.586-4.792-4.792L13.414 9H23z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
