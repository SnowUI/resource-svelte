<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" fillRule="evenodd" d="M24.707 20.68a.943.943 0 0 1-1.414 0l-6.586-7.18a.943.943 0 0 0-1.414 0l-6.586 7.18a.943.943 0 0 1-1.414 0 1.16 1.16 0 0 1 0-1.541l6.586-7.181c1.171-1.277 3.07-1.277 4.242 0l6.586 7.18c.39.426.39 1.117 0 1.543" clipRule="evenodd"/>`, 'thin': `<path fill="currentColor" fillRule="evenodd" d="M24.822 20.86a.51.51 0 0 1-.747-.047l-6.888-8.142a1.537 1.537 0 0 0-2.374 0l-6.888 8.142a.51.51 0 0 1-.747.047.575.575 0 0 1-.045-.784l6.888-8.142a2.564 2.564 0 0 1 3.958 0l6.887 8.142c.195.23.175.58-.044.784" clipRule="evenodd"/>`, 'light': `<path fill="currentColor" fillRule="evenodd" d="M24.74 20.8a.76.76 0 0 1-1.088-.065L16.96 13.02a1.265 1.265 0 0 0-1.922 0l-6.69 7.714a.76.76 0 0 1-1.09.066.8.8 0 0 1-.064-1.115l6.69-7.713a2.784 2.784 0 0 1 4.23 0l6.69 7.713a.8.8 0 0 1-.064 1.115" clipRule="evenodd"/>`, 'bold': `<path fill="currentColor" fillRule="evenodd" d="M25.47 21.586c-.652.601-1.65.54-2.23-.136l-6.847-7.99a.514.514 0 0 0-.786 0l-6.848 7.99a1.54 1.54 0 0 1-2.229.136 1.68 1.68 0 0 1-.131-2.312l6.847-7.991a3.597 3.597 0 0 1 5.508 0l6.847 7.99c.58.677.52 1.712-.131 2.313" clipRule="evenodd"/>`, 'fill': `<path fill="currentColor" d="m17.47 10.63 9.224 9.536c.654.677.19 1.834-.735 1.834H6.041c-.926 0-1.39-1.157-.735-1.834l9.225-9.537a2.03 2.03 0 0 1 2.938 0"/>`, 'duotone': `<path fill="currentColor" d="m17.47 10.63 9.224 9.536c.654.677.19 1.834-.735 1.834H6.041c-.926 0-1.39-1.157-.735-1.834l9.225-9.537a2.03 2.03 0 0 1 2.938 0" opacity=".08"/><path fill="currentColor" fillRule="evenodd" d="M27.39 19.371c1.304 1.34.38 3.629-1.465 3.629H6.075c-1.845 0-2.769-2.29-1.464-3.629l9.193-9.437a3.05 3.05 0 0 1 4.392 0zM6.074 20.874h19.85l-9.193-9.437a1.016 1.016 0 0 0-1.464 0z" clipRule="evenodd"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
