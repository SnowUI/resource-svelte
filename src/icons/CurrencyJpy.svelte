<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25.774 6.634 18.11 16H22a1 1 0 0 1 0 2h-5v2h5a1 1 0 0 1 0 2h-5v5a1 1 0 1 1-2 0v-5h-5a1 1 0 1 1 0-2h5v-2h-5a1 1 0 1 1 0-2h3.89L6.226 6.634a1 1 0 0 1 1.548-1.268L16 15.421l8.226-10.055a1 1 0 1 1 1.548 1.268"/>`, 'thin': `<path fill="currentColor" d="M25.387 6.316 17.055 16.5H22a.5.5 0 0 1 0 1h-5.5v3H22a.5.5 0 0 1 0 1h-5.5V27a.5.5 0 0 1-1 0v-5.5H10a.5.5 0 0 1 0-1h5.5v-3H10a.5.5 0 0 1 0-1h4.945L6.612 6.316a.5.5 0 1 1 .775-.632L16 16.21l8.612-10.526a.5.5 0 0 1 .775.632"/>`, 'light': `<path fill="currentColor" d="m25.58 6.475-8 9.775H22a.75.75 0 0 1 0 1.5h-5.25v2.5H22a.75.75 0 0 1 0 1.5h-5.25V27a.75.75 0 0 1-1.5 0v-5.25H10a.75.75 0 1 1 0-1.5h5.25v-2.5H10a.75.75 0 1 1 0-1.5h4.418l-8-9.775a.75.75 0 1 1 1.16-.95L16 15.816l8.42-10.291a.75.75 0 0 1 1.16.95"/>`, 'bold': `<path fill="currentColor" d="m26.161 6.95-7 8.55H22a1.5 1.5 0 1 1 0 3h-4.5v2H22a1.5 1.5 0 1 1 0 3h-4.5V27a1.5 1.5 0 1 1-3 0v-3.5H10a1.5 1.5 0 0 1 0-3h4.5v-2H10a1.5 1.5 0 0 1 0-3h2.835l-7-8.55a1.502 1.502 0 1 1 2.326-1.9L16 14.631l7.839-9.58a1.5 1.5 0 0 1 2.322 1.9"/>`, 'fill': `<path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m7.75 6.659L18.204 16H20a1 1 0 0 1 0 2h-3v2h3a1 1 0 0 1 0 2h-3v2a1 1 0 0 1-2 0v-2h-3a1 1 0 0 1 0-2h3v-2h-3a1 1 0 0 1 0-2h1.796L8.25 9.659a1 1 0 0 1 1.5-1.318l6.25 7.14 6.25-7.14a1 1 0 1 1 1.5 1.318"/>`, 'duotone': `<path fill="currentColor" d="m25 6-9 11L7 6z" opacity=".08"/><path fill="currentColor" d="M25.774 6.634 18.11 16H22a1 1 0 0 1 0 2h-5v2h5a1 1 0 0 1 0 2h-5v5a1 1 0 1 1-2 0v-5h-5a1 1 0 1 1 0-2h5v-2h-5a1 1 0 1 1 0-2h3.89L6.226 6.634a1 1 0 0 1 1.548-1.268L16 15.421l8.226-10.055a1 1 0 1 1 1.548 1.268"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
