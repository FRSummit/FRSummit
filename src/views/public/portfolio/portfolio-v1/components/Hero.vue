<template>
  <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>{{ name }}</h1>
      <p>
        I'm
        <span
          class="typed"
          data-typed-items="Web App Developer, Mobile App Developer, Full Stack Developer, Designer"
        ></span>
      </p>
      <div class="social-links">
        <a href="https://twitter.com/" target="_blank" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="https://www.facebook.com/fayazurrahman.summit" target="_blank" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="https://www.instagram.com/frsummit" target="_blank" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="skype:sky.net793" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="https://www.linkedin.com/in/frsummit" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </section>
</template>

<script>
import defaultData from '../data'
export default {
  data() {
    return {
      name: defaultData.name
    }
  }
}
</script>