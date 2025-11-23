<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 24a11 11 0 1 1 11-11 11.01 11.01 0 0 1-11 11m4.555-11.832-6-4A1 1 0 0 0 13 12v8a1 1 0 0 0 1.555.832l6-4a1 1 0 0 0 0-1.665M15 18.13v-4.256L18.198 16z"/>`, 'thin': `<path fill="currentColor" d="M16 3.5A12.5 12.5 0 1 0 28.5 16 12.514 12.514 0 0 0 16 3.5m0 24A11.5 11.5 0 1 1 27.5 16 11.513 11.513 0 0 1 16 27.5m4.278-11.916-6-4A.5.5 0 0 0 13.5 12v8a.5.5 0 0 0 .777.416l6-4a.5.5 0 0 0 0-.832M14.5 19.066v-6.132L19.099 16z"/>`, 'light': `<path fill="currentColor" d="M16 3.25A12.75 12.75 0 1 0 28.75 16 12.765 12.765 0 0 0 16 3.25m0 24A11.25 11.25 0 1 1 27.25 16 11.26 11.26 0 0 1 16 27.25m4.416-11.875-6-4A.75.75 0 0 0 13.25 12v8a.75.75 0 0 0 1.166.625l6-4a.75.75 0 0 0 0-1.25m-5.666 3.224V13.4L18.648 16z"/>`, 'bold': `<path fill="currentColor" d="M16 2.5A13.5 13.5 0 1 0 29.5 16 13.515 13.515 0 0 0 16 2.5m0 24A10.5 10.5 0 1 1 26.5 16 10.51 10.51 0 0 1 16 26.5M21 16a1.5 1.5 0 0 1-.64 1.229l-5 3.5A1.501 1.501 0 0 1 13 19.5v-7a1.5 1.5 0 0 1 2.36-1.229l5 3.5A1.5 1.5 0 0 1 21 16"/>`, 'fill': `<path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.016 13.016 0 0 0 16 3m4.555 13.833-6 4A1 1 0 0 1 13 20v-8.001a1 1 0 0 1 1.555-.832l6 4a1 1 0 0 1 0 1.665"/>`, 'duotone': `<path fill="currentColor" d="M16 4a12 12 0 1 0 0 24 12 12 0 0 0 0-24m-2 16v-8l6 4z" opacity=".08"/><path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 24a11 11 0 1 1 11-11 11.01 11.01 0 0 1-11 11m4.555-11.832-6-4A1 1 0 0 0 13 12v8a1 1 0 0 0 1.555.832l6-4a1 1 0 0 0 0-1.665M15 18.13v-4.256L18.198 16z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
