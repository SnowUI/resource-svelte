<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M30 11v8a1 1 0 0 1-1 1h-8a1 1 0 0 1 0-2h5.575l-2.795-2.776A11 11 0 0 0 5 23a1 1 0 1 1-2 0 13 13 0 0 1 22.193-9.192L28 16.595V11a1 1 0 0 1 2 0"/>`, 'thin': `<path fill="currentColor" d="M29.5 11v8a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h6.788l-3.655-3.625A11.5 11.5 0 0 0 4.5 23a.5.5 0 0 1-1 0 12.5 12.5 0 0 1 21.339-8.839L28.5 17.8V11a.5.5 0 0 1 1 0"/>`, 'light': `<path fill="currentColor" d="M29.75 11v8a.75.75 0 0 1-.75.75h-8a.75.75 0 1 1 0-1.5h6.181l-3.225-3.204A11.25 11.25 0 0 0 4.75 23a.75.75 0 1 1-1.5 0 12.75 12.75 0 0 1 21.765-9.015l3.235 3.213V11a.75.75 0 1 1 1.5 0"/>`, 'bold': `<path fill="currentColor" d="M30.5 11v8a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 1 1 0-3h4.363l-1.936-1.921A10.5 10.5 0 0 0 5.5 23a1.5 1.5 0 0 1-3 0 13.5 13.5 0 0 1 23.046-9.546l1.954 1.941V11a1.5 1.5 0 0 1 3 0"/>`, 'fill': `<path fill="currentColor" d="M30 11v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-.707-1.707l3.273-3.273A11 11 0 0 0 5 23a1 1 0 1 1-2 0 13 13 0 0 1 21.983-9.397l3.31-3.31A1 1 0 0 1 30 11"/>`, 'duotone': `<path fill="currentColor" d="M29 11v8h-8z" opacity=".08"/><path fill="currentColor" d="M29.383 10.076a1 1 0 0 0-1.09.216l-3.31 3.312A13 13 0 0 0 3 23a1 1 0 1 0 2 0 11 11 0 0 1 18.566-7.98l-3.273 3.273A1 1 0 0 0 21 20h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-.617-.924M28 18h-4.586L28 13.414z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
