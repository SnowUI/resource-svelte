<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" fillRule="evenodd" d="M21.5 27.5v-22h-11v22zm2-22a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2z" clipRule="evenodd"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
