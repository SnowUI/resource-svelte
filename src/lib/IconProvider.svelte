<script lang="ts">
  import { setContext } from "svelte";
  import {
    RESOURCE_ICON_CONTEXT_KEY,
    type IconContext,
    type IconWeight,
    type ResourceSize,
    type ReplacePolicy,
  } from "./types";

  interface Props {
    /** 默认 collection，影响 <Icon name="..."> 解析 */
    collection?: string;
    weight?: IconWeight;
    size?: ResourceSize | number | string;
    color?: string;
    allowRemote?: boolean;
    fallbackCollections?: string[];
    /**
     * 完整替换策略对象。也可以使用下面的 shorthand props（targetCollection / priority / replaceMap / preserve），
     * 同时给出时 `replace` 优先。
     */
    replace?: ReplacePolicy;
    /** shorthand：整体切换目标 collection */
    targetCollection?: string;
    /** shorthand：优先级数组 */
    priority?: string[];
    /** shorthand：精确替换表 */
    replaceMap?: Record<string, string>;
    /** shorthand：例外保留列表 */
    preserve?: string[];
    children?: import("svelte").Snippet;
  }

  let {
    collection,
    weight,
    size,
    color,
    allowRemote,
    fallbackCollections,
    replace,
    targetCollection,
    priority,
    replaceMap,
    preserve,
    children,
  }: Props = $props();

  // 用 getter 让 context 始终读到当前 $props 值（避免 Svelte 5 "captures initial value" 警告）
  const ctx: IconContext = {
    get collection() { return collection; },
    get weight() { return weight; },
    get size() { return size; },
    get color() { return color; },
    get allowRemote() { return allowRemote; },
    get fallbackCollections() { return fallbackCollections; },
    get replace(): ReplacePolicy | undefined {
      if (replace) return replace;
      if (targetCollection || priority || replaceMap || preserve) {
        return { targetCollection, priority, replaceMap, preserve };
      }
      return undefined;
    },
  };

  setContext<IconContext>(RESOURCE_ICON_CONTEXT_KEY, ctx);
</script>

{@render children?.()}
