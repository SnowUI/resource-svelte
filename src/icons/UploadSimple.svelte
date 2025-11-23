<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M28 19v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0m-16.292-8.293L15 7.414V19a1 1 0 0 0 2 0V7.414l3.293 3.293a1 1 0 1 0 1.415-1.415l-5-5a1 1 0 0 0-1.415 0l-5 5a1 1 0 0 0 1.415 1.415"/>`, 'thin': `<path fill="currentColor" d="M27.5 19v7a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 26v-7a.5.5 0 1 1 1 0v7a.5.5 0 0 0 .5.5h20a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 1 1 0m-16.146-8.646L15.5 6.207V19a.5.5 0 0 0 1 0V6.207l4.146 4.147a.501.501 0 0 0 .708-.708l-5-5a.5.5 0 0 0-.708 0l-5 5a.5.5 0 0 0 .708.708"/>`, 'light': `<path fill="currentColor" d="M27.75 19v7A1.75 1.75 0 0 1 26 27.75H6A1.75 1.75 0 0 1 4.25 26v-7a.75.75 0 0 1 1.5 0v7a.25.25 0 0 0 .25.25h20a.25.25 0 0 0 .25-.25v-7a.75.75 0 0 1 1.5 0m-16.22-8.47 3.72-3.719V19a.75.75 0 1 0 1.5 0V6.81l3.72 3.719a.75.75 0 0 0 1.06-1.06l-5-5a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 0 0 1.06 1.06"/>`, 'bold': `<path fill="currentColor" d="M28.5 19v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-7a1.5 1.5 0 0 1 3 0v6.5h19V19a1.5 1.5 0 0 1 3 0m-16.439-7.938L14.5 8.625V19a1.5 1.5 0 1 0 3 0V8.625l2.439 2.44a1.503 1.503 0 0 0 2.125-2.125l-5-5a1.5 1.5 0 0 0-2.125 0l-5 5a1.503 1.503 0 1 0 2.125 2.125z"/>`, 'fill': `<path fill="currentColor" d="M28 19v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0m-17-8h4v8a1 1 0 0 0 2 0v-8h4a1 1 0 0 0 .707-1.708l-5-5a1 1 0 0 0-1.415 0l-5 5A1 1 0 0 0 11 11"/>`, 'duotone': `<path fill="currentColor" d="M21 10H11l5-5z" opacity=".08"/><path fill="currentColor" d="M28 19v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a1 1 0 1 1 2 0v7h20v-7a1 1 0 0 1 2 0m-17.924-8.618a1 1 0 0 1 .216-1.09l5-5a1 1 0 0 1 1.415 0l5 5A1 1 0 0 1 21 11h-4v8a1 1 0 0 1-2 0v-8h-4a1 1 0 0 1-.924-.618M13.414 9h5.172L16 6.414z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
