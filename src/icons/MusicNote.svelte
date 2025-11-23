<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m26.288 7.042-10-3A1 1 0 0 0 15 5v13.532A6 6 0 1 0 17 23V12.344l8.712 2.614A1 1 0 0 0 27 14V8a1 1 0 0 0-.712-.958M11 27a4 4 0 1 1 0-8 4 4 0 0 1 0 8m14-14.344-8-2.4V6.344l8 2.406z"/>`, 'thin': `<path fill="currentColor" d="m26.144 7.521-10-3a.5.5 0 0 0-.644.48v14.843a5.5 5.5 0 1 0 1 3.156V11.673l9.356 2.806A.5.5 0 0 0 26.5 14V8a.5.5 0 0 0-.356-.479M11 27.501a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m14.5-14.173-9-2.703V5.673l9 2.702z"/>`, 'light': `<path fill="currentColor" d="m26.215 7.281-10-3A.75.75 0 0 0 15.25 5v14.131A5.75 5.75 0 1 0 16.75 23V12.008l9.035 2.71A.75.75 0 0 0 26.75 14V8a.75.75 0 0 0-.535-.719M11 27.25a4.25 4.25 0 1 1 0-8.5 4.25 4.25 0 0 1 0 8.5m14.25-14.257-8.5-2.55V6.007l8.5 2.55z"/>`, 'bold': `<path fill="currentColor" d="m26.431 6.564-10-3A1.5 1.5 0 0 0 14.5 5v12.528a6.5 6.5 0 1 0 3 5.472v-9.984l8.069 2.42A1.5 1.5 0 0 0 27.5 14V8a1.5 1.5 0 0 0-1.069-1.436M11 26.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m13.5-14.516-7-2.1V7.016l7 2.1z"/>`, 'fill': `<path fill="currentColor" d="m26.288 7.042-10-3A1 1 0 0 0 15 5v13.532A6 6 0 1 0 17 23V12.344l8.712 2.614A1 1 0 0 0 27 14V8a1 1 0 0 0-.712-.958"/>`, 'duotone': `<path fill="currentColor" d="M16 23a5 5 0 1 1-10 0 5 5 0 0 1 10 0" opacity=".08"/><path fill="currentColor" d="m26.288 7.042-10-3A1 1 0 0 0 15 5v13.532A6 6 0 1 0 17 23V12.344l8.712 2.614A1 1 0 0 0 27 14V8a1 1 0 0 0-.712-.958M11 27a4 4 0 1 1 0-8 4 4 0 0 1 0 8m14-14.344-8-2.4V6.344l8 2.406z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
