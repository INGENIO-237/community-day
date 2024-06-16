<template>
  <div>
    <slot></slot>
    <!--==========================
          Footer 
        ============================-->
    <footer id="footer">
      <a href="#" class="back-to-top" style="display: inline"
        ><i class="fa fa-angle-up"></i
      ></a>
      <div class="footer-top mb-5" style="margin-top: -5rem">
        <div class="container" id="lower-footer">
          <div class="row d-flex justify-content-center align-content-center">
            <div
              style="display: flex; justify-content: center"
              class="col-lg-4 col-md-6 footer-contact"
            >
              <div>
                <img
                  style="height: 4rem"
                  src=".././assets/img/white-aws-community-day.svg"
                  alt="TheEvenet"
                />
              </div>
            </div>
            <div class="col-lg-4 col-md-6 footer-contact">
              <h4>Contact</h4>
              <p>
                Have questions or a proposal? Write to us at
                <a href="mailto:awsugdouala@gmail.com">awsugdouala@gmail.com</a>
              </p>
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
          &copy; Copyright <strong>AWS Community Day Cameroon</strong>. All
          Rights Reserved
        </div>
      </div>
    </footer>
    <!-- #footer -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
