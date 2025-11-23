<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 24a11 11 0 1 1 11-11 11.01 11.01 0 0 1-11 11m8-11a1 1 0 0 1-1 1h-4.586l3.293 3.293a1 1 0 0 1-1.415 1.415l-5-5A1 1 0 0 1 16 15h7a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M16 3.5A12.5 12.5 0 1 0 28.5 16 12.514 12.514 0 0 0 16 3.5m0 24A11.5 11.5 0 1 1 27.5 16 11.513 11.513 0 0 1 16 27.5M23.5 16a.5.5 0 0 1-.5.5h-5.792l4.146 4.146a.5.5 0 0 1-.708.708l-5-5A.501.501 0 0 1 16 15.5h7a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M16 3.25A12.75 12.75 0 1 0 28.75 16 12.765 12.765 0 0 0 16 3.25m0 24A11.25 11.25 0 1 1 27.25 16 11.26 11.26 0 0 1 16 27.25M23.75 16a.75.75 0 0 1-.75.75h-5.189l3.719 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 .53-1.28h7a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M16 2.5A13.5 13.5 0 1 0 29.5 16 13.515 13.515 0 0 0 16 2.5m0 24A10.5 10.5 0 1 1 26.5 16 10.51 10.51 0 0 1 16 26.5M24.5 16a1.5 1.5 0 0 1-1.5 1.5h-3.375l2.44 2.439a1.503 1.503 0 0 1-2.125 2.125l-5-5A1.5 1.5 0 0 1 16 14.5h7a1.5 1.5 0 0 1 1.5 1.5"/>`, 'fill': `<path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m7 14h-4.586l3.293 3.293a1 1 0 0 1-1.415 1.415l-5-5A1 1 0 0 1 16 15h7a1 1 0 0 1 0 2"/>`, 'duotone': `<path fill="currentColor" d="M28 16a12 12 0 1 1-23.999 0A12 12 0 0 1 28 16" opacity=".08"/><path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 24a11 11 0 1 1 11-11 11.01 11.01 0 0 1-11 11m8-11a1 1 0 0 1-1 1h-4.586l3.293 3.293a1 1 0 0 1-1.415 1.415l-5-5A1 1 0 0 1 16 15h7a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
