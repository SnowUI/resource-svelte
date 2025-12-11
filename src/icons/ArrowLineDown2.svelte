<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" fill-rule="evenodd" d="M7.293 11.32a.943.943 0 0 1 1.414 0l6.586 7.18a.943.943 0 0 0 1.414 0l6.586-7.18a.943.943 0 0 1 1.414 0c.39.425.39 1.115 0 1.541l-6.586 7.181c-1.171 1.277-3.07 1.277-4.242 0l-6.586-7.18a1.16 1.16 0 0 1 0-1.543" clip-rule="evenodd"/>`, 'thin': `<path fill="currentColor" fill-rule="evenodd" d="M7.178 11.14a.51.51 0 0 1 .747.047l6.888 8.142a1.537 1.537 0 0 0 2.374 0l6.888-8.142a.51.51 0 0 1 .747-.047.575.575 0 0 1 .044.784l-6.887 8.142a2.564 2.564 0 0 1-3.958 0l-6.888-8.142a.575.575 0 0 1 .045-.784" clip-rule="evenodd"/>`, 'light': `<path fill="currentColor" fill-rule="evenodd" d="M7.26 11.2a.76.76 0 0 1 1.088.065l6.691 7.714c.512.59 1.41.59 1.922 0l6.69-7.714a.76.76 0 0 1 1.09-.066c.318.29.347.789.064 1.115l-6.69 7.713a2.784 2.784 0 0 1-4.23 0l-6.69-7.713a.8.8 0 0 1 .064-1.115" clip-rule="evenodd"/>`, 'bold': `<path fill="currentColor" fill-rule="evenodd" d="M6.53 10.414a1.54 1.54 0 0 1 2.23.136l6.847 7.99c.209.245.577.245.786 0l6.848-7.99a1.54 1.54 0 0 1 2.229-.136 1.68 1.68 0 0 1 .131 2.312l-6.847 7.991a3.597 3.597 0 0 1-5.508 0L6.4 12.727a1.68 1.68 0 0 1 .131-2.313" clip-rule="evenodd"/>`, 'fill': `<path fill="currentColor" d="m14.53 21.37-9.224-9.536c-.654-.677-.19-1.834.735-1.834H25.96c.926 0 1.39 1.157.735 1.834l-9.225 9.537a2.03 2.03 0 0 1-2.938 0"/>`, 'duotone': `<path fill="currentColor" d="m14.53 21.37-9.224-9.536c-.654-.677-.19-1.834.735-1.834H25.96c.926 0 1.39 1.157.735 1.834l-9.225 9.537a2.03 2.03 0 0 1-2.938 0" opacity=".08"/><path fill="currentColor" fill-rule="evenodd" d="M4.61 12.629C3.307 11.289 4.23 9 6.076 9h19.85c1.845 0 2.769 2.29 1.464 3.629l-9.193 9.437a3.05 3.05 0 0 1-4.392 0zm21.315-1.503H6.075l9.193 9.437c.404.415 1.06.415 1.464 0zl.732.751z" clip-rule="evenodd"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
