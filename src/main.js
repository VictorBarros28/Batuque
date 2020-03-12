import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import VeeValidate from 'vee-validate';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Carrossel from './components/Carrossel.vue'

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css'; 


import 'swiper/dist/css/swiper.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(VueAwesomeSwiper)
Vue.use(VueMaterial)

Vue.config.productionTip = false;
Vue.component('carrossel', Carrossel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
