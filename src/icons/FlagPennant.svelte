<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m30.329 12.055-23-8A1 1 0 0 0 6 5v22a1 1 0 0 0 2 0v-5.289l22.329-7.766a1 1 0 0 0 0-1.89M8 19.594V6.406L26.956 13z"/>`, 'thin': `<path fill="currentColor" d="m30.164 12.528-23-8A.5.5 0 0 0 6.5 5v22a.5.5 0 0 0 1 0v-5.645l22.664-7.882a.5.5 0 0 0 0-.946M7.5 20.296V5.704L28.478 13z"/>`, 'light': `<path fill="currentColor" d="m30.25 12.291-23-8a.75.75 0 0 0-1 .71v22a.75.75 0 0 0 1.5 0v-5.467l22.5-7.825a.75.75 0 0 0 0-1.418m-22.5 7.654V6.055L27.718 13z"/>`, 'bold': `<path fill="currentColor" d="m30.493 11.584-23-8A1.5 1.5 0 0 0 5.5 5v22a1.5 1.5 0 0 0 3 0v-4.934l21.993-7.65a1.501 1.501 0 0 0 0-2.832M8.5 18.89V7.11L25.434 13z"/>`, 'fill': `<path fill="currentColor" d="M31 13a1 1 0 0 1-.671.945L8 21.711V27a1 1 0 0 1-2 0V5a1 1 0 0 1 1.329-.945l23 8A1 1 0 0 1 31 13"/>`, 'duotone': `<path fill="currentColor" d="M30 13 7 21V5z" opacity=".08"/><path fill="currentColor" d="m30.329 12.055-23-8A1 1 0 0 0 6 5v22a1 1 0 0 0 2 0v-5.289l22.329-7.766a1 1 0 0 0 0-1.89M8 19.594V6.406L26.956 13z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
