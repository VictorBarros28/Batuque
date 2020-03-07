<template>
    <div class="teste">


       <router-view />
       
        
    </div>    

</template>


<script>
import Banner from './Banner'


import Formulario from './Formulario'

export default {
     components:{
       
    
        'banner': Banner,
       
        Formulario
       
    }
  
    
}
</script>

<style>
    .teste{
        
        border: 1px solid black;
        display:flex;
        justify-content:center;
    }

</style>