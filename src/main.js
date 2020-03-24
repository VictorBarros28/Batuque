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


import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)

// This imports <b-modal> as well as the v-b-modal directive as a plugin:
import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)

// This imports <b-card> along with all the <b-card-*> sub-components as a plugin:
import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)

// This imports directive v-b-scrollspy as a plugin:
import { VBScrollspyPlugin } from 'bootstrap-vue'
Vue.use(VBScrollspyPlugin)

// This imports the dropdown and table plugins
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)

import AOS from 'aos'
import 'aos/dist/aos.css'



Vue.config.productionTip = false;

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
