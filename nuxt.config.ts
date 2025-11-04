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
    define: {
      "window.global": {},
    },
  },

  app: {
    head: {
      title: "AWS Community Day Cameroon 2025 | Cloud Conference Buea",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Join AWS Community Day Cameroon 2025 at Chariot Hotel Buea. Learn cloud computing, AWS services, and network with professionals. November 22, 2025." },
        { name: "keywords", content: "AWS, Community Day, Cameroon, Cloud Computing, Buea, Conference, Amazon Web Services, Tech Event" },
        { name: "author", content: "AWS User Groups Cameroon" },
        { property: "og:title", content: "AWS Community Day Cameroon 2025" },
        { property: "og:description", content: "Join the largest AWS cloud conference in Cameroon. November 22, 2025 at Chariot Hotel Buea." },
        { property: "og:image", content: "/2025/img/white-aws-community-day.svg" },
        { property: "og:url", content: "https://communityday.awscmr.com" },
        { property: "og:type", content: "event" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "AWS Community Day Cameroon 2025" },
        { name: "twitter:description", content: "Join the largest AWS cloud conference in Cameroon. November 22, 2025 at Chariot Hotel Buea." },
        { name: "twitter:image", content: "/2025/img/white-aws-community-day.svg" },
      ],
      script: [
        { src: "lib/jquery/jquery.min.js" },
        { src: "lib/jquery/jquery-migrate.min.js" },
        { src: "lib/bootstrap/js/bootstrap.bundle.min.js" },
        { src: "lib/easing/easing.min.js" },
        { src: "lib/superfish/hoverIntent.js" },
        { src: "lib/superfish/superfish.min.js" },
        { src: "lib/wow/wow.min.js" },
        { src: "lib/venobox/venobox.min.js" },
        { src: "lib/owlcarousel/owl.carousel.min.js" },
        { src: "js/main.js" },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "AWS Community Day Cameroon 2025",
            "description": "A community-driven event bringing together AWS enthusiasts, developers, and cloud professionals in Cameroon.",
            "startDate": "2025-11-22T08:00:00+01:00",
            "endDate": "2025-11-22T17:00:00+01:00",
            "location": {
              "@type": "Place",
              "name": "Chariot Hotel",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Buea",
                "addressRegion": "South West",
                "addressCountry": "CM"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "AWS User Groups Cameroon"
            },
            "offers": {
              "@type": "Offer",
              "price": "3000",
              "priceCurrency": "XAF"
            }
          })
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800",
        },
        { rel: "stylesheet", href: "lib/bootstrap/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "lib/font-awesome/css/font-awesome.min.css" },
        { rel: "stylesheet", href: "lib/animate/animate.min.css" },
        { rel: "stylesheet", href: "lib/venobox/venobox.css" },
        { rel: "stylesheet", href: "lib/owlcarousel/assets/owl.carousel.min.css" },
        {
          rel: "stylesheet",
          href: "https://sessionize.com/api/v2/i3dm16ol/view/GridSmart",
        },
        { rel: "canonical", href: "https://communityday.awscmr.com" },
        { rel: "icon", type: "image/svg+xml", href: "/2025/img/white-aws-community-day.svg" },
        { rel: "icon", type: "image/png", href: "/2025/img/sponsors/gold/aws-logo.png" },
      ],
    },
  },


  nitro: {
    preset: "aws-amplify",
  },

  experimental: {
    payloadExtraction: false
  },
});
