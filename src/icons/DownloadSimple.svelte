<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 19v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0m-12.707.707a1 1 0 0 0 1.415 0l5-5a1 1 0 0 0-1.415-1.415L17 16.587V5a1 1 0 0 0-2 0v11.586l-3.293-3.293a1 1 0 1 0-1.415 1.415z"/>`, 'thin': `<path fill="currentColor" d="M27.5 19v7a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 26v-7a.5.5 0 0 1 1 0v7a.5.5 0 0 0 .5.5h20a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 1 1 0m-11.854.354a.503.503 0 0 0 .708 0l5-5a.501.501 0 0 0-.708-.708L16.5 17.793V5a.5.5 0 0 0-1 0v12.793l-4.146-4.147a.5.5 0 0 0-.708.708z"/>`, 'light': `<path fill="currentColor" d="M27.75 19v7A1.75 1.75 0 0 1 26 27.75H6A1.75 1.75 0 0 1 4.25 26v-7a.75.75 0 1 1 1.5 0v7a.25.25 0 0 0 .25.25h20a.25.25 0 0 0 .25-.25v-7a.75.75 0 1 1 1.5 0m-12.28.53a.75.75 0 0 0 1.06 0l5-5a.75.75 0 0 0-1.06-1.06l-3.72 3.719V5a.75.75 0 1 0-1.5 0v12.189l-3.72-3.719a.75.75 0 0 0-1.06 1.06z"/>`, 'bold': `<path fill="currentColor" d="M28.5 19v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-7a1.5 1.5 0 0 1 3 0v6.5h19V19a1.5 1.5 0 1 1 3 0m-13.561 1.061a1.5 1.5 0 0 0 2.125 0l5-5a1.502 1.502 0 1 0-2.125-2.125L17.5 15.375V5a1.5 1.5 0 1 0-3 0v10.375l-2.439-2.436a1.502 1.502 0 1 0-2.125 2.125z"/>`, 'fill': `<path fill="currentColor" d="M10.293 14.708A1 1 0 0 1 11 13h4V5a1 1 0 0 1 2 0v8h4a1 1 0 0 1 .707 1.707l-5 5a1 1 0 0 1-1.415 0zM27 18a1 1 0 0 0-1 1v7H6v-7a1 1 0 1 0-2 0v7a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-7a1 1 0 0 0-1-1"/>`, 'duotone': `<path fill="currentColor" d="m21 14-5 5-5-5z" opacity=".08"/><path fill="currentColor" d="M28 19v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0m-17.707-4.292A1 1 0 0 1 11 13h4V5a1 1 0 0 1 2 0v8h4a1 1 0 0 1 .707 1.707l-5 5a1 1 0 0 1-1.415 0zm3.125.292L16 17.586 18.586 15z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
