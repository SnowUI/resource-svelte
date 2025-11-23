<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M3 16a5 5 0 0 0 5 5h5a1 1 0 0 1 0 2H8A7 7 0 1 1 8 9h5a1 1 0 1 1 0 2H8a5 5 0 0 0-5 5m21-7h-5a1 1 0 1 0 0 2h5a5 5 0 1 1 0 10h-5a1 1 0 0 0 0 2h5a7 7 0 1 0 0-14"/>`, 'thin': `<path fill="currentColor" d="M2.5 16A5.506 5.506 0 0 0 8 21.5h5a.5.5 0 0 1 0 1H8a6.5 6.5 0 1 1 0-13h5a.5.5 0 0 1 0 1H8A5.506 5.506 0 0 0 2.5 16M24 9.5h-5a.5.5 0 0 0 0 1h5a5.5 5.5 0 0 1 0 11h-5a.5.5 0 0 0 0 1h5a6.5 6.5 0 1 0 0-13"/>`, 'light': `<path fill="currentColor" d="M2.75 16A5.25 5.25 0 0 0 8 21.25h5a.75.75 0 1 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h5a.75.75 0 1 1 0 1.5H8A5.25 5.25 0 0 0 2.75 16M24 9.25h-5a.75.75 0 1 0 0 1.5h5a5.25 5.25 0 1 1 0 10.5h-5a.75.75 0 1 0 0 1.5h5a6.75 6.75 0 0 0 0-13.5"/>`, 'bold': `<path fill="currentColor" d="M3.5 16A4.5 4.5 0 0 0 8 20.5h5a1.5 1.5 0 1 1 0 3H8a7.5 7.5 0 0 1 0-15h5a1.5 1.5 0 0 1 0 3H8A4.5 4.5 0 0 0 3.5 16M24 8.5h-5a1.5 1.5 0 0 0 0 3h5a4.5 4.5 0 1 1 0 9h-5a1.5 1.5 0 1 0 0 3h5a7.5 7.5 0 0 0 0-15"/>`, 'fill': `<path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M14 21h-4a5 5 0 0 1 0-10h4a1 1 0 0 1 0 2h-4a3 3 0 0 0 0 6h4a1 1 0 0 1 0 2m8 0h-4a1 1 0 0 1 0-2h4a3 3 0 0 0 0-6h-4a1 1 0 0 1 0-2h4a5 5 0 1 1 0 10"/>`, 'duotone': `<path fill="currentColor" d="M30 16a6 6 0 0 1-6 6H8a6 6 0 1 1 0-12h16a6 6 0 0 1 6 6" opacity=".08"/><path fill="currentColor" d="M3 16a5 5 0 0 0 5 5h5a1 1 0 0 1 0 2H8A7 7 0 1 1 8 9h5a1 1 0 1 1 0 2H8a5 5 0 0 0-5 5m21-7h-5a1 1 0 1 0 0 2h5a5 5 0 1 1 0 10h-5a1 1 0 0 0 0 2h5a7 7 0 1 0 0-14"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
