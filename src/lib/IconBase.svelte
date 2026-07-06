<script lang="ts">
  import { getContext } from "svelte";
  import {
    RESOURCE_ICON_CONTEXT_KEY,
    type IconContext,
    type IconProps,
    type IconWeight,
    type IconMeta,
  } from "./types";
  import { resolveSwitch } from "./switch-resolver";
  import { iconsByCollection } from "../icons/by-name";

  type WeightsMap = Partial<Record<IconWeight, string>>;

  interface IconBaseProps extends IconProps {
    weights: WeightsMap;
    /** 该组件的元数据，由生成器注入 */
    meta?: IconMeta;
  }

  const ctx = getContext<IconContext>(RESOURCE_ICON_CONTEXT_KEY);

  let {
    meta,
    size: explicitSize,
    color = "currentColor",
    weight: explicitWeight,
    class: className = "",
    weights,
    viewBox = "0 0 256 256",
    bypassSwitch = false,
    ...restProps
  }: IconBaseProps = $props();

  let size = $derived(explicitSize ?? ctx?.size ?? 32);
  let weight = $derived<IconWeight>(explicitWeight ?? ctx?.weight ?? "regular");

  $effect(() => {
    if (explicitSize !== undefined && ctx?.registerChildSize) {
      ctx.registerChildSize(explicitSize);
    }
  });

  // 决定是否需要根据 Provider 替换策略切换到另一个 collection 的同语义图标。
  // bypassSwitch=true 时（即上一层 IconBase 已经切换过）不再二次替换。
  let switched = $derived.by(() => {
    if (bypassSwitch || !meta || !ctx?.replace) return null;
    return resolveSwitch(meta, ctx.replace, iconsByCollection as Record<string, Record<string, unknown>>);
  });

  let SwitchedComponent = $derived.by(() => {
    if (!switched) return null;
    const c = (iconsByCollection as Record<string, Record<string, any>>)[switched.collection]?.[switched.iconName];
    return c ?? null;
  });

  let content = $derived(
    (weights && weights[weight]) || weights?.regular || "",
  );
  let hasContent = $derived(!!content);
</script>

{#if SwitchedComponent}
  <SwitchedComponent
    bypassSwitch={true}
    {weight}
    {size}
    {color}
    class={className}
    {...restProps}
  />
{:else if hasContent}
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
