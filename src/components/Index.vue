<template>
    <div id="index">
     <servicos>  </servicos>
   
   
    
    
    


    </div>

    
</template>

<script>
import Banner from './Banner'
import Navbar from './Navbar'
import Servicos from './Servicos'
import Formulario from './Formulario'
import Footer from './Footer.vue'
export default {
    
    components:{
         'home-navebar': Navbar,
        Footer,
        'banner': Banner,
        Servicos,
        Formulario
       
    }
}
</script>

<style>
    
</style>