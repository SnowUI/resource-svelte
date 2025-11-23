<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 6H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1M11 18v-4h10v4zm-6 0v-4h4v4zm18-4h4v4h-4zm4-2H17V8h10zM15 8v4H5V8zM5 20h10v4H5zm12 4v-4h10v4z"/>`, 'thin': `<path fill="currentColor" d="M28 6.5H4a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 .5.5h24a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5m-17.5 12v-5h11v5zm-6 0v-5h5v5zm18-5h5v5h-5zm5-1h-11v-5h11zm-12-5v5h-11v-5zm-11 12h11v5h-11zm12 5v-5h11v5z"/>`, 'light': `<path fill="currentColor" d="M28 6.25H4a.75.75 0 0 0-.75.75v18a.75.75 0 0 0 .75.75h24a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75m-17.25 12v-4.5h10.5v4.5zm-6 0v-4.5h4.5v4.5zm18-4.5h4.5v4.5h-4.5zm4.5-1.5h-10.5v-4.5h10.5zm-12-4.5v4.5H4.75v-4.5zm-10.5 12h10.5v4.5H4.75zm12 4.5v-4.5h10.5v4.5z"/>`, 'bold': `<path fill="currentColor" d="M28 5.5H4A1.5 1.5 0 0 0 2.5 7v18A1.5 1.5 0 0 0 4 26.5h24a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 28 5.5m-16.5 12v-3h9v3zm-6 0v-3h3v3zm18-3h3v3h-3zm3-3h-9v-3h9zm-12-3v3h-9v-3zm-9 12h9v3h-9zm12 3v-3h9v3z"/>`, 'fill': `<path fill="currentColor" d="M17 11.5h11.5a.5.5 0 0 0 .5-.5V7a1 1 0 0 0-1-1H17.5a.5.5 0 0 0-.5.5zM23 19h5.5a.5.5 0 0 0 .5-.5V14a.5.5 0 0 0-.5-.5H23zM21 13.5H11V19h10zM9 13.5H3.5a.5.5 0 0 0-.5.5v4.5a.5.5 0 0 0 .5.5H9zM17 21v4.5a.5.5 0 0 0 .5.5H28a1 1 0 0 0 1-1v-3.5a.5.5 0 0 0-.5-.5zM15 11.5v-5a.5.5 0 0 0-.5-.5H4a1 1 0 0 0-1 1v4a.5.5 0 0 0 .5.5zM15 21H3.5a.5.5 0 0 0-.5.5V25a1 1 0 0 0 1 1h10.5a.5.5 0 0 0 .5-.5z"/>`, 'duotone': `<path fill="currentColor" d="M16 13H4V7h12zm6 0v6h-6v6h12V13z" opacity=".08"/><path fill="currentColor" d="M28 6H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1M11 18v-4h10v4zm-6 0v-4h4v4zm18-4h4v4h-4zm4-2H17V8h10zM15 8v4H5V8zM5 20h10v4H5zm12 4v-4h10v4z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
