<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M25.708 17.293a1 1 0 0 1-1.415 1.415L17 11.414V28a1 1 0 0 1-2 0V11.414l-7.292 7.294a1.001 1.001 0 0 1-1.415-1.415l9-9a1 1 0 0 1 1.415 0zM27 4H5a1 1 0 0 0 0 2h22a1 1 0 1 0 0-2"/>`, 'thin': `<path fill="currentColor" d="M25.354 17.646a.5.5 0 0 1-.708.708L16.5 10.208V28a.5.5 0 0 1-1 0V10.208l-8.146 8.146a.5.5 0 0 1-.708-.708l9-9a.5.5 0 0 1 .708 0zM27 4.5H5a.5.5 0 1 0 0 1h22a.5.5 0 0 0 0-1"/>`, 'light': `<path fill="currentColor" d="M25.53 17.47a.75.75 0 1 1-1.06 1.06l-7.72-7.719V28a.75.75 0 1 1-1.5 0V10.811L7.53 18.53a.75.75 0 0 1-1.06-1.06l9-9a.75.75 0 0 1 1.06 0zM27 4.25H5a.75.75 0 0 0 0 1.5h22a.75.75 0 1 0 0-1.5"/>`, 'bold': `<path fill="currentColor" d="M26.061 17.939a1.503 1.503 0 0 1-2.125 2.125L17.5 13.625V28a1.5 1.5 0 1 1-3 0V13.625l-6.439 6.436a1.503 1.503 0 0 1-2.125-2.125l9-9a1.5 1.5 0 0 1 2.125 0zM27 3.5H5a1.5 1.5 0 0 0 0 3h22a1.5 1.5 0 0 0 0-3"/>`, 'fill': `<path fill="currentColor" d="M25.708 17.293A1 1 0 0 1 25 19h-8v9a1 1 0 0 1-2 0v-9H7a1 1 0 0 1-.707-1.707l9-9a1 1 0 0 1 1.415 0zM27 4H5a1 1 0 0 0 0 2h22a1 1 0 1 0 0-2"/>`, 'duotone': `<path fill="currentColor" d="M25 18H7l9-9z" opacity=".08"/><path fill="currentColor" d="M16.708 8.293a1 1 0 0 0-1.415 0l-9 9A1 1 0 0 0 7 19h8v9a1 1 0 0 0 2 0v-9h8a1 1 0 0 0 .707-1.707zM9.414 17 16 10.414 22.586 17zM28 5a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
