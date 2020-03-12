<template>
  <div id="app">
    <Banner></Banner>
     <router-view />
   
  
      
     
  </div>
</template>

<script>
import Banner from './components/Banner'
import Footer from './components/Footer.vue'
export default {
  components:{
    Banner,
    Footer,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>