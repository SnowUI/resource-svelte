<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M19.444 14.909a6 6 0 1 0-6.888 0 7 7 0 1 0 6.888 0M12 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4 16a5 5 0 1 1 0-10 5 5 0 0 1 0 10"/>`, 'thin': `<path fill="currentColor" d="M18.385 14.955a5.5 5.5 0 1 0-4.77 0 6.5 6.5 0 1 0 4.77 0M11.5 10a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0M16 26.5a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1-5.5 5.5"/>`, 'light': `<path fill="currentColor" d="M18.953 14.931a5.75 5.75 0 1 0-5.905 0 6.75 6.75 0 1 0 5.905 0M11.75 10a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M16 26.25a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5"/>`, 'bold': `<path fill="currentColor" d="M20.305 14.864a6.5 6.5 0 1 0-8.61 0 7.5 7.5 0 1 0 8.61 0M12.5 10a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M16 25.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9"/>`, 'fill': `<path fill="currentColor" d="M13.5 11.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M16 16a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M27 5v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2m-5.5 14.5a5.5 5.5 0 0 0-2.529-4.625 4.5 4.5 0 1 0-5.942 0A5.5 5.5 0 1 0 21.5 19.5"/>`, 'duotone': `<path fill="currentColor" d="M27 5v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2" opacity=".08"/><path fill="currentColor" d="M19.444 14.909a6 6 0 1 0-6.888 0 7 7 0 1 0 6.888 0M12 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4 16a5 5 0 1 1 0-10 5 5 0 0 1 0 10"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
