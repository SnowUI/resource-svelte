<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" fill-rule="evenodd" d="M20.68 7.293a.943.943 0 0 1 0 1.414l-7.18 6.586a.943.943 0 0 0 0 1.414l7.18 6.586a.943.943 0 0 1 0 1.414c-.425.39-1.116.39-1.541 0l-7.181-6.586c-1.277-1.171-1.277-3.07 0-4.242l7.18-6.586a1.16 1.16 0 0 1 1.543 0" clip-rule="evenodd"/>`, 'thin': `<path fill="currentColor" fill-rule="evenodd" d="M20.86 7.178a.51.51 0 0 1-.047.747l-8.142 6.888a1.537 1.537 0 0 0 0 2.374l8.142 6.888c.23.194.25.528.047.747a.575.575 0 0 1-.784.044l-8.142-6.887a2.564 2.564 0 0 1 0-3.958l8.142-6.888a.575.575 0 0 1 .784.045" clip-rule="evenodd"/>`, 'light': `<path fill="currentColor" fill-rule="evenodd" d="M20.8 7.26a.76.76 0 0 1-.065 1.088L13.02 15.04c-.59.512-.59 1.41 0 1.922l7.714 6.69a.76.76 0 0 1 .066 1.09.8.8 0 0 1-1.115.064l-7.713-6.69a2.784 2.784 0 0 1 0-4.23l7.713-6.69a.8.8 0 0 1 1.115.064" clip-rule="evenodd"/>`, 'bold': `<path fill="currentColor" fill-rule="evenodd" d="M21.586 6.53c.601.652.54 1.65-.136 2.23l-7.99 6.847a.514.514 0 0 0 0 .786l7.99 6.848a1.54 1.54 0 0 1 .136 2.229 1.68 1.68 0 0 1-2.312.131l-7.991-6.847a3.597 3.597 0 0 1 0-5.508l7.99-6.847a1.68 1.68 0 0 1 2.313.131" clip-rule="evenodd"/>`, 'fill': `<path fill="currentColor" d="m10.63 14.53 9.536-9.224c.677-.654 1.834-.19 1.834.735v19.918c0 .926-1.157 1.39-1.834.735l-9.537-9.225a2.03 2.03 0 0 1 0-2.938"/>`, 'duotone': `<path fill="currentColor" d="m10.63 14.53 9.536-9.224c.677-.654 1.834-.19 1.834.735v19.918c0 .926-1.157 1.39-1.834.735l-9.537-9.225a2.03 2.03 0 0 1 0-2.938" opacity=".08"/><path fill="currentColor" fill-rule="evenodd" d="M19.371 4.61C20.711 3.307 23 4.23 23 6.076v19.85c0 1.845-2.29 2.769-3.629 1.464l-9.437-9.193a3.05 3.05 0 0 1 0-4.392zm1.503 21.315V6.075l-9.437 9.193a1.016 1.016 0 0 0 0 1.464z" clip-rule="evenodd"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
