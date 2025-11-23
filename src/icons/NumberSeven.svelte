<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m21.958 6.288-6 20a1 1 0 0 1-1.915-.576L19.656 7H11a1 1 0 1 1 0-2h10a1 1 0 0 1 .957 1.287"/>`, 'thin': `<path fill="currentColor" d="m21.479 6.144-6 20a.5.5 0 1 1-.958-.29L20.328 6.5H11a.5.5 0 0 1 0-1h10a.5.5 0 0 1 .479.644"/>`, 'light': `<path fill="currentColor" d="m21.719 6.215-6 20a.75.75 0 0 1-1.438-.431L19.992 6.75H11a.75.75 0 1 1 0-1.5h10a.75.75 0 0 1 .719.965"/>`, 'bold': `<path fill="currentColor" d="m22.436 6.431-6 20a1.5 1.5 0 0 1-1.867 1.005 1.5 1.5 0 0 1-1-1.867L18.984 7.5H11a1.5 1.5 0 1 1 0-3h10a1.5 1.5 0 0 1 1.436 1.931"/>`, 'fill': `<path fill="currentColor" d="M25 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-4.059 6.336-5 14a1 1 0 0 1-1.288.635 1 1 0 0 1-.594-1.307L18.58 10H12a1 1 0 1 1 0-2h8a1 1 0 0 1 .941 1.336"/>`, 'duotone': `<path fill="currentColor" d="M27 5v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2" opacity=".08"/><path fill="currentColor" d="m21.958 6.288-6 20a1 1 0 0 1-1.915-.576L19.656 7H11a1 1 0 1 1 0-2h10a1 1 0 0 1 .957 1.287"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
