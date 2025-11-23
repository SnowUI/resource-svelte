<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="M27 9H16.334l-3.468-2.6a2 2 0 0 0-1.2-.4H5a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2M5 8h6.666l2.668 2-2.668 2H5zm22 17H5V14h6.666a2 2 0 0 0 1.2-.4l3.468-2.6H27z"/>`, 'thin': `<path fill="currentColor" d="M27 9.5H16.166l-3.6-2.7c-.26-.194-.575-.3-.9-.3H5A1.5 1.5 0 0 0 3.5 8v17A1.5 1.5 0 0 0 5 26.5h22a1.5 1.5 0 0 0 1.5-1.5V11A1.5 1.5 0 0 0 27 9.5M4.5 8a.5.5 0 0 1 .5-.5h6.666a.5.5 0 0 1 .3.1l3.2 2.4-3.2 2.4a.5.5 0 0 1-.3.1H4.5zm23 17a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V13.5h7.166c.325 0 .64-.106.9-.3l3.6-2.7H27a.5.5 0 0 1 .5.5z"/>`, 'light': `<path fill="currentColor" d="M27 9.25H16.25L12.716 6.6a1.75 1.75 0 0 0-1.05-.35H5A1.75 1.75 0 0 0 3.25 8v17A1.75 1.75 0 0 0 5 26.75h22A1.75 1.75 0 0 0 28.75 25V11A1.75 1.75 0 0 0 27 9.25M4.75 8A.25.25 0 0 1 5 7.75h6.666a.25.25 0 0 1 .15.05L14.75 10l-2.934 2.2a.25.25 0 0 1-.15.05H4.75zm22.5 17a.25.25 0 0 1-.25.25H5a.25.25 0 0 1-.25-.25V13.75h6.916a1.75 1.75 0 0 0 1.05-.35l3.534-2.65H27a.25.25 0 0 1 .25.25z"/>`, 'bold': `<path fill="currentColor" d="M27 8.5H16.5L13.166 6a2.5 2.5 0 0 0-1.5-.5H5A2.5 2.5 0 0 0 2.5 8v17A2.5 2.5 0 0 0 5 27.5h22a2.5 2.5 0 0 0 2.5-2.5V11A2.5 2.5 0 0 0 27 8.5m-21.5 0h6l2 1.5-2 1.5h-6zm21 16h-21v-10h6.166a2.5 2.5 0 0 0 1.5-.5l3.334-2.5h10z"/>`, 'fill': `<path fill="currentColor" d="M27 9H16.333l-3.468-2.6a2 2 0 0 0-1.197-.4H5a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2M5 8h6.668l2.666 2-2.668 2H5z"/>`, 'duotone': `<path fill="currentColor" d="m16 10-3.734 2.8a1 1 0 0 1-.6.2H4V8a1 1 0 0 1 1-1h6.666a1 1 0 0 1 .6.2z" opacity=".08"/><path fill="currentColor" d="M27 9H16.334l-3.468-2.6a2 2 0 0 0-1.2-.4H5a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2M5 8h6.666l2.668 2-2.668 2H5zm22 17H5V14h6.666a2 2 0 0 0 1.2-.4l3.468-2.6H27z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
