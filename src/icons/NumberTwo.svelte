<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M22 26a1 1 0 0 1-1 1H11a1 1 0 0 1-.8-1.6l8.993-11.99a4 4 0 1 0-6.388-4.816q-.283.376-.473.807A1 1 0 0 1 10.5 8.6a6 6 0 1 1 10.291 6.011L13 25h8a1 1 0 0 1 1 1"/>`, 'thin': `<path fill="currentColor" d="M21.5 26a.5.5 0 0 1-.5.5H11a.5.5 0 0 1-.4-.8l8.993-11.99a4.501 4.501 0 0 0-5.879-6.606c-.51.306-.955.71-1.308 1.188q-.318.424-.531.91a.5.5 0 1 1-.916-.402 5.501 5.501 0 1 1 9.435 5.516L12 25.5h9a.5.5 0 0 1 .5.5"/>`, 'light': `<path fill="currentColor" d="M21.75 26a.75.75 0 0 1-.75.75H11a.75.75 0 0 1-.6-1.2l9-11.99a4.25 4.25 0 0 0-5.967-5.944 4.26 4.26 0 0 0-1.33 1.685.75.75 0 0 1-1.374-.601q.271-.619.679-1.16a5.75 5.75 0 0 1 9.185 6.921L12.5 25.25H21a.75.75 0 0 1 .75.75"/>`, 'bold': `<path fill="currentColor" d="M22.5 26a1.5 1.5 0 0 1-1.5 1.5H11a1.5 1.5 0 0 1-1.2-2.4l8.994-11.99a3.5 3.5 0 1 0-6-3.507 1.501 1.501 0 0 1-2.75-1.203 6.5 6.5 0 1 1 11.149 6.512L14 24.5h7a1.5 1.5 0 0 1 1.5 1.5"/>`, 'fill': `<path fill="currentColor" d="M25 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-5 19a1 1 0 0 1 0 2h-8a1 1 0 0 1-.724-1.69L18.238 15a3 3 0 0 0-4.467-4q-.23.25-.396.547a1 1 0 1 1-1.75-.97q.277-.5.66-.923a5 5 0 1 1 7.431 6.692l-.02.02L14.332 22z"/>`, 'duotone': `<path fill="currentColor" d="M27 5v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2" opacity=".08"/><path fill="currentColor" d="M22 26a1 1 0 0 1-1 1H11a1 1 0 0 1-.8-1.6l8.993-11.99a4 4 0 1 0-6.388-4.816q-.283.376-.473.807A1 1 0 0 1 10.5 8.6a6 6 0 1 1 10.291 6.011L13 25h8a1 1 0 0 1 1 1"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
