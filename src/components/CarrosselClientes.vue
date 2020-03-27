<template>
<div>
  <div id="CarrosselClientes">
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
        <p class = clientela>
          <img src= "../assets/grupo26.png" class= "eden1">
          <img src ="../assets/navbar.png" class = "batuque">
          
        </p>

        <p class = clientela>
          
          <img src ="../assets/navbar.png" class = "batuque1">
          <img src= "../assets/grupo26.png" class= "eden">
          
        </p>
    </div>
          
      </b-carousel-slide>

 <b-carousel-slide  img-blank> 
    <div class="teste">
        <p class = clientela>
          <img src= "../assets/grupo26.png" class= "eden1">
          <img src ="../assets/navbar.png" class = "batuque">
          
        </p>

        <p class = clientela>
          
          <img src ="../assets/navbar.png" class = "batuque1">
          <img src= "../assets/grupo26.png" class= "eden">
          
        </p>
    </div>
          
      </b-carousel-slide>


 <b-carousel-slide  img-blank> 
    <div class="teste">
        <p class = clientela>
          <img src= "../assets/grupo26.png" class= "eden1">
          <img src ="../assets/navbar.png" class = "batuque">
          
        </p>

        <p class = clientela>
          
          <img src ="../assets/navbar.png" class = "batuque1">
          <img src= "../assets/grupo26.png" class= "eden">
          
        </p>
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
.eden{
border-top:solid transparent 100px;
}
.eden1{
border-bottom: solid transparent 130px;
}
.batuque{
  border-bottom: solid transparent 10px;
}
.batuque1{
border-top: solid transparent 41px;
}

.CardClientes{
  border:2px solid red;
  display: flex;
  flex-wrap: wrap;
}

.clientela{
  border:solid transparent 15px;
display: flex;
align-items:baseline;
flex-direction: column;
height: 100%;
justify-content: center;
width: 100%;
}

.carousel-item{
  background-color: #e48f8e !important;
  height: 100%;
  width: 70%;
}


#carousel-1{
  background-color:#e48f8e !important ;
  height: 800px;
  display: flex;
  justify-content: center;
  padding-bottom: 200px;
  
}

#CarrosselClientes{
}

.carousel-caption {
display:flex;
border: 1px solid red !important;
}

.teste{
  display:flex;
  width: 80vw;
  justify-content: center;
}
</style>