# Deploying on Railway

[Live URL](https://hellosvarta.up.railway.app/)

[Repository](https://github.com/svartajs/svarta/tree/main/examples/minimal-railway-docker)

---

Let's setup a simple web server on [Railway](https://railway.app/) using Docker.

## Create repository

Create a new GitHub repository.

Clone the repository locally. Then run:

::: code-group

```bash [pnpm]
pnpm create svarta-app --force
```

```bash [yarn]
yarn create svarta-app --force
```

```bash [npm]
npm create svarta-app --force
```

:::

Enter the repository folder as the project folder.

Then, push the changes to GitHub.

```bash
cd <project-folder>
git add .
git commit -m "init"
git push
```

## Deploy to Railway

First, make sure your changes are pushed to GitHub. Then:

- create a new project (https://railway.app/new), select `Deploy from GitHub repo`.

- select your GitHub repository and click `Deploy now`.

Your app should build now. To view it online, go to `Settings` and generate a domain. After a couple of seconds, your app should be reachable under that URL.
