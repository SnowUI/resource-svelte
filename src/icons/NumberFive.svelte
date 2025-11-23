<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M22 20a7 7 0 0 1-11.666 5.218 1 1 0 1 1 1.332-1.49 5 5 0 1 0 .097-7.538 1 1 0 0 1-1.625-.958l1.882-9.428A1 1 0 0 1 13 5h8a1 1 0 1 1 0 2h-7.18l-1.29 6.45A7 7 0 0 1 22 20"/>`, 'thin': `<path fill="currentColor" d="M21.5 20a6.5 6.5 0 0 1-10.834 4.845.501.501 0 1 1 .668-.75 5.5 5.5 0 1 0 .105-8.291.5.5 0 0 1-.814-.474l1.886-9.427a.5.5 0 0 1 .49-.403h8a.5.5 0 0 1 0 1h-7.59l-1.565 7.816A6.5 6.5 0 0 1 21.5 20"/>`, 'light': `<path fill="currentColor" d="M21.75 20a6.75 6.75 0 0 1-11.25 5.031.749.749 0 1 1 1-1.117A5.25 5.25 0 1 0 11.6 16a.75.75 0 0 1-1.225-.719l1.89-9.428A.75.75 0 0 1 13 5.25h8a.75.75 0 1 1 0 1.5h-7.385l-1.422 7.111A6.75 6.75 0 0 1 21.75 20"/>`, 'bold': `<path fill="currentColor" d="M22.5 20A7.5 7.5 0 0 1 10 25.59a1.5 1.5 0 1 1 2-2.235 4.5 4.5 0 1 0 .086-6.785 1.5 1.5 0 0 1-2.442-1.436l1.885-9.428a1.5 1.5 0 0 1 1.47-1.206h8a1.5 1.5 0 0 1 0 3h-6.77l-1.044 5.224A7.5 7.5 0 0 1 22.5 20"/>`, 'fill': `<path fill="currentColor" d="M25 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9.5 10a5.5 5.5 0 1 1-4.277 8.958 1 1 0 0 1 1.554-1.258 3.5 3.5 0 1 0 .044-4.453 1 1 0 0 1-1.75-.786l.944-6.602A1 1 0 0 1 13 8h7a1 1 0 1 1 0 2h-6.132l-.493 3.425A5.5 5.5 0 0 1 15.5 13"/>`, 'duotone': `<path fill="currentColor" d="M27 5v22a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2" opacity=".08"/><path fill="currentColor" d="M22 20a7 7 0 0 1-11.666 5.218 1 1 0 1 1 1.332-1.49 5 5 0 1 0 .097-7.538 1 1 0 0 1-1.625-.958l1.882-9.428A1 1 0 0 1 13 5h8a1 1 0 1 1 0 2h-7.18l-1.29 6.45A7 7 0 0 1 22 20"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
