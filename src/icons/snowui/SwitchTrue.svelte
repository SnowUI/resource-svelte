<script lang="ts">
  import IconBase from '../../lib/IconBase.svelte';
  import type { IconProps } from '../../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" fill-rule="evenodd" d="M2 16a8 8 0 0 1 8-8h12a8 8 0 1 1 0 16H10a8 8 0 0 1-8-8m26 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0" clip-rule="evenodd"/>` } as const;
  const meta = { collection: 'snowui', usageName: 'switch-true', componentName: 'SwitchTrue' } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase {meta} viewBox={viewBox} weights={weights} {...rest} />
