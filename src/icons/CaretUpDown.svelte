<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M22.708 21.292a1 1 0 0 1 0 1.415l-6 6a1 1 0 0 1-1.415 0l-6-6a1 1 0 1 1 1.415-1.415L16 26.586l5.293-5.294a1 1 0 0 1 1.415 0m-12-10.585L16 5.414l5.293 5.293a1 1 0 1 0 1.415-1.415l-6-6a1 1 0 0 0-1.415 0l-6 6a1 1 0 1 0 1.415 1.415"/>`, 'thin': `<path fill="currentColor" d="M22.354 21.646a.5.5 0 0 1 0 .708l-6 6a.503.503 0 0 1-.708 0l-6-6a.5.5 0 0 1 .708-.708L16 27.292l5.646-5.646a.5.5 0 0 1 .708 0m-12-11.292L16 4.707l5.646 5.647a.5.5 0 1 0 .708-.708l-6-6a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708"/>`, 'light': `<path fill="currentColor" d="M22.53 21.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 1.06-1.06L16 26.939l5.47-5.47a.75.75 0 0 1 1.06 0m-12-10.94L16 5.06l5.47 5.469a.75.75 0 0 0 1.06-1.06l-6-6a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 1.06 1.06"/>`, 'bold': `<path fill="currentColor" d="M23.061 20.939a1.5 1.5 0 0 1 0 2.125l-6 6a1.5 1.5 0 0 1-2.125 0l-6-6a1.503 1.503 0 1 1 2.125-2.125L16 25.875l4.939-4.94a1.5 1.5 0 0 1 2.122.004m-12-9.875L16 6.125l4.939 4.94a1.503 1.503 0 0 0 2.125-2.125l-6-6a1.5 1.5 0 0 0-2.125 0l-6 6a1.503 1.503 0 1 0 2.125 2.125z"/>`, 'fill': `<path fill="currentColor" d="M9.076 10.382a1 1 0 0 1 .217-1.09l6-6a1 1 0 0 1 1.415 0l6 6A1 1 0 0 1 22 11H10a1 1 0 0 1-.924-.618M22 21H10a1 1 0 0 0-.707 1.707l6 6a1 1 0 0 0 1.415 0l6-6A1 1 0 0 0 22 21"/>`, 'duotone': `<path fill="currentColor" d="M10 22h12l-6 6zm6-18-6 6h12z" opacity=".08"/><path fill="currentColor" d="M22 21H10a1 1 0 0 0-.707 1.707l6 6a1 1 0 0 0 1.415 0l6-6A1 1 0 0 0 22 21m-6 5.586L12.414 23h7.172zM10 11h12a1 1 0 0 0 .708-1.708l-6-6a1 1 0 0 0-1.415 0l-6 6A1 1 0 0 0 10 11m6-5.586L19.586 9h-7.172z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
