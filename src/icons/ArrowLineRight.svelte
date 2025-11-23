<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M23.708 15.293a1 1 0 0 1 0 1.415l-9 9a1 1 0 0 1-1.415-1.415L20.586 17H4a1 1 0 0 1 0-2h16.586l-7.293-7.292a1 1 0 0 1 1.415-1.415zM27 4a1 1 0 0 0-1 1v22a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1"/>`, 'thin': `<path fill="currentColor" d="M23.354 15.646a.503.503 0 0 1 0 .708l-9 9a.5.5 0 0 1-.708-.708l8.147-8.146H4a.5.5 0 0 1 0-1h17.793l-8.147-8.146a.5.5 0 0 1 .708-.708zM27 4.5a.5.5 0 0 0-.5.5v22a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>`, 'light': `<path fill="currentColor" d="M23.53 15.47a.75.75 0 0 1 0 1.06l-9 9a.75.75 0 0 1-1.06-1.06l7.719-7.72H4a.75.75 0 1 1 0-1.5h17.189L13.47 7.53a.75.75 0 0 1 1.06-1.06zM27 4.25a.75.75 0 0 0-.75.75v22a.75.75 0 1 0 1.5 0V5a.75.75 0 0 0-.75-.75"/>`, 'bold': `<path fill="currentColor" d="M23.061 14.939a1.5 1.5 0 0 1 0 2.125l-9 9a1.502 1.502 0 1 1-2.125-2.125l6.439-6.439H4a1.5 1.5 0 1 1 0-3h14.375l-6.436-6.439a1.503 1.503 0 1 1 2.125-2.125zM27 3.5A1.5 1.5 0 0 0 25.5 5v22a1.5 1.5 0 1 0 3 0V5A1.5 1.5 0 0 0 27 3.5"/>`, 'fill': `<path fill="currentColor" d="M28 5v22a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0M14.708 6.293A1 1 0 0 0 13 7v8H4a1 1 0 0 0 0 2h9v8a1 1 0 0 0 1.707.707l9-9a1 1 0 0 0 0-1.415z"/>`, 'duotone': `<path fill="currentColor" d="m23 16-9 9V7z" opacity=".08"/><path fill="currentColor" d="M14.708 6.293A1 1 0 0 0 13 7v8H4a1 1 0 0 0 0 2h9v8a1 1 0 0 0 1.707.707l9-9a1 1 0 0 0 0-1.415zM15 22.586V9.414L21.586 16zM28 5v22a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
