<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m0 2v5H5V7zM5 14h7v11H5zm22 11H14V14h13z"/>`, 'thin': `<path fill="currentColor" d="M27 5.5H5A1.5 1.5 0 0 0 3.5 7v18A1.5 1.5 0 0 0 5 26.5h22a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 27 5.5m-22 1h22a.5.5 0 0 1 .5.5v5.5h-23V7a.5.5 0 0 1 .5-.5M4.5 25V13.5h8v12H5a.5.5 0 0 1-.5-.5m22.5.5H13.5v-12h14V25a.5.5 0 0 1-.5.5"/>`, 'light': `<path fill="currentColor" d="M27 5.25H5A1.75 1.75 0 0 0 3.25 7v18A1.75 1.75 0 0 0 5 26.75h22A1.75 1.75 0 0 0 28.75 25V7A1.75 1.75 0 0 0 27 5.25M5 6.75h22a.25.25 0 0 1 .25.25v5.25H4.75V7A.25.25 0 0 1 5 6.75M4.75 25V13.75h7.5v11.5H5a.25.25 0 0 1-.25-.25m22.25.25H13.75v-11.5h13.5V25a.25.25 0 0 1-.25.25"/>`, 'bold': `<path fill="currentColor" d="M27 4.5H5A2.5 2.5 0 0 0 2.5 7v18A2.5 2.5 0 0 0 5 27.5h22a2.5 2.5 0 0 0 2.5-2.5V7A2.5 2.5 0 0 0 27 4.5m-.5 3v4h-21v-4zm-21 7h6v10h-6zm9 10v-10h12v10z"/>`, 'fill': `<path fill="currentColor" d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M5 7h22v5H5zm22 18H14V14h13z"/>`, 'duotone': `<path fill="currentColor" d="M13 13v13H5a1 1 0 0 1-1-1V13z" opacity=".08"/><path fill="currentColor" d="M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m0 2v5H5V7zM5 14h7v11H5zm22 11H14V14h13z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
