// import App from '@/App.vue';

// // App Components imports
// import Nav from '@/components/Nav.vue'
// import Banner from '@/components/Banner.vue'
// import Index from '@/components/Index.vue';
// import Carrossel from '@/components/Carrossel.vue';
// import Sonhos from '@/components/sonhos.vue';
// import Footer from '@/components/Footer.vue';
// import Servicos from '@/components/Servicos.vue';
// import Editorial from '@/components/editorial.vue';
// import Sinalizacao from '@/components/sinalizacao.vue';
// import Sites from '@/components/sites.vue';
// import Ambientacao from '@/components/ambientacao.vue';
// import Identidade from '@/components/identidade.vue';
// import DescricaoGrafico from '@/components/DescricaoGrafico.vue'
// import DescricaoInteriores from '@/components/DescricaoInteriores.vue'
// import DescricaoProdutos from '@/components/DescricaoProdutos.vue'

// let index = {
//     path: "/index",
//     name: "index",
//     component: Index
    
// }

// let nav = {
//   path: "/nav",
//   name: "nav",
//   component: Nav
// }

// let banner = {
//   path: "/banner",
//   name: "banner",
//   component: Banner
// }

// let sobre = {
//     path: "/sobre",
//     name: "sobre",
//     component: Carrossel
// }

// let sonhos = {
//     path: "/sonhos",
//     name: "sonhos",
//     component: Sonhos,
    
// }

// let footer = {
//     path: "/Footer",
//     name : "Footer",
//     component: Footer
// }


// let servicos = {
//     name: 'Servicos',
//     path: '/Servicos',
//     component: Servicos,
   
// }


// let app = {
//     path: "/",
//     redirect: "/index",
//     component: App,
//     children: [
//         index,
//         sobre,
//         sonhos,
//         footer,
//         servicos,
//         nav,
//         banner,
        
//           {
//               path: "/identidade",
//               component: Identidade,
//               name: "identidade",
//           },
//           {
//                   path: "/ambientacao",
//                   component: Ambientacao,
//                   name: "ambientacao",
//                 },
//                 {
//                   path: "/sinalizacao",
//                   component:Sinalizacao,
//                   name: "sinalizacao",
//                 },
//                 {
//                   path: "/editorial",
//                   component:Editorial,
//                   name: "editorial",
//                 },
//                 {
//                   path: "/sites",
//                   component:Sites,
//                   name: "sites",
//                 },
//                 {
//                   path: "/grafico",
//                   component: DescricaoGrafico,
//                   name: "grafico",
//               },
//               {
//                       path: "/interiores",
//                       component: DescricaoInteriores,
//                       name: "interiores",
//                     },
//                     {
//                       path: "/produtos",
//                       component:DescricaoProdutos,
//                       name: "produtos",
//                     },
//       ],
    
// }


// const routes = [ 
//     app,
//     // invalid routes will be redirect to home page
//     {
//         path: "/*",
//         redirect: "/home"
//     }
// ]

// export default routes;
















import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  //mode:'history',
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path:"/servicos",
      name:"Servicos",
      component: () => import("./components/Servicos.vue") ,
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
