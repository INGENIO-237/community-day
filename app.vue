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
                <li><a href="#supporters">Partners</a></li>
                <li><a href="#organizers">Organizers</a></li>
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
          Newsletter Modal
        ============================-->
        <!-- <div id="modal-newsletter" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="newsletterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content modal-newsletter-content">
                    <div class="modal-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <h2 class="modal-title mb-2" id="newsletterTitle">Registration starts soon!</h2>
                                    <h5>Want to stay informed? Sign up for our newsletter and we will notify you first.</h5>

                                    <form action="https://awscommunity.us11.list-manage.com/subscribe/post?u=d24162d21aca77c26d58ddf40&amp;id=436f85a8b0&amp;f_id=001d9fe0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate">
                                        <div id="mce-responses" class="clear foot">
                                            <div class="alert alert-success" id="mce-success-response" style="display:none"></div>
                                            <div class="alert alert-danger" id="mce-error-response" style="display:none"></div>
                                        </div>

                                        <div class="form-row">
                                            <div class="col-12 col-md-6 mt-2">
                                                <input type="text" class="form-control form-control-lg" placeholder="First Name" autocomplete="off" name="FNAME" id="mce-FNAME" required>
                                            </div>
                                            <div class="col-12 col-md-6 mt-2">
                                                <input type="email" class="form-control form-control-lg required email" placeholder="E-mail" autocomplete="off" name="EMAIL" id="mce-EMAIL" required>
                                            </div>
                                        </div>

                                        <div class="form-group mt-2">
                                            <button type="submit" class="btn btn-lg btn-yellow btn-block">
                                                <span>Notify me</span>
                                            </button>
                                            <small class="form-text text-muted">By submitting your email, you agree to receive the Newsletter by email in accordance with the Act of July 18, 2002 on the Provision of Electronic Services (Journal of Laws No. 144, item 1204).</small>
                                        </div>

                                        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_342a285ad37e6dec891a55154_0014b85e2e" tabindex="-1" value>
                                        </div>
                                        <script type="text/javascript" src="https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
                                        <script type="text/javascript">
                                            (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);

                                        </script>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

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
            <h4 class="mb-4 pb-0">
              April 11, 2024, Copernicus Conference Center
            </h4>
            <div class="text-center">
              <a
                type="button"
                class="btn btn-lg btn-yellow"
                data-toggle="modal"
                data-target="#modal-newsletter"
                >Subscribe</a
              >
            </div>
            <h4 class="mb-4 pt-3">
              Do you want to be up to date? Leave your contact
            </h4>
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
                    in Poland
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

              <!-- <script
                class="mt-5"
                type="text/javascript"
                src="https://sessionize.com/api/v2/sg8kwdt1/view/GridSmart"
              ></script> -->
            </div>
          </section>

          <!--==========================
              Speakers Section
            ============================-->

          <!-- <section id="speakers" class="wow fadeIn">
                <div class="container wow fadeIn">
                    <div class="section-header">
                        <h2>Prelegenci</h2>
                    </div>
          
                    <script class="mt-5" type="text/javascript" 
                        src="https://sessionize.com/api/v2/sg8kwdt1/view/SpeakerWall"></script>
                </div>
            </section> -->

          <!-- <section id="speakers" class="wow fadeIn">
              <div class="container">
                <div class="section-header">
                  <h2>Prelegenci</h2>
                </div>

                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="speaker">
                      <img src="./assets/img/speakers/1.jpg" alt="Speaker 1" class="img-fluid">
                      <div class="details">
                        <h3><a href="speaker-details.html">Brenden Legros</a></h3>
                        <p>Quas alias incidunt</p>
                        <div class="social">
                          <a href=""><i class="fa fa-twitter"></i></a>
                          <a href=""><i class="fa fa-facebook"></i></a>
                          <a href=""><i class="fa fa-google-plus"></i></a>
                          <a href=""><i class="fa fa-linkedin"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="speaker">
                      <img src="./assets/img/speakers/2.jpg" alt="Speaker 2" class="img-fluid">
                      <div class="details">
                        <h3><a href="speaker-details.html">Hubert Hirthe</a></h3>
                        <p>Consequuntur odio aut</p>
                        <div class="social">
                          <a href=""><i class="fa fa-twitter"></i></a>
                          <a href=""><i class="fa fa-facebook"></i></a>
                          <a href=""><i class="fa fa-google-plus"></i></a>
                          <a href=""><i class="fa fa-linkedin"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="speaker">
                      <img src="./assets/img/speakers/3.jpg" alt="Speaker 3" class="img-fluid">
                      <div class="details">
                        <h3><a href="speaker-details.html">Cole Emmerich</a></h3>
                        <p>Fugiat laborum et</p>
                        <div class="social">
                          <a href=""><i class="fa fa-twitter"></i></a>
                          <a href=""><i class="fa fa-facebook"></i></a>
                          <a href=""><i class="fa fa-google-plus"></i></a>
                          <a href=""><i class="fa fa-linkedin"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="speaker">
                      <img src="./assets/img/speakers/4.jpg" alt="Speaker 4" class="img-fluid">
                      <div class="details">
                        <h3><a href="speaker-details.html">Jack Christiansen</a></h3>
                        <p>Debitis iure vero</p>
                        <div class="social">
                          <a href=""><i class="fa fa-twitter"></i></a>
                          <a href=""><i class="fa fa-facebook"></i></a>
                          <a href=""><i class="fa fa-google-plus"></i></a>
                          <a href=""><i class="fa fa-linkedin"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="speaker">
                      <img src="./assets/img/speakers/5.jpg" alt="Speaker 5" class="img-fluid">
                      <div class="details">
                        <h3><a href="speaker-details.html">Alejandrin Littel</a></h3>
                        <p>Qui molestiae natus</p>
                        <div class="social">
                          <a href=""><i class="fa fa-twitter"></i></a>
                          <a href=""><i class="fa fa-facebook"></i></a>
                          <a href=""><i class="fa fa-google-plus"></i></a>
                          <a href=""><i class="fa fa-linkedin"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="speaker">
                      <img src="./assets/img/speakers/6.jpg" alt="Speaker 6" class="img-fluid">
                      <div class="details">
                        <h3><a href="speaker-details.html">Willow Trantow</a></h3>
                        <p>Non autem dicta</p>
                        <div class="social">
                          <a href=""><i class="fa fa-twitter"></i></a>
                          <a href=""><i class="fa fa-facebook"></i></a>
                          <a href=""><i class="fa fa-google-plus"></i></a>
                          <a href=""><i class="fa fa-linkedin"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </section> -->

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
                      <h3>Copernicus Conference Center</h3>
                      <p>
                        The Conference Center, situated in the prestigious and
                        modern part of the Copernicus Science Center building,
                        is located in the heart of Warsaw, right on the banks of
                        the Vistula River. Access to it is convenient via the
                        second metro line, with the Copernicus Science Center
                        station.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid venue-gallery-container">
              <div class="row no-gutters">
                <div class="col-lg-3 col-md-3">
                  <div class="venue-gallery">
                    <a
                      href="./assets/img/venue-gallery/1.jpg"
                      class="venobox"
                      data-gall="venue-gallery"
                    >
                      <img
                        src="~/assets/img/venue-gallery/1.jpg"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6">
                  <div class="venue-gallery">
                    <a
                      href="./assets/img/venue-gallery/5.jpg"
                      class="venobox"
                      data-gall="venue-gallery"
                    >
                      <img
                        src="~/assets/img/venue-gallery/5.jpg"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3">
                  <div class="venue-gallery">
                    <a
                      href="./assets/img/venue-gallery/2.jpg"
                      class="venobox"
                      data-gall="venue-gallery"
                    >
                      <img
                        src="~/assets/img/venue-gallery/2.jpg"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6">
                  <div class="venue-gallery">
                    <a
                      href="./assets/img/venue-gallery/4.jpg"
                      class="venobox"
                      data-gall="venue-gallery"
                    >
                      <img
                        src="~/assets/img/venue-gallery/4.jpg"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6">
                  <div class="venue-gallery">
                    <a
                      href="./assets/img/venue-gallery/3.jpg"
                      class="venobox"
                      data-gall="venue-gallery"
                    >
                      <img
                        src="~/assets/img/venue-gallery/3.jpg"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6">
                  <div class="venue-gallery">
                    <a
                      href="./assets/img/venue-gallery/6.jpg"
                      class="venobox"
                      data-gall="venue-gallery"
                    >
                      <img
                        src="~/assets/img/venue-gallery/6.jpg"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6">
                  <div class="venue-gallery">
                    <a
                      href="./assets/img/venue-gallery/7.1.jpg"
                      class="venobox"
                      data-gall="venue-gallery"
                    >
                      <img
                        src="~/assets/img/venue-gallery/7.1.jpg"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6">
                  <div class="venue-gallery">
                    <a
                      href="./assets/img/venue-gallery/8.1.jpg"
                      class="venobox"
                      data-gall="venue-gallery"
                    >
                      <img
                        src="~/assets/img/venue-gallery/8.1.jpg"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!--==========================
              Gallery Section
            ============================-->
          <section id="gallery" class="wow fadeIn">
            <div class="container">
              <div class="section-header">
                <h2>Gallery</h2>
                <p>Gallery of last year's edition</p>
              </div>
            </div>

            <div class="owl-carousel gallery-carousel">
              <a
                href="./assets/img/gallery/01.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/01.JPG"
              /></a>
              <a
                href="./assets/img/gallery/02.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/02.JPG"
              /></a>
              <a
                href="./assets/img/gallery/03.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/03.JPG"
              /></a>
              <a
                href="./assets/img/gallery/04.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/04.JPG"
              /></a>
              <a
                href="./assets/img/gallery/05.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/05.JPG"
              /></a>
              <a
                href="./assets/img/gallery/06.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/06.JPG"
              /></a>
              <a
                href="./assets/img/gallery/07.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/07.JPG"
              /></a>
              <a
                href="./assets/img/gallery/08.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/08.JPG"
              /></a>
              <a
                href="./assets/img/gallery/9.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/9.JPG"
              /></a>
              <a
                href="./assets/img/gallery/10.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/10.JPG"
              /></a>
              <a
                href="./assets/img/gallery/11.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/11.JPG"
              /></a>
              <a
                href="./assets/img/gallery/12.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/12.JPG"
              /></a>
              <a
                href="./assets/img/gallery/13.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/13.JPG"
              /></a>
              <a
                href="./assets/img/gallery/14.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/14.JPG"
              /></a>
              <a
                href="./assets/img/gallery/15.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/15.JPG"
              /></a>
              <a
                href="./assets/img/gallery/16.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/16.JPG"
              /></a>
              <a
                href="./assets/img/gallery/17.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/17.JPG"
              /></a>
              <a
                href="./assets/img/gallery/18.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/18.JPG"
              /></a>
              <a
                href="./assets/img/gallery/19.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/19.JPG"
              /></a>
              <a
                href="./assets/img/gallery/20.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/20.JPG"
              /></a>
              <a
                href="./assets/img/gallery/21.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/21.JPG"
              /></a>
              <a
                href="./assets/img/gallery/22.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/22.JPG"
              /></a>
              <a
                href="./assets/img/gallery/23.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/23.JPG"
              /></a>
              <a
                href="./assets/img/gallery/24.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/24.JPG"
              /></a>
              <a
                href="./assets/img/gallery/25.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/25.JPG"
              /></a>
              <a
                href="./assets/img/gallery/26.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/26.JPG"
              /></a>
              <a
                href="./assets/img/gallery/27.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/27.JPG"
              /></a>
              <a
                href="./assets/img/gallery/28.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/28.JPG"
              /></a>
              <a
                href="./assets/img/gallery/30.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/30.JPG"
              /></a>
              <a
                href="./assets/img/gallery/31.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/31.JPG"
              /></a>
              <a
                href="./assets/img/gallery/32.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/32.JPG"
              /></a>
              <a
                href="./assets/img/gallery/33.JPG"
                class="venobox"
                data-gall="gallery-carousel"
                ><img src=".././assets/img/gallery/33.JPG"
              /></a>
            </div>
          </section>

          <!--==========================
              Sponsors Section
            ============================-->
          <section id="supporters" class="section-with-bg wow fadeIn">
            <div class="container">
              <div class="section-header">
                <h2>Partners</h2>
              </div>

              <h3 class="text-center"></h3>

              <h3 class="text-center"></h3>

              <h3 class="text-center">Platinum</h3>

              <div class="row supporters-wrap clearfix justify-content-center">
                <div class="col-lg-5 col-md-5 col-xs-5 mb-3">
                  <div class="supporter-logo">
                    <center>
                      <a
                        href="https://www.arrow.com/globalecs/pl/producenci/netapp/"
                        target="_blank"
                      >
                        <img
                          src="~/assets/img/supporters/NetApp_Arrow.png"
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
                        src="~/assets/img/supporters/N-iX.png"
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
                        src="~/assets/img/supporters/IT_HUB.png"
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
                          src="~/assets/img/supporters/chaosgears.png"
                          style="display: block; max-width: 70% !important"
                        />
                      </center>
                    </a>
                  </div>
                </div>
              </div>

              <h3 class="text-center">Gold</h3>

              <div class="row supporters-wrap clearfix justify-content-center">
                <div class="col-lg-4 col-md-4 col-xs-6">
                  <div class="supporter-logo">
                    <a href="https://billennium.com/" target="_blank">
                      <img
                        src="~/assets/img/supporters/Billennium.png"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-xs-6 mb-3">
                  <div class="supporter-logo">
                    <a href="https://www.tameshi.eu/" target="_blank">
                      <img
                        src="~/assets/img/supporters/Tameshi.png"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-xs-6 mb-3">
                  <div class="supporter-logo">
                    <a
                      href="https://www.gft.com/pl/pl/career?utm_source=www&utm_medium=link&utm_campaign=aws"
                      target="_blank"
                    >
                      <img
                        src="~/assets/img/supporters/GFT_1.png"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-xs-6 mb-3">
                  <div class="supporter-logo">
                    <a
                      href="https://careers.klika-tech.com/poland/?utm_source=awscommunitysitepl&utm_medium=awscommunitysitepl&utm_campaign=awscommunitysitepl"
                      target="_blank"
                    >
                      <img
                        src="~/assets/img/supporters/KT.png"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-xs-6 mb-3">
                  <div class="supporter-logo" style="text-align: center">
                    <a href="https://pin-up.business/" target="_blank">
                      <img
                        src="~/assets/img/supporters/pin-up.png"
                        class="img-fluid"
                        style="max-width: 60%"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <h3 class="text-center">Silver</h3>

              <div class="row supporters-wrap clearfix justify-content-center">
                <div class="col-lg-3 col-md-4 col-xs-6 mb-3">
                  <div class="supporter-logo">
                    <a href="https://evoila.com/" target="_blank">
                      <img
                        src="~/assets/img/supporters/evoila.png"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>

                <div class="col-lg-3 col-md-4 col-xs-6 mb-3">
                  <div class="supporter-logo">
                    <a href="https://pl.tdsynnex.com/" target="_blank">
                      <img
                        src="~/assets/img/supporters/tdsynnex.png"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!--==========================
              Media Partners Section
            ============================-->
          <section id="patrons" class="section-with-bg wow fadeIn">
            <div class="container">
              <div class="section-header">
                <h2>Media Patrons</h2>
              </div>

              <div class="row patrons-wrap clearfix justify-content-center">
                <div class="col-lg-3 col-md-4 col-xs-6">
                  <div class="patrons-logo">
                    <a href="https://swiatchmury.pl/" target="_blank">
                      <img
                        src="~/assets/img/patrons/swiatchmury.png"
                        class="img-fluid"
                        alt="ŚwiatChmury.pl"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-xs-6">
                  <div class="patrons-logo">
                    <a href="https://podyplomowe.wsei.edu.pl/" target="_blank">
                      <img
                        src="~/assets/img/patrons/wsei.png"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!--==========================
              Organizers Section
            ============================-->
          <section id="organizers" class="wow fadeIn">
            <div class="container">
              <div class="section-header">
                <h2>Organizers</h2>
              </div>

              <div class="row">
                <div class="col-lg-3 col-6">
                  <div class="speaker">
                    <img
                      src="~/assets/img/organizers/1.jpg"
                      alt="Organizer 1"
                      class="img-fluid"
                    />
                    <div class="details">
                      <h3>
                        <a
                          href="https://www.linkedin.com/in/maria-kmita-wo%C5%82ek/"
                          target="_blank"
                          >Maria Kmita-Wołek</a
                        >
                      </h3>
                      <p>AWS Community Builder</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-6">
                  <div class="speaker">
                    <img
                      src="~/assets/img/organizers/2.jpg"
                      alt="Organizer 2"
                      class="img-fluid"
                    />
                    <div class="details">
                      <h3>
                        <a
                          href="https://www.linkedin.com/in/katarzyna-machowska-843451170/"
                          target="_blank"
                          >Katarzyna Machowska</a
                        >
                      </h3>
                      <p>AWS Community Builder</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-6">
                  <div class="speaker">
                    <img
                      src="~/assets/img/organizers/3.jpg"
                      alt="Organizer 3"
                      class="img-fluid"
                    />
                    <div class="details">
                      <h3>
                        <a
                          href="https://www.linkedin.com/in/dominik-grzywaczewski/"
                          target="_blank"
                          >Dominik Grzywaczewski</a
                        >
                      </h3>
                      <p>AWS Hero</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-6">
                  <div class="speaker">
                    <img
                      src="~/assets/img/organizers/4.jpg"
                      alt="Organizer 4"
                      class="img-fluid"
                    />
                    <div class="details">
                      <h3>
                        <a
                          href="https://www.linkedin.com/in/maciejlelusz/"
                          target="_blank"
                          >Maciej Lelusz</a
                        >
                      </h3>
                      <p>AWS Hero</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-6">
                  <div class="speaker">
                    <img
                      src="~/assets/img/organizers/5.jpg"
                      alt="Organizer 5"
                      class="img-fluid"
                    />
                    <div class="details">
                      <h3>
                        <a
                          href="https://www.linkedin.com/in/lukaszdorosz/"
                          target="_blank"
                          >Łukasz Dorosz</a
                        >
                      </h3>
                      <p>AWS Hero</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-6">
                  <div class="speaker">
                    <img
                      src="~/assets/img/organizers/6.jpg"
                      alt="Organizer 6"
                      class="img-fluid"
                    />
                    <div class="details">
                      <h3>
                        <a
                          href="https://www.linkedin.com/in/rmitula/"
                          target="_blank"
                          >Rafał Mituła</a
                        >
                      </h3>
                      <p>AWS Hero</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-6">
                  <div class="speaker">
                    <img
                      src="~/assets/img/organizers/7.jpg"
                      alt="Organizer 7"
                      class="img-fluid"
                    />
                    <div class="details">
                      <h3>
                        <a
                          href="https://www.linkedin.com/in/pawelpiwosz/"
                          target="_blank"
                          >Paweł Piwosz</a
                        >
                      </h3>
                      <p>AWS Community Builder</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-6">
                  <div class="speaker">
                    <img
                      src="~/assets/img/organizers/8.jpg"
                      alt="Organizer 8"
                      class="img-fluid"
                    />
                    <div class="details">
                      <h3>
                        <a
                          href="https://www.linkedin.com/in/tomaszdudek95/"
                          target="_blank"
                          >Tomasz Dudek</a
                        >
                      </h3>
                      <p>AWS Hero</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
                        ><span>Where will the event take place?</span
                        ><i class="fa fa-minus-circle"></i
                      ></a>
                      <div id="faq5" class="collapse" data-parent="#faq-list">
                        <p>
                          The event will take place at Copernicus Conference
                          Center in Warsaw
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

          <!--==========================
              Subscribe Section
            ============================-->
          <section id="subscribe">
            <div class="container wow fadeIn pb-5 pt-5">
              <div class="row">
                <div class="col-12">
                  <div class="section-header mb-2">
                    <h2>Newsletter</h2>
                    <p>Do you want to be up to date? Leave your contact</p>
                  </div>
                </div>
                <form
                  action="https://awscommunity.us11.list-manage.com/subscribe/post?u=d24162d21aca77c26d58ddf40&amp;id=436f85a8b0&amp;f_id=001d9fe0f0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  class="w-100 validate"
                >
                  <div class="col-12 mt-2">
                    <div class="row">
                      <div class="col-12">
                        <div id="newsletter-responses" class="clear foot">
                          <div
                            class="alert alert-success"
                            id="newsletter-success-response"
                            style="display: none"
                          ></div>
                          <div
                            class="alert alert-danger"
                            id="newsletter-error-response"
                            style="display: none"
                          ></div>
                        </div>
                      </div>

                      <div class="col-12 col-md-4 mt-2">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          placeholder="First Name"
                          autocomplete="off"
                          value
                          name="FNAME"
                          id="mce-FNAME"
                          required
                        />
                      </div>
                      <div class="col-12 col-md-4 mt-2">
                        <input
                          type="email"
                          class="form-control form-control-lg"
                          placeholder="E-mail"
                          autocomplete="off"
                          name="EMAIL"
                          id="mce-EMAIL"
                          required
                        />
                      </div>
                      <div class="col-12 col-md-4 mt-2">
                        <button
                          type="submit"
                          class="btn btn-lg btn-yellow btn-block"
                        >
                          <span>Subscribe</span>
                        </button>
                      </div>
                      <div class="col-12">
                        <small id="emailHelp" class="form-text text-muted"
                          >By submitting your email, you agree to receive the
                          Newsletter by email in accordance with the Act of July
                          18, 2002 on the Provision of Electronic Services
                          (Journal of Laws No. 144, item 1204).</small
                        >
                      </div>
                    </div>
                  </div>

                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div
                    style="position: absolute; left: -5000px"
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_342a285ad37e6dec891a55154_0014b85e2e"
                      tabindex="-1"
                      value
                    />
                  </div>
                  <!-- <script
                    type="text/javascript"
                    src="https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
                  ></script> -->
                  <!-- <script type="text/javascript">
                    (function ($) {
                      window.fnames = new Array();
                      window.ftypes = new Array();
                      fnames[0] = "EMAIL";
                      ftypes[0] = "email";
                      fnames[1] = "FNAME";
                      ftypes[1] = "text";
                      fnames[2] = "LNAME";
                      ftypes[2] = "text";
                      fnames[4] = "PHONE";
                      ftypes[4] = "phone";
                      fnames[5] = "BIRTHDAY";
                      ftypes[5] = "birthday";
                    })(jQuery);
                    var $mcj = jQuery.noConflict(true);
                  </script> -->
                </form>
              </div>
            </div>
          </section>
        </main>

        <!--==========================
          Footer 
        ============================-->
        <footer id="footer">
          <a href="#" class="back-to-top" style="display: inline"
            ><i class="fa fa-angle-up"></i
          ></a>
          <div class="footer-top">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-6 footer-info">
                  <img src="~/assets/img/logo-cd.png" alt="TheEvenet" />
                  <p class="pb-2">
                    <strong>AWS User Groups in Poland</strong>
                  </p>
                  <div style="text-align: left">
                    <img
                      src="~/assets/img/aws-ug-poland.png"
                      alt="AWS UG Poland"
                    />
                  </div>
                  <p class="text-muted mb-2">
                    Personal data administrator:<br />ATANET, ul. Renifera
                    Rudolfa 14, 05-506 Lesznowola
                  </p>
                  <p>
                    <small>
                      <a
                        class="text-muted mb-2"
                        style="color: #ffffff"
                        href="./privacy"
                        target="”_blank”"
                        >personal data processing consent</a
                      >
                    </small>
                    <br />
                    <small>
                      <a
                        class="text-muted mb-2"
                        style="color: #ffffff"
                        href="./policy"
                        target="”_blank”"
                        >event policy</a
                      >
                    </small>
                  </p>
                  <a
                    href="https://awscommunity.us11.list-manage.com/unsubscribe?u=d24162d21aca77c26d58ddf40&id=436f85a8b0"
                    target="_blank"
                  >
                    <span>Unsubscribe me from the mailing list</span>
                  </a>
                </div>

                <div class="col-lg-4 col-md-6 footer-contact">
                  <h4>Contact</h4>
                  <p>
                    Have questions or a proposal? Write to us at
                    <a href="mailto:hello@awscommunity.pl"
                      >hello@awscommunity.pl</a
                    >
                  </p>

                  <div class="social-links">
                    <a
                      href="https://www.linkedin.com/company/aws-community-day-poland/"
                      class="linkedin"
                      ><i class="fa fa-linkedin"></i
                    ></a>
                    <a
                      href="https://www.meetup.com/pl-PL/awsugpl/"
                      class="linkedin"
                      ><i class="fa fa-meetup"></i
                    ></a>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 footer-links">
                  <h4>Call For Papers</h4>
                  <a
                    href="https://sessionize.com/aws-community-day-warsaw-2024/"
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
              &copy; Copyright <strong>AWS Community Day Poland</strong>. All
              Rights Reserved
            </div>
            <div class="credits">
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </footer>
        <!-- #footer -->

        <!--==========================
          Cookies Sectio
        ============================-->
        <div id="cookie-consent">
          <span
            >Our website uses cookies for Google Analytics and control
            performance purposes.</span
          >
          <button onclick="acceptCookies()">
            <span>Got it!</span>
          </button>
        </div>
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
