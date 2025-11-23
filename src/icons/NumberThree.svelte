<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M22 20a7 7 0 0 1-11.666 5.218 1 1 0 1 1 1.332-1.49A5 5 0 1 0 15 15a1 1 0 0 1-.8-1.6L19 7h-8a1 1 0 0 1 0-2h10a1 1 0 0 1 .8 1.6l-4.98 6.64A7.01 7.01 0 0 1 22 20"/>`, 'thin': `<path fill="currentColor" d="M21.5 20a6.5 6.5 0 0 1-10.834 4.845.501.501 0 1 1 .668-.75A5.5 5.5 0 1 0 15 14.5a.5.5 0 0 1-.4-.8L20 6.5h-9a.5.5 0 1 1 0-1h10a.5.5 0 0 1 .4.8l-5.451 7.269A6.51 6.51 0 0 1 21.5 20"/>`, 'light': `<path fill="currentColor" d="M21.75 20a6.75 6.75 0 0 1-11.25 5.031.749.749 0 1 1 1-1.117A5.25 5.25 0 1 0 15 14.75a.75.75 0 0 1-.6-1.2l5.1-6.8H11a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .6 1.2l-5.209 6.944A6.76 6.76 0 0 1 21.751 20"/>`, 'bold': `<path fill="currentColor" d="M22.5 20A7.5 7.5 0 0 1 10 25.59a1.5 1.5 0 1 1 2-2.235 4.5 4.5 0 1 0 3-7.855 1.5 1.5 0 0 1-1.2-2.4L18 7.5h-7a1.5 1.5 0 1 1 0-3h10a1.5 1.5 0 0 1 1.2 2.4l-4.56 6.08A7.51 7.51 0 0 1 22.5 20"/>`, 'fill': `<path fill="currentColor" d="M25 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9.5 21a5.48 5.48 0 0 1-4.277-2.043 1 1 0 0 1 1.554-1.257 3.5 3.5 0 1 0 2.973-5.691.999.999 0 0 1-.697-1.638l2.81-3.375H12a1 1 0 1 1 0-2h8a1 1 0 0 1 .769 1.64l-3.154 3.784A5.5 5.5 0 0 1 15.5 24"/>`, 'duotone': `<path fill="currentColor" d="M27 5v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2" opacity=".08"/><path fill="currentColor" d="M22 20a7 7 0 0 1-11.666 5.218 1 1 0 1 1 1.332-1.49A5 5 0 1 0 15 15a1 1 0 0 1-.8-1.6L19 7h-8a1 1 0 0 1 0-2h10a1 1 0 0 1 .8 1.6l-4.98 6.64A7.01 7.01 0 0 1 22 20"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
