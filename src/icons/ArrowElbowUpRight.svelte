<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m26.708 10.707-6 6a1 1 0 1 1-1.415-1.415L23.586 11H9v17a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1h15.586l-4.293-4.293a1 1 0 0 1 1.415-1.415l6 6a1 1 0 0 1 0 1.415"/>`, 'thin': `<path fill="currentColor" d="m26.354 10.354-6 6a.5.5 0 0 1-.708-.708l5.147-5.146H8.5V28a.5.5 0 0 1-1 0V10a.5.5 0 0 1 .5-.5h16.793l-5.147-5.146a.5.5 0 0 1 .708-.708l6 6a.5.5 0 0 1 0 .708"/>`, 'light': `<path fill="currentColor" d="m26.53 10.53-6 6a.75.75 0 0 1-1.06-1.06l4.719-4.72H8.75V28a.75.75 0 0 1-1.5 0V10A.75.75 0 0 1 8 9.25h16.189L19.47 4.53a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06"/>`, 'bold': `<path fill="currentColor" d="m27.061 11.061-6 6a1.503 1.503 0 0 1-2.125-2.125l3.439-3.436H9.5V28a1.5 1.5 0 1 1-3 0V10A1.5 1.5 0 0 1 8 8.5h14.375l-3.436-3.439a1.503 1.503 0 0 1 2.125-2.125l6 6a1.5 1.5 0 0 1-.003 2.125"/>`, 'fill': `<path fill="currentColor" d="m26.708 10.708-6 6A1 1 0 0 1 19 16v-5H9v17a1 1 0 0 1-2 0V10a1 1 0 0 1 1-1h11V4a1 1 0 0 1 1.707-.707l6 6a1 1 0 0 1 0 1.415"/>`, 'duotone': `<path fill="currentColor" d="m26 10-6 6V4z" opacity=".08"/><path fill="currentColor" d="m26.708 9.293-6-6A1 1 0 0 0 19 4v5H8a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V11h10v5a1 1 0 0 0 1.707.708l6-6a1 1 0 0 0 0-1.415M21 13.586V6.414L24.586 10z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
