<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" fillRule="evenodd" d="M28.693 7.279a1 1 0 0 1 .028 1.414l-6.72 7a1 1 0 0 1-1.442 0l-4.079-4.249-4.833 5.035 3.443 3.306L4 23l2.76-11.212 3.444 3.306 5.555-5.787a1 1 0 0 1 1.442 0l4.079 4.249 5.999-6.249a1 1 0 0 1 1.413-.028" clipRule="evenodd"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
