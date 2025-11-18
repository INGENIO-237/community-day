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
        { name: "keywords", content: "AWS, Community Day, Cameroon, Cloud Computing, Buea, Conference, Amazon Web Services, Tech Event, AWS User Group, Cloud Training, DevOps, Serverless, Machine Learning" },
        { name: "author", content: "AWS User Groups Cameroon" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        { name: "theme-color", content: "#ff9b00" },
        { name: "msapplication-TileColor", content: "#ff9b00" },
        { name: "geo.region", content: "CM-SW" },
        { name: "geo.placename", content: "Buea, Cameroon" },
        { name: "geo.position", content: "4.1590;9.2971" },
        { name: "ICBM", content: "4.1590, 9.2971" },
        { property: "og:title", content: "AWS Community Day Cameroon 2025 | Premier Cloud Conference" },
        { property: "og:description", content: "Join the largest AWS cloud conference in Cameroon. November 22, 2025 at Chariot Hotel Buea. Learn from AWS experts, network with professionals, and advance your cloud skills." },
        { property: "og:image", content: "https://communityday.awscmr.com/white-aws-community-day.svg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "AWS Community Day Cameroon 2025 Logo" },
        { property: "og:url", content: "https://communityday.awscmr.com" },
        { property: "og:type", content: "event" },
        { property: "og:site_name", content: "AWS Community Day Cameroon" },
        { property: "og:locale", content: "en_US" },
        { property: "og:locale:alternate", content: "fr_FR" },
        { property: "event:start_time", content: "2025-11-22T08:00:00+01:00" },
        { property: "event:end_time", content: "2025-11-22T17:00:00+01:00" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@awsugDouala" },
        { name: "twitter:creator", content: "@awsugDouala" },
        { name: "twitter:title", content: "AWS Community Day Cameroon 2025 | Premier Cloud Conference" },
        { name: "twitter:description", content: "Join the largest AWS cloud conference in Cameroon. November 22, 2025 at Chariot Hotel Buea. Learn from AWS experts and network with cloud professionals." },
        { name: "twitter:image", content: "https://communityday.awscmr.com/white-aws-community-day.svg" },
        { name: "twitter:image:alt", content: "AWS Community Day Cameroon 2025 Logo" },
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
            "description": "A community-driven event bringing together AWS enthusiasts, developers, and cloud professionals in Cameroon. Learn about cloud computing, AWS services, DevOps, serverless architecture, and machine learning from industry experts.",
            "startDate": "2025-11-22T08:00:00+01:00",
            "endDate": "2025-11-22T17:00:00+01:00",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": "Chariot Hotel Buea",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Chariot Hotel",
                "addressLocality": "Buea",
                "addressRegion": "South West Region",
                "addressCountry": "CM"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "4.1590",
                "longitude": "9.2971"
              }
            },
            "organizer": [
              {
                "@type": "Organization",
                "name": "AWS User Group Douala",
                "url": "https://www.meetup.com/awsugdouala"
              },
              {
                "@type": "Organization",
                "name": "AWS User Group Yaounde",
                "url": "https://www.meetup.com/aws-user-group-yaounde"
              },
              {
                "@type": "Organization",
                "name": "AWS Cloud Clubs UBa",
                "url": "https://www.meetup.com/aws-cloud-club-at-the-university-of-bamenda"
              }
            ],
            "offers": {
              "@type": "Offer",
              "price": "3000",
              "priceCurrency": "XAF",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-11-01T00:00:00+01:00"
            },
            "image": "https://communityday.awscmr.com/white-aws-community-day.svg",
            "url": "https://communityday.awscmr.com",
            "audience": {
              "@type": "Audience",
              "audienceType": "Developers, Cloud Engineers, IT Professionals, Students"
            },
            "keywords": "AWS, Cloud Computing, DevOps, Serverless, Machine Learning, Cameroon, Tech Conference",
            "inLanguage": ["en", "fr"]
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
        { rel: "icon", type: "image/svg+xml", href: "/white-aws-community-day.svg" },
        { rel: "icon", type: "image/png", href: "/2025/img/sponsors/gold/aws-logo.png" },
        { rel: "preload", href: "/white-aws-community-day.svg", as: "image" },
        { rel: "preload", href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800", as: "style" },
        { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
        { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
        { rel: "dns-prefetch", href: "https://sessionize.com" },
      ],
    },
  },

  experimental: {
    payloadExtraction: false
  },
});
