export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "space-trails-tourism",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "",
      },
      {
        rel: "stylesheet",
        href: "",
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/components"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ["~/components", "~/components/ui", "~/components/storyblok"],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/composition-api/module",
    "@nuxtjs/dotenv",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "nuxt-webpack-optimisations",
    "@storyblok/nuxt/module",
    "@vueuse/nuxt",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },
  googleFonts: {
    families: {
      Bellefair: true,
      "Barlow+Condensed": true,
    },
  },
  storyblok: {
    accessToken: process.env.STORYBLOK_API_KEY,
    bridge: true,
    cacheProvider: "memory",
    useApiClient: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
