import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Svarta",
  titleTemplate: ":title · svarta",
  description:
    "Svarta is a TypeScript-native, ESM-native platform-agnostic REST API framework",

  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
  },

  srcDir: "content",

  themeConfig: {
    search: {
      provider: "local",
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Discussion",
        link: "https://github.com/svartajs/svarta/discussions",
      },
    ],

    sidebar: [
      {
        text: "Concepts",
        items: [
          { text: "Routes", link: "/concepts/routes" },
          { text: "Middlewares", link: "/concepts/middlewares" },
          { text: "Command line tool", link: "/concepts/cli" },
        ],
      },
      {
        text: "API",
        items: [
          { text: "Route", link: "/api/route" },
          { text: "Configuration", link: "/api/config" },
        ],
      },
      {
        text: "Adapters",
        items: [
          { text: "About", link: "/adapters/" },
          { text: "Standalone", link: "/adapters/standalone" },
        ],
      },
      {
        text: "Deployment guides",
        items: [
          { text: "Fly.io", link: "/deployment/fly" },
          { text: "Railway", link: "/deployment/railway" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/svartajs/svarta" },
    ],
  },
});
