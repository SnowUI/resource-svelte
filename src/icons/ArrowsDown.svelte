<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M12.707 21.293 15 23.586V6a1 1 0 1 1 2 0v17.586l2.293-2.293a1 1 0 1 1 1.414 1.415l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.415"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
