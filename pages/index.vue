<template>
  <div>
    <div>
      <!--==========================
          Header
        ============================-->
      <header id="header">
        <div class="container">
          <div id="logo" class="pull-left">
            <a href="#intro" class="scrollto"
              ><img
                src="~/assets/img/white-aws-community-day.svg"
                alt="AWS Community Day Cameroon"
                title="AWS Community Day Cameroon"
            /></a>
          </div>

          <nav id="nav-menu-container">
            <ul class="nav-menu">
              <li class="menu-active">
                <a href="#intro">{{ $t("home") }}</a>
              </li>
              <li>
                <a href="#schedule">{{ $t("agenda") }}</a>
              </li>
              <li>
                <a href="#venue">{{ $t("location") }}</a>
              </li>
              <li>
                <a href="#gallery">{{ $t("gallery") }}</a>
              </li>
              <li><a href="#supporters">Sponsors</a></li>
              <li>
                <a href="#speakers">{{ $t("speakers") }}</a>
              </li>
              <li>
                <a href="#organizers">{{ $t("organizers") }}</a>
              </li>
              <li>
                <a href="#volunteers">{{ $t("volunteers") }}</a>
              </li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#footer">Contact</a></li>
              <li>
                <a href="#" v-if="locale == 'fr'" @click="switchLanguage('en')"
                  >EN</a
                >
                <a href="#" v-if="locale == 'en'" @click="switchLanguage('fr')"
                  >FR</a
                >
              </li>
            </ul>
          </nav>
          <!-- #nav-menu-container -->
        </div>
      </header>
      <!-- #header -->

      <!--==========================
          Intro Section
        ============================-->
      <section id="intro">
        <div class="intro-container wow fadeIn">
          <img
            src="~/assets/img/white-aws-community-day.svg"
            class="logo"
            title="AWS Community Day Cameroon"
          />
          <h4 class="mb-4 pt-4 pb-0">{{ $t("date") }}, Douala</h4>
          <div class="text-center">
            <a
              href="https://docs.google.com/forms/d/1EUVFyK4U85jVJgSr_NmZPQAmZKrl9L04BCmB37hYQK8/edit"
              target="_blank"
              type="button"
              class="btn btn-lg btn-yellow"
              >{{ $t("register") }}</a
            >
          </div>
        </div>
      </section>

      <main id="main">
        <!--==========================
            About Section
          ============================-->
        <section id="about">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6 text-center text-md-left">
                <h1>
                  {{ $t("countTitle1") }} <span>AWS</span>
                  {{ $t("countTitle2") }}
                </h1>
              </div>
              <div class="col-lg-6">
                <div id="js-clock">
                  <div class="js-clock w-container">
                    <div id="js-box" class="box">
                      <div id="js-clock-days" class="clock-number">
                        {{ days }}
                      </div>
                      <div id="js-clock-days-label" class="clock-label">
                        {{ $t("days") }}
                      </div>
                    </div>
                    <div class="box"></div>
                    <div class="box">
                      <div id="js-clock-hours" class="clock-number">
                        {{ hours }}
                      </div>
                      <div class="clock-label">{{ $t("hours") }}</div>
                    </div>
                    <div class="box">
                      <div id="js-clock-minutes" class="clock-number">
                        {{ minutes }}
                      </div>
                      <div class="clock-label">Minutes</div>
                    </div>
                    <div class="box">
                      <div class="box">
                        <div id="js-clock-seconds" class="clock-number">
                          {{ seconds }}
                        </div>
                        <div class="clock-label">{{ $t("seconds") }}</div>
                      </div>
                    </div>
                    <div class="box"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--==========================
              Schedule Section
            ============================-->
        <section id="schedule" class="section-with-bg">
          <div class="container wow fadeIn">
            <div class="section-header">
              <h2>{{ $t("agenda") }}</h2>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-6 d-none d-md-block">
                <div class="center">
                  <img
                    src="~/assets/img/app-qr.png"
                    alt="QR Code"
                    style="max-width: 200px"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-12">
                <div class="center">
                  <h2>{{ $t("agendaAppTitle") }}</h2>
                  <p style="color: white">
                    {{ $t("agendaAppText") }}
                  </p>
                  <NuxtLink
                    to="/agenda"
                    class="btn btn-lg btn-yellow"
                    target="”_blank”"
                    >{{ $t("agendaAppCTA") }}</NuxtLink
                  >
                  <!-- <a
                    href="./ratesessions?surelynotcached"
                    class="btn btn-lg btn-yellow"
                    id="rate-session-link"
                    target="”_blank”"
                    >Rate sessions</a
                  > -->
                </div>
              </div>
            </div>
          </div>
        </section>

        <TableComponent />

        <!-- ==========================
              Venue Section
            ============================-->
        <section id="venue" class="wow fadeIn">
          <div class="container-fluid">
            <div class="section-header">
              <h2>{{ $t("location") }}</h2>
            </div>

            <div class="row no-gutters">
              <div class="col-lg-6 col-md-12 col-12 venue-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39075.488833215415!2d9.67222428195586!3d4.0648983417923725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106112633a511fc1%3A0x73fce4db817adc37!2sCanalOlympia%20Bessengu%C3%A9!5e0!3m2!1sen!2scm!4v1709549640591!5m2!1sen!2scm"
                  style="border: 0"
                  frameborder="0"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div class="col-lg-6 col-md-12 col-12 venue-info">
                <div class="row justify-content-center">
                  <div class="col-11 col-lg-8">
                    <h3>CanalOlympia Bessengue</h3>
                    <p>Gare de Bessengue</p>
                    <p>Douala, Littoral</p>
                    <p>Cameroon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid venue-gallery-container">
            <div class="row no-gutters">
              <!-- <div class="col-lg-3 col-md-3" v-for="(image, index) in venue_images" :key="index">
                  <div class="venue-gallery">
                    <a :href="image.src" class="venobox" data-gall="venue-gallery">
                      <img :src=image.src class="img-fluid gallery-image" />
                    </a>
                  </div>
                </div> -->
              <div class="col-lg-3 col-md-3">
                <div class="venue-gallery">
                  <a
                    href="~/assets/img/venue-gallery/venue-01.png"
                    class="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="~/assets/img/venue-gallery/venue-01.png"
                      class="img-fluid gallery-image"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-3">
                <div class="venue-gallery">
                  <a
                    href="~/assets/img/venue-gallery/venue-02.png"
                    class="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="~/assets/img/venue-gallery/venue-02.png"
                      class="img-fluid gallery-image"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-3">
                <div class="venue-gallery">
                  <a
                    href="~/assets/img/venue-gallery/venue-03.png"
                    class="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="~/assets/img/venue-gallery/venue-03.png"
                      class="img-fluid gallery-image"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-3">
                <div class="venue-gallery">
                  <a
                    href="~/assets/img/venue-gallery/venue-04.png"
                    class="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="~/assets/img/venue-gallery/venue-04.png"
                      class="img-fluid gallery-image"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-3">
                <div class="venue-gallery">
                  <a
                    href="~/assets/img/venue-gallery/venue-05.png"
                    class="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="~/assets/img/venue-gallery/venue-05.png"
                      class="img-fluid gallery-image"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-3">
                <div class="venue-gallery">
                  <a
                    href="~/assets/img/venue-gallery/venue-06.png"
                    class="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="~/assets/img/venue-gallery/venue-06.png"
                      class="img-fluid gallery-image"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-3">
                <div class="venue-gallery">
                  <a
                    href="~/assets/img/venue-gallery/venu-07.jpeg"
                    class="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="~/assets/img/venue-gallery/venu-07.jpeg"
                      class="img-fluid gallery-image"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-3">
                <div class="venue-gallery">
                  <a
                    href="~/assets/img/venue-gallery/venue-08.jpeg"
                    class="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="~/assets/img/venue-gallery/venue-08.jpeg"
                      class="img-fluid gallery-image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ==========================
            Gallery Section
          ============================-->
        <section id="gallery" class="wow fadeIn">
          <div class="container-fluid">
            <div class="section-header">
              <h2>{{ $t("gallery") }}</h2>
            </div>

            <div class="carousel">
              <div class="">
                <img
                  src="~/assets/img/past-events/event-01.jpg"
                  class="img-fluid gallery-image"
                  alt="Carousel Image"
                />
              </div>
              <div class="">
                <img
                  src="~/assets/img/past-events/event-07.jpg"
                  class="img-fluid gallery-image"
                  alt="Carousel Image"
                />
              </div>
              <div class="">
                <img
                  src="~/assets/img/past-events/event-02.jpg"
                  class="img-fluid gallery-image"
                  alt="Carousel Image"
                />
              </div>
              <div class="">
                <img
                  src="~/assets/img/past-events/event-03.jpg"
                  class="img-fluid gallery-image"
                  alt="Carousel Image"
                />
              </div>
              <div class="">
                <img
                  src="~/assets/img/past-events/event-08.jpg"
                  class="img-fluid gallery-image"
                  alt="Carousel Image"
                />
              </div>
              <div class="">
                <img
                  src="~/assets/img/past-events/event-04.jpg"
                  class="img-fluid gallery-image"
                  alt="Carousel Image"
                />
              </div>
              <div class="">
                <img
                  src="~/assets/img/past-events/event-05.jpg"
                  class="img-fluid gallery-image"
                  alt="Carousel Image"
                />
              </div>
              <div class="">
                <img
                  src="~/assets/img/past-events/event-09.jpg"
                  class="img-fluid gallery-image"
                  alt="Carousel Image"
                />
              </div>
              <div class="">
                <img
                  src="~/assets/img/past-events/event-06.jpg"
                  class="img-fluid gallery-image"
                  alt="Carousel Image"
                />
              </div>
              <div class="">
                <img
                  src="~/assets/img/past-events/event-10.jpg"
                  class="img-fluid gallery-image"
                  alt="Carousel Image"
                />
              </div>
            </div>
          </div>
        </section>

        <!--==========================
              Sponsors Section
            ============================-->
        <section id="supporters" class="section-with-bg wow fadeIn">
          <div class="container">
            <div class="section-header">
              <h2>{{ $t("ourSponsors") }}</h2>
            </div>

            <h3 class="text-center"></h3>

            <h3 class="text-center"></h3>

            <!-- <h3 class="text-center">Platinum</h3> -->

            <!-- <div class="row supporters-wrap clearfix justify-content-center">
                <div class="col-lg-5 col-md-5 col-xs-5 mb-3">
                  <div class="supporter-logo">
                    <center>
                      <a
                        href="https://www.arrow.com/globalecs/pl/producenci/netapp/"
                        target="_blank"
                      >
                        <img
                          src="~/assets/img/sponsors/NetApp_Arrow.png"
                          class="img-fluid"
                          style="display: block; max-width: 50% !important"
                        />
                      </a>
                    </center>
                  </div>
                </div>
                <div class="col-lg-5 col-md-5 col-xs-5 mb-3">
                  <div class="supporter-logo">
                    <a href="https://www.n-ix.com/" target="_blank">
                      <img
                        src="~/assets/img/sponsors/N-iX.png"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-lg-5 col-md-5 col-xs-5 mb-3">
                  <div class="supporter-logo">
                    <a
                      href="https://www.pmi.com/markets/poland/pl/about-us/overview"
                      target="_blank"
                    >
                      <img
                        src="~/assets/img/sponsors/IT_HUB.png"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-lg-5 col-md-5 col-xs-5 mb-3">
                  <div class="supporter-logo">
                    <a href="https://chaosgears.com/" target="_blank">
                      <center>
                        <img
                          class="img-fluid"
                          src="~/assets/img/sponsors/chaosgears.png"
                          style="display: block; max-width: 70% !important"
                        />
                      </center>
                    </a>
                  </div>
                </div>
              </div> -->

            <h3 class="text-center">{{ $t("gold") }}</h3>

            <div class="row supporters-wrap clearfix justify-content-center">
              <div class="col-lg-4 col-md-4 col-xs-6 mb-3">
                <div class="supporter-logo">
                  <a href="https://aws.amazon.com/" target="_blank">
                    <img
                      src="~/assets/img/sponsors/gold/aws-logo.png"
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <!-- <div class="col-lg-4 col-md-4 col-xs-6 mb-3">
                <div class="supporter-logo">
                  <a href="https://www.olioapps.com/" target="_blank">
                    <img
                      src="~/assets/img/sponsors/gold/olioapps-logo.png"
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div> -->
            </div>

            <h3 class="text-center">{{ $t("silver") }}</h3>

            <div class="row supporters-wrap clearfix justify-content-center">
              <div class="col-lg-4 col-md-4 col-xs-6 mb-3">
                <div class="supporter-logo">
                  <a href="https://www.serverlessguru.com/" target="_blank">
                    <img
                      src="~/assets/img/sponsors/silver/serverless_guru-logo.jpeg"
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>

            <h3 class="text-center">{{ $t("community") }}</h3>

            <div class="row supporters-wrap clearfix justify-content-center">
              <div class="col-lg-4 col-md-4 col-xs-6 mb-3">
                <div class="supporter-logo">
                  <a href="https://www.educloud.academy/" target="_blank">
                    <img
                      src="~/assets/img/sponsors/community/educloud.png"
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-xs-6 mb-3">
                <div class="supporter-logo">
                  <a href="https://eazytraining.fr/" target="_blank">
                    <img
                      src="~/assets/img/sponsors/community/EazyTraining-logo.png"
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div
              class="mt-8 pt-5 text-center text-xl font-medium"
              style="font-size: 1.2rem; font-weight: 700"
            >
              <p>
                {{ $t("interestedSponsor") }}
                <NuxtLink
                  to="https://docs.google.com/forms/d/1A5RpqPjdk03atwUGL0bMsdkqDaazVu3iVCBfm_hZoHM/edit"
                  target="_blank"
                  class="text-orange-400 hover:text-orange-600"
                  >{{ $t("applySponsor") }}</NuxtLink
                >
              </p>
            </div>
          </div>
        </section>

        <!--==========================
              Speakers Section
            ============================-->
        <section
          id="speakers"
          class="wow fadeIn"
          style="visibility: visible; animation-name: fadeIn"
        >
          <div class="container">
            <div class="section-header">
              <h2>{{ $t("speakers") }}</h2>
            </div>
            <div
              style="text-align: center; margin-top: -1rem; margin-bottom: 2rem"
            >
              <h4 style="color: #ff9b00; font-weight: bold; font-size: larger">
                {{ $t("keynoteSpeakers") }}
              </h4>
            </div>
            <div class="row">
              <div v-if="windowWidth > 991" class="col-lg-3 col-6"></div>
              <div v-for="person in knspeakers" class="col-lg-3 col-6">
                <div class="speaker" @click="openLink(person.linkedin)">
                  <img
                    :src="person.image"
                    alt="Speaker"
                    class="img-fluid speaker-organizer-image"
                  />
                  <div class="details">
                    <h3>
                      <a :href="person.linkedin" target="_blank">{{
                        person.name
                      }}</a>
                    </h3>
                    <p>{{ person.role }}</p>
                    <p>{{ person.company }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="section-header"
              style="margin-bottom: 4rem; margin-top: 1.5rem"
            ></div>
            <div class="row">
              <div v-for="person in speakers" class="col-lg-3 col-6">
                <div class="speaker" @click="openLink(person.linkedin)">
                  <img
                    :src="person.image"
                    alt="Speaker"
                    class="img-fluid speaker-organizer-image"
                  />
                  <div class="details">
                    <h3>
                      <a :href="person.linkedin" target="_blank">{{
                        person.name
                      }}</a>
                    </h3>
                    <p>{{ person.role }}</p>
                    <p>{{ person.company }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--==========================
              Organizers Section
            ============================-->
        <section
          id="organizers"
          class="wow fadeIn"
          style="visibility: visible; animation-name: fadeIn"
        >
          <div class="container">
            <div class="section-header">
              <h2>{{ $t("organizers") }}</h2>
            </div>

            <div class="row">
              <div v-for="person in organizers" class="col-lg-3 col-6">
                <div class="speaker" @click="openLink(person.linkedin)">
                  <img
                    :src="person.image"
                    alt="Organizer"
                    class="img-fluid speaker-organizer-image"
                  />
                  <div class="details">
                    <h3>
                      <a :href="person.linkedin" target="_blank">{{
                        person.name
                      }}</a>
                    </h3>
                    <p>{{ person.group }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ==========================
              Volunteers Section
            ============================-->
        <div id="volunteers">
          <section id="venue" class="wow fadeIn">
            <div class="container-fluid">
              <div class="section-header">
                <h2>{{ $t("volunteers") }}</h2>
              </div>

              <div style="display: flex; justify-content: center">
                <NuxtLink
                  to="/volunteers"
                  class="btn btn-lg btn-yellow"
                  target="”_blank”"
                  >{{ $t("allVolunteers") }}</NuxtLink
                >
              </div>
            </div>
          </section>
        </div>

        <!--==========================
              FAQ Section
            ============================-->
        <section id="faq" class="wow fadeIn">
          <div class="container">
            <div class="section-header">
              <h2>FAQ</h2>
            </div>

            <div class="row justify-content-center">
              <div class="col-lg-9">
                <ul id="faq-list">
                  <li>
                    <a
                      data-toggle="collapse"
                      class="header collapsed"
                      href="#faq1"
                      ><span>{{ $t("whatAWS") }}</span
                      ><i class="fa fa-minus-circle"></i
                    ></a>
                    <div id="faq1" class="collapse" data-parent="#faq-list">
                      <p>
                        {{ $t("whatAWSText") }}
                      </p>
                      <p>
                        {{ $t("whatAWSMore") }}
                        <a
                          class="text-decoration-none"
                          href="https://aws.amazon.com/events/community-day/"
                          >AWS Community Day</a
                        >
                        {{ $t("whatAWSMore2") }}
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq2"
                      class="header collapsed"
                      ><span>{{ $t("whoAttend") }}</span
                      ><i class="fa fa-minus-circle"></i
                    ></a>
                    <div id="faq2" class="collapse" data-parent="#faq-list">
                      <p>
                        {{ $t("whoAttendText") }}
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq3"
                      class="header collapsed"
                      ><span>{{ $t("registration") }}</span
                      ><i class="fa fa-minus-circle"></i
                    ></a>
                    <div id="faq3" class="collapse" data-parent="#faq-list">
                      <p>
                        {{ $t("registrationText") }}
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq4"
                      class="header collapsed"
                      ><span>{{ $t("fees") }}</span
                      ><i class="fa fa-minus-circle"></i
                    ></a>
                    <div id="faq4" class="collapse" data-parent="#faq-list">
                      <p>
                        {{ $t("feesText") }}
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq5"
                      class="header collapsed"
                      ><span>{{ $t("wherePlace") }}</span
                      ><i class="fa fa-minus-circle"></i
                    ></a>
                    <div id="faq5" class="collapse" data-parent="#faq-list">
                      <p>
                        {{ $t("wherePlaceText")
                        }}<a
                          href="https://yango.com/en_cm/city/douala/"
                          target="_blank"
                          >Yango</a
                        >
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq6"
                      class="header collapsed"
                      ><span>{{ $t("materials") }}</span
                      ><i class="fa fa-minus-circle"></i
                    ></a>
                    <div id="faq6" class="collapse" data-parent="#faq-list">
                      <p>
                        {{ $t("materialsText") }}
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq7"
                      class="header collapsed"
                      ><span>{{ $t("previousEditions") }}</span
                      ><i class="fa fa-minus-circle"></i
                    ></a>
                    <div id="faq7" class="collapse" data-parent="#faq-list">
                      <p>{{ $t("previousEditionsText") }}</p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq8"
                      class="header collapsed"
                      ><span>{{$t('becomeSponsor')}}</span
                      ><i class="fa fa-minus-circle"></i
                    ></a>
                    <div id="faq8" class="collapse" data-parent="#faq-list">
                      <p>
                        {{$t('becomeSponsorText')}}
                        <a href="mailto:awsugdouala@gmail.com"
                          >awsugdouala@gmail.com</a
                        >
                        {{$t('becomeSponsorText2')}}
                        <a href="cutt.ly/awsugcmr-sponsor"
                          >cutt.ly/awsugcmr-sponsor</a
                        >.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="subscribe" class="pt-4">
          <div class="container wow fadeIn pb-5 pt-5">
            <div class="row">
              <div class="col-12">
                <div class="section-header mb-3">
                  <h2>{{ $t("brought") }}</h2>
                </div>
              </div>
              <div class="col-12 mt-3 mb-5">
                <div class="row">
                  <div
                    style="display: flex; justify-content: center"
                    class="col-12 mb-4 col-md-4 mt-2"
                  >
                    <div>
                      <img
                        src="~/assets/img/user-group/aws_user_group_douala_white.svg"
                        alt="TheEvenet"
                        style="height: 6rem"
                      />
                      <p class="pb-1">
                        <strong>AWS User Group Douala</strong>
                      </p>
                      <div style="margin-top: -1rem" class="social-linkss">
                        <a
                          href="https://www.linkedin.com/company/awsugdouala/"
                          target="_blank"
                          class="linkedin"
                        >
                          <i class="fa fa-linkedin"></i>
                        </a>
                        <a
                          href="https://x.com/awsugDouala?t=ZixesJ1G94LJ0XQV98jgOQ&s=09"
                          target="_blank"
                          class="twitter"
                        >
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a
                          href="https://www.meetup.com/awsugdouala"
                          target="_blank"
                          class="linkedin"
                        >
                          <i class="fa fa-meetup"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    style="display: flex; justify-content: center"
                    class="col-12 mb-4 col-md-4 mt-2"
                  >
                    <div>
                      <img
                        src="~/assets/img/user-group/aws_user_group_yaounde_white.svg"
                        alt="TheEvenet"
                        style="height: 6rem"
                      />
                      <p class="pb-1">
                        <strong>AWS User Group Yaounde</strong>
                      </p>
                      <div style="margin-top: -1rem" class="social-linkss">
                        <a
                          href="https://www.linkedin.com/company/aws-user-group-yaounde/"
                          target="_blank"
                          class="linkedin"
                        >
                          <i class="fa fa-linkedin"></i>
                        </a>
                        <a
                          href="https://x.com/awsusergroupyde?t=rNXNf7faYI-SA3WQaOybWQ&s=09"
                          target="_blank"
                          class="twitter"
                        >
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a
                          href="https://www.meetup.com/aws-user-group-yaounde"
                          target="_blank"
                          class="linkedin"
                        >
                          <i class="fa fa-meetup"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    style="display: flex; justify-content: center"
                    class="col-12 col-md-4 mt-2"
                  >
                    <div>
                      <img
                        src="~/assets/img/user-group/awsscc-black-logo.svg"
                        alt="TheEvenet"
                        style="height: 6rem"
                      />
                      <p class="pb-1">
                        <strong>AWS Cloud Clubs UBa</strong>
                      </p>
                      <div style="margin-top: -1rem" class="social-linkss">
                        <a
                          href="https://www.linkedin.com/groups/12922210"
                          target="_blank"
                          class="linkedin"
                        >
                          <i class="fa fa-linkedin"></i>
                        </a>
                        <a
                          href="https://x.com/awssccuba?t=r0MjaQ9gzZxvHY-UX7AnlA&s=09"
                          target="_blank"
                          class="twitter"
                        >
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a
                          href="https://www.meetup.com/aws-cloud-club-at-the-university-of-bamenda"
                          target="_blank"
                          class="linkedin"
                        >
                          <i class="fa fa-meetup"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
<script setup type="ts">
import { ref } from 'vue';
import TableComponent from '~/components/TableComponent.vue';
import { useI18n } from 'vue-i18n';

definePageMeta({
  layout: 'home'
})

const countDownDate = new Date("Jul 13, 2024 00:00:00").getTime();
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const windowWidth = ref(0);


const { locale, t } = useI18n();
// Function to switch between languages
function switchLanguage(lang){
  locale.value = lang
}

// function to make the sponsor block clickable
function openLink(link) {
  window.open(link, '_blank');
}

if (process.client) {
  windowWidth.value = window.innerWidth
  window.addEventListener("resize", () => windowWidth.value = window.innerWidth);

  setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.value = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
  }, 1000);
}

const knspeakers = ref([
  {
    name: "Mohamadou Yacoubou",
    role: "Principal Solutions Architect",
    company: "AWS",
    image: "/speakers/mohamadou_Yacoubou.jpeg",
    linkedin: "https://www.linkedin.com/in/ymohamadou/"
  }, {
    name: "Veliswa Boya",
    role: "Senior Developer Advocate",
    company: "AWS",
    image: "/speakers/Veliswa_boya.jpeg",
    linkedin: "https://www.linkedin.com/in/veliswa-boya/"
  },
])

const speakers = ref([
  {
    name: "Cyril Bandolo",
    role: "AWS Machine Learning Hero",
    company: "Serverless Guru",
    image: "/speakers/Cyril.jpg",
    linkedin: "https://www.linkedin.com/in/cyrilbandolo/"
  },
  {
    name: "Ndimofor Rosius",
    role: "AWS Serverless Hero",
    company: "CTO at EduCloud",
    image: "/speakers/Rosius.jpg",
    linkedin: "https://www.linkedin.com/in/rosius/"
  },

  {
    name: "Tobenna Nwokike",
    role: "Senior Serverless Developer",
    company: "Serverless Guru LLC",
    image: "/speakers/tobenna-nwokike.jpg",
    linkedin: "https://www.linkedin.com/in/tobenna-nwokike/"
  },
  {
    name: "Sébastien Stormacq",
    role: "Principal Developer Advocate",
    company: "AWS",
    image: "/speakers/sebastien_stormaq.jpg",
    linkedin: "https://www.linkedin.com/in/sebastienstormacq/"
  },
  {
    name: "Soh Juvitus Leong",
    role: "Data Scientist ",
    company: "CEO of Skye8 Company Ltd",
    image: "/speakers/soh-juvitus-leong.jpg",
    linkedin: "https://www.linkedin.com/in/soh-juvitus-leong-a3b6601b5/"
  },
  {
    name: "Witah Georjane",
    role: "AWS Cloud Developer",
    company: "Yogaya Inc",
    image: "/speakers/Georjane_Witah.jpg",
    linkedin: "https://www.linkedin.com/in/witah-georjane/"
  },
  {
    name: "Thembile Ndlovu",
    role: "Community Manager",
    company: "AWS",
    image: "/speakers/Thembile_Ndlovu.jpg",
    linkedin: "https://www.linkedin.com/in/thembile-nonhle-ndlovu/"
  },
  {
    name: "Pierre Ange Leundeu",
    role: "Data / ML Engineer",
    company: "DevoTeam",
    image: "/speakers/Pierre_Ange.jpg",
    linkedin: "https://www.linkedin.com/in/paleundeu/"
  },
  {
    name: "Dirane Tafen",
    role: "IT Engineer",
    company: "CTO of EAZYTraining.fr",
    image: "/speakers/willy_dirane.jpg",
    linkedin: "https://www.linkedin.com/in/dirane-willy-tafen-254913b5/"
  },
]);

const organizers = ref([
  {
    name: "Nkwenti Fon Nkwenti",
    group: "AWS User Group Douala",
    image: "/organizers/Fon_Nkwenti.png",
    linkedin: "https://www.linkedin.com/in/nkwenti-fon/"
  },
  {
    name: "Cyril Bandolo",
    group: "AWS User Group Douala",
    image: "/speakers/Cyril.jpg",
    linkedin: "https://www.linkedin.com/in/cyrilbandolo/"
  },
  {
    name: "Ndimofor Rosius",
    group: "AWS User Group Douala",
    image: "/speakers/Rosius.jpg",
    linkedin: "https://www.linkedin.com/in/rosius/"
  },
  {
    name: "Antoine Choula",
    group: "AWS User Group Douala",
    image: "/organizers/Antoine.jpeg",
    linkedin: "https://www.linkedin.com/in/antoine-choula/"
  },

  {
    name: "Asongwed Samantha",
    group: "AWS User Group Douala",
    image: "/organizers/samantha.png",
    linkedin: "https://www.linkedin.com/in/asongwedsamantha/"
  },

  {
    name: "Steve Yonkeu",
    group: "AWS User Group Douala",
    image: "/organizers/SteveYonkeu.jpeg",
    linkedin: "https://www.linkedin.com/in/yokwejuste/"
  },
  {
    name: "Paula Ali Wakabi",
    group: "AWS User Group Yaounde",
    image: "/organizers/Paula.jpg",
    linkedin: "https://www.linkedin.com/in/paulaaliwakabi/"
  },
  {
    name: "Chi Che",
    group: "AWS User Group Yaounde",
    image: "/organizers/Chi_Che.jpeg",
    linkedin: "https://www.linkedin.com/in/chi-che/"
  },
  {
    name: "Delia Ayoko",
    group: "AWS Cloud Clubs UBa",
    image: "/organizers/Delia_Ayoko.jpg",
    linkedin: "https://www.linkedin.com/in/delia-ayoko/"
  },
  {
    name: "Ngumih Fien",
    group: "AWS Cloud Clubs UBa",
    image: "/organizers/Ngumih_Fien.jpg",
    linkedin: "https://www.linkedin.com/in/ngumih-fien/"
  },

]);
</script>

<style></style>
