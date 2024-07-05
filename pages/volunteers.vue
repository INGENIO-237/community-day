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
definePageMeta({
  layout: 'home'
})

const volunteers = ref([
  {
    firstname: "Samantha",
    lastname: "Asongwed",
    twitterLink: "",
    image: "/images/volunteers/Samantha.png",
  },
  {
    firstname: "Zion",
    lastname: "Kongbi",
    twitterLink: "",
    image: "/images/volunteers/zion.png",
  },
  {
    firstname: "Gwladys",
    lastname: "Godem Pokam",
    twitterLink: "",
    image: "/images/volunteers/gwladys.jpeg",
  },
  {
    firstname: "Ange",
    lastname: "Wobinwo",
    twitterLink: "https://www.linkedin.com/in/awobins/",
    image: "/images/volunteers/ange_wobinwo.jpg",
  },
  {
    firstname: "Jean",
    lastname: "Mofiro",
    twitterLink: "",
    image: "/images/volunteers/jean_mofiro.jpg",
  },
  {
    firstname: "Neba",
    lastname: "Desmond",
    twitterLink: "https://x.com/desmond__neba",
    image: "/images/volunteers/n_desmond.jpeg",
  },
  {
    firstname: "BEN H.",
    lastname: "ABDEL-KALIF",
    twitterLink: "https://www.linkedin.com/in/ben-hamadou-abdel-kalif-671111228/",
    image: "/images/volunteers/ingenio.jpeg",
  },
  {
    firstname: "Miriam",
    lastname: "Nfor",
    twitterLink: "",
    image: "/images/volunteers/Nfor.jpg",
  },
  {
    firstname: "Ghany",
    lastname: "Elisha",
    twitterLink: "",
    image: "/images/volunteers/Ghany.jpg",
  },
  {
    firstname: "Divine",
    lastname: "Kouti",
    twitterLink: "",
    image: "/images/volunteers/Kouti_Divine.jpg",
  },
  {
    firstname: "Franck",
    lastname: "Essoh",
    twitterLink: "",
    image: "/images/volunteers/Essoh.jpeg",
  },
  {
    firstname: "Ngum",
    lastname: "Butlar",
    twitterLink: "",
    image: "/images/volunteers/Ngum.jpg",
  },
  {
    firstname: "Syntyche",
    lastname: "Demgne",
    twitterLink: "",
    image: "/images/volunteers/demgne.jpg",
  },
  {
    firstname: "Dinnyuy Lemnyuy",
    lastname: "Fru Angu",
    twitterLink: "",
    image: "/images/volunteers/Dinnyuy.jpg",
  },
  {
    firstname: "Suzy",
    lastname: "Nguessong",
    twitterLink: "",
    image: "/images/volunteers/Suzy.jpg",
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
