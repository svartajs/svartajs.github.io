# Deploying on Fly.io

[Live URL](https://hellosvarta.fly.dev/)

[Repository](https://github.com/svartajs/svarta/tree/main/examples/minimal-flyio-docker)

---

Let's setup a simple web server on [fly.io](https://fly.io/) using Docker.

## Setup Fly.io

1. Create a fly.io account
2. Make sure the `flyctl` CLI tool is installed

::: info
Check out the [fly.io Docs](https://fly.io/docs/hands-on/install-flyctl/) for more information
:::

## Setup web server

Now setup a new HTTP web server using:

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

And follow the in-terminal instructions. Select the `starter-http` template.

The template comes with a Dockerfile, so we're almost ready to go. Just one thing:

In `svarta.config.mjs` change `defaultPort` to `8080` (the default for fly.io). Else, you could change the port by using the `PORT` or `SVARTA_PORT` environment variables.

## Create Fly.io app

```bash
flyctl launch
```

flyctl will detect the Dockerfile. Go through the setup and then deploy using:

## Deploy to Fly.io

```bash
flyctl deploy
```

Wait for the docker image to deploy, then your API will be deployed on \[app-name\].fly.dev.

## Continuous deployment

### GitHub Actions

1. Create a access token at https://fly.io/user/personal_access_tokens
2. Set a `FLY_API_TOKEN` secret in the GitHub repository settings
3. Create the following workflow file (change `branches` as needed)

::: code-group

```yaml [.github/workflows/fly.yml]
name: Deploy to Fly

on:
  push:
    branches:
      - main

env:
  FLY_API_TOKEN: ${{ secrets.FLY_API_TOKEN }}
jobs:
  deploy:
    name: Deploy app
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: superfly/flyctl-actions/setup-flyctl@master
      - run: flyctl deploy --remote-only
```

:::
