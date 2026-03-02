<script lang="ts">
  import { getContext } from "svelte";
  import {
    RESOURCE_ICON_CONTEXT_KEY,
    type IconContext,
    type IconProps,
    type IconWeight,
  } from "./types";

  type WeightsMap = Partial<Record<IconWeight, string>>;

  interface IconBaseProps extends IconProps {
    weights: WeightsMap;
  }

  const ctx = getContext<IconContext>(RESOURCE_ICON_CONTEXT_KEY);

  // 显式 props 优先于 Context（允许在子图标层覆盖）
  let {
    size: explicitSize,
    color = "currentColor",
    weight: explicitWeight,
    class: className = "",
    weights,
    viewBox = "0 0 256 256",
    ...restProps
  }: IconBaseProps = $props();

  let size = $derived(explicitSize ?? ctx?.size ?? 32);
  let weight = $derived(explicitWeight ?? ctx?.weight ?? "regular");

  $effect(() => {
    if (explicitSize !== undefined && ctx?.registerChildSize) {
      ctx.registerChildSize(explicitSize);
    }
  });

  let content = $derived(
    (weights && weights[weight]) || weights?.regular || "",
  );
  let hasContent = $derived(!!content);
</script>

{#if hasContent}
  <svg
    width={size}
    height={size}
    {viewBox}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    class={className}
    {...restProps}
  >
    {@html content}
  </svg>
{/if}
