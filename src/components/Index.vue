<template>
    <div id="index">
        <banner></banner>
        <Carrossel></Carrossel>
        <Clientes></Clientes>
        <Footer></Footer>
        
        
        
        
    </div>

    
</template>

<script>
import Navbar from './Navbar'
import Banner from './Banner'
import Formulario from './Formulario'

import Servicos from './Servicos'
import Carrossel from './Carrossel'
import Footer from './Footer'
import Clientes from './Clientes'
export default {
    
    components:{
        'home-navebar': Navbar,
        Servicos,
        Banner,
        Carrossel,
        Footer,
        Formulario,
        Clientes
    }
}
</script>

<style>
    #index{
        background-color: #f8f8f8;
    }
</style>