---
title: Svarta - A TypeScript-native, ESM-native platform-agnostic REST API framework
titleTemplate: ":title"
head:
  - [
      "meta",
      {
        property: "og:description",
        content: "Svarta is a TypeScript-native, ESM-native platform-agnostic REST API framework.",
      },
    ]
---

# Svarta

_Svarta_ is a TypeScript-native, ESM-native platform-agnostic REST API framework.

By abstracting the underlying platform, it allows deployment to different platforms without changing your code.

You also get:

- [file-based routing](/concepts/routes), similar to _Astro_, _Next.js_ or _SvelteKit_
- [type-safe middlewares](/concepts/middlewares)
- input validation (with [Zod](https://zod.dev/))
- dependency bundling (treeshaking etc.)
- [CLI](/concepts/cli) to scaffold projects
- development server with HMR

It aims to provide a more robust developer experience than established packages like _Express_ or _Koa_, while being lightweight and hassle-free when using TypeScript.

_Svarta_ will scaffold your application from the ground up, removing the overhead of installing and setting up development dependencies, toolchains and build scripts. Say goodbye to decision fatigue and setting up 15 packages to get your _Express_ project started!

## Quick start

::: code-group

```bash [pnpm]
pnpm create svarta-app
```

```bash [yarn]
yarn create svarta-app
```

```bash [npm]
npm create svarta-app
```

:::

Then, start the development server:

::: code-group

```bash [pnpm]
pnpm dev
```

```bash [yarn]
yarn dev
```

```bash [npm]
npm run dev
```

:::

The default project contains an `index.html` file that is served as `/` and an API route that returns a text, which will be inserted into the HTML page.

Check out [Concepts](/concepts/routes) to learn how to create routes.
