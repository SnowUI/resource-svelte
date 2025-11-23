<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 27a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1m-18-5a1 1 0 0 0 .707-.293L23 9.415V19a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1H12a1 1 0 1 0 0 2h9.586L9.293 20.293A1 1 0 0 0 10 22"/>`, 'thin': `<path fill="currentColor" d="M27.5 27a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h22a.5.5 0 0 1 .5.5M10 21.5a.5.5 0 0 0 .354-.146L23.5 8.208V19a.5.5 0 0 0 1 0V7a.5.5 0 0 0-.5-.5H12a.5.5 0 0 0 0 1h10.793L9.646 20.646A.5.5 0 0 0 10 21.5"/>`, 'light': `<path fill="currentColor" d="M27.75 27a.75.75 0 0 1-.75.75H5a.75.75 0 1 1 0-1.5h22a.75.75 0 0 1 .75.75M10 21.75a.75.75 0 0 0 .53-.22L23.25 8.811V19a.75.75 0 1 0 1.5 0V7a.75.75 0 0 0-.75-.75H12a.75.75 0 1 0 0 1.5h10.189L9.47 20.47a.75.75 0 0 0 .53 1.28"/>`, 'bold': `<path fill="currentColor" d="M28.5 27a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M10 22.5a1.5 1.5 0 0 0 1.061-.439L22.5 10.625V19a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 24 5.5H12a1.5 1.5 0 0 0 0 3h8.375L8.939 19.939A1.5 1.5 0 0 0 10 22.5"/>`, 'fill': `<path fill="currentColor" d="M9.293 21.708a1 1 0 0 1 0-1.415L16.586 13l-5.293-5.292A1 1 0 0 1 12 6h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1.707.707L18 14.415l-7.292 7.294a1 1 0 0 1-1.415 0M27 26H5a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2"/>`, 'duotone': `<path fill="currentColor" d="M24 7v12L12 7z" opacity=".08"/><path fill="currentColor" d="M28 27a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1M9.293 21.708a1 1 0 0 1 0-1.415L16.586 13l-5.293-5.292A1 1 0 0 1 12 6h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1.707.707L18 14.415l-7.292 7.294a1 1 0 0 1-1.415 0M14.413 8l4.294 4.293L23 16.586V8z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
