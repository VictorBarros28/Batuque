import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BootstrapVue from "bootstrap-vue";

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css'; 

import VueAwesomeSwiper from 'vue-awesome-swiper';
import VeeValidate from "vee-validate";

import 'swiper/dist/css/swiper.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
require("bootstrap-css-only/css/bootstrap.min.css");
require("mdbvue/lib/css/mdb.min.css");
require("@fortawesome/fontawesome-free/css/all.min.css");
Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(VueAwesomeSwiper)
Vue.use(VueMaterial)


import Index from './components/Index.vue'
import Carrossel from './components/Carrossel.vue'
Vue.component('home-navbar',Index)
Vue.component('carrossel', Carrossel)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
