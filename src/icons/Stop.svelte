<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25.091 5H6.91A1.91 1.91 0 0 0 5 6.909V25.09A1.91 1.91 0 0 0 6.909 27H25.09A1.91 1.91 0 0 0 27 25.091V6.91A1.91 1.91 0 0 0 25.091 5M25 25H7V7h18z"/>`, 'thin': `<path fill="currentColor" d="M25.091 5.5H6.91A1.41 1.41 0 0 0 5.5 6.909V25.09A1.41 1.41 0 0 0 6.909 26.5H25.09a1.41 1.41 0 0 0 1.409-1.409V6.91A1.41 1.41 0 0 0 25.091 5.5m.409 19.591a.41.41 0 0 1-.409.409H6.91a.41.41 0 0 1-.409-.409V6.91a.41.41 0 0 1 .409-.409H25.09a.41.41 0 0 1 .409.409z"/>`, 'light': `<path fill="currentColor" d="M25.091 5.25H6.91A1.66 1.66 0 0 0 5.25 6.909V25.09a1.66 1.66 0 0 0 1.659 1.659H25.09a1.66 1.66 0 0 0 1.659-1.659V6.91a1.66 1.66 0 0 0-1.659-1.659m.159 19.841a.16.16 0 0 1-.159.159H6.91a.16.16 0 0 1-.159-.159V6.91a.16.16 0 0 1 .159-.159H25.09a.16.16 0 0 1 .159.159z"/>`, 'bold': `<path fill="currentColor" d="M25.091 4.5H6.91A2.413 2.413 0 0 0 4.5 6.909V25.09A2.41 2.41 0 0 0 6.909 27.5H25.09a2.413 2.413 0 0 0 2.409-2.409V6.91A2.413 2.413 0 0 0 25.091 4.5m-.591 20h-17v-17h17z"/>`, 'fill': `<path fill="currentColor" d="M27 6.909V25.09A1.91 1.91 0 0 1 25.091 27H6.91A1.91 1.91 0 0 1 5 25.091V6.91A1.91 1.91 0 0 1 6.909 5H25.09A1.91 1.91 0 0 1 27 6.909"/>`, 'duotone': `<path fill="currentColor" d="M26 6.909V25.09a.91.91 0 0 1-.909.909H6.91A.91.91 0 0 1 6 25.091V6.91A.91.91 0 0 1 6.909 6H25.09a.91.91 0 0 1 .909.909" opacity=".08"/><path fill="currentColor" d="M25.091 5H6.91A1.91 1.91 0 0 0 5 6.909V25.09A1.91 1.91 0 0 0 6.909 27H25.09A1.91 1.91 0 0 0 27 25.091V6.91A1.91 1.91 0 0 0 25.091 5M25 25H7V7h18z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
