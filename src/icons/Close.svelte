<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M10.343 8.929a1 1 0 0 0-1.414 1.414L14.586 16l-5.657 5.657a1 1 0 1 0 1.414 1.414L16 17.414l5.657 5.657a1 1 0 0 0 1.414-1.414L17.414 16l5.657-5.657a1 1 0 0 0-1.414-1.414L16 14.585z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
