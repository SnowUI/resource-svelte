<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M20.708 19.293a1 1 0 0 1-1.415 1.415l-8-8a1 1 0 1 1 1.415-1.415zM29 16A13 13 0 1 1 16 3a13.014 13.014 0 0 1 13 13m-2 0a11 11 0 1 0-11 11 11.01 11.01 0 0 0 11-11"/>`, 'thin': `<path fill="currentColor" d="M20.354 19.646a.5.5 0 0 1-.708.708l-8-8a.502.502 0 0 1 .708-.708zM28.5 16A12.5 12.5 0 1 1 16 3.5 12.514 12.514 0 0 1 28.5 16m-1 0A11.5 11.5 0 1 0 16 27.5 11.513 11.513 0 0 0 27.5 16"/>`, 'light': `<path fill="currentColor" d="M20.53 19.47a.75.75 0 1 1-1.06 1.06l-8-8a.75.75 0 0 1 1.06-1.06zM28.75 16A12.75 12.75 0 1 1 16 3.25 12.765 12.765 0 0 1 28.75 16m-1.5 0A11.25 11.25 0 1 0 16 27.25 11.26 11.26 0 0 0 27.25 16"/>`, 'bold': `<path fill="currentColor" d="M21.061 18.939a1.503 1.503 0 0 1-2.125 2.125l-8-8a1.503 1.503 0 0 1 2.125-2.125zM29.5 16A13.5 13.5 0 1 1 16 2.5 13.515 13.515 0 0 1 29.5 16m-3 0A10.5 10.5 0 1 0 16 26.5 10.51 10.51 0 0 0 26.5 16"/>`, 'fill': `<path fill="currentColor" d="M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m4.708 17.708a1 1 0 0 1-1.415 0l-8-8a1 1 0 1 1 1.415-1.415l8 8a1 1 0 0 1 0 1.415"/>`, 'duotone': `<path fill="currentColor" d="M28 16a12 12 0 1 1-23.999 0A12 12 0 0 1 28 16" opacity=".08"/><path fill="currentColor" d="M20.708 19.293a1 1 0 0 1-1.415 1.415l-8-8a1 1 0 1 1 1.415-1.415zM29 16A13 13 0 1 1 16 3a13.014 13.014 0 0 1 13 13m-2 0a11 11 0 1 0-11 11 11.01 11.01 0 0 0 11-11"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
