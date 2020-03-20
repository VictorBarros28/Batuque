<template>
  <div class="banner">
    <h1  class="titulo">QUEM SOMOS NÓS?</h1>
  <md-card>
    <md-card-actions>
      
      
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        
        <swiper-slide class="slides">
          <p class="texto">"Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat.</p>
          <img class="imagens" src="../assets/sobre.png" alt="">
        </swiper-slide>
        <swiper-slide class="slides">
          <p class="texto">"Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat.</p>
          <img class="imagens" src="../assets/sobre_dois.png" alt="">
        </swiper-slide>
        <swiper-slide class="slides">
          <p class="texto">"Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat.</p>
          <img class="imagens" src="../assets/sobre_tres.png" alt="">
        </swiper-slide>
        <swiper-slide class="slides">
          <p class="texto">"Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat.</p>
          <img class="imagens" src="../assets/sobre_quatro.png" alt="">

        </swiper-slide>
        
        
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </md-card-media>
  </md-card>
</div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          loop:true,
          pagination: {
            el: '.swiper-pagination',
            
          }
        }
      }
    }
  }
</script>

<style>
h1{
  font-size: 50px !important;
  color: #707070;
  font-family: 'Segoe UI' !important;
  font-weight: 500 !important;
  position: absolute;
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
  justify-content: center;  
  justify-content: space-between;
  padding-left: 17.5%;
  padding-right: 17.5%;
  align-items: center;
  z-index: 1;
}
.banner{
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
  height:225px;
  text-align: center;
  font-family: Calibri;
  color: #707070;
  font-size: 25px;
  letter-spacing: -1.86px;
  line-height: 55px;
  
}

@media screen and (max-width: 700px){

.texto{
  font-size: 15px;
  letter-spacing: 0;
    line-height: 30px;
    width: 53%;
}
.imagens{
  width: 160px !important;
  height: 160px !important;
}
.slides{
  padding-left: 3%;
  padding-right: 3%;
}
h1{
  font-size: 30px !important;
  margin-top: 8% !important;
  
}
}
@media screen and (min-width: 600px) and (max-width: 950px){
.slides{
  padding-right: 7%;
  padding-left: 7%;
}
}
</style>