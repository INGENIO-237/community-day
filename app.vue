<template>
  <div>
    <NuxtLayout>
      <div>
        <!--==========================
          Header
        ============================-->
        <header id="header">
          <div class="container">
            <div id="logo" class="pull-left">
              <a href="#intro" class="scrollto"
                ><img
                  src="~/assets/img/logo-cd.png"
                  alt="AWS Community Day Poland"
                  title="AWS Community Day Poland"
              /></a>
            </div>

            <nav id="nav-menu-container">
              <ul class="nav-menu">
                <li class="menu-active"><a href="#intro">Home</a></li>
                <li><a href="#schedule">Agenda</a></li>
                <li><a href="#venue">Location</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#supporters">Sponsors</a></li>
                <li><a href="#speakers">Speakers</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#footer">Contact</a></li>
                <li><a href="../">PL</a></li>
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
              src="~/assets/img/logo-cd.png"
              class="logo"
              title="AWS Community Day Poland"
            />
            <h4 class="mb-4 pb-0">13th July 2024, Douala</h4>
            <div class="text-center">
              <a
                href="https://docs.google.com/forms/d/1EUVFyK4U85jVJgSr_NmZPQAmZKrl9L04BCmB37hYQK8/edit"
                target="_blank"
                type="button"
                class="btn btn-lg btn-yellow"
                >Register</a
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
                    Countdown to the largest <span>AWS</span> cloud conference
                    in Cameroon
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
                          Days
                        </div>
                      </div>
                      <div class="box"></div>
                      <div class="box">
                        <div id="js-clock-hours" class="clock-number">
                          {{ hours }}
                        </div>
                        <div class="clock-label">Hours</div>
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
                          <div class="clock-label">Seconds</div>
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
                <h2>Agenda</h2>
              </div>
              <div class="row justify-content-center mb-5">
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
                    <h2>Stay Organized with Agenda App!</h2>
                    <p style="color: white">
                      Get our Agenda App today and have all the agenda details
                      and important updates right at your fingertips, wherever
                      you go.
                    </p>
                    <a
                      href="https://aws-community-day-poland.sessionize.com/"
                      class="btn btn-lg btn-yellow"
                      target="”_blank”"
                      >Open Agenda App</a
                    >
                    <a
                      href="./ratesessions?surelynotcached"
                      class="btn btn-lg btn-yellow"
                      id="rate-session-link"
                      target="”_blank”"
                      >Rate sessions</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="container section section-4 inv">
            <div class="agenda text-left">
              <div class="table">
                <div class="thead">
                  <div class="tr">
                    <div class="th idx">
                      <div>
                        <p>Time</p>
                      </div>
                    </div>
                    <div class="th" colspan="4">
                      <div>
                        <p>Track 1</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tbody">
                  <div class="tr">
                    <div class="td idx">
                      <div>
                        <p>10:30 AM - 11:00 AM</p>
                      </div>
                    </div>
                    <div class="td" colspan="4">
                      <div>
                        <p>Check-In and Networking</p>
                      </div>
                    </div>
                  </div>
                  <div class="tr">
                    <div class="td idx">
                      <div>
                        <p>11:00 AM - 11:30 AM</p>
                      </div>
                    </div>
                    <div class="td" colspan="4">
                      <div>
                        <p>Welcome</p>
                      </div>
                    </div>
                  </div>

                  <div class="tr">
                    <div class="td idx">
                      <div>
                        <p>11:30 AM - 11:50 AM</p>
                      </div>
                    </div>
                    <div class="td" colspan="4">
                      <div>
                        <p>Keynote: TBD</p>
                      </div>
                    </div>
                  </div>

                  <div class="tr gap">
                    <div class="td idx">
                      <div>
                        <p>1:10 PM - 2:10 PM</p>
                      </div>
                    </div>
                    <div class="td" colspan="4">
                      <div>
                        <p>Sessions: TBD</p>
                      </div>
                    </div>
                  </div>

                  <div class="tr">
                    <div class="td idx">
                      <div>
                        <p>3:00 PM - 3:40 PM</p>
                      </div>
                    </div>
                    <div class="td" colspan="4">
                      <div>
                        <p>Tea Break</p>
                      </div>
                    </div>
                  </div>
                  <div class="tr gap">
                    <div class="td idx">
                      <div>
                        <p>3:40 PM - 3:50 PM</p>
                      </div>
                    </div>

                    <div class="td" colspan="4">
                      <div>
                        <p>Sessions: TBD</p>
                      </div>
                    </div>
                  </div>
                  <div class="tr">
                    <div class="td idx">
                      <div>
                        <p>04:40 PM - 5:20 PM</p>
                      </div>
                    </div>
                    <div class="td" colspan="4">
                      <div>
                        <p>Launch</p>
                      </div>
                    </div>
                  </div>
                  <div class="tr gap">
                    <div class="td idx">
                      <div>
                        <p>5:20 PM - 5:45 PM</p>
                      </div>
                    </div>
                    <div class="td" colspan="4">
                      <div>
                        <p>Sessions, Workshops, AWS Game Day: TBD</p>
                      </div>
                    </div>
                  </div>
                  <div class="tr last">
                    <div class="td idx">
                      <div>
                        <p>5:45 PM - 6:10 PM</p>
                      </div>
                    </div>
                    <div class="td" colspan="4">
                      <div>
                        <p>Closing Note</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ==========================
              Venue Section
            ============================-->
          <section id="venue" class="wow fadeIn">
            <div class="container-fluid">
              <div class="section-header">
                <h2>Location</h2>
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
                      <p>Camerooun</p>
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
              </div>
            </div>
          </section>
          

          <!-- ==========================
            Gallery Section
          ============================-->
          <section id="gallery" class="wow fadeIn">
            <div class="container-fluid">
              <div class="section-header">
                <h2>Gallery</h2>
              </div>

              <div class="carousel">
                <div class="">
                  <img src="~/assets/img/past-events/event-01.png" class="img-fluid gallery-image" alt="Carousel Image">
                </div>
                <div class="">
                  <img src="~/assets/img/past-events/event-02.png" class="img-fluid gallery-image" alt="Carousel Image">
                </div>
                <div class="">
                  <img src="~/assets/img/past-events/event-03.png" class="img-fluid gallery-image" alt="Carousel Image">
                </div>
                <div class="">
                  <img src="~/assets/img/past-events/event-04.png" class="img-fluid gallery-image" alt="Carousel Image">
                </div>
                <div class="">
                  <img src="~/assets/img/past-events/event-05.png" class="img-fluid gallery-image" alt="Carousel Image">
                </div>
                <div class="">
                  <img src="~/assets/img/past-events/event-06.png" class="img-fluid gallery-image" alt="Carousel Image">
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
                <h2>OUR ESTEEMED SPONSORS</h2>
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

              <h3 class="text-center">Gold</h3>

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
                <div class="col-lg-4 col-md-4 col-xs-6 mb-3">
                  <div class="supporter-logo">
                    <a href="https://www.olioapps.com/" target="_blank">
                      <img
                        src="~/assets/img/sponsors/gold/olioapps-logo.png"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
              
              
              <h3 class="text-center">Silver</h3>

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

              <h3 class="text-center">Community</h3>

              <div class="row supporters-wrap clearfix justify-content-center">
                <div class="col-lg-4 col-md-4 col-xs-6 mb-3">
                  <div class="supporter-logo">
                    <a
                      href="https://www.educloud.academy/"
                      target="_blank"
                    >
                      <img
                        src="~/assets/img/sponsors/community/educloud.png"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-xs-6 mb-3">
                  <div class="supporter-logo">
                    <a
                      href="https://eazytraining.fr/"
                      target="_blank"
                    >
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
                  Interested in becoming a sponsor?
                  <NuxtLink
                    to="https://docs.google.com/forms/d/1A5RpqPjdk03atwUGL0bMsdkqDaazVu3iVCBfm_hZoHM/edit"
                    target="_blank"
                    class="text-orange-400 hover:text-orange-600"
                    >Apply here</NuxtLink
                  >
                </p>
              </div>
            </div>
          </section>

          <!--==========================
              Speakers Section
            ============================-->
          <section
            id="organizers"
            class="wow fadeIn"
            style="visibility: visible; animation-name: fadeIn"
          >
            <div class="container">
              <div class="section-header">
                <h2>SPEAKERS</h2>
              </div>

              <div class="row">
                <div v-for="person in speakers" class="col-lg-3 col-6">
                  <div class="speaker" @click="openLink(person.linkedin)">
                    <img :src="person.image" alt="Speaker" class="img-fluid" />
                    <div class="details">
                      <h3>
                        <a :href="person.linkedin" target="_blank">{{
                          person.name
                        }}</a>
                      </h3>
                      <p>{{ person.role }}</p>
                    </div>
                  </div>              
                </div>
              </div>
            </div>
          </section>

          <!--==========================
              Volunteers Section
            ============================-->
          <!-- <div
            id="volunteers"
            class="section-6 inv container volunteers-container"
          >
            <div class="volunteers">
              <div class="section-header">
                <h2>VOLUNTEERS</h2>
              </div>
              <div class="vl-row-list">
                <div class="vl-i flex-it hcenter">
                  <div
                    v-for="person in volunteers"
                    :key="`${person.firstname}-${person.lastname}`"
                    class="person"
                    :data-fname="person.firstname"
                    :data-lname="person.lastname"
                  >
                    <div :class="person.image" class="img">
                      <NuxtLink target="_blank" :to="person.twitterLink">
                        <i class="icon large ion-logo-linkedin"></i>@{{
                          person.twitterLink.split("/")[
                            person.twitterLink.length - 1
                          ]
                        }}</NuxtLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->

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
                        ><span>What is AWS Community Day?</span
                        ><i class="fa fa-minus-circle"></i
                      ></a>
                      <div id="faq1" class="collapse" data-parent="#faq-list">
                        <p>
                          AWS Community Day is a one-day event organized by the
                          AWS community for the community. It's an opportunity
                          for AWS users to meet and learn from each other, share
                          best practices, and listen to presentations from
                          industry experts.
                        </p>
                        <p>
                          More information can be found on the official
                          <a
                            class="text-decoration-none"
                            href="https://aws.amazon.com/events/community-day/"
                            >AWS Community Day</a
                          >
                          website
                        </p>
                      </div>
                    </li>

                    <li>
                      <a
                        data-toggle="collapse"
                        href="#faq2"
                        class="header collapsed"
                        ><span>Who can participate in the event?</span
                        ><i class="fa fa-minus-circle"></i
                      ></a>
                      <div id="faq2" class="collapse" data-parent="#faq-list">
                        <p>
                          AWS Community Day is open to all interested AWS users,
                          regardless of their level of expertise.
                        </p>
                      </div>
                    </li>

                    <li>
                      <a
                        data-toggle="collapse"
                        href="#faq3"
                        class="header collapsed"
                        ><span
                          >Is registration required to participate in the
                          event?</span
                        ><i class="fa fa-minus-circle"></i
                      ></a>
                      <div id="faq3" class="collapse" data-parent="#faq-list">
                        <p>
                          Yes, registration is required to participate in the
                          event. Please register on the event website.
                        </p>
                      </div>
                    </li>

                    <li>
                      <a
                        data-toggle="collapse"
                        href="#faq4"
                        class="header collapsed"
                        ><span
                          >Are there any fees associated with participating in
                          the event?</span
                        ><i class="fa fa-minus-circle"></i
                      ></a>
                      <div id="faq4" class="collapse" data-parent="#faq-list">
                        <p>
                          No, participation in AWS Community Day is free of
                          charge.
                        </p>
                      </div>
                    </li>

                    <li>
                      <a
                        data-toggle="collapse"
                        href="#faq5"
                        class="header collapsed"
                        ><span>Where will the event take place and how much will it cost to get there?</span
                        ><i class="fa fa-minus-circle"></i
                      ></a>
                      <div id="faq5" class="collapse" data-parent="#faq-list">
                        <p>
                          Gare Camrail de bessengue some meters around feu rouge bessengue.
                          From rond-point to the location, It costs 500 frs with a bike alone (moto) or 350 frs with a taxi.
                        </p>
                      </div>
                    </li>

                    <li>
                      <a
                        data-toggle="collapse"
                        href="#faq6"
                        class="header collapsed"
                        ><span
                          >Will there be any materials available from the
                          event?</span
                        ><i class="fa fa-minus-circle"></i
                      ></a>
                      <div id="faq6" class="collapse" data-parent="#faq-list">
                        <p>
                          Yes, materials from the event, such as presentations
                          or photos, will be made available on the event
                          website.
                        </p>
                      </div>
                    </li>

                    <li>
                      <a
                        data-toggle="collapse"
                        href="#faq7"
                        class="header collapsed"
                        ><span>What does the previous editions look like?</span
                        ><i class="fa fa-minus-circle"></i
                      ></a>
                      <div id="faq7" class="collapse" data-parent="#faq-list">
                        <p>
                          Check gallery section, and our previous website at
                          <a href="https://2023.awscommunity.pl"
                            >2023.awscommunity.pl</a
                          >
                          or
                          <a href="https://2022.awscommunity.pl"
                            >2022.awscommunity.pl</a
                          >.
                        </p>
                      </div>
                    </li>

                    <li>
                      <a
                        data-toggle="collapse"
                        href="#faq8"
                        class="header collapsed"
                        ><span>How to become a sponsor?</span
                        ><i class="fa fa-minus-circle"></i
                      ></a>
                      <div id="faq8" class="collapse" data-parent="#faq-list">
                        <p>
                          Write to us directly at
                          <a href="mailto:hello@awscommunity.pl"
                            >hello@awscommunity.pl</a
                          >
                          or leave a contact here:
                          <a
                            href="http://sponsor.awscommunity.pl"
                            target="_blank"
                            >sponsor.awscommunity.pl</a
                          >. We will send you our sponsorship prospectus, which
                          includes detailed information about sponsorship levels
                          and benefits.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <!--==========================
          Footer 
        ============================-->
        <footer id="footer">
          <a href="#" class="back-to-top" style="display: inline"><i class="fa fa-angle-up"></i></a>
          <div class="footer-top mb-5">
            <div class="container">
              <div class="section-header">
                <div style="text-align: center">
                  <img src="~/assets/img/logo-cd.png" alt="TheEvenet" />
                </div>
                <h2 class="tag">Brought To You By</h2>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-6 footer-info">
                  <img src="~/assets/img/user-group/user%20group%20douala.svg" alt="TheEvenet" />
                  <p class="pb-2">
                    <strong>AWS User Group Douala</strong>
                  </p>
                  <div class="social-links">
                    <a
                      href="https://www.linkedin.com/company/awsugdouala/"
                      class="linkedin">
                      <i class="fa fa-linkedin"></i>
                    </a>
                    <a
                      href="https://x.com/awsugDouala?t=ZixesJ1G94LJ0XQV98jgOQ&s=09"
                      class="twitter">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.meetup.com/awsugdouala"
                      class="linkedin">
                      <i class="fa fa-meetup"></i>
                    </a>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 footer-info">
                  <img src="~/assets/img/user-group/yaounde%20user%20group%201.svg" alt="TheEvenet" />
                  <p class="pb-2">
                    <strong>AWS User Group Yaounde</strong>
                  </p>
                  <div class="social-links">
                    <a
                      href="https://www.linkedin.com/company/aws-user-group-yaounde/"
                      class="linkedin">
                      <i class="fa fa-linkedin"></i>
                    </a>
                    <a
                      href="https://x.com/awsusergroupyde?t=rNXNf7faYI-SA3WQaOybWQ&s=09"
                      class="twitter">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.meetup.com/aws-user-group-yaounde"
                      class="linkedin">
                      <i class="fa fa-meetup"></i>
                    </a>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 footer-info">
                  <img src="~/assets/img/user-group/awsscc-black-logo.svg" alt="TheEvenet" />
                  <p class="pb-2">
                    <strong>AWS Cloud Clubs UBa</strong>
                  </p>
                  <div class="social-links">
                    <a
                      href="https://www.linkedin.com/groups/12922210"
                      class="linkedin">
                      <i class="fa fa-linkedin"></i>
                    </a>
                    <a
                      href="https://x.com/awssccuba?t=r0MjaQ9gzZxvHY-UX7AnlA&s=09"
                      class="twitter">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.meetup.com/aws-cloud-club-at-the-university-of-bamenda"
                      class="linkedin">
                      <i class="fa fa-meetup"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr id="line" />
            <div class="container" id="lower-footer">
              <div class="row d-flex justify-content-center align-content-center">
                <div class="col-lg-4 col-md-6 footer-contact">
                  <h4>Contact</h4>
                  <p>
                    Have questions or a proposal? Write to us at
                    <a href="mailto:awsugdouala@gmail.com"
                    >awsugdouala@gmail.com</a
                    >
                  </p>

                  <div class="social-links">
                    <a
                        href="https://www.linkedin.com/company/awsugdouala/"
                        class="linkedin">
                      <i class="fa fa-linkedin"></i>
                    </a>
                    <a
                        href="https://x.com/awsugDouala?t=ZixesJ1G94LJ0XQV98jgOQ&s=09"
                        class="twitter">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a
                        href="https://www.meetup.com/awsugdouala"
                        class="linkedin">
                      <i class="fa fa-meetup"></i>
                    </a>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 footer-links">
                  <h4>Call For Papers</h4>
                  <a
                      href="https://sessionize.com/aws-community-day-cameroon-2024/"
                      target="”_blank”"
                  ><img
                      src="https://sessionize.com/landing/images/brand/banners/sessionize-banner-medium.png"
                      alt="The smart way to do Call for Papers, Schedule and Speaker Management."
                      width="220"
                      height="80"
                  /></a>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="copyright">
              &copy; Copyright <strong>AWS Community Day Cameroon</strong>. All Rights Reserved
            </div>
          </div>
        </footer>
        <!-- #footer -->
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup type="ts">

