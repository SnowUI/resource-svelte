<script lang="ts">
  import IconBase from '../../lib/IconBase.svelte';
  import type { IconProps } from '../../lib/types';
  
  const weights = { 'regular': `<g filter="url(#filter0_d_11899_40029)"> <circle cx="22" cy="20" r="14" fill="white"/> </g> <defs> <filter id="filter0_d_11899_40029" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="2"/> <feGaussianBlur stdDeviation="4"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11899_40029"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11899_40029" result="shape"/> </filter> </defs>` } as const;
  const meta = { collection: 'special', usageName: 'round-alt', componentName: 'RoundAlt' } as const;
  const defaultViewBox = "0 0 44 44";

  let { viewBox = defaultViewBox, ...rest }: IconProps = $props();
</script>

<IconBase {meta} viewBox={viewBox} weights={weights} {...rest} />
