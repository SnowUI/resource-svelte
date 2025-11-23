<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m29.524 16.851-13 8A.999.999 0 0 1 15 24V9.79L3.524 16.85a1 1 0 0 1-1.048-1.702l13-8a1 1 0 0 1 1.524.85v14.21l11.476-7.06a1 1 0 0 1 1.048 1.702"/>`, 'thin': `<path fill="currentColor" d="m29.263 16.427-13 8A.5.5 0 0 1 15.5 24V8.895L3.262 16.427a.5.5 0 0 1-.525-.853l13-8A.5.5 0 0 1 16.5 8v15.105l12.238-7.531a.5.5 0 1 1 .524.853"/>`, 'light': `<path fill="currentColor" d="m29.393 16.639-13 8A.75.75 0 0 1 15.25 24V9.343L3.394 16.639a.75.75 0 1 1-.786-1.278l13-8a.75.75 0 0 1 1.142.64v14.657l11.856-7.297a.75.75 0 0 1 .786 1.278"/>`, 'bold': `<path fill="currentColor" d="m29.786 17.278-13 8A1.5 1.5 0 0 1 14.5 24V10.684L3.786 17.278a1.5 1.5 0 0 1-1.572-2.555l13-8A1.5 1.5 0 0 1 17.5 8v13.316l10.714-6.593a1.499 1.499 0 1 1 1.572 2.555"/>`, 'fill': `<path fill="currentColor" d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-1.445 11.833-9 6A1 1 0 0 1 15 22V11.875l-7.445 4.958a1 1 0 0 1-1.11-1.665l9-6A1 1 0 0 1 17 10v10.131l7.445-4.963a1 1 0 1 1 1.11 1.665"/>`, 'duotone': `<path fill="currentColor" d="M16 8v8H3zm13 8H16v8z" opacity=".08"/><path fill="currentColor" d="m29.524 16.851-13 8A.999.999 0 0 1 15 24V9.79L3.524 16.85a1 1 0 0 1-1.048-1.702l13-8a1 1 0 0 1 1.524.85v14.21l11.476-7.06a1 1 0 0 1 1.048 1.702"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
