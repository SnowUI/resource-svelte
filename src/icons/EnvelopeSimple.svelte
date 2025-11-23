<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 6H4a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1m-2.571 2L16 16.644 6.571 8zM27 24H5V9.274l10.324 9.464a1 1 0 0 0 1.352 0L27 9.274z"/>`, 'thin': `<path fill="currentColor" d="M28 6.5H4a.5.5 0 0 0-.5.5v17A1.5 1.5 0 0 0 5 25.5h22a1.5 1.5 0 0 0 1.5-1.5V7a.5.5 0 0 0-.5-.5m-1.285 1L16 17.321 5.285 7.5zm.285 17H5a.5.5 0 0 1-.5-.5V8.136l11.163 10.239a.5.5 0 0 0 .674 0L27.5 8.136V24a.5.5 0 0 1-.5.5"/>`, 'light': `<path fill="currentColor" d="M28 6.25H4a.75.75 0 0 0-.75.75v17A1.75 1.75 0 0 0 5 25.75h22A1.75 1.75 0 0 0 28.75 24V7a.75.75 0 0 0-.75-.75m-1.927 1.5L16 16.983 5.928 7.75zM27 24.25H5a.25.25 0 0 1-.25-.25V8.705l10.75 9.847a.75.75 0 0 0 1.012 0L27.25 8.705V24a.25.25 0 0 1-.25.25"/>`, 'bold': `<path fill="currentColor" d="M28 5.5H4A1.5 1.5 0 0 0 2.5 7v17A2.5 2.5 0 0 0 5 26.5h22a2.5 2.5 0 0 0 2.5-2.5V7A1.5 1.5 0 0 0 28 5.5m-3.856 3L16 15.965 7.856 8.5zM5.5 23.5V10.41l9.486 8.696a1.5 1.5 0 0 0 2.028 0L26.5 10.41V23.5z"/>`, 'fill': `<path fill="currentColor" d="M28 6H4a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1m-1 18H5V9.274l10.324 9.464a1 1 0 0 0 1.352 0L27 9.274z"/>`, 'duotone': `<path fill="currentColor" d="M28 7 16 18 4 7z" opacity=".08"/><path fill="currentColor" d="M28 6H4a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1m-2.571 2L16 16.644 6.571 8zM27 24H5V9.274l10.324 9.464a1 1 0 0 0 1.352 0L27 9.274z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
