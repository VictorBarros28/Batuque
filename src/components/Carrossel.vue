<template>
  <div class="bannerCarrossel" id="About" >
    <md-card>
      <md-card-actions>
        
        
      </md-card-actions>
      <md-card-media>
        <!-- swiper -->
        <swiper :options="swiperOption"
        
        >
        
        <swiper-slide class="slides" >
          <h1  class="titulo">QUEM SOMOS NÓS?</h1>
        <div class="slidecard">  
          <p class="texto">
            Nós prezamos pela melhor relação com nossos clientes, nos identificando e sempre os tratando 
            com o carinho que merecem! 
            E muitas vezes isso se torna uma amizade para vida! :)
          </p>
          <img class="imagens" src="../assets/sobre.png" alt="">
          
        </div>
        </swiper-slide>
        <swiper-slide class="slides">
          <h1    class="titulo">QUEM SOMOS NÓS?</h1>
          <div class="slidecard">
          <p class="texto">
            Um dos nossos maiores objetivos é sem dúvida que todos conheçam 
            e aprendam um pouco sobre Design e assim percebam que Design é sim para todos! 
          </p>
          <img class="imagens" src="../assets/sobre_dois.png" alt="">
        </div>
        </swiper-slide>
        <swiper-slide class="slides">
          <h1   class="titulo">QUEM SOMOS NÓS?</h1>
          <div class="slidecard">
          <p class="texto">Nós acreditamos que por meio do Design conseguimos dar vida aos 
            sonhos dos nossos clientes! 
            Pois, é a partir do nosso trabalho que ele conhece o rosto, 
            personalidade e até mesmo a casa do seu negócio!

          </p>
          <img class="imagens" src="../assets/sobre_tres.png" alt="">
        </div>
        </swiper-slide>
        <swiper-slide class="slides">
          <h1  class="titulo">QUEM SOMOS NÓS?</h1>
          <div class="slidecard">
          <p class="texto">Para nós já virou gíria, mas esse lema da Batuque carrega muito significado! 
            Somos uma empresa fora da curva, com desafios diários e mesmo assim 
            sempre acreditamos no nosso potencial e principalmente no poder de mudança! </p>
          <img class="imagens" src="../assets/sobre_quatro.png" alt="">
          </div>

        </swiper-slide>
        
        
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </md-card-media>
  </md-card>
</div>
</template>


<script>
import AOS from 'aos'
  export default {
    data() {
      return {
        swiperOption: {
          loop:true,
         autoplay:true,
         duration:8000,
          pagination: {
            el: '.swiper-pagination',    
          }
        }
      }
    }
  }
</script>

<style>
 .slidecard{
   
   display: flex;
   justify-content: space-between;
   width: 100%;
   padding-bottom: 180px;
 }
  .imagens{

    padding-left:15px;
  }
.bannerCarrossel h1{
  font-size: 50px !important;
  color: #707070;
  font-family: 'Segoe UI' !important;
  font-weight: 500 !important;
 padding-top:80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 60px;
  z-index: 2;
}

.slides{
  
  width: 100%;
  height: 0%;
  background-color: rgba(255, 255, 255, 0.750);
  display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-around;
  padding-left: 17.5%;
  padding-right: 17.5%;
  align-items: center;
  
  z-index: 1;
}
.bannerCarrossel{
  background-image: url('../assets/banner.png');
  width: 100%;
  height: 100vh;
  background-position: right;
  background-size: cover;
 
}
.swiper-slide{
  height: 100vh !important;
}
.md-card-actions{
  padding: 0px !important;
}
.imagens{
  width: 350px !important;
  height: 350px !important;
  
}
.texto{
  width: 440px;
 /* height:225px; */
  text-align: center;
  font-family: Calibri;
  color: #707070;
  font-size: 25px;
  letter-spacing: -1.86px;
  line-height: 46px;
  text-align: justify;
  transition:0.2s;
  
}

@media screen and (max-height: 780px)  {
    .slidecard{
     
      padding-bottom: 25px;
    }
}



@media screen and (max-height: 780px)  and (max-width: 825px) {
  .slidecard{
      
    }
    .texto {
    line-height: 30px;
    transition:0.2s;
    }
    .imagens {
    width: 220px !important;
    height: 220px !important;
    }
}



@media screen and (max-width: 700px){

.texto{
  font-size: 20px;
  letter-spacing: 0;
    line-height: 25px;
    width: 80%;
    transition:0.2s;
}
.imagens{
  width: 280px !important;
  height: 280px !important;
}
.slides{
  padding-left: 3%;
  padding-right: 3%;
}
.bannerCarrossel h1{
  font-size: 30px !important;
  margin-top: 8% !important;
  
}
}



@media only screen and (max-width: 786px) {
  .slidecard{
    
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 81px;
    }
    .bannerCarrossel h1 {
      padding-bottom: 50px;
    }

}
@media screen and  (max-width: 1900px)  and (max-height:480px)  {

.texto{
  line-height:36px;
  transition:0.2s;
}
.imagens{
  width:280px !important;
  height:280px !important;
}
.bannerCarrossel h1 {
    font-size: 45px !important;
}
}

@media screen and (max-height: 450px)  and (max-width: 825px) {
  .slidecard{
     
      display: flex;
      justify-content: center;
      flex-direction: initial;
      padding-bottom: 25px;

     
    }
    .texto{
      line-height: 25px;
      transition:0.2s;
    }
    .imagens{
      width: 220px !important;
    height: 220px !important;
    }

    .bannerCarrossel h1 {
    font-size: 40px !important;
    padding-bottom: 0px;
    margin-top: 5% !important;
    }
}

@media screen and (max-height: 380px)  and (max-width: 650px) {
  .slidecard{
     
      display: flex;
      justify-content: center;
      flex-direction: initial;
      padding-bottom: 83px;

    }
    .imagens {
    width: 230px !important;
    height: 230px !important;
    }
    .texto{
      line-height: 23px;
      transition:0.2s;
    }
    .bannerCarrossel h1 {
    padding-bottom: 20px !important;
    }
}
/*
@media screen and (max-width: 825px) and (orientation: landscape) {
  .slidecard{
   
    padding-bottom: 0px;
    margin-bottom: 50px;

  }
  .texto{
    line-height: 30px;
    font-size: 24px;
    display: flex;
    align-items: center
  }
  .bannerCarrossel h1{
    font-size: 40px !important;
  }
  .imagens {
    width: 280px !important;
    height: 280px !important;
}

}
*/
@media screen and  (max-width: 812px) and (max-height: 380px)  {
  .slidecard{
    
    margin-bottom: 25px;

  }
}

@media screen and  (max-width: 650px) and (max-height: 370px)  {
  .slidecard{
  
    margin-bottom: 0px;

  }
  .bannerCarrossel h1 {
    padding-bottom: 0px !important;
}

}
@media screen and  (max-width: 320px)  {
  .slidecard{
    
  }
  .texto{
    width: 100%;
    font-size:20px !important;
    transition:0.2s;
  }
}

@media screen and  (max-width: 570px) and (max-height: 325px)  {
  .slidecard{
    
  }
  .imagens {
    width: 210px !important;
    height: 210px !important;
  }
}


@media screen and (min-width: 600px) and (max-width: 950px){
.slides{
  padding-right: 7%;
  padding-left: 7%;
}
}

@media screen and (max-width: 426px){
  .slides{
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .imagens{
  width: 200px !important;
  height: 200px !important;
}
.texto{
  font-size:23px;
  transition:0.2s;
}
}

</style>