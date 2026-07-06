import type { IconMeta, ReplacePolicy } from "./types";

export interface ResolvedSwitch {
  collection: string;
  /** kebab-case 目标图标名（多数等于 meta.usageName，replaceMap 显式重定向时可能不同） */
  iconName: string;
}

/** 解析 preserve 模式是否匹配当前 meta */
function matchesPreservePattern(pattern: string, meta: IconMeta): boolean {
  if (pattern.startsWith("usage:")) return meta.usageName === pattern.slice(6);
  if (pattern.startsWith("component:")) return meta.componentName === pattern.slice(10);
  // 默认 "<collection>:<iconName>"
  return pattern === `${meta.collection}:${meta.usageName}`;
}

function lookupReplaceMap(
  policy: ReplacePolicy,
  meta: IconMeta,
): ResolvedSwitch | undefined {
  if (!policy.replaceMap) return undefined;
  const keys = [
    `component:${meta.componentName}`,
    `${meta.collection}:${meta.usageName}`,
    `usage:${meta.usageName}`,
  ];
  for (const k of keys) {
    const v = policy.replaceMap[k];
    if (!v) continue;
    const idx = v.lastIndexOf(":");
    if (idx <= 0) continue;
    const targetCol = v.slice(0, idx);
    const targetName = v.slice(idx + 1);
    if (!targetCol || !targetName) continue;
    return { collection: targetCol, iconName: targetName };
  }
  return undefined;
}

/**
 * 根据 Provider 的 `replace` 策略决定当前组件实例是否需要切换到另一个 (collection, iconName)。
 *
 * 解析顺序（§21.5）：
 *   1. preserve：命中则返回 null（不切换）
 *   2. replaceMap：命中则返回精确目标
 *   3. targetCollection：若目标 collection 存在该 usageName，返回目标
 *   4. priority：按顺序找第一个含该 usageName 的 collection；若与当前相同则不切换
 *   5. 否则返回 null
 *
 * @param meta 当前组件实例的元数据
 * @param policy 来自 Provider 的替换策略（可空）
 * @param registry 形如 `{ [collection]: { [iconName]: ComponentRef } }` 的注册表
 * @returns 需要切换时返回目标 (collection, iconName)，否则 null
 */
export function resolveSwitch(
  meta: IconMeta,
  policy: ReplacePolicy | undefined,
  registry: Record<string, Record<string, unknown>>,
): ResolvedSwitch | null {
  if (!policy) return null;

  // 1. preserve（最高优先级）
  for (const p of policy.preserve ?? []) {
    if (matchesPreservePattern(p, meta)) return null;
  }

  // 2. replaceMap
  const rm = lookupReplaceMap(policy, meta);
  if (rm) {
    // 验证目标存在
    if (registry[rm.collection]?.[rm.iconName]) {
      // 若目标就是自己，不切换
      if (rm.collection === meta.collection && rm.iconName === meta.usageName) return null;
      return rm;
    }
  }

  // 3. targetCollection
  if (policy.targetCollection && policy.targetCollection !== meta.collection) {
    const candidate = registry[policy.targetCollection]?.[meta.usageName];
    if (candidate) return { collection: policy.targetCollection, iconName: meta.usageName };
  }

  // 4. priority
  if (policy.priority && policy.priority.length > 0) {
    const candidates = policy.priority.filter((col) => registry[col]?.[meta.usageName]);
    if (candidates.length > 0) {
      const top = candidates[0];
      if (top !== meta.collection) return { collection: top, iconName: meta.usageName };
    }
  }

  return null;
}
