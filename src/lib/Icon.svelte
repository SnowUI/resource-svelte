<script lang="ts">
  import { getContext } from "svelte";
  import {
    RESOURCE_ICON_CONTEXT_KEY,
    type IconContext,
    type IconProps,
    type IconWeight,
  } from "./types";
  import { iconsByCollection, iconsByDefault } from "../icons/by-name";

  interface Props extends IconProps {
    /** 通用使用名（kebab-case） */
    name: string;
    /** 显式指定 collection；不指定则按 Provider 默认或扁平默认 */
    collection?: string;
  }

  let {
    name,
    collection: explicitCollection,
    weight: explicitWeight,
    size: explicitSize,
    color = "currentColor",
    class: className = "",
    as: role,
    ...rest
  }: Props = $props();

  const ctx = getContext<IconContext>(RESOURCE_ICON_CONTEXT_KEY);

  let weight = $derived<IconWeight>(explicitWeight ?? ctx?.weight ?? "regular");
  let size = $derived(explicitSize ?? ctx?.size ?? 32);
  let resolvedSize = $derived(typeof size === "number" ? `${size}px` : size);

  // 决定要从哪个 collection 解析该 name。Provider 的 replace 策略也参与这里。
  // 真正的"切换"逻辑由命中后的组件实例的 IconBase 通过 ctx.replace 二次决策（含 replaceMap / preserve）。
  let Component = $derived.by(() => {
    const registry = iconsByCollection as Record<string, Record<string, any>>;

    // 1. 显式指定
    if (explicitCollection) {
      return registry[explicitCollection]?.[name];
    }
    // 2. Provider 默认 collection
    if (ctx?.collection) {
      const c = registry[ctx.collection]?.[name];
      if (c) return c;
    }
    // 3. Provider replace.targetCollection
    if (ctx?.replace?.targetCollection) {
      const c = registry[ctx.replace.targetCollection]?.[name];
      if (c) return c;
    }
    // 4. Provider replace.priority
    if (ctx?.replace?.priority) {
      for (const col of ctx.replace.priority) {
        const c = registry[col]?.[name];
        if (c) return c;
      }
    }
    // 5. fallbackCollections
    for (const fb of ctx?.fallbackCollections ?? []) {
      const c = registry[fb]?.[name];
      if (c) return c;
    }
    // 6. 扁平默认
    return (iconsByDefault as Record<string, any>)[name];
  });
</script>

{#if Component}
  <Component
    {weight}
    {size}
    {color}
    class={className}
    data-as={typeof role === "string" ? role : undefined}
    {...rest}
  />
{:else}
  <span
    class={["resource-icon-missing", className].filter(Boolean).join(" ")}
    data-as={typeof role === "string" ? role : undefined}
    style:width={resolvedSize}
    style:height={resolvedSize}
    style:font-size={resolvedSize}
    style:color={color}
    {...rest}
  >▧</span>
{/if}

<style>
  :global(:where(.resource-icon-missing)) {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    line-height: 1;
  }
</style>
