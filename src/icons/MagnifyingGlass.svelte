<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m28.708 27.292-6.26-6.257a11.014 11.014 0 1 0-1.413 1.413l6.258 6.26a1.003 1.003 0 0 0 1.415 0 1 1 0 0 0 0-1.416M5 14a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9"/>`, 'thin': `<path fill="currentColor" d="m28.354 27.646-6.588-6.587a10.513 10.513 0 1 0-.707.707l6.587 6.588a.5.5 0 0 0 .708-.708M4.5 14a9.5 9.5 0 1 1 9.5 9.5A9.51 9.51 0 0 1 4.5 14"/>`, 'light': `<path fill="currentColor" d="m28.53 27.47-6.422-6.423a10.769 10.769 0 1 0-1.06 1.06l6.422 6.423a.75.75 0 0 0 1.06-1.06M4.75 14A9.25 9.25 0 1 1 14 23.25 9.26 9.26 0 0 1 4.75 14"/>`, 'bold': `<path fill="currentColor" d="m29.061 26.939-5.936-5.94A11.515 11.515 0 1 0 21 23.126l5.941 5.942a1.504 1.504 0 0 0 2.565-1.062 1.5 1.5 0 0 0-.44-1.063zm-23.56-12.94a8.5 8.5 0 1 1 8.5 8.5A8.51 8.51 0 0 1 5.5 14"/>`, 'fill': `<path fill="currentColor" d="M21 14a7 7 0 1 1-14 0 7 7 0 0 1 14 0m7.708 14.708a1 1 0 0 1-1.415 0l-6.258-6.26a11 11 0 1 1 1.415-1.413l6.258 6.258a1 1 0 0 1 0 1.415M14 23a9 9 0 1 0-9-9 9.01 9.01 0 0 0 9 9"/>`, 'duotone': `<path fill="currentColor" d="M24 14a10 10 0 1 1-20 0 10 10 0 0 1 20 0" opacity=".08"/><path fill="currentColor" d="m28.708 27.293-6.258-6.258a11.027 11.027 0 1 0-1.415 1.414l6.258 6.259a1 1 0 0 0 1.415-1.415M5 14a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
