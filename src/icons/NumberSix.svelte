<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M16 13a7 7 0 0 0-1.953.279l3.828-6.788a1.003 1.003 0 1 0-1.75-.981l-6.194 11A7 7 0 1 0 16 13m0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10"/>`, 'thin': `<path fill="currentColor" d="M16 13.5a6.46 6.46 0 0 0-3.092.784l4.528-8.034a.501.501 0 1 0-.875-.49l-6.186 10.996A6.5 6.5 0 1 0 16 13.5m0 12a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1-5.5 5.5"/>`, 'light': `<path fill="currentColor" d="M16 13.25c-.854 0-1.7.162-2.492.479l4.146-7.354a.75.75 0 1 0-1.308-.736l-6.192 11A6.75 6.75 0 1 0 16 13.25m0 12a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5"/>`, 'bold': `<path fill="currentColor" d="M16 12.5q-.491 0-.976.066l3.283-5.83a1.502 1.502 0 0 0-2.615-1.472L9.5 16.266A7.5 7.5 0 1 0 16 12.5m0 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9"/>`, 'fill': `<path fill="currentColor" d="M25 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 21a5.5 5.5 0 0 1-4.787-8.202l4.21-7.298a1 1 0 0 1 1.732 1l-2.065 3.576q.451-.075.91-.076a5.5 5.5 0 0 1 0 11m3.5-5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>`, 'duotone': `<path fill="currentColor" d="M27 5v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2" opacity=".08"/><path fill="currentColor" d="M16 13a7 7 0 0 0-1.953.279l3.828-6.788a1.003 1.003 0 1 0-1.75-.981l-6.194 11A7 7 0 1 0 16 13m0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
