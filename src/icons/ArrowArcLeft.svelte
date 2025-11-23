<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M29 23a1 1 0 0 1-2 0 11 11 0 0 0-18.777-7.777L5.425 18H11a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-8a1 1 0 1 1 2 0v5.596l2.81-2.791A13 13 0 0 1 29 23"/>`, 'thin': `<path fill="currentColor" d="M28.5 23a.5.5 0 0 1-1 0 11.5 11.5 0 0 0-19.625-8.125L4.213 18.5H11a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v6.799l3.662-3.639A12.5 12.5 0 0 1 28.5 23"/>`, 'light': `<path fill="currentColor" d="M28.75 23a.75.75 0 1 1-1.5 0 11.25 11.25 0 0 0-19.205-7.955L4.819 18.25H11a.75.75 0 1 1 0 1.5H3a.75.75 0 0 1-.75-.75v-8a.75.75 0 1 1 1.5 0v6.198l3.236-3.216A12.75 12.75 0 0 1 28.75 23"/>`, 'bold': `<path fill="currentColor" d="M29.5 23a1.5 1.5 0 1 1-3 0 10.5 10.5 0 0 0-17.925-7.425L6.639 17.5H11a1.5 1.5 0 1 1 0 3H3A1.5 1.5 0 0 1 1.5 19v-8a1.5 1.5 0 1 1 3 0v4.395l1.957-1.944A13.5 13.5 0 0 1 29.5 23"/>`, 'fill': `<path fill="currentColor" d="M29 23a1 1 0 0 1-2 0 11 11 0 0 0-18.566-7.98l3.274 3.273A1 1 0 0 1 11 20H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1.708-.707l3.31 3.31A13 13 0 0 1 29 23"/>`, 'duotone': `<path fill="currentColor" d="M11 19H3v-8z" opacity=".08"/><path fill="currentColor" d="M25.193 13.808a13 13 0 0 0-18.175-.204l-3.31-3.311A1 1 0 0 0 2 11v8a1 1 0 0 0 1 1h8a1 1 0 0 0 .707-1.707L8.435 15.02A11 11 0 0 1 27 23a1 1 0 0 0 2 0 12.92 12.92 0 0 0-3.808-9.192M4 18v-4.586L8.586 18z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
