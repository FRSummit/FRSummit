import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

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
