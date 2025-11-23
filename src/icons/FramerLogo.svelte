<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M26 12V4a1 1 0 0 0-1-1H7a1 1 0 0 0-.664 1.75l7.04 6.25H7a1 1 0 0 0-1 1v8a1 1 0 0 0 .293.707l9 9A1 1 0 0 0 17 29v-8h8a1 1 0 0 0 .664-1.75L18.625 13H25a1 1 0 0 0 1-1m-3.625 7H16a1 1 0 0 0-1 1v6.586l-7-7V13h7.625zM24 11h-7.625l-6.75-6H24z"/>`, 'thin': `<path fill="currentColor" d="M25.5 12V4a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.332.875l8.017 7.125H7a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .146.354l9 9A.501.501 0 0 0 16.5 29v-8.5H25a.5.5 0 0 0 .333-.875L17.315 12.5H25a.5.5 0 0 0 .5-.5m-1.815 7.5H16a.5.5 0 0 0-.5.5v7.793l-8-8V12.5h8.31zm.815-8h-8.31l-7.875-7H24.5z"/>`, 'light': `<path fill="currentColor" d="M25.75 12V4a.75.75 0 0 0-.75-.75H7a.75.75 0 0 0-.5 1.31l7.527 6.69H7a.75.75 0 0 0-.75.75v8c0 .199.08.39.22.53l9 9a.75.75 0 0 0 1.28-.53v-8.25H25a.75.75 0 0 0 .5-1.31l-7.528-6.69H25a.75.75 0 0 0 .75-.75m-2.723 7.25H16a.75.75 0 0 0-.75.75v7.189l-7.5-7.5V12.75h7.965zm1.223-8h-7.965l-7.313-6.5H24.25z"/>`, 'bold': `<path fill="currentColor" d="M26.5 12V4A1.5 1.5 0 0 0 25 2.5H7a1.5 1.5 0 0 0-1 2.625l6.055 5.375H7A1.5 1.5 0 0 0 5.5 12v8a1.5 1.5 0 0 0 .44 1.061l9 9A1.5 1.5 0 0 0 17.5 29v-7.5H25a1.5 1.5 0 0 0 1-2.625L19.95 13.5H25a1.5 1.5 0 0 0 1.5-1.5m-5.445 6.5H16a1.5 1.5 0 0 0-1.5 1.5v5.375l-6-6V13.5h6.93zm2.445-8h-6.93l-5.625-5H23.5z"/>`, 'fill': `<path fill="currentColor" d="M25 13h-6.375l7.034 6.25A1 1 0 0 1 25 21h-8v8a1 1 0 0 1-1.707.707l-9-9A1 1 0 0 1 6 20v-8a1 1 0 0 1 1-1h6.375L6.336 4.75A1 1 0 0 1 7 3h18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1"/>`, 'duotone': `<path fill="currentColor" d="M25 12h-9L7 4h18zM7 20l9 9v-9h9l-9-8H7z" opacity=".08"/><path fill="currentColor" d="M26 12V4a1 1 0 0 0-1-1H7a1 1 0 0 0-.664 1.75l7.04 6.25H7a1 1 0 0 0-1 1v8a1 1 0 0 0 .293.707l9 9A1 1 0 0 0 17 29v-8h8a1 1 0 0 0 .664-1.75L18.625 13H25a1 1 0 0 0 1-1m-3.625 7H16a1 1 0 0 0-1 1v6.586l-7-7V13h7.625zM24 11h-7.625l-6.75-6H24z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
