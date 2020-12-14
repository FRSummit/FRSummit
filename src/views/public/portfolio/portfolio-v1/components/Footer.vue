<template>
  <footer id="footer">
    <div class="container">
      <h3>{{ name }}</h3>
      <p>
        An experienced team player with excellent communication and
        interpersonal skills who has the ability to work independently under
        pressure
      </p>
      <div class="social-links">
        <a href="https://twitter.com/" target="_blank" class="twitter"
          ><i class="bx bxl-twitter"></i
        ></a>
        <a href="https://www.facebook.com/fayazurrahman.summit" target="_blank" class="facebook"
          ><i class="bx bxl-facebook"></i
        ></a>
        <a href="https://www.instagram.com/frsummit" target="_blank" class="instagram"
          ><i class="bx bxl-instagram"></i
        ></a>
        <a href="skype:sky.net793" class="google-plus"
          ><i class="bx bxl-skype"></i
        ></a>
        <a href="https://www.linkedin.com/in/frsummit" target="_blank" class="linkedin"
          ><i class="bx bxl-linkedin"></i
        ></a>
      </div>
      <div class="copyright">
        &copy; Copyright <strong><span>{{ name }}</span></strong
        > 2018  
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: [license-url] -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ -->
        Designed by <a href="https://www.facebook.com/fayazurrahman.summit" target="_blank">{{ name }}</a>
      </div>
    </div>
  </footer>
</template>

<script>
import defaultData from "../data";
export default {
  data() {
    return {
      name: defaultData.name,
    };
  },
};
</script>