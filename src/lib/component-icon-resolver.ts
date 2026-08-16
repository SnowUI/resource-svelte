import { iconsByCollection, iconsByDefault } from "../icons/by-name";

export interface ComponentIconResolverRequest {
    name: string;
    weight?: string;
    collection?: string;
}

export interface ComponentIconResolverOptions {
    collection?: string;
    fallbackCollections?: string[];
}

/**
 * 为 @snowui-design-system/components 的 IconProvider 创建可选 resolver。
 * 返回类型保持结构化，resource-svelte 不反向依赖 Components。
 */
export function createSnowUIComponentIconResolver(
    options: ComponentIconResolverOptions = {},
) {
    return ({ name, collection }: ComponentIconResolverRequest) => {
        const registry = iconsByCollection as Record<string, Record<string, any>>;
        const collections = [
            collection,
            options.collection,
            ...(options.fallbackCollections ?? []),
        ].filter((value): value is string => Boolean(value));

        for (const candidate of collections) {
            const component = registry[candidate]?.[name];
            if (component) return component;
        }

        return collections.length === 0
            ? (iconsByDefault as Record<string, any>)[name]
            : undefined;
    };
}
