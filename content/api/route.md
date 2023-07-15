# Route API

## Route input

The `route input` is the object received by any route handler.

::: code-group

```ts [routes/index.get.ts]
import { Response, route, Status } from "svarta";

// prettier-ignore
export default route
  .handle(async (routeInput) => { // [!code focus]
    console.log(routeInput);
    return new Response(Status.Ok, "Hello world!");
  });
```

:::

## ctx

User-provided context. This can be set by using [middlewares](/concepts/middlewares).

::: code-group

```ts [routes/index.get.ts]
import { Response, route, Status } from "svarta";

const myRoute = route.middleware(async () => {
  return {
    message: "Hello world!",
  };
});

export default myRoute.handle(async ({ ctx }) => {
  return new Response(Status.Ok, ctx.message);
});
```

:::

## path

Full path without the query parameters.

Example: `/user?id=3` => `/user`

::: code-group

```ts [routes/index.get.ts]
import { Response, route, Status } from "svarta";

export default route.handle(async ({ path }) => {
  console.log(path); // => "/"
  return new Response(Status.Ok, "Hello world!");
});
```

:::

## url

Full path with query parameters.

Example: `/user?id=3` => `/user?id=3`

::: code-group

```ts [routes/index.get.ts]
import { Response, route, Status } from "svarta";

export default route.handle(async ({ url }) => {
  console.log(url);
  return new Response(Status.Ok, "Hello world!");
});
```

:::

## method

HTTP method (`GET`, `POST`, etc).

::: code-group

```ts [routes/index.get.ts]
import { Response, route, Status } from "svarta";

export default route.handle(async ({ method }) => {
  console.log(method); // => "GET"
  return new Response(Status.Ok, "Hello world!");
});
```

:::

## headers

Can be used to get and set HTTP headers.

::: code-group

```ts{5,9} [routes/secret.get.ts]
import { Redirect, Response, route, Status } from "svarta";
import YAML from "yaml";

export default route.handle(async ({ headers }) => {
  if (!headers.get("authorization")) {
    return new Redirect("/", false);
  }

  headers.set("content-type", "application/yaml");
  const body = YAML.stringify({
    message: "welcome to the secret page",
  });

  return new Response(Status.Ok, body);
});
```

:::

## input

Input body. Use `route.input` to define an input, which will be automatically validated before your route handler runs. See more [here](/concepts/routes#input-validation).

## output

Like `input`, but validates the server response body. See more [here](/concepts/routes#output-validation).

## params

Route parameters. See more [here](/concepts/routes#route-parameters).

::: code-group

```ts [routes/[user].get.ts]
import { Response, route, Status } from "svarta";

export const params = ["user"];

// prettier-ignore
export default route
  .params(params)
  .handle(async ({ params }) => {
    return new Response(Status.Ok, `Hello ${params.user}`);
  });
```

:::

## query

Route query parameters.

::: code-group

```ts [routes/[user].get.ts]
import { Response, route, Status } from "svarta";

export default route.handle(async ({ query }) => {
  const result = await db.find({
    query: query.q ?? "",
    page: query.page ?? 0,
    pageSize: 100,
  });
  return new Response(Status.Ok, result);
});
```

:::

## isDev

Development flag, which is `true` if the app is run in development mode.

::: code-group

```ts{4} [routes/index.get.ts]
import { Response, route, Status } from "svarta";

export default route.handle(async ({ isDev }) => {
  if (!isDev) {
    logRequest();
  }

  return new Response(Status.Ok, {
    message: "hello",
  });
});
```

:::

## cookies

Can be used to get and set HTTP cookies.

::: code-group

```ts{4,14-18} [routes/dashboard.get.ts]
import { Redirect, Response, route, Status } from "svarta";

export default route.handle(async ({ cookies }) => {
  const session = cookies.get("session");
  if (!session) {
    return new Redirect("/", false);
  }

  const user = await getUser(session);
  if (!user) {
    return new Redirect("/", false);
  }

  cookies.set("session", generateSession(), {
    httpOnly: true,
    // additional cookie parameters here
    // the options parameter is optional
  });

  return new Response(Status.Ok, {
    message: "You are signed in",
  });
});
```

:::
