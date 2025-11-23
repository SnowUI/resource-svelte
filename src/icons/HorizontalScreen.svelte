<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" fillRule="evenodd" d="M27 11H5v11h22zM5 9a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2z" clipRule="evenodd"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
