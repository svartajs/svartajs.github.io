# Routes

## File-based routing

In your `routes` folder (can be changed in the configuration), you can create new files to map to specific routes. Route files are formatted as follows:

- `index.get.ts` maps to `GET /`
- `user.get.ts` maps to `GET /user`
- `user/index.get.ts` also maps to `GET /user`
- `hello/[name].get.ts` maps to `GET /hello/[name]`
- `index.post.ts` maps to `POST /`

etc.

## Route handling

To create a route, default export a route handler by calling `route.handle`.

To send a response, use the `Response` class.

::: code-group

```ts [routes/index.get.ts]
import { Response, route, Status } from "svarta";

export default route.handle(async () => {
  return new Response(Status.Ok, "Hello world!");
});
```

:::

> `route` is the default route entry point and can be extended using [middlewares](/concepts/middlewares)

## Input validation

To validate the request body, use `route.input`.

::: code-group

```ts{2} [routes/index.post.ts]
export default route
  .input(zod.object({ name: zod.string() }).strict())
  .handle(async ({ input }) => {
    return new Response(Status.Ok, {
      // input is type-safe
      message: `Hello ${input.name}`,
    });
  });
```

:::

## Route parameters

Consider this route, which should greet the user using the name given in the route path.

::: warning
This will not build, as params are unknown by default.
:::

::: code-group

```ts{4} [routes/hello/[name].get.ts]
import { Response, route, Status } from "svarta";

export default route.handle(async ({ params }) => {
  const { name } = params; // Error: 'params' is of type 'unknown'

  return new Response(Status.Ok, {
    message: `Hello ${name}!`,
  });
});
```

:::

---

::: info
To statically validate parameters, export a `params` array and add it to the handler.
:::

::: code-group

```ts [routes/hello/[name].get.ts]
import { Response, route, Status } from "svarta";

export const params = ["name"] as const; // [!code ++]

export default route
  .params(params) // <- register params // [!code ++]
  .handle(async ({ params }) => {
    const { name } = params; // OK!

    return new Response(Status.Ok, {
      message: `Hello ${name}!`,
    });
  });
```

:::

---

Now consider adding additional parameters that are not present in the actual route filename:

::: warning
The params will be checked while building to validate the parameters are actually valid. If not, the build will fail.
:::

::: code-group

```ts{6} [routes/hello/[name].get.ts]
import { Response, route, Status } from "svarta";

// another_param is defined, but not defined in the route filename.
// This will show a warning while developing
// and will fatally error during build
export const params = ["name", "another_param"] as const;

export default route
  .params(params)
  .handle(async ({ params }) => {
    const { name } = params;

    return new Response(Status.Ok, {
      message: `Hello ${name}!`,
    });
  });
```

:::

## Redirects

`Redirect` is a helper class that wraps the standard `Response` class for easier redirect handling.

::: code-group

```ts [routes/index.get.ts]
import { Redirect, route } from "svarta";

export default route.handle(async () => {
  return new Redirect("https://google.com", { permanent: true });
});
```

:::

## Output validation

To validate the response body, use `route.output`.

::: code-group

```ts{2} [routes/index.post.ts]
export default route
  .output(zod.object({ message: zod.string() }).strict())
  .handle(async () => {
    return new Response(Status.Ok, {
      // output is type-safe, this will show an error and return 500 in production
      msg: "Hello",
    });
  });
```

:::
