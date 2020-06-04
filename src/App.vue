<template>
  <div id="app">
    <Nav></Nav>
    <Banner></Banner>
    <Carrossel></Carrossel> 
 
       <router-view />
 
    <logolateral></logolateral>
    <sonhos></sonhos>
    <Clientes></Clientes>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import Footer from "./components/Footer.vue";
import Carrossel from "./components/Carrossel";
import Clientes from "./components/Clientes";
import Servicos from "./components/Servicos";
import Nav from "./components/Nav";
import sonhos from "./components/sonhos";
import logolateral from "./components/logolateral"
export default {
  components: {
    Banner,
    Footer,
    Carrossel,
    Clientes,
    Servicos,
    Nav,
    sonhos,
    logolateral,
  },
};
</script>

<style>

* {
  margin: 0;
  padding: 0;
}
.sonhos {
  background-color: #f8f8f8;
}
#app {
  background-color: #f8f8f8;
}
</style>
