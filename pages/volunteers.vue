<template>
  <div>
    <!--==========================
        Header
      ============================-->
    <header id="header">
      <div class="container">
        <div id="logo" class="pull-left">
          <a href="/" class="scrollto"
            ><img
              src="/white-aws-community-day.svg"
              alt="AWS Community Day Cameroon"
              title="AWS Community Day Cameroon"
          /></a>
        </div>

        <nav id="nav-menu-container">
          <ul class="nav-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#schedule">Agenda</a>
            </li>
            <li>
              <a href="/#venue">Location</a>
            </li>
            <li>
              <a href="/#gallery">Gallery</a>
            </li>
            <li><a href="/#supporters">Sponsors</a></li>
            <li>
              <a href="/#speakers">Speakers</a>
            </li>
            <li>
              <a href="/#organizers">Organizers</a>
            </li>
            <li class="menu-active">
              <a href="/volunteers">Volunteers</a>
            </li>
            <li><a href="/#faq">FAQ</a></li>
            <li><a href="/#footer">Contact</a></li>
            <li>
              <a href="/fr">FR</a>
            </li>
          </ul>
        </nav>
        <!-- #nav-menu-container -->
      </div>
    </header>
    <!-- #header -->
    <main id="main">
      <div class="container">
        <div class="row">
          <div v-for="vul in volunteers" class="col-lg-3 col-6">
            <div class="speaker border shadow mb-4">
              <a :href="vul.twitterLink" target="_blank">
                <img
                  :src="vul.image"
                  alt="Volunteer"
                  class="img-fluid speaker-vul-image"
                />
              </a>
              <div class="pt-1">
                <p style="font-weight: 300" class="card-text p-3">
                  {{ vul.firstname }} {{ vul.lastname }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup type="ts">
import { volunteers } from '~/data/2025/volunteers';

definePageMeta({
  layout: 'home'
})

useHead({
  title: 'Volunteers - AWS Community Day Cameroon 2025',
  meta: [
    { name: 'description', content: 'Meet the dedicated volunteers making AWS Community Day Cameroon 2025 possible. Join our volunteer team and contribute to the largest cloud conference in Cameroon.' },
    { name: 'keywords', content: 'AWS Community Day volunteers, Cameroon tech volunteers, cloud conference volunteers, AWS event team' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Volunteers - AWS Community Day Cameroon 2025' },
    { property: 'og:description', content: 'Meet the dedicated volunteers making AWS Community Day Cameroon 2025 possible at Chariot Hotel Buea.' },
    { property: 'og:url', content: 'https://communityday.awscmr.com/volunteers' },
    { name: 'twitter:title', content: 'Volunteers - AWS Community Day Cameroon 2025' },
    { name: 'twitter:description', content: 'Meet the dedicated volunteers making AWS Community Day Cameroon 2025 possible.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://communityday.awscmr.com/volunteers' }
  ]
})
</script>

<style lang="css" scoped>
#main {
  padding-top: 7rem;
  padding-bottom: 5rem;
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
  background: white;
}

#header {
  background: #232f3e;
}

.speaker-vul-image {
  width: 100%;
  height: 250px; /* Adjust the height as needed */
  object-fit: cover;
}

.pt-1 {
  display: flex;
  justify-content: center;
  min-height: 3.5rem;
}
</style>
