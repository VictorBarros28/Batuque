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
        <p class = clientela>
          <img src= "../assets/grupo26.png" class= "eden">
          <img src ="../assets/navbar.png" class = "batuque">
        </p>
        
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide  img-blank> 
        <p class = clientela>
          <img src= "../assets/grupo26.png" class= "eden">
          <img src ="../assets/navbar.png" class = "batuque">
        </p>
      </b-carousel-slide>
 <b-carousel-slide  img-blank> 
        <p class = clientela>
          <img src= "../assets/grupo26.png" class= "eden">
          <img src ="../assets/navbar.png" class = "batuque">
        </p>
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
border-bottom: solid transparent 100px;
}
.batuque{
  border: solid transparent 1px;
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
height: 100%;
justify-content: center;
width: 100%;
margin-right: 25%;
}

.carousel-item{
  background-color: #e48f8e !important;
  height: 100%;
  display: flex;
}


#carousel-1{
  background-color:#e48f8e !important ;
  height: 800px;
  display: flex;
  justify-content: start;
  padding-bottom: 200px;
  
}

#CarrosselClientes{
}
</style>