<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 28a1 1 0 0 1-1 1 13.014 13.014 0 0 1-13-13V6.414l-4.292 4.294a1 1 0 0 1-1.415-1.416l6-6a1 1 0 0 1 1.415 0l6 6a1 1 0 0 1-1.415 1.415L14 6.414V16a11.013 11.013 0 0 0 11 11 1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M25.5 28a.5.5 0 0 1-.5.5A12.513 12.513 0 0 1 12.5 16V5.208l-5.146 5.146a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L13.5 5.208V16A11.51 11.51 0 0 0 25 27.5a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M25.75 28a.75.75 0 0 1-.75.75A12.765 12.765 0 0 1 12.25 16V5.811L7.53 10.53a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06l-4.72-4.719V16A11.26 11.26 0 0 0 25 27.25a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M26.5 28a1.5 1.5 0 0 1-1.5 1.5A13.515 13.515 0 0 1 11.5 16V7.625L8.06 11.061a1.503 1.503 0 0 1-2.125-2.125l6-6a1.5 1.5 0 0 1 2.125 0l6 6a1.503 1.503 0 1 1-2.125 2.125L14.5 7.625V16A10.51 10.51 0 0 0 25 26.5a1.5 1.5 0 0 1 1.5 1.5"/>`, 'fill': `<path fill="currentColor" d="M26 28a1 1 0 0 1-1 1 13.014 13.014 0 0 1-13-13v-5H7a1 1 0 0 1-.707-1.708l6-6a1 1 0 0 1 1.415 0l6 6A1 1 0 0 1 19 11h-5v5a11.013 11.013 0 0 0 11 11 1 1 0 0 1 1 1"/>`, 'duotone': `<path fill="currentColor" d="M19 10H7l6-6z" opacity=".08"/><path fill="currentColor" d="M25 27a11.013 11.013 0 0 1-11-11v-5h5a1 1 0 0 0 .708-1.708l-6-6a1 1 0 0 0-1.415 0l-6 6A1 1 0 0 0 7 11h5v5a13.014 13.014 0 0 0 13 13 1 1 0 0 0 0-2M13 5.414 16.586 9H9.414z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
