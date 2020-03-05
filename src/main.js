import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import VeeValidate from 'vee-validate';
import Index from './components/Index.vue'


Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.component('home-navbar',Index)




Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
