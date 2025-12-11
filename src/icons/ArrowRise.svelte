<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" fill-rule="evenodd" d="M16.91 11.216 28 8l-2.76 11.212-3.444-3.306-5.555 5.786a1 1 0 0 1-1.442 0l-4.079-4.248-5.999 6.249a1 1 0 1 1-1.442-1.386l6.72-7a1 1 0 0 1 1.442 0l4.079 4.249 4.833-5.035z" clip-rule="evenodd"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
