<template>
  <div style="overflow: hidden">
    <div
      style="
        width: 100vw;
        height: 6rem;
        background-color: #222f3f;
        display: flex;
        justify-content: center;
        padding-top: 1rem;
        overflow: hidden;
      "
    >
      <div>
        <img
          style="height: 3.5rem"
          src="/white-aws-community-day.svg"
          alt="TheEvent"
        />
      </div>
    </div>
    <main
      id="main"
      style="
        background: white;
        padding-top: 5rem;
        padding-bottom: 5rem;
        overflow: hidden;
        width: 100vw;
        min-height: 100vh;
      "
    >
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
              <div
                class="pt-1"
                style="
                  display: flex;
                  justify-content: center;
                  min-height: 3.5rem;
                "
              >
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
.speaker-vul-image {
  width: 100%;
  height: 250px; /* Adjust the height as needed */
  object-fit: cover;
}
</style>
