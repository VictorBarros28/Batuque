<template>
    <div id="index">
       

        <!-- SECTION PARA TESTE DO EFEITO SCROLL-->
        
        <Servicos></Servicos>
        

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