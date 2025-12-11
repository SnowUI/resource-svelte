<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" fill-rule="evenodd" d="M11.32 24.707a.943.943 0 0 1 0-1.414l7.18-6.586a.943.943 0 0 0 0-1.414l-7.18-6.586a.943.943 0 0 1 0-1.414 1.16 1.16 0 0 1 1.541 0l7.181 6.586c1.277 1.171 1.277 3.07 0 4.242l-7.18 6.586c-.427.39-1.117.39-1.543 0" clip-rule="evenodd"/>`, 'thin': `<path fill="currentColor" fill-rule="evenodd" d="M11.14 24.822a.51.51 0 0 1 .047-.747l8.142-6.888a1.537 1.537 0 0 0 0-2.374l-8.142-6.888a.51.51 0 0 1-.047-.747.575.575 0 0 1 .784-.045l8.142 6.888a2.564 2.564 0 0 1 0 3.958l-8.142 6.887a.575.575 0 0 1-.784-.044" clip-rule="evenodd"/>`, 'light': `<path fill="currentColor" fill-rule="evenodd" d="M11.2 24.74a.76.76 0 0 1 .065-1.088l7.714-6.691c.59-.512.59-1.41 0-1.922l-7.714-6.69a.76.76 0 0 1-.066-1.09.8.8 0 0 1 1.115-.064l7.713 6.69a2.784 2.784 0 0 1 0 4.23l-7.713 6.69a.8.8 0 0 1-1.115-.064" clip-rule="evenodd"/>`, 'bold': `<path fill="currentColor" fill-rule="evenodd" d="M10.414 25.47a1.54 1.54 0 0 1 .136-2.23l7.99-6.847a.514.514 0 0 0 0-.786l-7.99-6.848a1.54 1.54 0 0 1-.136-2.229 1.68 1.68 0 0 1 2.312-.131l7.991 6.847a3.597 3.597 0 0 1 0 5.508l-7.99 6.847c-.677.58-1.712.52-2.313-.131" clip-rule="evenodd"/>`, 'fill': `<path fill="currentColor" d="m21.37 17.47-9.536 9.224c-.677.654-1.834.19-1.834-.735V6.041c0-.926 1.157-1.39 1.834-.735l9.537 9.225a2.03 2.03 0 0 1 0 2.938"/>`, 'duotone': `<path fill="currentColor" d="m21.37 17.47-9.536 9.224c-.677.654-1.834.19-1.834-.735V6.041c0-.926 1.157-1.39 1.834-.735l9.537 9.225a2.03 2.03 0 0 1 0 2.938" opacity=".08"/><path fill="currentColor" fill-rule="evenodd" d="M12.629 27.39C11.289 28.693 9 27.77 9 25.924V6.075c0-1.845 2.29-2.769 3.629-1.464l9.437 9.193a3.05 3.05 0 0 1 0 4.392zM11.126 6.074v19.85l9.437-9.193a1.016 1.016 0 0 0 0-1.464z" clip-rule="evenodd"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
