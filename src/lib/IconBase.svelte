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

  // Lazy-load the full icon registry only when an IconProvider replace policy is active,
  // keeping direct single-icon imports tree-shakable without pulling all collections.
  let registryPromise: Promise<Record<string, Record<string, any>>> | undefined;
  let loadedRegistry = $state<Record<string, Record<string, any>> | null>(null);

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

  $effect(() => {
    if (bypassSwitch || !meta || !ctx?.replace || loadedRegistry) return;
    registryPromise ??= import("../icons/by-name").then(
      (module) => module.iconsByCollection as Record<string, Record<string, any>>,
    );
    void registryPromise.then((registry) => {
      loadedRegistry = registry;
    });
  });

  // Decide whether the current icon should switch to another collection under Provider replace policy.
  // bypassSwitch=true prevents recursive switching after one switch has already resolved.
  let switched = $derived.by(() => {
    if (bypassSwitch || !meta || !ctx?.replace || !loadedRegistry) return null;
    return resolveSwitch(meta, ctx.replace, loadedRegistry);
  });

  let SwitchedComponent = $derived.by(() => {
    if (!switched || !loadedRegistry) return null;
    const c = loadedRegistry[switched.collection]?.[switched.iconName];
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

<style>
  /* Functional icons retain a readable canvas under responsive flex layouts. */
  svg { min-width: 12px; min-height: 12px; flex-shrink: 0; }
</style>
