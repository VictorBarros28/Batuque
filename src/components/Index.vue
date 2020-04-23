<template>
    <div id="index">

                
   <Nav></Nav>
   <Banner></Banner>
    <Carrossel></Carrossel>
    <Servicos></Servicos>
    <sonhos></sonhos>     
    <Clientes></Clientes>
    <Footer></Footer>
    

        
        
    </div>

    
</template>

<script>
import Nav from './Nav'
import Banner from './Banner'
import Formulario from './Formulario'
import sonhos from './sonhos'
import Carrossel from './Carrossel'
import Clientes from './Clientes'
import Servicos from './Servicos'
import Footer from './Footer'

export default {
    
    components:{
        // 'home-navebar': Nav,
        Nav,
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