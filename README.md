# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Install more integrations with:
  ```npx svelte-add```

## Next steps:
  ```
  1: npm install
  2: git init && git add -A && git commit -m "Initial commit" (optional)
  3: npm run dev -- --open
  ```

To close the dev server, hit ```Ctrl-C```

Stuck? Visit us at https://svelte.dev/chat

## Install the Adapter

Ensure that you have installed the @sveltejs/adapter-static package. You can do this by running the following command in your project directory:

```
npm install --save-dev @sveltejs/adapter-static
```

## Update SvelteKit

It's possible that you're using an outdated version of SvelteKit that doesn't include the export you're trying to use. Update SvelteKit to the latest version by running

```
npm install @sveltejs/kit@latest

npm install svelte-preprocess

add -D @sveltejs/adapter-static
```