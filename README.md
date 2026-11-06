# SnowUI Resource Svelte

A Svelte package generated from SnowUI Resource Base, providing icons, avatars, illustrations, logos, and other assets.

## Install

```sh
pnpm add @snowui-design-system/resource-svelte
```

## Use

```svelte
<script lang="ts">
  import { FourLeafClover, AvatarByewind, Gradient01 } from "@snowui-design-system/resource-svelte";
</script>

<FourLeafClover size={24} weight="bold" />
<AvatarByewind size={64} class="rounded-full" />
<Gradient01 width={1024} />
```

`Icon` and `IconProvider` also support selecting an icon collection by name.

## Develop

```sh
pnpm install
pnpm generate
pnpm build
```

Generation uses a sibling `resource-base` directory when available, or the installed package in a standalone checkout.
