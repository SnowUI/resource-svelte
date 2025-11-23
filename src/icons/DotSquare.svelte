<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" fillRule="evenodd" d="M14.133 11.8a2.333 2.333 0 0 0-2.333 2.333v3.734a2.333 2.333 0 0 0 2.333 2.333h3.734a2.333 2.333 0 0 0 2.333-2.333v-3.734a2.333 2.333 0 0 0-2.333-2.333zM9 14.133A5.133 5.133 0 0 1 14.133 9h3.734A5.133 5.133 0 0 1 23 14.133v3.734A5.133 5.133 0 0 1 17.867 23h-3.734A5.133 5.133 0 0 1 9 17.867z" clipRule="evenodd"/>`, 'fill': `<path fill="currentColor" d="M10 14a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
