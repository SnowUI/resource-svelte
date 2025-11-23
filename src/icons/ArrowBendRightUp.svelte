<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25.708 10.708a1 1 0 0 1-1.415 0L20 6.414V16A13.014 13.014 0 0 1 7 29a1 1 0 0 1 0-2 11.01 11.01 0 0 0 11-11V6.414l-4.292 4.294a1 1 0 0 1-1.415-1.416l6-6a1 1 0 0 1 1.415 0l6 6a1 1 0 0 1 0 1.415"/>`, 'thin': `<path fill="currentColor" d="M25.354 10.354a.5.5 0 0 1-.708 0L19.5 5.208V16A12.514 12.514 0 0 1 7 28.5a.5.5 0 0 1 0-1A11.513 11.513 0 0 0 18.5 16V5.208l-5.146 5.146a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708"/>`, 'light': `<path fill="currentColor" d="M25.53 10.53a.75.75 0 0 1-1.06 0l-4.72-4.719V16A12.765 12.765 0 0 1 7 28.75a.75.75 0 1 1 0-1.5A11.26 11.26 0 0 0 18.25 16V5.811l-4.72 4.719a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06"/>`, 'bold': `<path fill="currentColor" d="M26.061 11.061a1.5 1.5 0 0 1-2.125 0L20.5 7.625V16A13.515 13.515 0 0 1 7 29.5a1.5 1.5 0 1 1 0-3A10.51 10.51 0 0 0 17.5 16V7.625l-3.439 3.436A1.5 1.5 0 0 1 11.496 10c0-.399.159-.781.44-1.063l6-6a1.5 1.5 0 0 1 2.125 0l6 6a1.5 1.5 0 0 1 0 2.125"/>`, 'fill': `<path fill="currentColor" d="M25.924 10.383A1 1 0 0 1 25 11h-5v5A13.014 13.014 0 0 1 7 29a1 1 0 0 1 0-2 11.01 11.01 0 0 0 11-11v-5h-5a1 1 0 0 1-.707-1.708l6-6a1 1 0 0 1 1.415 0l6 6a1 1 0 0 1 .216 1.09"/>`, 'duotone': `<path fill="currentColor" d="M25 10H13l6-6z" opacity=".08"/><path fill="currentColor" d="m25.708 9.292-6-6a1 1 0 0 0-1.415 0l-6 6A1 1 0 0 0 13 11h5v5A11.01 11.01 0 0 1 7 27a1 1 0 1 0 0 2 13.014 13.014 0 0 0 13-13v-5h5a1 1 0 0 0 .707-1.708M15.414 9 19 5.414 22.586 9z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
