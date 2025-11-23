<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 6H4a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1M16 16.644 6.571 8H25.43zM12.339 16 5 22.726V9.274zm1.48 1.356 1.5 1.381a1 1 0 0 0 1.352 0l1.5-1.38L25.421 24H6.571zM19.66 16 27 9.273v13.455z"/>`, 'thin': `<path fill="currentColor" d="M28 6.5H4a.5.5 0 0 0-.5.5v17A1.5 1.5 0 0 0 5 25.5h22a1.5 1.5 0 0 0 1.5-1.5V7a.5.5 0 0 0-.5-.5M16 17.321 5.285 7.5h21.43zM13.079 16 4.5 23.864V8.136zm.74.679 1.843 1.696a.5.5 0 0 0 .675 0l1.844-1.69 8.534 7.815H5.285zM18.92 16 27.5 8.136v15.728z"/>`, 'light': `<path fill="currentColor" d="M28 6.25H4a.75.75 0 0 0-.75.75v17A1.75 1.75 0 0 0 5 25.75h22A1.75 1.75 0 0 0 28.75 24V7a.75.75 0 0 0-.75-.75M16 16.983 5.928 7.75h20.145zM12.709 16 4.75 23.295V8.705zm1.11 1.017 1.681 1.535a.75.75 0 0 0 1.012 0l1.675-1.535 7.886 7.233H5.929zM19.29 16l7.959-7.295v14.59z"/>`, 'bold': `<path fill="currentColor" d="M28 5.5H4A1.5 1.5 0 0 0 2.5 7v17A2.5 2.5 0 0 0 5 26.5h22a2.5 2.5 0 0 0 2.5-2.5V7A1.5 1.5 0 0 0 28 5.5M16 15.965 7.856 8.5h16.288zM11.599 16 5.5 21.59V10.41zm2.22 2.035 1.167 1.071a1.5 1.5 0 0 0 2.028 0l1.167-1.071 5.963 5.465H7.856zM20.4 16l6.099-5.59v11.18z"/>`, 'fill': `<path fill="currentColor" d="M28 6H4a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1M12.339 16 5 22.726V9.274zm1.48 1.356 1.5 1.381a1 1 0 0 0 1.352 0l1.5-1.38L25.421 24H6.571zM19.66 16 27 9.273v13.455z"/>`, 'duotone': `<path fill="currentColor" d="M28 7 16 18 4 7z" opacity=".08"/><path fill="currentColor" d="M28 6H4a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1M16 16.644 6.571 8H25.43zM12.339 16 5 22.726V9.274zm1.48 1.356 1.5 1.381a1 1 0 0 0 1.352 0l1.5-1.38L25.421 24H6.571zM19.66 16 27 9.273v13.455z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
