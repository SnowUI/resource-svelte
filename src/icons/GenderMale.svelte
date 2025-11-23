<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 4h-6a1 1 0 1 0 0 2h3.586l-5.259 5.259a10 10 0 1 0 1.414 1.413L26 7.416V11a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1m-8.345 20.661a8 8 0 1 1 0-11.316 8.013 8.013 0 0 1 0 11.316"/>`, 'thin': `<path fill="currentColor" d="M27 4.5h-6a.5.5 0 0 0 0 1h4.794l-6.442 6.44a9.5 9.5 0 1 0 .708.708l6.44-6.44V11a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5m-7.991 20.514a8.5 8.5 0 1 1 0-12.023 8.51 8.51 0 0 1 0 12.023"/>`, 'light': `<path fill="currentColor" d="M27 4.25h-6a.75.75 0 1 0 0 1.5h4.19l-5.85 5.849a9.75 9.75 0 1 0 .552 14.3 9.764 9.764 0 0 0 .51-13.239l5.848-5.849V11a.75.75 0 1 0 1.5 0V5a.75.75 0 0 0-.75-.75m-8.168 20.588a8.25 8.25 0 1 1 0-11.67 8.26 8.26 0 0 1 0 11.67"/>`, 'bold': `<path fill="currentColor" d="M27 3.5h-6a1.5 1.5 0 0 0 0 3h2.375l-4.09 4.092a10.5 10.5 0 1 0 2.125 2.125l4.09-4.092V11a1.5 1.5 0 0 0 3 0V5A1.5 1.5 0 0 0 27 3.5m-8.698 20.808a7.5 7.5 0 1 1 0-10.61 7.513 7.513 0 0 1 0 10.61"/>`, 'fill': `<path fill="currentColor" d="M19 17.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M27 5v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2m-3 4a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h1.586l-2.25 2.25a6.51 6.51 0 1 0 1.414 1.419l2.25-2.25V13a1 1 0 0 0 2 0z"/>`, 'duotone': `<path fill="currentColor" d="M19.364 25.364A9 9 0 1 1 6.635 12.636a9 9 0 0 1 12.729 12.728" opacity=".08"/><path fill="currentColor" d="M27 4h-6a1 1 0 1 0 0 2h3.586l-5.259 5.259a10 10 0 1 0 1.414 1.413L26 7.416V11a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1m-8.345 20.661a8 8 0 1 1 0-11.316 8.013 8.013 0 0 1 0 11.316"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
