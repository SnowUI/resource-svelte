<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m29.708 15.293-12-12A1 1 0 0 0 16 4v5H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10v5a1 1 0 0 0 1.707.708l12-12a1 1 0 0 0 0-1.415M18 25.586V22a1 1 0 0 0-1-1H6V11h11a1 1 0 0 0 1-1V6.414L27.586 16z"/>`, 'thin': `<path fill="currentColor" d="m29.354 15.646-12-12A.5.5 0 0 0 16.5 4v5.5H6A1.5 1.5 0 0 0 4.5 11v10A1.5 1.5 0 0 0 6 22.5h10.5V28a.5.5 0 0 0 .854.354l12-12a.503.503 0 0 0 0-.708M17.5 26.792V22a.5.5 0 0 0-.5-.5H6a.5.5 0 0 1-.5-.5V11a.5.5 0 0 1 .5-.5h11a.5.5 0 0 0 .5-.5V5.207L28.293 16z"/>`, 'light': `<path fill="currentColor" d="m29.53 15.47-12-12a.75.75 0 0 0-1.28.53v5.25H6A1.75 1.75 0 0 0 4.25 11v10A1.75 1.75 0 0 0 6 22.75h10.25V28a.75.75 0 0 0 1.28.53l12-12a.75.75 0 0 0 0-1.06M17.75 26.19V22a.75.75 0 0 0-.75-.75H6a.25.25 0 0 1-.25-.25V11a.25.25 0 0 1 .25-.25h11a.75.75 0 0 0 .75-.75V5.811l10.189 10.19z"/>`, 'bold': `<path fill="currentColor" d="m30.061 14.939-12-12A1.5 1.5 0 0 0 15.5 4v4.5H6A2.5 2.5 0 0 0 3.5 11v10A2.5 2.5 0 0 0 6 23.5h9.5V28a1.5 1.5 0 0 0 2.561 1.061l12-12a1.5 1.5 0 0 0 0-2.122M18.5 24.375V22a1.5 1.5 0 0 0-1.5-1.5H6.5v-9H17a1.5 1.5 0 0 0 1.5-1.5V7.625L26.875 16z"/>`, 'fill': `<path fill="currentColor" d="m29.708 16.708-12 12A1 1 0 0 1 16 28v-5H6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h10V4a1 1 0 0 1 1.707-.707l12 12a1 1 0 0 1 0 1.415"/>`, 'duotone': `<path fill="currentColor" d="M17 28v-6H6a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h11V4l12 12z" opacity=".08"/><path fill="currentColor" d="m29.708 15.293-12-12A1 1 0 0 0 16 4v5H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10v5a1 1 0 0 0 1.707.708l12-12a1 1 0 0 0 0-1.415M18 25.586V22a1 1 0 0 0-1-1H6V11h11a1 1 0 0 0 1-1V6.414L27.586 16z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
