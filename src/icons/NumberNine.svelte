<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M16 5a7 7 0 1 0 1.952 13.721l-3.827 6.788a1.004 1.004 0 0 0 1.75.981l6.194-11A7 7 0 0 0 15.999 5m0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10"/>`, 'thin': `<path fill="currentColor" d="M16 5.5a6.5 6.5 0 1 0 3.092 12.216l-4.528 8.034a.501.501 0 1 0 .875.49l6.186-10.99A6.5 6.5 0 0 0 16 5.5m0 12a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1-5.5 5.5"/>`, 'light': `<path fill="currentColor" d="M16 5.25a6.75 6.75 0 1 0 2.492 13.021l-4.146 7.36a.75.75 0 1 0 1.308.736l6.192-11A6.75 6.75 0 0 0 16 5.25m0 12a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5"/>`, 'bold': `<path fill="currentColor" d="M23.5 12a7.5 7.5 0 1 0-6.524 7.434l-3.283 5.83a1.5 1.5 0 1 0 2.615 1.472l6.192-11a7.45 7.45 0 0 0 1-3.736m-12 0a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"/>`, 'fill': `<path fill="currentColor" d="M25 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-4.212 13.203-4.21 7.297a1 1 0 0 1-1.733-1l2.065-3.576q-.451.075-.91.076a5.506 5.506 0 1 1 4.788-2.797M19.5 13.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>`, 'duotone': `<path fill="currentColor" d="M27 5v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2" opacity=".08"/><path fill="currentColor" d="M16 5a7 7 0 1 0 1.952 13.721l-3.827 6.788a1.004 1.004 0 0 0 1.75.981l6.194-11A7 7 0 0 0 15.999 5m0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
