<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V7.414L24.586 26zM7.414 6H26v18.588z"/>`, 'thin': `<path fill="currentColor" d="M26 4.5H6A1.5 1.5 0 0 0 4.5 6v20A1.5 1.5 0 0 0 6 27.5h20a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 26 4.5m.5 1.5v19.793L6.208 5.5H26a.5.5 0 0 1 .5.5m-21 20V6.208L25.793 26.5H6a.5.5 0 0 1-.5-.5"/>`, 'light': `<path fill="currentColor" d="M26 4.25H6A1.75 1.75 0 0 0 4.25 6v20A1.75 1.75 0 0 0 6 27.75h20A1.75 1.75 0 0 0 27.75 26V6A1.75 1.75 0 0 0 26 4.25M26.25 6v19.19L6.811 5.75H26a.25.25 0 0 1 .25.25M5.75 26V6.81l19.439 19.44H6a.25.25 0 0 1-.25-.25"/>`, 'bold': `<path fill="currentColor" d="M26 3.5H6A2.5 2.5 0 0 0 3.5 6v20A2.5 2.5 0 0 0 6 28.5h20a2.5 2.5 0 0 0 2.5-2.5V6A2.5 2.5 0 0 0 26 3.5m-.5 19.875L8.625 6.5H25.5zm-19-14.75L23.375 25.5H6.5z"/>`, 'fill': `<path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-2.586 19.414a1 1 0 0 1-1.414 0L8.586 10A1 1 0 0 1 10 8.586L23.414 22a1 1 0 0 1 0 1.414"/>`, 'duotone': `<path fill="currentColor" d="M27 6v20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M28 6a2 2 0 0 0-2-2H6c-.492 0-.967.183-1.332.513a1 1 0 0 0-.155.155C4.183 5.033 4 5.508 4 6v20a2 2 0 0 0 2 2h20c.492 0 .967-.183 1.332-.512a1 1 0 0 0 .154-.155c.331-.365.514-.84.514-1.333zm-2 18.588L7.414 6H26zM6 7.413 24.586 26H6z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