const countDownDate = new Date("Jul 13, 2024 00:00:00").getTime();
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

  // function to make the sponsor block clickable
  function openLink(link) {
    window.open(link, '_blank');
  }


  import { ref } from 'vue';

  const images = [
    'event-01.png',
    'event-02.png',
    'event-03.png',
  ];

  const activeIndex = ref(0);

  if(process.client){
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

  document.addEventListener("DOMContentLoaded", function () {
    if (!hasConsent()) {
        showCookieConsent();
    }
  });
}
  
const volunteers = ref([
  {
    firstname: "Rosius",
    lastname: "Ndimofor",
    twitterLink: "",
    image: "bg-[url('/images/Rosius.jpeg?url')]",
  },
  {
    firstname: "Cyril ",
    lastname: "Bandolo",
    twitterLink: "",
    image: "bg-[url('/images/Cyril.jpeg?url')]",
  },
  {
    firstname: "Ngumih ",
    lastname: "Fien",
    twitterLink: "",
    image: "bg-[url('/images/Ngumih.jpeg?url')]",
  },
  {
    firstname: "Delia",
    lastname: "Ayoko",
    twitterLink: "",
    image: "bg-[url('/images/Delia.jpeg?url')]",
  },
  {
    firstname: "Desmond",
    lastname: "Chi Che",
    twitterLink: "",
    image: "bg-[url('/images/ChiChe.jpeg?url')]",
  },
  {
    firstname: "Nkwenti",
    lastname: "Fon Nkwenti",
    twitterLink: "",
    image: "bg-[url('/images/Nkwenti.jpeg?url')]",
  },
  {
    firstname: "Paula",
    lastname: "Wakabi",
    twitterLink: "",
    image: "bg-[url('/images/Paula.jpeg?url')]",
  },
  {
    firstname: "Antoine",
    lastname: "Choula",
    twitterLink: "",
    image: "bg-[url('/images/Antoine.jpeg?url')]",
  },
  {
    firstname: "Samantha",
    lastname: "Asongwed",
    twitterLink: "",
    image: "bg-[url('/images/Samantha.png?url')]",
  },
  {
    firstname: "Zion",
    lastname: "Kongbi",
    twitterLink: "",
    image: "bg-[url('/images/zion.png?url')]",
  },
  {
    firstname: "Steve",
    lastname: "Yonkeu",
    twitterLink: "",
    image: "bg-[url('/images/steve.jpeg?url')]",
  },
  {
    firstname: "Gwladys",
    lastname: "Godem Pokam",
    twitterLink: "",
    image: "bg-[url('/images/gwladys.jpeg?url')]",
  },
]);

