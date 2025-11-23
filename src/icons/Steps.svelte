<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M31 7a1 1 0 0 1-1 1h-6v5a1 1 0 0 1-1 1h-6v5a1 1 0 0 1-1 1h-6v5a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h6v-5a1 1 0 0 1 1-1h6v-5a1 1 0 0 1 1-1h6V7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M30.5 7a.5.5 0 0 1-.5.5h-6.5V13a.5.5 0 0 1-.5.5h-6.5V19a.5.5 0 0 1-.5.5H9.5V25a.5.5 0 0 1-.5.5H2a.5.5 0 0 1 0-1h6.5V19a.5.5 0 0 1 .5-.5h6.5V13a.5.5 0 0 1 .5-.5h6.5V7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M30.75 7a.75.75 0 0 1-.75.75h-6.25V13a.75.75 0 0 1-.75.75h-6.25V19a.75.75 0 0 1-.75.75H9.75V25a.75.75 0 0 1-.75.75H2a.75.75 0 1 1 0-1.5h6.25V19a.75.75 0 0 1 .75-.75h6.25V13a.75.75 0 0 1 .75-.75h6.25V7a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M31.5 7A1.5 1.5 0 0 1 30 8.5h-5.5V13a1.5 1.5 0 0 1-1.5 1.5h-5.5V19a1.5 1.5 0 0 1-1.5 1.5h-5.5V25A1.5 1.5 0 0 1 9 26.5H2a1.5 1.5 0 1 1 0-3h5.5V19A1.5 1.5 0 0 1 9 17.5h5.5V13a1.5 1.5 0 0 1 1.5-1.5h5.5V7A1.5 1.5 0 0 1 23 5.5h7A1.5 1.5 0 0 1 31.5 7"/>`, 'fill': `<path fill="currentColor" d="M30 7v18a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h6v-5a1 1 0 0 1 1-1h6v-5a1 1 0 0 1 1-1h6V7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1"/>`, 'duotone': `<path fill="currentColor" d="M30 7v17a1 1 0 0 1-1 1H9v-6h7v-6h7V7z" opacity=".08"/><path fill="currentColor" d="M31 7a1 1 0 0 1-1 1h-6v5a1 1 0 0 1-1 1h-6v5a1 1 0 0 1-1 1h-6v5a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h6v-5a1 1 0 0 1 1-1h6v-5a1 1 0 0 1 1-1h6V7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
