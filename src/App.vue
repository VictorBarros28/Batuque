<template>
  <div id="app">
   <Nav></Nav>
    <Banner></Banner>
    <Carrossel></Carrossel>
     
     <router-view/>
     <router-view name="produtos"/>
       <Clientes></Clientes>
        <Footer></Footer>
   
  
      
     
  </div>
</template>

<script>
  import Banner from './components/Banner'
  import Footer from './components/Footer.vue'
  import Carrossel from './components/Carrossel'
  import Clientes from './components/Clientes'
  import Servicos from './components/Servicos'
  import Nav from './components/Nav'
  import sonhos from './components/sonhos'
export default {
  components:{
    Banner,
    Footer,
    Carrossel,
    Clientes,
    Servicos,
    Nav,
    sonhos,
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
