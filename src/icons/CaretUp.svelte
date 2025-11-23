<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26.708 20.707a1 1 0 0 1-1.415 0L16 11.414l-9.292 9.293a1 1 0 1 1-1.415-1.415l10-10a1 1 0 0 1 1.415 0l10 10a1 1 0 0 1 0 1.415"/>`, 'thin': `<path fill="currentColor" d="M26.354 20.354a.503.503 0 0 1-.708 0L16 10.707l-9.646 9.647a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0l10 10a.5.5 0 0 1 0 .708"/>`, 'light': `<path fill="currentColor" d="M26.53 20.53a.75.75 0 0 1-1.06 0L16 11.06 6.53 20.53a.75.75 0 0 1-1.06-1.06l10-10a.75.75 0 0 1 1.06 0l10 10a.75.75 0 0 1 0 1.06"/>`, 'bold': `<path fill="currentColor" d="M27.061 21.061a1.5 1.5 0 0 1-2.125 0L16 12.125 7.06 21.061a1.503 1.503 0 1 1-2.125-2.125l10-10a1.5 1.5 0 0 1 2.125 0l10 10a1.5 1.5 0 0 1 0 2.125"/>`, 'fill': `<path fill="currentColor" d="M26.924 20.382A1 1 0 0 1 26 21H6a1 1 0 0 1-.707-1.708l10-10a1 1 0 0 1 1.415 0l10 10a1 1 0 0 1 .216 1.09"/>`, 'duotone': `<path fill="currentColor" d="M26 20H6l10-10z" opacity=".08"/><path fill="currentColor" d="m26.708 19.292-10-10a1 1 0 0 0-1.415 0l-10 10A1 1 0 0 0 6 21h20a1 1 0 0 0 .708-1.708M8.414 19 16 11.414 23.586 19z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
