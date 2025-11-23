<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25 21a4.01 4.01 0 0 0-3.875 3H9a4 4 0 1 1 0-8h12a5 5 0 1 0 0-10H9a1 1 0 0 0 0 2h12a3 3 0 0 1 0 6H9a6 6 0 1 0 0 12h12.125A4 4 0 1 0 25 21m0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/>`, 'thin': `<path fill="currentColor" d="M25 21.5a3.5 3.5 0 0 0-3.464 3H9a4.5 4.5 0 1 1 0-9h12a4.5 4.5 0 1 0 0-9H9a.5.5 0 1 0 0 1h12a3.5 3.5 0 1 1 0 7H9a5.5 5.5 0 0 0 0 11h12.536a3.5 3.5 0 1 0 3.464-4m0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"/>`, 'light': `<path fill="currentColor" d="M25 21.25a3.756 3.756 0 0 0-3.675 3H9a4.25 4.25 0 0 1 0-8.5h12a4.75 4.75 0 1 0 0-9.5H9a.75.75 0 0 0 0 1.5h12a3.25 3.25 0 1 1 0 6.5H9a5.75 5.75 0 0 0 0 11.5h12.325A3.75 3.75 0 1 0 25 21.25m0 6a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5"/>`, 'bold': `<path fill="currentColor" d="M25 20.5a4.51 4.51 0 0 0-4.242 3H9a3.5 3.5 0 1 1 0-7h12a5.5 5.5 0 0 0 0-11H9a1.5 1.5 0 0 0 0 3h12a2.5 2.5 0 0 1 0 5H9a6.5 6.5 0 1 0 0 13h11.758a4.5 4.5 0 1 0 4.242-6m0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>`, 'fill': `<path fill="currentColor" d="M25 21a4.01 4.01 0 0 0-3.875 3H9a4 4 0 1 1 0-8h12a5 5 0 1 0 0-10H9a1 1 0 0 0 0 2h12a3 3 0 0 1 0 6H9a6 6 0 1 0 0 12h12.125A4 4 0 1 0 25 21"/>`, 'duotone': `<path fill="currentColor" d="M28 25a3 3 0 1 1-5.999 0A3 3 0 0 1 28 25" opacity=".08"/><path fill="currentColor" d="M25 21a4.01 4.01 0 0 0-3.875 3H9a4 4 0 1 1 0-8h12a5 5 0 1 0 0-10H9a1 1 0 0 0 0 2h12a3 3 0 0 1 0 6H9a6 6 0 1 0 0 12h12.125A4 4 0 1 0 25 21m0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
