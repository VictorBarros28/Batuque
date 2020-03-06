<template>
    <div id="index">
        <banner></banner>

        <!-- SECTION PARA TESTE DO EFEITO SCROLL-->
        <section></section>
        <Footer></Footer>

    </div>

    
</template>

<script>
import Banner from './Banner'
import Navbar from './Navbar'

import Footer from './Footer.vue'
export default {
    
    components:{
         'home-navebar': Navbar,
        Footer,
        'banner': Banner
    }
}
</script>

<style>
    
</style>