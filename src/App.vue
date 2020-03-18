<template>
  <div id="app">
    <Banner></Banner>
    <Clientes></Clientes>
   
  
      
     
  </div>
</template>

<script>
import Banner from './components/Banner'
import Footer from './components/Footer.vue'
import Clientes from './components/Clientes.vue'
export default {
  components:{
    Banner,
    Footer,
    Clientes,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>