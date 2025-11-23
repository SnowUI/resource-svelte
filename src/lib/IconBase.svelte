<script lang="ts">
  import type { IconProps, IconWeight } from './types';
  
  type WeightsMap = Partial<Record<IconWeight, string>>;
  
  interface IconBaseProps extends IconProps {
    weights: WeightsMap;
  }
  
  let {
    size = 24,
    color = 'currentColor',
    weight = 'regular',
    class: className = '',
    weights,
    viewBox = '0 0 256 256',
    ...restProps
  }: IconBaseProps = $props();
  
  let content = $derived((weights && weights[weight]) || weights?.regular || '');
  let hasContent = $derived(!!content);
</script>

{#if hasContent}
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    class={className}
    {...restProps}
  >
    {@html content}
  </svg>
{/if}

