<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m1 23.954V19h3a1 1 0 0 0 0-2h-3v-3a2 2 0 0 1 2-2h2a1 1 0 0 0 0-2h-2a4 4 0 0 0-4 4v3h-3a1 1 0 0 0 0 2h3v7.954a11 11 0 1 1 2 0"/>`, 'thin': `<path fill="currentColor" d="M16 3.5A12.5 12.5 0 1 0 28.5 16 12.514 12.514 0 0 0 16 3.5m.5 23.989V18.5H20a.5.5 0 0 0 0-1h-3.5V14a2.5 2.5 0 0 1 2.5-2.5h2a.5.5 0 0 0 0-1h-2a3.5 3.5 0 0 0-3.5 3.5v3.5H12a.5.5 0 0 0 0 1h3.5v8.989a11.5 11.5 0 1 1 1 0"/>`, 'light': `<path fill="currentColor" d="M16 3.25A12.75 12.75 0 1 0 28.75 16 12.765 12.765 0 0 0 16 3.25m.75 23.975V18.75H20a.75.75 0 1 0 0-1.5h-3.25V14A2.25 2.25 0 0 1 19 11.75h2a.75.75 0 1 0 0-1.5h-2A3.75 3.75 0 0 0 15.25 14v3.25H12a.75.75 0 1 0 0 1.5h3.25v8.475a11.25 11.25 0 1 1 1.5 0"/>`, 'bold': `<path fill="currentColor" d="M16 2.5A13.5 13.5 0 1 0 29.5 16 13.515 13.515 0 0 0 16 2.5m1.5 23.891V19.5H20a1.5 1.5 0 1 0 0-3h-2.5V14a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 1 0 0-3h-2a4.5 4.5 0 0 0-4.5 4.5v2.5H12a1.5 1.5 0 1 0 0 3h2.5v6.891a10.5 10.5 0 1 1 3 0"/>`, 'fill': `<path fill="currentColor" d="M29 16a13.02 13.02 0 0 1-11.444 12.907.502.502 0 0 1-.556-.5V19h3a1 1 0 0 0 1-1.066A1.02 1.02 0 0 0 19.969 17h-2.97v-3a2 2 0 0 1 2-2h2a1 1 0 0 0 1-1.066A1.02 1.02 0 0 0 20.967 10H19a4 4 0 0 0-4 4v3h-3a1 1 0 0 0-1 1.066 1.02 1.02 0 0 0 1.034.934H15v9.41a.498.498 0 0 1-.555.5A13.02 13.02 0 0 1 3.009 15.511c.25-6.75 5.717-12.237 12.472-12.5A13.015 13.015 0 0 1 29 16"/>`, 'duotone': `<path fill="currentColor" d="M28 16a12 12 0 1 1-23.999 0A12 12 0 0 1 28 16" opacity=".08"/><path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m1 23.954V19h3a1 1 0 0 0 0-2h-3v-3a2 2 0 0 1 2-2h2a1 1 0 0 0 0-2h-2a4 4 0 0 0-4 4v3h-3a1 1 0 0 0 0 2h3v7.954a11 11 0 1 1 2 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
