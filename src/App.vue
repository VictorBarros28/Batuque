<template>
  <div id="app">
    <Banner></Banner>
    <servicos></servicos>
    
      
     
     <Formulario></Formulario>
  </div>
</template>

<script>
import Banner from './components/Banner'
import servicos from './components/Servicos'
import Formulario from './components/Formulario'
export default {
  components:{
    Banner,
    Formulario,
    servicos
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
