<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" fillRule="evenodd" d="m6.116 21.532 9-17a1 1 0 0 1 1.768 0l9 17a1 1 0 0 1 .116.459V22a1 1 0 0 1-.99 1H25a1 1 0 0 1-.884-.533L21.751 18H10.249l-2.365 4.468a1 1 0 0 1-.881.532H7a1 1 0 0 1-1-.995V22a1 1 0 0 1 .116-.468M20.692 16 16 7.137 11.308 16zM5 26a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2z" clipRule="evenodd"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
