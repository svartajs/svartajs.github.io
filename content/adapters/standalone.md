# Standalone

- Package: `@svarta/adapter-standalone`

This is the default deployment target. It is powered by [hono](https://hono.dev/), weighing in at only about 35 kB. Your routes will be bundled and minified into a single file using [esbuild](https://esbuild.github.io/).

::: code-group

```js [svarta.config.mjs]
import standaloneAdapter from "@svarta/adapter-standalone";

/**
 * @type {import("@svarta/cli").Config}
 */
const config = {
  packageManager: "pnpm",
  routeFolder: "routes",
  minify: true,
  adapter: standaloneAdapter({
    defaultPort: 7777,
    outputFile: ".output/server.mjs",
    logger: {
      enabled: true,
    },
    // TODO: public serving
    // TODO: deploy
  }),
};

export default config;
```

:::

Using the example above, just run `node .output/server.mjs` to run the server.

::: info
Check out the full standalone starter template [here](https://github.com/svartajs/svarta/tree/main/templates/starter-http)
:::

## Configuration reference

### `defaultPort`

The default port to bind to. The HTTP port can be dynamically adjusted using the environment variables `SVARTA_PORT` or `PORT`.

### `runtime`

- Default: `"node"`

The server runtime. Currently, only `node` is supported.

<!-- TODO: deno, bun -->

### `outputFile`

The output file to which your server will be bundled & output to.

If the file ends with `.js`, it will be converted as CommonJS server, `.mjs` emits an ESM server instead, which is recommended.

### `logger`

- Default: `{ enabled: true }`

If `logger.enabled` is true, a simple HTTP logger is installed before your routes.

<!-- // TODO: public serving
// TODO: deploy -->

---

## Manual install

<!-- TODO: peers not required with auto install -->

::: code-group

```bash [pnpm]
pnpm i -D @svarta/adapter-standalone hono
```

```bash [yarn]
yarn add -D @svarta/adapter-standalone hono
```

```bash [npm]
npx i -D @svarta/adapter-standalone hono
```

:::
