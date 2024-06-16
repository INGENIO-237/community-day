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
          src=".././assets/img/white-aws-community-day.svg"
          alt="TheEvenet"
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
</script>

<style scoped></style>
