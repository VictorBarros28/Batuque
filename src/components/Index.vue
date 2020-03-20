<template>
    <div id="index">
        <banner></banner>
        <Carrossel></Carrossel>
        
        
        
    </div>

    
</template>

<script>
import Navbar from './Navbar'
import Banner from './Banner'
import Formulario from './Formulario'
import Servicos from './Servicos'
import Carrossel from './Carrossel'
export default {
    
    components:{
        'home-navebar': Navbar,
        Servicos,
        Formulario,
        Banner,
        Carrossel
    }
}
</script>

<style>
    
</style>