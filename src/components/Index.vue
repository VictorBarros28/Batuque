<template>
    <div id="index">

       
     
        
        
        
        
    </div>

    
</template>

<script>
import Navbar from './Navbar'
import Banner from './Banner'
import Formulario from './Formulario'

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