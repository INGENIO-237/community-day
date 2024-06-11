// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ["~/assets/css/main.css"],
  vite: {
    resolve: {
      alias: {
        "./runtimeConfig": "./runtimeConfig.browser",
      },
    },

    server: {
      fs: {
        strict: false,
      },
    },

    // temp-fix for dev, it breaks build for now (see: https://github.com/nuxt/framework/issues/4916)
    define: {
      "window.global": {},
    },
  },
  app: {
    head: {
      script: [
        {
          src: "lib/jquery/jquery.min.js",
        },
        {
          src: "lib/jquery/jquery-migrate.min.js",
        },
        {
          src: "lib/bootstrap/js/bootstrap.bundle.min.js",
        },
        {
          src: "lib/easing/easing.min.js",
        },
        {
          src: "lib/superfish/hoverIntent.js",
        },
        {
          src: "lib/superfish/superfish.min.js",
        },
        {
          src: "lib/wow/wow.min.js",
        },
        {
          src: "lib/venobox/venobox.min.js",
        },
        {
          src: "lib/owlcarousel/owl.carousel.min.js",
        },
        {
          src: "js/main.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800",
        },
        {
          rel: "stylesheet",
          href: "lib/bootstrap/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "lib/font-awesome/css/font-awesome.min.css",
        },
        {
          rel: "stylesheet",
          href: "lib/animate/animate.min.css",
        },
        {
          rel: "stylesheet",
          href: "lib/venobox/venobox.css",
        },
        {
          rel: "stylesheet",
          href: "lib/owlcarousel/assets/owl.carousel.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://sessionize.com/api/v2/i3dm16ol/view/GridSmart",
        },
      ],
    },
  },
});
