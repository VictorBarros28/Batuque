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


      <!-- Slides with custom text -->
      <b-carousel-slide>
        <template v-slot:img>
          <div class="CardClientes">
          <div>  
          <img
            class="d-block img-fluid w-100"
            width="80px"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
          </div>
          <div>
          <img
          class="d-block img-fluid w-100"
          width="80px"
          height="480"
          src="../assets/navbar.png"
          alt="image slot"
        >
          </div>
          </div>
        </template>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide v-html="html">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
   

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
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
.CardClientes{
  border:2px solid red;
  display: flex;
  flex-wrap: wrap;
}

</style>