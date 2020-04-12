<template>
<div>
  <div id="CarrosselSonhos">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
 <b-carousel-slide  img-blank> 
    <div class="teste">
      <div class = "clientela">
      <img src= "../assets/Imagem 7.png"  href="" class="img-responsive">
      <img src= "../assets/Imagem 2.png"  href="" class="img-responsive">
     </div>
<div class = "clientela">
       <img src= "../assets/Imagem 11.png" href="" class="img-responsive">
      <img src= "../assets/Imagem 9.png"  href="" class="img-responsive">    
</div>

<div class = "clientela">
  <img src= "../assets/Imagem 4.png"  href="" class="img-responsive">
  <img src= "../assets/Imagem 3.png"  href="" class="img-responsive">
      
</div>
 <div class = "correcao">
      <img src= "../assets/Imagem 10.png" href="" class="img-r1">
      </div>
    </div>
          
      </b-carousel-slide>

<b-carousel-slide  img-blank> 
    <div class="teste">
      <div class = "clientela">
      <img src= "../assets/Imagem 7.png"  href="" class="img-responsive">
      <img src= "../assets/Imagem 2.png"  href="" class="img-responsive">
     </div>
<div class = "clientela">
       <img src= "../assets/Imagem 11.png" href="" class="img-responsive">
      <img src= "../assets/Imagem 9.png"  href="" class="img-responsive">    
</div>

<div class = "clientela">
  <img src= "../assets/Imagem 4.png"  href="" class="img-responsive">
  <img src= "../assets/Imagem 3.png"  href="" class="img-responsive">
      
</div>
 <div class = "correcao">
      <img src= "../assets/Imagem 10.png" href="" class="img-r1">
      </div>
    </div>
          
      </b-carousel-slide>

<b-carousel-slide  img-blank> 
    <div class="teste">
      <div class = "clientela">
      <img src= "../assets/Imagem 7.png"  href="" class="img-responsive">
      <img src= "../assets/Imagem 2.png"  href="" class="img-responsive">
     </div>
<div class = "clientela">
       <img src= "../assets/Imagem 11.png" href="" class="img-responsive">
      <img src= "../assets/Imagem 9.png"  href="" class="img-responsive">    
</div>

<div class = "clientela">
  <img src= "../assets/Imagem 4.png"  href="" class="img-responsive">
  <img src= "../assets/Imagem 3.png"  href="" class="img-responsive">
      
</div>
 <div class = "correcao">
      <img src= "../assets/Imagem 10.png" href="" class="img-r1">
      </div>
    </div>
          
      </b-carousel-slide>


    </b-carousel>

  </div>

 

  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>


.correcao{
  margin-top:8px;
  display: flex;
  width:fit-content;
  height: fit-content;
  background-color: #e5908f;
  padding-top:  0.5075vw;
  padding-bottom: 8.6208437500000003vw;
  margin-left:0.5%;
}

.img-responsive{
  border: transparent 1vh solid;
}

.img-r1{
  border:transparent solid 10px;
  padding-top : 5%;
}
.CardClientes{
  border:2px solid red;
  display: flex;
  flex-wrap: wrap;
}
.clientela{
display: flex;
align-items:baseline;
flex-direction: column;
height: fit-content;
justify-content: center;
}
.carousel-item{
  background-color: transparent !important;
  width: 100%;
  height:100vh;
}
#carousel-1{
  height: 100vh;
  background-color:transparent !important ;
  display: flex;
  justify-content: center;
  
}
.carousel-caption {
display:flex;
border: 1px solid red !important;
}
.teste{
  height: 60vh;
  display:flex;
  width: 75vw;
  justify-content: center;
}

@media screen and (max-width: 420px) {
.carousel-item{
  background-color: transparent !important;
  height: 90%;
  width: 70%;
}
}
@media screen and (max-width: 400px) {
  .batuque{
width: 99%;
  }
  .batuque1{
    border-top:solid transparent 21px;
width: 99%;
  }
  .eden{
width: 99%;
border-top:solid transparent 30px;
border-bottom: solid transparent 30px;
  }
  .eden1{
width: 99%;
border-bottom: solid transparent 50px;
  }
}
</style>