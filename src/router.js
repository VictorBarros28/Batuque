import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/grafico",
      name: "grafico",
      component: () => import("./components/DescricaoGrafico.vue")
    },
    {
      path: "/interiores",
      name: "interiores",
      component: () => import("./components/DescricaoInteriores.vue")
    },
    {
      path: "/produtos",
      name: "produtos",
      component: () => import("./components/DescricaoProdutos.vue")
    },
    {
      path: "/index",
      name: "index",
      component: () => import("./components/Index.vue")
    }
  ]
});
