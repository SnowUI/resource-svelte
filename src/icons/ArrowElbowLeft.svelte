<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m29.708 12.708-12 12a1 1 0 0 1-1.415 0L4 12.414V19a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H5.414L17 22.586l11.293-11.293a1 1 0 0 1 1.415 1.415"/>`, 'thin': `<path fill="currentColor" d="m29.354 12.354-12 12a.503.503 0 0 1-.708 0L3.5 11.208V19a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H4.208L17 23.293l11.646-11.647a.501.501 0 0 1 .708.708"/>`, 'light': `<path fill="currentColor" d="m29.53 12.53-12 12a.75.75 0 0 1-1.06 0L3.75 11.81V19a.75.75 0 1 1-1.5 0v-9A.75.75 0 0 1 3 9.25h9a.75.75 0 1 1 0 1.5H4.81L17 22.939 28.47 11.47a.75.75 0 0 1 1.06 1.06"/>`, 'bold': `<path fill="currentColor" d="m30.061 13.061-12 12a1.503 1.503 0 0 1-2.125 0L4.5 13.625V19a1.5 1.5 0 0 1-3 0v-9A1.5 1.5 0 0 1 3 8.5h9a1.5 1.5 0 0 1 0 3H6.625L17 21.875l10.939-10.94a1.503 1.503 0 0 1 2.125 2.125z"/>`, 'fill': `<path fill="currentColor" d="m29.708 12.708-12 12a1 1 0 0 1-1.415 0L7.5 15.914l-3.792 3.794A1 1 0 0 1 2 19v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 .707 1.707L8.915 14.5 17 22.586l11.293-11.293a1 1 0 0 1 1.415 1.415"/>`, 'duotone': `<path fill="currentColor" d="m12 10-9 9v-9z" opacity=".08"/><path fill="currentColor" d="M29.708 11.293a1 1 0 0 0-1.415 0L17 22.586 8.914 14.5l3.794-3.793A1 1 0 0 0 12 9H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1.708.707L7.5 15.915l8.793 8.794a1 1 0 0 0 1.415 0l12-12a1 1 0 0 0 0-1.415M4 16.586V11h5.586z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
