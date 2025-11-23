<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 16a12 12 0 1 1-2.744-7.636 1.001 1.001 0 0 1-1.24 1.534 1 1 0 0 1-.301-.262A10 10 0 1 0 25.95 17H16a1 1 0 1 1 0-2h11a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M27.5 16a11.5 11.5 0 1 1-2.625-7.319.5.5 0 1 1-.771.638 10.5 10.5 0 1 0 2.385 7.181H16a.5.5 0 0 1 0-1h11a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M27.75 16a11.75 11.75 0 1 1-2.686-7.477.749.749 0 0 1-.647 1.235.75.75 0 0 1-.51-.28 10.25 10.25 0 1 0 2.316 7.272H16a.75.75 0 1 1 0-1.5h11a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M28.5 16a12.5 12.5 0 1 1-2.858-7.955 1.5 1.5 0 1 1-2.313 1.91A9.5 9.5 0 1 0 25.38 17.5H16a1.5 1.5 0 1 1 0-3h11a1.5 1.5 0 0 1 1.5 1.5"/>`, 'fill': `<path fill="currentColor" d="M16 3a13 13 0 1 0 0 26 13 13 0 0 0 0-26m0 23a10 10 0 1 1 6.668-17.454 1 1 0 0 1-1.334 1.49A8 8 0 1 0 23.938 17H16a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1 10.01 10.01 0 0 1-10 10"/>`, 'duotone': `<path fill="currentColor" d="M27 16a11 11 0 1 1-22 0 11 11 0 0 1 22 0" opacity=".08"/><path fill="currentColor" d="M28 16a12 12 0 1 1-2.744-7.636 1.001 1.001 0 0 1-1.24 1.534 1 1 0 0 1-.301-.262A10 10 0 1 0 25.95 17H16a1 1 0 1 1 0-2h11a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