const speakers = ref([
  {
    name: "Cyril Bandolo",
    role: "Serverless Developer, Serverless Guru",
    image: "/speakers/Cyril.jpg",
    linkedin: "https://www.linkedin.com/in/cyrilbandolo/"
  },
  {
    name: "Ndimofor Rosius",
    role: "CTO at EduCloud, AWS Serverless Hero",
    image: "/speakers/Rosius.jpg",
    linkedin: "https://www.linkedin.com/in/rosius/"
  },
]);



    function hasConsent() {
        return localStorage.getItem("cookieConsent") === "true";
    }

    function showCookieConsent() {
        const cookieConsentBanner = document.getElementById("cookie-consent");
        if(cookieConsentBanner) cookieConsentBanner.style.display = "block";
    }

    function acceptCookies() {
        localStorage.setItem("cookieConsent", "true");
        const cookieConsentBanner = document.getElementById("cookie-consent");
       if(cookieConsentBanner) cookieConsentBanner.style.display = "none";
    }
</script>

<style>

  .speaker {
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .gallery-image {
    width: 100%;
    height: 200px; /* Adjust the height as needed */
    object-fit: cover;
  }

  .carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.carousel > div {
  scroll-snap-align: start;
  flex: 0 0 auto;
  margin-right: 10px;
  border: 2px solid #ccc;
}

.carousel > div.active {
  border-color: orange;
  border-width: 4px;
}


.sz-cssgrid.sz-cssgrid--45393 {
  --fraction-size: 1fr;

  grid-template-rows:
    [tracks] auto
    [time-0900] var(--fraction-size)
    [time-0905] var(--fraction-size)
    [time-0910] var(--fraction-size)
    [time-0915] var(--fraction-size)
    [time-0920] var(--fraction-size)
    [time-0925] var(--fraction-size)
    [time-0930] var(--fraction-size)
    [time-0935] var(--fraction-size)
    [time-0940] var(--fraction-size)
    [time-0945] var(--fraction-size)
    [time-0950] var(--fraction-size)
    [time-0955] var(--fraction-size)
    [time-1000] var(--fraction-size)
    [time-1005] var(--fraction-size)
    [time-1010] var(--fraction-size)
    [time-1015] var(--fraction-size)
    [time-1020] var(--fraction-size)
    [time-1025] var(--fraction-size)
    [time-1030] var(--fraction-size)
    [time-1035] var(--fraction-size)
    [time-1040] var(--fraction-size)
    [time-1045] var(--fraction-size)
    [time-1050] var(--fraction-size)
    [time-1055] var(--fraction-size)
    [time-1100] var(--fraction-size)
    [time-1105] var(--fraction-size)
    [time-1110] var(--fraction-size)
    [time-1115] var(--fraction-size)
    [time-1120] var(--fraction-size)
    [time-1125] var(--fraction-size)
    [time-1130] var(--fraction-size)
    [time-1135] var(--fraction-size)
    [time-1140] var(--fraction-size)
    [time-1145] var(--fraction-size)
    [time-1150] var(--fraction-size)
    [time-1155] var(--fraction-size)
    [time-1200] var(--fraction-size)
    [time-1205] var(--fraction-size)
    [time-1210] var(--fraction-size)
    [time-1215] var(--fraction-size)
    [time-1220] var(--fraction-size)
    [time-1225] var(--fraction-size)
    [time-1230] var(--fraction-size)
    [time-1235] var(--fraction-size)
    [time-1240] var(--fraction-size)
    [time-1245] var(--fraction-size)
    [time-1250] var(--fraction-size)
    [time-1255] var(--fraction-size)
    [time-1300] var(--fraction-size)
    [time-1305] var(--fraction-size)
    [time-1310] var(--fraction-size)
    [time-1315] var(--fraction-size)
    [time-1320] var(--fraction-size)
    [time-1325] var(--fraction-size)
    [time-1330] var(--fraction-size)
    [time-1335] var(--fraction-size)
    [time-1340] var(--fraction-size)
    [time-1345] var(--fraction-size)
    [time-1350] var(--fraction-size)
    [time-1355] var(--fraction-size)
    [time-1400] var(--fraction-size)
    [time-1405] var(--fraction-size)
    [time-1410] var(--fraction-size)
    [time-1415] var(--fraction-size)
    [time-1420] var(--fraction-size)
    [time-1425] var(--fraction-size)
    [time-1430] var(--fraction-size)
    [time-1435] var(--fraction-size)
    [time-1440] var(--fraction-size)
    [time-1445] var(--fraction-size)
    [time-1450] var(--fraction-size)
    [time-1455] var(--fraction-size)
    [time-1500] var(--fraction-size)
    [time-1505] var(--fraction-size)
    [time-1510] var(--fraction-size)
    [time-1515] var(--fraction-size)
    [time-1520] var(--fraction-size)
    [time-1525] var(--fraction-size)
    [time-1530] var(--fraction-size)
    [time-1535] var(--fraction-size)
    [time-1540] var(--fraction-size)
    [time-1545] var(--fraction-size)
    [time-1550] var(--fraction-size)
    [time-1555] var(--fraction-size)
    [time-1600] var(--fraction-size)
    [time-1605] var(--fraction-size)
    [time-1610] var(--fraction-size)
    [time-1615] var(--fraction-size)
    [time-1620] var(--fraction-size)
    [time-1625] var(--fraction-size);
  grid-template-columns:
    [times] 4em
    [track-43889-start] 1fr
    [track-43889-end track-43890-start] 1fr
    [track-43890-end track-43891-start] 1fr
    [track-43891-end track-45831-start] 1fr
    [track-45831-end];
}
</style>
