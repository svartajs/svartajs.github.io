# Error handlers

Error handlers are special route handlers that, depending on the error, receive some extra information and send an error response to the client.

>

## Bad Request (400)

The 400 handler receives a Error as first argument that occured during body parsing.

::: code-group

```ts [routes/400.ts]
/**
 * This is the error handler that triggers when a request contains a
 * malformed body (malformed JSON)
 */

import { defineBadRequestErrorHandler, Response, Status } from "svarta";

export default defineBadRequestErrorHandler((_error) => {
  return new Response(Status.BadRequest, "Bad Request");
});
```

:::

## Not Found (404)

::: code-group

```ts [routes/404.ts]
import { defineNotFoundErrorHandler, Response, Status } from "svarta";

export default defineNotFoundErrorHandler(() => {
  return new Response(Status.NotFound, "Not Found");
});
```

> The 404 handler is not called during development mode!

:::

## Invalid Input (422)

The 422 handler receives a Zod error as first argument that described the schema
errors in the request body.

::: code-group

```ts [routes/422.ts]
/**
 * This is the error handler that triggers when a request contains a
 * syntactically correct, but semantically incorrect body
 */

import { defineInvalidInputErrorHandler, Response, Status } from "svarta";

export default defineInvalidInputErrorHandler((error, { path }) => {
  console.error(`Route "${path}" received invalid input`);
  console.error(JSON.stringify(error.issues, null, 2));

  return new Response(Status.UnprocessableEntity, "Unprocessable Entity");
});
```

:::
