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
    <main
      id="main"
      style="
        background: white;
        padding-top: 5rem;
        padding-bottom: 5rem;
        overflow: hidden;
        width: 100vw;
      "
    >
      <div class="container">
        <div class="row">
          <div v-for="vul in volunteers" class="col-lg-3 col-6">
            <div class="speaker border shadow mb-4">
              <img
                :src="vul.image"
                alt="Volunteer"
                class="img-fluid speaker-vul-image"
              />
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
definePageMeta({
  layout: 'home'
})

const volunteers = ref([
  {
    firstname: "Samantha",
    lastname: "Asongwed",
    twitterLink: "",
    image: "/images/Samantha.png",
  },
  {
    firstname: "Zion",
    lastname: "Kongbi",
    twitterLink: "",
    image: "/images/zion.png",
  },
  {
    firstname: "Gwladys",
    lastname: "Godem Pokam",
    twitterLink: "",
    image: "/images/gwladys.jpeg",
  },
]);
</script>

<style lang="css" scoped>
.speaker-vul-image {
  width: 100%;
  height: 250px; /* Adjust the height as needed */
  object-fit: cover;
}
</style>
