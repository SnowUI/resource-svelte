<script lang="ts">
  import IconBase from '../lib/IconBase.svelte';
  import type { IconProps } from '../lib/types';
  
  const weights = { 'regular': `<path fill="currentColor" d="m31.914 24.594-8-18A1 1 0 0 0 23 6H9a1 1 0 0 0-.909.586v.023L.086 24.594A1 1 0 0 0 1 26h30a1 1 0 0 0 .914-1.406M8 24H2.539L8 11.713zm2 0V11.713L15.461 24zm7.65 0L10.539 8H22.35l7.111 16z"/>`, 'thin': `<path fill="currentColor" d="m31.458 24.798-8-18A.5.5 0 0 0 23 6.5H9a.5.5 0 0 0-.454.294V6.8l-8 17.992A.5.5 0 0 0 1 25.5h30a.5.5 0 0 0 .457-.703M8.5 9.356V24.5H1.77zm1 15.144V9.356L16.23 24.5zm7.825 0L9.77 7.5h12.905l7.555 17z"/>`, 'light': `<path fill="currentColor" d="m31.685 24.695-8-18A.75.75 0 0 0 23 6.25H9a.75.75 0 0 0-.681.439v.017L.315 24.695A.75.75 0 0 0 1 25.75h30a.75.75 0 0 0 .685-1.055M8.25 10.534V24.25H2.154zm1.5 13.716V10.534l6.096 13.716zm7.738 0-7.334-16.5h12.359l7.333 16.5z"/>`, 'bold': `<path fill="currentColor" d="m31.88 24.391-8-18a1.5 1.5 0 0 0-1.376-.891h-13a1.5 1.5 0 0 0-1.371.891l-.004.022-8 17.978A1.5 1.5 0 0 0 1.504 26.5h29a1.5 1.5 0 0 0 1.375-2.109M8.003 14.07V23.5H3.812zm3 9.431v-9.431l4.193 9.431zm7.475 0-6.666-15h9.716l6.668 15z"/>`, 'fill': `<path fill="currentColor" d="m31.914 24.594-8-18A1 1 0 0 0 23 6H9a1 1 0 0 0-.914.594v.015l-8 17.985A1 1 0 0 0 1 26h30a1 1 0 0 0 .914-1.406M8 24H2.539L8 11.713zm2 0V11.713L15.461 24z"/>`, 'duotone': `<path fill="currentColor" d="M17 25H1L9 7z" opacity=".08"/><path fill="currentColor" d="m31.914 24.594-8-18A1 1 0 0 0 23 6H9a1 1 0 0 0-.909.586v.023L.086 24.594A1 1 0 0 0 1 26h30a1 1 0 0 0 .914-1.406M8 24H2.539L8 11.713zm2 0V11.713L15.461 24zm7.65 0L10.539 8H22.35l7.111 16z"/>` } as const;
  const defaultViewBox = "0 0 32 32";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase viewBox={viewBox} weights={weights} {...rest} />
