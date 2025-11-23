<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 19h-6v-6h6a1 1 0 0 0 0-2h-6V5a1 1 0 0 0-2 0v6h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2m-14 0v-6h6v6z"/>`, 'thin': `<path fill="currentColor" d="M27 19.5h-6.5v-7H27a.5.5 0 0 0 0-1h-6.5V5a.5.5 0 0 0-1 0v6.5h-7V5a.5.5 0 0 0-1 0v6.5H5a.5.5 0 0 0 0 1h6.5v7H5a.5.5 0 0 0 0 1h6.5V27a.5.5 0 0 0 1 0v-6.5h7V27a.5.5 0 0 0 1 0v-6.5H27a.5.5 0 0 0 0-1m-14.5 0v-7h7v7z"/>`, 'light': `<path fill="currentColor" d="M27 19.25h-6.25v-6.5H27a.75.75 0 1 0 0-1.5h-6.25V5a.75.75 0 1 0-1.5 0v6.25h-6.5V5a.75.75 0 1 0-1.5 0v6.25H5a.75.75 0 1 0 0 1.5h6.25v6.5H5a.75.75 0 1 0 0 1.5h6.25V27a.75.75 0 1 0 1.5 0v-6.25h6.5V27a.75.75 0 1 0 1.5 0v-6.25H27a.75.75 0 1 0 0-1.5m-14.25 0v-6.5h6.5v6.5z"/>`, 'bold': `<path fill="currentColor" d="M27 18.5h-5.5v-5H27a1.5 1.5 0 1 0 0-3h-5.5V5a1.5 1.5 0 1 0-3 0v5.5h-5V5a1.5 1.5 0 1 0-3 0v5.5H5a1.5 1.5 0 1 0 0 3h5.5v5H5a1.5 1.5 0 1 0 0 3h5.5V27a1.5 1.5 0 1 0 3 0v-5.5h5V27a1.5 1.5 0 1 0 3 0v-5.5H27a1.5 1.5 0 1 0 0-3m-13.5 0v-5h5v5z"/>`, 'fill': `<path fill="currentColor" d="M14 14h4v4h-4zm14-8v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2m-8 12v-4h4a1 1 0 0 0 0-2h-4V8a1 1 0 0 0-2 0v4h-4V8a1 1 0 0 0-2 0v4H8a1 1 0 0 0 0 2h4v4H8a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2z"/>`, 'duotone': `<path fill="currentColor" d="M20 12v8h-8v-8z" opacity=".08"/><path fill="currentColor" d="M27 19h-6v-6h6a1 1 0 0 0 0-2h-6V5a1 1 0 0 0-2 0v6h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2m-14 0v-6h6v6z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
