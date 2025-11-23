<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 9H16.414L13 5.586A1.98 1.98 0 0 0 11.586 5H5a2 2 0 0 0-2 2v18.078A1.925 1.925 0 0 0 4.923 27H27.11A1.89 1.89 0 0 0 29 25.111V11a2 2 0 0 0-2-2M5 7h6.586l2 2H5zm22 18H5V11h22z"/>`, 'thin': `<path fill="currentColor" d="M27 9.5H16.208l-3.562-3.56a1.49 1.49 0 0 0-1.06-.44H5A1.5 1.5 0 0 0 3.5 7v18.078A1.425 1.425 0 0 0 4.923 26.5H27.11a1.39 1.39 0 0 0 1.389-1.389V11A1.5 1.5 0 0 0 27 9.5M4.5 7a.5.5 0 0 1 .5-.5h6.586a.5.5 0 0 1 .353.146L14.793 9.5H4.5zm23 18.111a.39.39 0 0 1-.389.389H4.923a.423.423 0 0 1-.423-.422V10.5H27a.5.5 0 0 1 .5.5z"/>`, 'light': `<path fill="currentColor" d="M27 9.25H16.311l-3.487-3.487a1.74 1.74 0 0 0-1.238-.513H5A1.75 1.75 0 0 0 3.25 7v18.078a1.674 1.674 0 0 0 1.673 1.672H27.11a1.64 1.64 0 0 0 1.639-1.639V11A1.75 1.75 0 0 0 27 9.25M5 6.75h6.586a.25.25 0 0 1 .176.074L14.19 9.25H4.75V7A.25.25 0 0 1 5 6.75m22.25 18.361a.14.14 0 0 1-.139.139H4.923a.175.175 0 0 1-.173-.172V10.75H27a.25.25 0 0 1 .25.25z"/>`, 'bold': `<path fill="currentColor" d="M27 8.5H16.674l-3.25-3.661A2.5 2.5 0 0 0 11.549 4H5a2.5 2.5 0 0 0-2.5 2.5v18.578A2.426 2.426 0 0 0 4.923 27.5H27.11a2.39 2.39 0 0 0 2.389-2.389V11A2.5 2.5 0 0 0 27 8.5M5.5 7h5.826l1.334 1.5H5.5zm21 17.5h-21v-13h21z"/>`, 'fill': `<path fill="currentColor" d="M27 9H16.414L13 5.586A1.98 1.98 0 0 0 11.586 5H5a2 2 0 0 0-2 2v18.078A1.926 1.926 0 0 0 4.924 27H27.11A1.89 1.89 0 0 0 29 25.111V11a2 2 0 0 0-2-2M5 7h6.586l2 2H5z"/>`, 'duotone': `<path fill="currentColor" d="M16 10H4V7a1 1 0 0 1 1-1h6.586a1 1 0 0 1 .707.293z" opacity=".08"/><path fill="currentColor" d="M27 9H16.414L13 5.586A1.98 1.98 0 0 0 11.586 5H5a2 2 0 0 0-2 2v18.078A1.925 1.925 0 0 0 4.923 27H27.11A1.89 1.89 0 0 0 29 25.111V11a2 2 0 0 0-2-2M11.586 7l2 2H5V7zM27 25H5V11h22z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
