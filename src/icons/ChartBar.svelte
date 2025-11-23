<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 25h-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v5h-6a1 1 0 0 0-1 1v5H6a1 1 0 0 0-1 1v8H4a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2M20 6h5v19h-5zm-7 6h5v13h-5zm-6 6h4v7H7z"/>`, 'thin': `<path fill="currentColor" d="M28 25.5h-1.5V5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v5.5H12a.5.5 0 0 0-.5.5v5.5H6a.5.5 0 0 0-.5.5v8.5H4a.5.5 0 0 0 0 1h24a.5.5 0 0 0 0-1m-8.5-20h6v20h-6zm-7 6h6v14h-6zm-6 6h5v8h-5z"/>`, 'light': `<path fill="currentColor" d="M28 25.25h-1.25V5a.75.75 0 0 0-.75-.75h-7a.75.75 0 0 0-.75.75v5.25H12a.75.75 0 0 0-.75.75v5.25H6a.75.75 0 0 0-.75.75v8.25H4a.75.75 0 1 0 0 1.5h24a.75.75 0 1 0 0-1.5m-8.25-19.5h5.5v19.5h-5.5zm-7 6h5.5v13.5h-5.5zm-6 6h4.5v7.5h-4.5z"/>`, 'bold': `<path fill="currentColor" d="M28 24.5h-.5V5A1.5 1.5 0 0 0 26 3.5h-7A1.5 1.5 0 0 0 17.5 5v4.5H12a1.5 1.5 0 0 0-1.5 1.5v4.5H6A1.5 1.5 0 0 0 4.5 17v7.5H4a1.5 1.5 0 1 0 0 3h24a1.5 1.5 0 1 0 0-3m-7.5-18h4v18h-4zm-7 6h4v12h-4zm-6 6h3v6h-3z"/>`, 'fill': `<path fill="currentColor" d="M29 26a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h1v-8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v8h2V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v14h2V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v20h1a1 1 0 0 1 1 1"/>`, 'duotone': `<path fill="currentColor" d="M26 5v21h-7V5z" opacity=".08"/><path fill="currentColor" d="M28 25h-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v5h-6a1 1 0 0 0-1 1v5H6a1 1 0 0 0-1 1v8H4a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2M20 6h5v19h-5zm-7 6h5v13h-5zm-6 6h4v7H7z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
