<template>
    <div id="index">
        <home-navebar></home-navebar>

        <!-- SECTION PARA TESTE DO EFEITO SCROLL-->
        <section></section>
        <Footer></Footer>

    </div>

    
</template>

<script>
import Navbar from './Navbar'

import Footer from './Footer.vue'
export default {
    
    components:{
        'home-navebar': Navbar,
        Footer
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