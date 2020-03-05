<template>
    <div>
        <div class="footer">
            <Formulario></Formulario>
            <div class="map">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15737.834151746833!2d-35.7778769!3d-9.5556823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1a0d9e1da01163c9!2sUniversidade%20Federal%20de%20Alagoas%20-%20UFAL!5e0!3m2!1spt-BR!2sbr!4v1583029025424!5m2!1spt-BR!2sbr" width="100%" height="285px" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                 <Contatos></Contatos>
             </div>
         </div>
         <div class="footermobile">
            <div class="mapmobile">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15737.834151746833!2d-35.7778769!3d-9.5556823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1a0d9e1da01163c9!2sUniversidade%20Federal%20de%20Alagoas%20-%20UFAL!5e0!3m2!1spt-BR!2sbr!4v1583029025424!5m2!1spt-BR!2sbr" width="100%" height="285px" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </div>
            <Formulario></Formulario>
            <Contatos class="contatos"></Contatos>
             
         </div>
    </div>
</template>

<script>
import Formulario from './Formulario'
import Contatos from "./Contatos.vue"
export default {
     components:{
        Contatos,
        Formulario,
        
    }
    
}
</script>

<style>
    .footermobile{
        display: none;
    }
    .footer{
       
        display: flex;
        justify-content: space-around;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .map{
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 800px;
        
    }
    @media only screen and (max-width: 1400px) {
        .map{
            width: 670px;
            

        }
    }
    @media only screen and (max-width: 1250px) {
        .map{
            width: 600px;
            

        }
    }
    @media only screen and (max-width: 1150px) {
        .footer{
            display: none;
        }
        .footermobile{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 50px;
        }
        .mapmobile{
            width: 450px;
            padding-bottom: 50px;
        }
        .contatos{
            padding-top: 50px;
        }
        
    }

</style>