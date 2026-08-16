# @snowui-design-system/resource-svelte

SnowUI 资源库的 Svelte 组件包，从 `@snowui-design-system/resource-base` 生成图标、头像、背景、插画、图片、Logo 等组件，并提供统一 `<Icon />` / `<IconProvider />` 以支持图标库切换。

仓库：[SnowUI/resource-svelte](https://github.com/SnowUI/resource-svelte)

## 安装

```bash
pnpm add @snowui-design-system/resource-svelte
```

`resource-base` 会作为依赖自动安装。

## 直接组件模式

直接导出的组件保持兼容，适合明确绑定某个具体素材的场景：

```svelte
<script lang="ts">
  import { FourLeafClover, AvatarByewind, Gradient01 } from "@snowui-design-system/resource-svelte";
</script>

<FourLeafClover size={24} weight="bold" />
<AvatarByewind size={64} class="rounded-full" />
<Gradient01 width={1024} />
```

## 通用图标模式

业务代码优先使用稳定的 `usageName`，由 Provider 决定使用哪个图标库：

```svelte
<script lang="ts">
  import { Icon, IconProvider } from "@snowui-design-system/resource-svelte";
</script>

<IconProvider collection="snowui" fallbackCollections={["phosphor"]}>
  <Icon name="arrow-line-right" size={24} />
  <Icon name="home" size={24} />
</IconProvider>
```

切换图标库时不改页面中的 `name`：

```svelte
<IconProvider collection="phosphor" fallbackCollections={["snowui"]}>
  <Icon name="arrow-line-right" />
</IconProvider>
```

Provider 也支持替换策略：

```svelte
<IconProvider
  targetCollection="phosphor"
  preserve={["usage:docx-icon", "snowui:dot-circle"]}
  priority={["snowui", "phosphor", "special"]}
>
  <Icon name="arrow-line-right" />
</IconProvider>
```

## 作为 SnowUI 组件内置图标的可选适配器

SnowUI Components 自带内置功能图标，不安装本包也能完整显示。项目希望组件内置图标跟随 resource-svelte collection 切换时，把本包 resolver 传给 Components 的 `IconProvider`：

```svelte
<script lang="ts">
  import { IconProvider as ComponentIconProvider } from "@snowui-design-system/components";
  import { createSnowUIComponentIconResolver } from "@snowui-design-system/resource-svelte";

  const phosphorIcons = createSnowUIComponentIconResolver({
    collection: "phosphor",
    fallbackCollections: ["snowui"],
  });
</script>

<ComponentIconProvider resolver={phosphorIcons}>
  <App />
</ComponentIconProvider>
```

切换传入的 resolver 即可统一切换所有未被逐实例覆盖的组件内置图标。本适配器保持结构化契约，不会让 resource-svelte 反向依赖 Components。

## Logo 颜色继承

Resource Base 中包含 `currentColor` 的 SVG Logo 会以内联 SVG 生成，因此可直接继承使用位置的文字颜色；其余彩色 Logo 继续按原始品牌色渲染。

```svelte
<Github size={16} style="color: inherit" />
```

## Props

```ts
type IconWeight = "regular" | "thin" | "light" | "bold" | "fill" | "duotone";

interface IconProps {
  name: string;
  collection?: string;
  size?: number | string;
  color?: string;
  weight?: IconWeight;
  class?: string;
}
```

`allowRemote` 已作为 Provider 配置预留；在线 Iconify SVG 的解析、缓存和 fallback 由 `resource-base` 负责。

## 开发

```bash
pnpm generate
pnpm build
```

生成脚本会优先读取同级 monorepo 中的 `../resource-base`，独立仓库中则读取已安装的 `@snowui-design-system/resource-base`。

## 发布与同步

本目录对应 GitHub 仓库：

```txt
https://github.com/SnowUI/resource-svelte
```

统一脚本：

```bash
/Users/yuan/Project/snowui/scripts/publish-and-sync.sh --target resource-svelte --version patch --message "chore: release resource-svelte" --yes
```

发布顺序中，必须先发布 `resource-base`，再发布 `resource-svelte`。
