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
    <div style="background-color: #121a2d">
      <TableComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import TableComponent from "~/components/TableComponent.vue";
definePageMeta({
  layout: "home",
});

useHead({
  title: 'Agenda - AWS Community Day Cameroon 2025',
  meta: [
    { name: 'description', content: 'View the complete agenda for AWS Community Day Cameroon 2025. Discover sessions on cloud computing, AWS services, DevOps, serverless, and machine learning at Chariot Hotel Buea.' },
    { name: 'keywords', content: 'AWS Community Day agenda, Cameroon cloud conference schedule, AWS sessions, tech talks, cloud workshops' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Agenda - AWS Community Day Cameroon 2025' },
    { property: 'og:description', content: 'Complete agenda for AWS Community Day Cameroon 2025. Sessions on cloud computing, DevOps, and AWS services.' },
    { property: 'og:url', content: 'https://communityday.awscmr.com/agenda' },
    { name: 'twitter:title', content: 'Agenda - AWS Community Day Cameroon 2025' },
    { name: 'twitter:description', content: 'Complete agenda for AWS Community Day Cameroon 2025. Sessions on cloud computing, DevOps, and AWS services.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://communityday.awscmr.com/agenda' }
  ]
});
</script>

<style scoped></style>
