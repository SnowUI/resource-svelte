<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m26.707 16.708-10 10a1 1 0 0 1-1.631-.325 1 1 0 0 1 .216-1.09l10-10A1 1 0 0 1 27 16a1 1 0 0 1-.293.708m-2-12.415a1 1 0 0 0-1.415 0l-19 19a1 1 0 1 0 1.415 1.415l19-19a1 1 0 0 0 0-1.415"/>`, 'thin': `<path fill="currentColor" d="m26.354 16.354-10 10a.5.5 0 0 1-.708-.708l10-10a.498.498 0 0 1 .816.162.5.5 0 0 1-.108.546m-2-11.708a.5.5 0 0 0-.708 0l-19 19a.5.5 0 1 0 .708.708l19-19a.5.5 0 0 0 0-.708"/>`, 'light': `<path fill="currentColor" d="m26.53 16.53-10 10a.75.75 0 1 1-1.06-1.06l10-10a.75.75 0 1 1 1.06 1.06m-2-12.06a.75.75 0 0 0-1.06 0l-19 19a.749.749 0 1 0 1.06 1.06l19-19a.75.75 0 0 0 0-1.06"/>`, 'bold': `<path fill="currentColor" d="m27.061 17.061-10 10a1.503 1.503 0 0 1-2.125-2.125l10-10a1.503 1.503 0 0 1 2.125 2.125m-2-13.125a1.5 1.5 0 0 0-2.125 0l-19 19a1.503 1.503 0 1 0 2.125 2.125l19-19a1.5 1.5 0 0 0 0-2.122z"/>`, 'fill': `<path fill="currentColor" d="M25 5v19a1 1 0 0 1-1 1H5a1.001 1.001 0 0 1-.707-1.707l19-19A1 1 0 0 1 25 5"/>`, 'duotone': `<path fill="currentColor" d="M24 5v19H5z" opacity=".08"/><path fill="currentColor" d="M24.383 4.076a1 1 0 0 0-1.09.217l-19 19A1 1 0 0 0 5 25h19a1 1 0 0 0 1-1V5a1 1 0 0 0-.617-.924M23 23H7.414L23 7.414z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
