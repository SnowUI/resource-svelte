<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28.708 12.708a1 1 0 0 1-1.415 0L23 8.414V24a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h17V8.414l-4.292 4.294a1 1 0 0 1-1.415-1.415l6-6a1 1 0 0 1 1.415 0l6 6a1 1 0 0 1 0 1.415"/>`, 'thin': `<path fill="currentColor" d="M28.354 12.354a.5.5 0 0 1-.708 0L22.5 7.208V24a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h17.5V7.208l-5.146 5.146a.501.501 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708"/>`, 'light': `<path fill="currentColor" d="M28.53 12.53a.75.75 0 0 1-1.06 0l-4.72-4.719V24a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h17.25V7.811l-4.72 4.719a.752.752 0 0 1-1.244-.23.75.75 0 0 1 .184-.83l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06"/>`, 'bold': `<path fill="currentColor" d="M29.061 13.061a1.5 1.5 0 0 1-2.125 0L23.5 9.625V24a1.5 1.5 0 0 1-1.5 1.5H4a1.5 1.5 0 0 1 0-3h16.5V9.625l-3.439 3.44a1.504 1.504 0 0 1-2.125-2.125l6-6a1.5 1.5 0 0 1 2.125 0l6 6a1.5 1.5 0 0 1 0 2.121"/>`, 'fill': `<path fill="currentColor" d="M28.924 12.383A1 1 0 0 1 28 13h-5v11a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h17V13h-5a1.001 1.001 0 0 1-.707-1.707l6-6a1 1 0 0 1 1.415 0l6 6a1 1 0 0 1 .216 1.09"/>`, 'duotone': `<path fill="currentColor" d="M28 12H16l6-6z" opacity=".08"/><path fill="currentColor" d="m28.708 11.293-6-6a1 1 0 0 0-1.415 0l-6 6A1 1 0 0 0 16 13h5v10H4a1 1 0 1 0 0 2h18a1 1 0 0 0 1-1V13h5a1.001 1.001 0 0 0 .707-1.707M18.414 11 22 7.414 25.586 11z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
