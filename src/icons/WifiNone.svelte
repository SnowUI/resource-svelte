<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M17.5 25.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`, 'thin': `<path fill="currentColor" d="M17 25.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`, 'light': `<path fill="currentColor" d="M17.25 25.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"/>`, 'bold': `<path fill="currentColor" d="M18 25.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`, 'fill': `<path fill="currentColor" d="M30.986 10.114a2 2 0 0 0-.771-1.351A23.33 23.33 0 0 0 16 4 23.33 23.33 0 0 0 1.785 8.763a1.99 1.99 0 0 0-.704 2.14c.076.255.204.493.375.697l13 15.679A1.99 1.99 0 0 0 16 28a2 2 0 0 0 1.539-.721l13-15.679a1.96 1.96 0 0 0 .447-1.486M16 26 3.01 10.343A21.35 21.35 0 0 1 16 6a21.35 21.35 0 0 1 12.989 4.343z"/>`, 'duotone': `<path fill="currentColor" d="M30.986 10.114a2 2 0 0 0-.771-1.351A23.33 23.33 0 0 0 16 4 23.33 23.33 0 0 0 1.785 8.763a1.99 1.99 0 0 0-.704 2.14c.076.255.204.493.375.697l13 15.679A1.99 1.99 0 0 0 16 28a2 2 0 0 0 1.539-.721l13-15.679a1.96 1.96 0 0 0 .447-1.486M16 26 3.01 10.343A21.35 21.35 0 0 1 16 6a21.35 21.35 0 0 1 12.989 4.343z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
