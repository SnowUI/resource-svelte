<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m26.288 7.042-10-3A1 1 0 0 0 15 5v13.532A6 6 0 1 0 17 23V6.344l8.712 2.613a1 1 0 1 0 .576-1.915M11 27a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>`, 'thin': `<path fill="currentColor" d="m26.144 7.521-10-3a.5.5 0 0 0-.644.48v14.843a5.5 5.5 0 1 0 1 3.156V5.673l9.356 2.806a.5.5 0 0 0 .288-.958M11 27.501a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9"/>`, 'light': `<path fill="currentColor" d="m26.215 7.281-10-3A.75.75 0 0 0 15.25 5v14.131A5.75 5.75 0 1 0 16.75 23V6.007l9.034 2.712a.75.75 0 0 0 .431-1.438M11 27.25a4.25 4.25 0 1 1 0-8.5 4.25 4.25 0 0 1 0 8.5"/>`, 'bold': `<path fill="currentColor" d="m26.431 6.564-10-3A1.5 1.5 0 0 0 14.5 5v12.528a6.5 6.5 0 1 0 3 5.472V7.016l8.069 2.42a1.5 1.5 0 1 0 .862-2.875zM11 26.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7"/>`, 'fill': `<path fill="currentColor" d="m26.288 7.042-10-3A1 1 0 0 0 15 5v13.532A6 6 0 1 0 17 23V6.344l8.712 2.613a1 1 0 1 0 .576-1.915"/>`, 'duotone': `<path fill="currentColor" d="M16 23a5 5 0 1 1-10 0 5 5 0 0 1 10 0" opacity=".08"/><path fill="currentColor" d="m26.288 7.042-10-3A1 1 0 0 0 15 5v13.532A6 6 0 1 0 17 23V6.344l8.712 2.613a1 1 0 1 0 .576-1.915M11 27a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
