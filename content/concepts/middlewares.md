# Middlewares

To create a middleware, use `route.middleware`. The callback is your middleware function and can access all the info a route can. By returning an object you can add context your route can later consume.

::: code-group

```ts [routes/index.get.ts]
import { Response, route, Status } from "svarta";

const protectedRoute = route.middleware(async ({ headers, ctx }) => {
  const authHeader = headers.get("authorization");

  if (!authHeader) {
    return new Response(Status.Unauthorized);
  }

  const user = await getUser(authHeader);

  // Add user to context
  return {
    ...ctx,
    user,
  };
});

export default protectedRoute.handle(async ({ ctx }) => {
  return new Response(Status.Ok, {
    user: ctx.user,
  });
});
```

:::

## Chaining middlewares

You can chain middlewares by calling `.middleware` on another middleware. This will return a new middleware.

::: code-group

```ts [routes/index.get.ts]
import { Response, route, Status } from "svarta";

// See example above for "protectedRoute"
const signedRoute = protectedRoute.middleware(async ({ headers }) => {
  headers.set("x-my-header", "abc");
  // Returning nothing will pass through the previous context
  // You can also do "return ctx;"
});

export default signedRoute.handle(async ({ ctx }) => {
  return new Response(Status.Ok, {
    user: ctx.user,
  });
});
```

:::
