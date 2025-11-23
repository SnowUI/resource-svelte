<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 27a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1M8 20a1 1 0 0 0 1-1V9.414l12.293 12.294a1 1 0 0 0 1.415-1.415L10.414 8H20a1 1 0 1 0 0-2H8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1"/>`, 'thin': `<path fill="currentColor" d="M27.5 27a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h22a.5.5 0 0 1 .5.5M8 19.5a.5.5 0 0 0 .5-.5V8.208l13.146 13.146a.5.5 0 0 0 .708-.708L9.208 7.5H20a.5.5 0 0 0 0-1H8a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5"/>`, 'light': `<path fill="currentColor" d="M27.75 27a.75.75 0 0 1-.75.75H5a.75.75 0 1 1 0-1.5h22a.75.75 0 0 1 .75.75M8 19.75a.75.75 0 0 0 .75-.75V8.811L21.47 21.53a.75.75 0 0 0 1.06-1.06L9.811 7.75H20a.75.75 0 1 0 0-1.5H8a.75.75 0 0 0-.75.75v12a.75.75 0 0 0 .75.75"/>`, 'bold': `<path fill="currentColor" d="M28.5 27a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M8 20.5A1.5 1.5 0 0 0 9.5 19v-8.375l11.439 11.44a1.503 1.503 0 0 0 2.125-2.125L11.625 8.5H20a1.5 1.5 0 0 0 0-3H8A1.5 1.5 0 0 0 6.5 7v12A1.5 1.5 0 0 0 8 20.5"/>`, 'fill': `<path fill="currentColor" d="M7 19V7a1 1 0 0 1 1-1h12a1 1 0 0 1 .707 1.707L15.415 13l7.294 7.293a1 1 0 0 1-1.415 1.415L14 14.414l-5.292 5.294A1 1 0 0 1 7 19m20 7H5a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2"/>`, 'duotone': `<path fill="currentColor" d="M20 7 8 19V7z" opacity=".08"/><path fill="currentColor" d="M28 27a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1M7 19V7a1 1 0 0 1 1-1h12a1 1 0 0 1 .707 1.707L15.415 13l7.294 7.293a1 1 0 0 1-1.415 1.415L14 14.414l-5.292 5.294A1 1 0 0 1 7 19m2-2.414 4.293-4.293L17.586 8H9z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
