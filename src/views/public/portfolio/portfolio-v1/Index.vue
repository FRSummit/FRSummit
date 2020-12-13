<template>
  <div class="portfolio-v1">
    <!-- ======= Mobile nav toggle button ======= -->
    <button type="button" class="mobile-nav-toggle d-xl-none">
      <i class="icofont-navigation-menu"></i>
    </button>
    <Header />
    <Hero />
    <main id="main">
      <About />
      <Facts />
      <Skills />
      <Resume />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
    <a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>
    <div id="preloader"></div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Facts from "./components/Facts";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Hero,
    About,
    Facts,
    Skills,
    Resume,
    Portfolio,
    Services,
    Testimonials,
    Contact,
    Footer,
  },
  data() {
    return {};
  },
  created() {
    document.querySelector("#common-layout").remove();
    this.portfolioAssets();
  },
  mounted() {},
  methods: {
    portfolioAssets() {
      // let externalScript = document.createElement("script");
      // externalScript.setAttribute('src', '../../../../assets/portfolio/portfolio-v1/vendor/jquery/jquery.min.js');
      // document.body.appendChild(externalScript);
      let portfolio_v1_scripts = [
        "../../../../assets/portfolio/portfolio-v1/vendor/jquery/jquery.min.js",
        "../../../../assets/portfolio/portfolio-v1/vendor/bootstrap/js/bootstrap.bundle.min.js",
        "../../../../assets/portfolio/portfolio-v1/vendor/jquery.easing/jquery.easing.min.js",
        "../../../../assets/portfolio/portfolio-v1/vendor/php-email-form/validate.js",
        "../../../../assets/portfolio/portfolio-v1/vendor/waypoints/jquery.waypoints.min.js",
        "../../../../assets/portfolio/portfolio-v1/vendor/counterup/counterup.min.js",
        "../../../../assets/portfolio/portfolio-v1/vendor/isotope-layout/isotope.pkgd.min.js",
        "../../../../assets/portfolio/portfolio-v1/vendor/venobox/venobox.min.js",
        "../../../../assets/portfolio/portfolio-v1/vendor/owl.carousel/owl.carousel.min.js",
        "../../../../assets/portfolio/portfolio-v1/vendor/typed.js/typed.min.js",
        "../../../../assets/portfolio/portfolio-v1/vendor/aos/aos.js",
        "../../../../assets/portfolio/portfolio-v1/js/main.js",
      ];
      for (let i = 0; i < portfolio_v1_scripts.length; i++) {
        console.log(portfolio_v1_scripts[i]);
        let externalScript = document.createElement("script");
        externalScript.setAttribute("src", portfolio_v1_scripts[i]);
        document.body.appendChild(externalScript);
      }

      // let pro_v1_css = [
      //     'assets/vendor/bootstrap/css/bootstrap.min.css',
      //     'assets/vendor/icofont/icofont.min.css',
      //     'assets/vendor/boxicons/css/boxicons.min.css',
      //     'assets/vendor/venobox/venobox.css',
      //     'assets/vendor/owl.carousel/assets/owl.carousel.min.css',
      //     'assets/vendor/aos/aos.css',
      //     'assets/css/style.css'
      // ]
      // var link = document.createElement("link");
      // link.type = "text/css";
      // link.rel = "stylesheet";
      // document.body.appendChild(link);
    },
  },
};
</script>

<style scoped>
@import "../../../../assets/portfolio/portfolio-v1/vendor/bootstrap/css/bootstrap.min.css";
@import "../../../../assets/portfolio/portfolio-v1/vendor/icofont/icofont.min.css";
@import "../../../../assets/portfolio/portfolio-v1/vendor/boxicons/css/boxicons.min.css";
@import "../../../../assets/portfolio/portfolio-v1/vendor/venobox/venobox.css";
@import "../../../../assets/portfolio/portfolio-v1/vendor/owl.carousel/assets/owl.carousel.min.css";
@import "../../../../assets/portfolio/portfolio-v1/vendor/aos/aos.css";
@import "../../../../assets/portfolio/portfolio-v1/css/style.css";

/** 
 * npm install vue-aos --save
**/
</style>