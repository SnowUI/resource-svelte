<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M29 16a1 1 0 0 1-1 1H11.414l7.294 7.293a1 1 0 0 1-1.415 1.415l-9-9a1 1 0 0 1 0-1.415l9-9a1 1 0 1 1 1.415 1.414L11.414 15H28a1 1 0 0 1 1 1M5 4a1 1 0 0 0-1 1v22a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1"/>`, 'thin': `<path fill="currentColor" d="M28.5 16a.5.5 0 0 1-.5.5H10.208l8.146 8.146a.5.5 0 0 1-.708.708l-9-9a.5.5 0 0 1 0-.708l9-9a.501.501 0 0 1 .708.708L10.208 15.5H28a.5.5 0 0 1 .5.5M5 4.5a.5.5 0 0 0-.5.5v22a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>`, 'light': `<path fill="currentColor" d="M28.75 16a.75.75 0 0 1-.75.75H10.811l7.719 7.72a.75.75 0 1 1-1.06 1.06l-9-9a.75.75 0 0 1 0-1.06l9-9a.75.75 0 0 1 1.06 1.06l-7.719 7.72H28a.75.75 0 0 1 .75.75M5 4.25a.75.75 0 0 0-.75.75v22a.75.75 0 1 0 1.5 0V5A.75.75 0 0 0 5 4.25"/>`, 'bold': `<path fill="currentColor" d="M29.5 16a1.5 1.5 0 0 1-1.5 1.5H13.625l6.44 6.439a1.503 1.503 0 0 1-2.125 2.125l-9-9a1.5 1.5 0 0 1 0-2.125l9-9a1.502 1.502 0 1 1 2.125 2.125l-6.44 6.436H28a1.5 1.5 0 0 1 1.5 1.5M5 3.5A1.5 1.5 0 0 0 3.5 5v22a1.5 1.5 0 0 0 3 0V5A1.5 1.5 0 0 0 5 3.5"/>`, 'fill': `<path fill="currentColor" d="M6 5v22a1 1 0 1 1-2 0V5a1 1 0 0 1 2 0m22 10h-9V7a1 1 0 0 0-1.707-.707l-9 9a1 1 0 0 0 0 1.415l9 9A1 1 0 0 0 19 25v-8h9a1 1 0 0 0 0-2"/>`, 'duotone': `<path fill="currentColor" d="M18 7v18l-9-9z" opacity=".08"/><path fill="currentColor" d="M28 15h-9V7a1 1 0 0 0-1.707-.707l-9 9a1 1 0 0 0 0 1.415l9 9A1 1 0 0 0 19 25v-8h9a1 1 0 0 0 0-2m-11 7.586L10.414 16 17 9.414zM6 5v22a1 1 0 1 1-2 0V5a1 1 0 0 1 2 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
