# SnowUI Resource Svelte — AI Entry

`@snowui-design-system/resource-svelte` provides named Svelte components and dynamic icon resolvers for SnowUI icons, avatars, backgrounds, illustrations, and logos.

## Documentation & License Entrypoints

- Package overview & quick start: [README.md](./README.md)
- Named material catalog (JSON): https://snowui.dev/llms/resources.json
- Environment & material setup guide: https://snowui.dev/llms/en/setup.md (Chinese: https://snowui.dev/llms/setup.md)
- Full SnowUI AI documentation: https://snowui.dev/llms-en.txt (Chinese: https://snowui.dev/llms.txt)
- Package license & attributions: [PACKAGE_LICENSE.md](./PACKAGE_LICENSE.md) · [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)

## Usage Guidelines for AI

1. **Prefer named imports for tree-shaking**: import only the specific icons or materials needed (for example `import { FourLeafClover, AvatarByewind, Gradient01 } from '@snowui-design-system/resource-svelte'`) after verifying exact export names in https://snowui.dev/llms/resources.json. Avoid importing the full icon dictionary into initial page shells when only a handful of icons are rendered.
2. **Coexisting with `@snowui-design-system/components`**: `@snowui-design-system/components` already includes built-in functional icons. If importing `Icon` or `IconProvider` from both packages in the same file, alias them explicitly to avoid symbol collisions.
3. **License compliance**: retain [PACKAGE_LICENSE.md](./PACKAGE_LICENSE.md) and [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).
