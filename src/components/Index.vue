<template>
    <div id="index">
        <home-navebar></home-navebar>

        <!-- SECTION PARA TESTE DO EFEITO SCROLL-->
        <section></section>
        <Servicos></Servicos>
        
        <Formulario></Formulario>

    </div>

    
</template>

<script>
import Navbar from './Navbar'
import Formulario from './Formulario'
import Servicos from './Servicos'
export default {
    
    components:{
        'home-navebar': Navbar,
        Servicos,
        Formulario
    }
}
</script>

<style>
    section{
        width: 100%;
        height: 125vh;
        background-color: yellowgreen;
    }
</style>