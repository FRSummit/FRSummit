import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
// import './assets/portfolio/portfolio-v1/vendor/jquery/jquery.min.js'
// import './assets/portfolio/portfolio-v1/vendor/bootstrap/js/bootstrap.bundle.min.js'
// import './assets/portfolio/portfolio-v1/vendor/jquery.easing/jquery.easing.min.js'
// import './assets/portfolio/portfolio-v1/vendor/php-email-form/validate.js'
// import './assets/portfolio/portfolio-v1/vendor/waypoints/jquery.waypoints.min.js'
// import './assets/portfolio/portfolio-v1/vendor/counterup/counterup.min.js'
// import './assets/portfolio/portfolio-v1/vendor/isotope-layout/isotope.pkgd.min.js'
// import './assets/portfolio/portfolio-v1/vendor/venobox/venobox.min.js'
// import './assets/portfolio/portfolio-v1/vendor/owl.carousel/owl.carousel.min.js'
// import './assets/portfolio/portfolio-v1/vendor/typed.js/typed.min.js'
// import './assets/portfolio/portfolio-v1/vendor/aos/aos.js'
// import './assets/portfolio/portfolio-v1/js/main.js'

var firebaseConfig = {
  apiKey: "AIzaSyAMDiMIvw1h0P4kxFY0caIp7m9ohAtdpaI",
  authDomain: "frsummit0.firebaseapp.com",
  databaseURL: "https://frsummit0.firebaseio.com",
  projectId: "frsummit0",
  storageBucket: "frsummit0.appspot.com",
  messagingSenderId: "383779998601",
  appId: "1:383779998601:web:31db8447b3a70c2b4cef58",
  measurementId: "G-TJSPT212RE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
window.firebase = firebase;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
