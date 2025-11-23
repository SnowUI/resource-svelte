<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" fillRule="evenodd" d="M26.523 5.402a1 1 0 0 1 1 1v4.904a1 1 0 1 1-2 0v-2.49l-6.442 6.442a1 1 0 0 1-1.414-1.414l6.442-6.442h-2.49a1 1 0 0 1 0-2z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m4.879 13.98 9.687-9.687a1 1 0 0 1 1.414 1.414l-9.687 9.687a1 1 0 0 0 0 1.414l9.402 9.402a1 1 0 0 0 1.414 0l9.687-9.687a1 1 0 0 1 1.414 1.414l-9.687 9.688a3 3 0 0 1-4.242 0l-9.402-9.402a3 3 0 0 1 0-4.243" clipRule="evenodd"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
