<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M24.708 24.708a1 1 0 0 1-1.415 0L9 10.414V21a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H10.414l14.294 14.293a1 1 0 0 1 0 1.415"/>`, 'thin': `<path fill="currentColor" d="M24.354 24.354a.503.503 0 0 1-.708 0L8.5 9.208V21a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1H9.208l15.146 15.146a.503.503 0 0 1 0 .708"/>`, 'light': `<path fill="currentColor" d="M24.53 24.53a.75.75 0 0 1-1.06 0L8.75 9.81V21a.75.75 0 1 1-1.5 0V8A.75.75 0 0 1 8 7.25h13a.75.75 0 1 1 0 1.5H9.81l14.72 14.72a.75.75 0 0 1 0 1.06"/>`, 'bold': `<path fill="currentColor" d="M25.061 25.061a1.503 1.503 0 0 1-2.125 0L9.5 11.625V21a1.5 1.5 0 0 1-3 0V8A1.5 1.5 0 0 1 8 6.5h13a1.5 1.5 0 0 1 0 3h-9.375l13.436 13.439a1.5 1.5 0 0 1 0 2.122"/>`, 'fill': `<path fill="currentColor" d="M24.708 24.708a1 1 0 0 1-1.415 0L14.5 15.914l-5.792 5.794A1 1 0 0 1 7 21V8a1 1 0 0 1 1-1h13a1 1 0 0 1 .707 1.707L15.915 14.5l8.794 8.793a1 1 0 0 1 0 1.415"/>`, 'duotone': `<path fill="currentColor" d="M21 8 8 21V8z" opacity=".08"/><path fill="currentColor" d="M24.708 23.293 15.914 14.5l5.794-5.792A1 1 0 0 0 21 7H8a1 1 0 0 0-1 1v13a1 1 0 0 0 1.707.707l5.793-5.793 8.793 8.794a1 1 0 0 0 1.415-1.415M9 9h9.586l-4.792 4.793L9 18.586z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
