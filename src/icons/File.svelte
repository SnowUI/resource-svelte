<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m26.708 10.293-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707M20 6.413 23.586 10H20zM25 27H7V5h11v6a1 1 0 0 0 1 1h6z"/>`, 'thin': `<path fill="currentColor" d="m26.354 10.646-7-7A.5.5 0 0 0 19 3.5H7A1.5 1.5 0 0 0 5.5 5v22A1.5 1.5 0 0 0 7 28.5h18a1.5 1.5 0 0 0 1.5-1.5V11a.5.5 0 0 0-.146-.354M19.5 5.206l5.293 5.294H19.5zM25 27.5H7a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h11.5V11a.5.5 0 0 0 .5.5h6.5V27a.5.5 0 0 1-.5.5"/>`, 'light': `<path fill="currentColor" d="m26.53 10.47-7-7a.75.75 0 0 0-.53-.22H7A1.75 1.75 0 0 0 5.25 5v22A1.75 1.75 0 0 0 7 28.75h18A1.75 1.75 0 0 0 26.75 27V11a.75.75 0 0 0-.22-.53m-6.78-4.66 4.44 4.44h-4.44zM25 27.25H7a.25.25 0 0 1-.25-.25V5A.25.25 0 0 1 7 4.75h11.25V11a.75.75 0 0 0 .75.75h6.25V27a.25.25 0 0 1-.25.25"/>`, 'bold': `<path fill="currentColor" d="m27.061 9.94-7-7A1.5 1.5 0 0 0 19 2.5H7A2.5 2.5 0 0 0 4.5 5v22A2.5 2.5 0 0 0 7 29.5h18a2.5 2.5 0 0 0 2.5-2.5V11a1.5 1.5 0 0 0-.439-1.06M20 7.125 22.875 10H20zM7.5 26.5v-21H17v6a1.5 1.5 0 0 0 1.5 1.5h6v13.5z"/>`, 'fill': `<path fill="currentColor" d="m26.708 10.293-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707M19 11V5.5l5.5 5.5z"/>`, 'duotone': `<path fill="currentColor" d="M26 11h-7V4z" opacity=".08"/><path fill="currentColor" d="m26.708 10.293-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707M20 6.413 23.586 10H20zM25 27H7V5h11v6a1 1 0 0 0 1 1h6z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
