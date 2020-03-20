<template>
    <div id="index">
        <banner></banner>
 
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
export default {
    
    components:{
        'home-navebar': Navbar,
        Servicos,
        Banner,
        Carrossel,
        Footer,
        Formulario
    }
}
</script>

<style>
    
</style>