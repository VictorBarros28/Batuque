import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
<<<<<<< HEAD
import VeeValidate from 'vee-validate';
import Formulario from './components/Formulario.vue'
=======
import VeeValidate from "vee-validate";
import Index from './components/Index.vue'
>>>>>>> origin/navbar

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.component('home-navbar',Index)

Vue.config.productionTip = false;
Vue.component('forms', Formulario)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
