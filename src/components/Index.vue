<template>
    <div id="index">

              
    
    <Banner></Banner>
    <Carrossel></Carrossel>
       <Servicos></Servicos>
     <sonhos></sonhos>     

     <!-- <router-view name="produtos"/> -->
       <Clientes></Clientes>
        <Footer></Footer>
        
        
    </div>

    
</template>

<script>
import Navbar from './Navbar'
import Banner from './Banner'
import Formulario from './Formulario'
import sonhos from './sonhos'
import Carrossel from './Carrossel'
import Clientes from './Clientes'
import Servicos from './Servicos'
import Footer from './Footer'

export default {
    
    components:{
        'home-navebar': Navbar,
        Servicos,
        Banner,
        Carrossel,
        Clientes,
        Footer,
        Formulario,
        sonhos,
      

    }
}
</script>

<style>
    #index{
        background-color: #f8f8f8;
    }
    .sonhos{
        height: 100vh;
    }
</style>