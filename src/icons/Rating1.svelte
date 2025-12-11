<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m29.313 14.298-5.638 4.92 1.689 7.325a2 2 0 0 1-2.98 2.167l-6.389-3.875L9.62 28.71a2 2 0 0 1-2.98-2.167l1.686-7.318-5.639-4.927a2 2 0 0 1 1.14-3.508l7.432-.643 2.901-6.92a1.994 1.994 0 0 1 3.68 0l2.91 6.92 7.43.643a2 2 0 0 1 1.139 3.508z"/><path fill="#fff" d="M17.05 12.273V21h-1.056v-7.193h-.069q-.06.12-.306.273-.247.15-.64.264a3.3 3.3 0 0 1-.894.11v-.886q.507 0 .877-.183.372-.183.618-.43.252-.247.38-.448l.153-.234z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
