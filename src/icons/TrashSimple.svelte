<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 6H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2m-3 20H8V8h16zM10 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1"/>`, 'thin': `<path fill="currentColor" d="M27 6.5H5a.5.5 0 1 0 0 1h1.5V26A1.5 1.5 0 0 0 8 27.5h16a1.5 1.5 0 0 0 1.5-1.5V7.5H27a.5.5 0 0 0 0-1M24.5 26a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V7.5h17zm-14-23a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5"/>`, 'light': `<path fill="currentColor" d="M27 6.25H5a.75.75 0 0 0 0 1.5h1.25V26A1.75 1.75 0 0 0 8 27.75h16A1.75 1.75 0 0 0 25.75 26V7.75H27a.75.75 0 1 0 0-1.5M24.25 26a.25.25 0 0 1-.25.25H8a.25.25 0 0 1-.25-.25V7.75h16.5zm-14-23a.75.75 0 0 1 .75-.75h10a.75.75 0 1 1 0 1.5H11a.75.75 0 0 1-.75-.75"/>`, 'bold': `<path fill="currentColor" d="M27 6H5a1.5 1.5 0 0 0 0 3h.5v17A2.5 2.5 0 0 0 8 28.5h16a2.5 2.5 0 0 0 2.5-2.5V9h.5a1.5 1.5 0 0 0 0-3m-3.5 19.5h-15V9h15zm-14-23A1.5 1.5 0 0 1 11 1h10a1.5 1.5 0 0 1 0 3H11a1.5 1.5 0 0 1-1.5-1.5"/>`, 'fill': `<path fill="currentColor" d="M28 7a1 1 0 0 1-1 1h-1v18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1M11 4h10a1 1 0 1 0 0-2H11a1 1 0 1 0 0 2"/>`, 'duotone': `<path fill="currentColor" d="M25 7v19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7z" opacity=".08"/><path fill="currentColor" d="M27 6H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2m-3 20H8V8h16zM10 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
