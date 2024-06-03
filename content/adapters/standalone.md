# Standalone

`@svarta/adapter-standalone`

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
  }),
};

export default config;
```

:::

<!-- // TODO: public serving
    // TODO: deploy -->

Using the example above, just run `node .output/entry.mjs` to run the server.

::: warning
Even if the `.output` folder just contains a single file, you should always deploy the entire folder, as there are no guarantees the output bundle only consists of a single file.
:::

## Configuration reference

### `defaultPort`

The default port to bind to. The HTTP port can be dynamically adjusted using the environment variables `SVARTA_PORT` or `PORT`.

### `runtime`

The server runtime. Currently, only `node` is supported.

<!-- TODO: deno, bun -->

### `outputFolder`

The output folder to which your server will be bundled & output to. The entry point is called `entry.mjs`.

### `logger`

If `logger.enabled` is true, a simple HTTP logger is installed before your routes.

<!-- // TODO: public serving
// TODO: deploy -->

---
