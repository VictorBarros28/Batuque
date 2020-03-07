import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/teste"
    },
    {
      path: "/servicos",
      name: "servicos",
      component: () => import("./components/Servicos.vue")
    },
    {
      path: "/teste",
      name: "teste",
      component: () => import("./components/Teste.vue")
    },
    {
      path: "/teste1",
      name: "teste1",
      component: () => import("./components/Teste1.vue")
    },
    {
      path: "/teste2",
      name: "teste2",
      component: () => import("./components/Teste2.vue")
    },
    {
      path: "/teste3",
      name: "teste3",
      component: () => import("./components/Teste3.vue")
    },
    {
      path: "/index",
      name: "index",
      component: () => import("./components/Index.vue")
    }
  ]
});
