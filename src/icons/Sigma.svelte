<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M23 9V7H10.081l6.7 8.375a1 1 0 0 1 0 1.25L10.081 25h12.92v-2a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1H8a1 1 0 0 1-.782-1.625l7.5-9.375-7.5-9.375A1 1 0 0 1 8 5h16a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0"/>`, 'thin': `<path fill="currentColor" d="M23.5 9V6.5H9.04l7.35 9.188a.5.5 0 0 1 0 .624L9.04 25.5H23.5V23a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.39-.812L15.36 16 7.61 6.313A.5.5 0 0 1 8 5.5h16a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0"/>`, 'light': `<path fill="currentColor" d="M23.25 9V6.75H9.56l7.026 8.781a.75.75 0 0 1 0 .938L9.56 25.25h13.69V23a.75.75 0 1 1 1.5 0v3a.75.75 0 0 1-.75.75H8a.751.751 0 0 1-.586-1.219L15.039 16 7.414 6.469A.75.75 0 0 1 8 5.25h16a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0"/>`, 'bold': `<path fill="currentColor" d="M22.5 9V7.5H11.125l6.05 7.563a1.5 1.5 0 0 1 0 1.874l-6.05 7.563H22.5V23a1.5 1.5 0 0 1 3 0v3a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 0 1-1.171-2.437L14.079 16l-7.25-9.062A1.5 1.5 0 0 1 7.999 4.5h16A1.5 1.5 0 0 1 25.5 6v3a1.5 1.5 0 1 1-3 0"/>`, 'fill': `<path fill="currentColor" d="M25 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-2 8a1 1 0 0 1-2 0V9h-9l4.8 6.4a1 1 0 0 1 0 1.2L12 23h9v-2a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1H10a1 1 0 0 1-.8-1.6l5.55-7.4L9.2 8.6A1 1 0 0 1 10 7h12a1 1 0 0 1 1 1z"/>`, 'duotone': `<path fill="currentColor" d="M24 6v20H8l8-10L8 6z" opacity=".08"/><path fill="currentColor" d="M23 9V7H10.081l6.7 8.375a1 1 0 0 1 0 1.25L10.081 25h12.92v-2a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1H8a1 1 0 0 1-.782-1.625l7.5-9.375-7.5-9.375A1 1 0 0 1 8 5h16a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
