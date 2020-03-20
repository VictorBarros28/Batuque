<template>
    <div id="index">
        <banner></banner>


        
    </div>

    
</template>

<script>
import Navbar from './Navbar'
import Banner from './Banner'
import Formulario from './Formulario'
import Servicos from './Servicos'
export default {
    
    components:{
        'home-navebar': Navbar,
        Servicos,
        Formulario,
        Banner
    }
}
</script>

<style>
    
</style>