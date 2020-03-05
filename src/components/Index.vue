<template>
    <div id="index">
        <banner></banner>

        <!-- SECTION PARA TESTE DO EFEITO SCROLL-->
        <section></section>
        <Formulario></Formulario>

    </div>

    
</template>

<script>
import Navbar from './Navbar'
import Banner from './Banner'
import Formulario from './Formulario'
export default {
    
    components:{
        'home-navebar': Navbar,
        Banner,
        Formulario,
    }
}
</script>

<style>
    
</style>