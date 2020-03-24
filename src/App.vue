<template>
  <div id="app">
    <Banner></Banner>
    <Carrossel></Carrossel>
     <router-view />
     <div class="sonhos"></div>
        <Clientes></Clientes>
        <Footer></Footer>
   
  
      
     
  </div>
</template>

<script>
  import Banner from './components/Banner'
  import Footer from './components/Footer.vue'
  import Carrossel from './components/Carrossel'
  import Clientes from './components/Clientes'
export default {
  components:{
    Banner,
    Footer,
    Carrossel,
    Clientes,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  
}
.sonhos{
  background-color:#f8f8f8;
}
#app{
  background-color:#f8f8f8;

}
</style>
