<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 6H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M5 8h22v7h-9a2 2 0 0 0-2 2v7H5zm22 16h-9v-7h9z"/>`, 'thin': `<path fill="currentColor" d="M27 6.5H5A1.5 1.5 0 0 0 3.5 8v16A1.5 1.5 0 0 0 5 25.5h22a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 27 6.5M4.5 24V8a.5.5 0 0 1 .5-.5h22a.5.5 0 0 1 .5.5v7.5H18a1.5 1.5 0 0 0-1.5 1.5v7.5H5a.5.5 0 0 1-.5-.5m22.5.5h-9.5V17a.5.5 0 0 1 .5-.5h9.5V24a.5.5 0 0 1-.5.5"/>`, 'light': `<path fill="currentColor" d="M27 6.25H5A1.75 1.75 0 0 0 3.25 8v16A1.75 1.75 0 0 0 5 25.75h22A1.75 1.75 0 0 0 28.75 24V8A1.75 1.75 0 0 0 27 6.25M4.75 24V8A.25.25 0 0 1 5 7.75h22a.25.25 0 0 1 .25.25v7.25H18A1.75 1.75 0 0 0 16.25 17v7.25H5a.25.25 0 0 1-.25-.25m22.25.25h-9.25V17a.25.25 0 0 1 .25-.25h9.25V24a.25.25 0 0 1-.25.25"/>`, 'bold': `<path fill="currentColor" d="M27 5.5H5A2.5 2.5 0 0 0 2.5 8v16A2.5 2.5 0 0 0 5 26.5h22a2.5 2.5 0 0 0 2.5-2.5V8A2.5 2.5 0 0 0 27 5.5m-21.5 3h21v6H18a2.5 2.5 0 0 0-2.5 2.5v6.5h-10zm13 15v-6h8v6z"/>`, 'fill': `<path fill="currentColor" d="M27 6H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M5 8h22v7h-9a2 2 0 0 0-2 2v7H5z"/>`, 'duotone': `<path fill="currentColor" d="M28 8v8H18a1 1 0 0 0-1 1v8H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1" opacity=".08"/><path fill="currentColor" d="M27 6H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M5 8h22v7h-9a2 2 0 0 0-2 2v7H5zm22 16h-9v-7h9z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
