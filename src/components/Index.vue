<template>
    <div id="index">
        <home-navebar></home-navebar>

        <!-- SECTION PARA TESTE DO EFEITO SCROLL-->
        <section></section>
    </div>

    
</template>

<script>
import Navbar from './Navbar'
export default {
    
    components:{
        'home-navebar': Navbar
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