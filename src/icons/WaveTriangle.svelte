<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m29.81 16.585-6.5 9a1 1 0 0 1-1.625 0L9.5 8.708l-5.689 7.875a1 1 0 1 1-1.625-1.17l6.5-9a1 1 0 0 1 1.625 0L22.5 23.288l5.689-7.875a1.003 1.003 0 0 1 1.664.058 1 1 0 0 1-.04 1.112z"/>`, 'thin': `<path fill="currentColor" d="m29.405 16.292-6.5 9a.5.5 0 0 1-.81 0L9.5 7.854l-6.095 8.438a.5.5 0 1 1-.81-.585l6.5-9a.5.5 0 0 1 .81 0L22.5 24.146l6.095-8.439a.5.5 0 0 1 .81.585"/>`, 'light': `<path fill="currentColor" d="m29.608 16.439-6.5 9a.75.75 0 0 1-1.216 0L9.5 8.28 3.608 16.44a.75.75 0 1 1-1.215-.875l6.5-9a.75.75 0 0 1 1.214 0L22.5 23.719l5.892-8.158a.75.75 0 0 1 1.216.875z"/>`, 'bold': `<path fill="currentColor" d="m30.216 16.875-6.5 9a1.502 1.502 0 0 1-2.432 0L9.5 9.563l-5.284 7.312a1.5 1.5 0 1 1-2.432-1.75l6.5-9a1.5 1.5 0 0 1 2.432 0L22.5 22.438l5.284-7.313a1.5 1.5 0 1 1 2.432 1.75"/>`, 'fill': `<path fill="currentColor" d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-1.231 11.64-5 6A1 1 0 0 1 20 23h-.054a1 1 0 0 1-.779-.444l-7.25-10.886-4.148 4.97a1 1 0 1 1-1.538-1.28l5-6a1 1 0 0 1 1.601.085l7.257 10.886 4.142-4.971a.999.999 0 0 1 1.765.549 1 1 0 0 1-.227.731"/>`, 'duotone': `<path fill="currentColor" d="m9.5 7 6.5 9H3zM29 16H16l6.5 9z" opacity=".08"/><path fill="currentColor" d="m29.81 16.585-6.5 9a1 1 0 0 1-1.625 0L9.5 8.708l-5.689 7.875a1 1 0 1 1-1.625-1.17l6.5-9a1 1 0 0 1 1.625 0L22.5 23.288l5.689-7.875a1.003 1.003 0 0 1 1.664.058 1 1 0 0 1-.04 1.112z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
