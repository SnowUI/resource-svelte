<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M21.432 26.78 29 22.41a2 2 0 0 0 1-1.731v-9.317a2 2 0 0 0-1-1.733l-7.57-4.37a1 1 0 0 0-1 1.733l6.57 3.792a2 2 0 0 1 1 1.732v7.008a2 2 0 0 1-1 1.732l-6.57 3.793a1 1 0 0 0 1 1.732M11.5 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/><path fill="currentColor" fillRule="evenodd" d="M12.5 5.577a2 2 0 0 0-2 0l-7.96 4.596a2 2 0 0 0-1 1.732v9.19a2 2 0 0 0 1 1.732l7.96 4.596a2 2 0 0 0 2 0l7.96-4.596a2 2 0 0 0 1-1.732v-9.19a2 2 0 0 0-1-1.732zm6.96 6.328L11.5 7.309l-7.96 4.596v9.19l7.96 4.596 7.96-4.596z" clipRule="evenodd"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
