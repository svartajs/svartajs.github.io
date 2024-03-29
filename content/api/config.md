# Configuration

## Example

::: code-group

```js [svarta.config.mjs]
/**
 * @type {import("@svarta/cli").Config}
 */
const config = {
  packageManager: "pnpm",
  routeFolder: "routes",
  minify: true,
  adapter: ADAPTER,
};

export default config;
```

:::

## Reference

### `routeFolder`

- Default: `"routes"`

The base folder from which all routes are loaded and based on.

### `minify`

- Default: `true`

Minifies your code to reduce bundle size.

### `adapter`

The chosen adapter determines to which platform you want to deploy your server to. [More info here](/adapters/).

### `packageManager`

Your preferred package manager.

Allowed values: `npm`, `yarn`, `pnpm`
