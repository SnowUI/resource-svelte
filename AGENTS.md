<!-- AI-CONTRACT: tier=L1 | id=snowui-resource-svelte | scope=snowui/resource-svelte -->
# SnowUI Resource Svelte 仓库规则（L1）

读者：在 `snowui/resource-svelte` 工作的维护者与 AI。本仓库维护公开包 `@snowui-design-system/resource-svelte`，由 `resource-base` 派生生成 Svelte 图标、头像、插画、Logo、背景与动态 `Icon` / `IconProvider` 组件。

## 红线与章节索引

- `[RS-READ-01]` 必读顺序：[Project/AGENTS.md](../../AGENTS.md) → [snowui/AGENTS.md](../AGENTS.md) → 本文件 → 命中专题 → §1
- `[RS-GEN-01]` `src/{icons,avatars,backgrounds,cursors,emoji,illustrations,images,logos}/` 下的派生组件由生成器维护，禁止绕过 `resource-base` 单独增删素材 → §2
- `[RS-RIGHTS-01]` [OWNER_RESOURCE_LICENSE_CONFIRMATION.md](OWNER_RESOURCE_LICENSE_CONFIRMATION.md) 与 [RESOURCE_LICENSE_MANIFEST.json](RESOURCE_LICENSE_MANIFEST.json) 必须与 `resource-base` 保持同源同步 → §2
- `[RS-PUBLIC-01]` 公开英文交付文件（[README.md](README.md)、[PACKAGE_LICENSE.md](PACKAGE_LICENSE.md)、[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)）严禁写入中文或本机私有路径 → §2

## 1. 启动阅读链与一跳路由

开始任何任务前，先完成 `[Project/AGENTS.md](../../AGENTS.md) → [snowui/AGENTS.md](../AGENTS.md) → 本文件` 并运行 `node ../../brain/bin/brain.mjs intake --project resource-svelte --q "<需求词>"`（收尾运行 `brain.mjs done --project snowui ...` 与 `brain.mjs impact snowui`；独立检出缺上层时先说明缺口），再按意图一跳直达：

| 任务意图 | 本仓与共享权威落点 |
| --- | --- |
| 运行时 `Icon` / `IconProvider` 与切换解析 | [src/lib/Icon.svelte](src/lib/Icon.svelte) · [src/lib/IconBase.svelte](src/lib/IconBase.svelte) · [src/lib/IconProvider.svelte](src/lib/IconProvider.svelte) · [src/lib/switch-resolver.ts](src/lib/switch-resolver.ts) |
| Svelte 资源组件生成器与导出入口 | [scripts/generate-svelte.ts](scripts/generate-svelte.ts) · [scripts/utils/generate-component.ts](scripts/utils/generate-component.ts) → [src/index.ts](src/index.ts) · [src/component-names.ts](src/component-names.ts) |
| 资源权利继承清单与署名文件 | [scripts/resource-license-manifest.mjs](scripts/resource-license-manifest.mjs) → [RESOURCE_LICENSE_MANIFEST.json](RESOURCE_LICENSE_MANIFEST.json) · [OWNER_RESOURCE_LICENSE_CONFIRMATION.md](OWNER_RESOURCE_LICENSE_CONFIRMATION.md) · [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) |
| 上游资源源头、组件图标边界与发布规范 | [../resource-base/AGENTS.md](../resource-base/AGENTS.md) · [ComponentGuidelines §2.7](../docs/standards/ComponentGuidelines.md#27-组件内置-icon-规范) · [ReleaseSpec.md](../docs/standards/ReleaseSpec.md) |

## 2. 仓库职责与维护边界

1. **同源生成**：新增或替换图标与素材必须先在 `../resource-base` 完成确认与构建，再在本仓运行 `pnpm generate` 与 `pnpm license:manifest` 刷新生成组件和权利映射，支持同级 `../resource-base` 目录与独立安装包两种解析模式。
2. **组件包消费约定**：SnowUI 组件库内置 UI 语义小图标遵守 [ComponentGuidelines §2.7](../docs/standards/ComponentGuidelines.md#27-组件内置-icon-规范) 内联 SVG 规则，业务与示例资源通过本包公开导出按需引入。
3. **语言与验收门禁**：代码注释与面向外部使用者的英文交付文档统一使用英文；构建与校验门禁遵守上层规则，在未收到 Owner 验收指令前不执行测试套件。
