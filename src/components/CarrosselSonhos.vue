<template>
  <div>
    <div id="CarrosselSonhos">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="8000"
        controls
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->

        <b-carousel-slide img-blank>
          <h5
            style="color: #e48f8e!important; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: bolder; padding-bottom:4vh;"
          >
            IDENTIDADE VISUAL
          </h5>
          <div class="teste">
            <div class="clientela">
              <img
                src="../assets/Imagem 7.png"
                href=""
                class="img-responsive"
              />
              <img
                src="../assets/Imagem 2.png"
                href=""
                class="img-responsive"
              />
            </div>
            <div class="clientela">
              <img
                src="../assets/Imagem 11.png"
                href=""
                class="img-responsive"
              />
              <img
                src="../assets/Imagem 9.png"
                href=""
                class="img-responsive"
              />
            </div>

            <div class="clientela">
              <img
                src="../assets/Imagem 4.png"
                href=""
                class="img-responsive"
              />
              <img
                src="../assets/Imagem 3.png"
                href=""
                class="img-responsive"
              />
            </div>
            <div class="clientela">
           
              <img src="../assets/Imagem 10.png" href="" class="img-responsive1" />
            </div>
           
          </div>
        </b-carousel-slide>

        <b-carousel-slide img-blank>
          <h5
            style="color: #e48f8e!important; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: bolder; padding-bottom:4vh;"
          >
            AMBIENTAÇÃO
          </h5>
          <div class="teste">
            <div class="clientela">
              <img
                src="../assets/Imagem 7.png"
                href=""
                class="img-responsive"
              />
              <img
                src="../assets/Imagem 2.png"
                href=""
                class="img-responsive"
              />
            </div>
            <div class="clientela">
              <img
                src="../assets/Imagem 11.png"
                href=""
                class="img-responsive"
              />
              <img
                src="../assets/Imagem 9.png"
                href=""
                class="img-responsive"
              />
            </div>

            <div class="clientela">
              <img
                src="../assets/Imagem 4.png"
                href=""
                class="img-responsive"
              />
              <img
                src="../assets/Imagem 3.png"
                href=""
                class="img-responsive"
              />
            </div>
            <div class="clientela">
           
              <img src="../assets/Imagem 10.png" href="" class="img-responsive1" />
          
            </div>
          </div>
        </b-carousel-slide>

        <b-carousel-slide img-blank>
          <h5
            style="color: #e48f8e!important; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: bolder; padding-bottom:4vh;"
          >
            EDITORIAL
          </h5>
          <div class="teste">
            <div class="clientela">
              <img
                src="../assets/Imagem 7.png"
                href=""
                class="img-responsive"
              />
              <img
                src="../assets/Imagem 2.png"
                href=""
                class="img-responsive"
              />
            </div>
            <div class="clientela">
              <img
                src="../assets/Imagem 11.png"
                href=""
                class="img-responsive"
              />
              <img
                src="../assets/Imagem 9.png"
                href=""
                class="img-responsive"
              />
            </div>

            <div class="clientela">
              <img
                src="../assets/Imagem 4.png"
                href=""
                class="img-responsive"
              />
              <img
                src="../assets/Imagem 3.png"
                href=""
                class="img-responsive"
              />
            </div>
            <div class="clientela">
            
              <img src="../assets/Imagem 10.png" href="" class="img-responsive1" />
            
            </div>
          </div>
        </b-carousel-slide>

        <b-carousel-slide img-blank>
          <h5
            style="color: #e48f8e!important; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: bolder; padding-bottom:4vh;"
          >
            LAYOUT DE SITES
          </h5>
          <div class="teste">
            <div class="clientela">
              <img
                src="../assets/Imagem 7.png"
                href=""
                class="img-responsive"
              />
              <img
                src="../assets/Imagem 2.png"
                href=""
                class="img-responsive"
              />
            </div>
            <div class="clientela">
              <img
                src="../assets/Imagem 11.png"
                href=""
                class="img-responsive"
              />
              <img
                src="../assets/Imagem 9.png"
                href=""
                class="img-responsive"
              />
            </div>

            <div class="clientela">
              <img
                src="../assets/Imagem 4.png"
                href=""
                class="img-responsive"
              />
              <img
                src="../assets/Imagem 3.png"
                href=""
                class="img-responsive"
              />
            </div>
            <div class="clientela">
         
              <img src="../assets/Imagem 10.png" href="" class="img-responsive1" />
            </div>
            
          </div>
        </b-carousel-slide>

        <b-carousel-slide img-blank>
          <h5
            style="color: #e48f8e!important; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: bolder; padding-bottom:4vh;"
          >
            SINALIZACAO
          </h5>
          <div class="teste">
            <div class="clientela">
              <img
                src="../assets/Imagem 7.png"
                href=""
                class="img-responsive"
              />
              <img
                src="../assets/Imagem 2.png"
                href=""
                class="img-responsive"
              />
            </div>
            <div class="clientela">
              <img
                src="../assets/Imagem 11.png"
                href=""
                class="img-responsive"
              />
              <img
                src="../assets/Imagem 9.png"
                href=""
                class="img-responsive"
              />
            </div>

            <div class="clientela">
              <img
                src="../assets/Imagem 4.png"
                href=""
                class="img-responsive"
              />
              <img
                src="../assets/Imagem 3.png"
                href=""
                class="img-responsive"
              />
            </div>
            <div class="clientela">
        
              <img src="../assets/Imagem 10.png" href="" class="img-responsive1" />
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
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
<style scoped>
h5 {
  width: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;
}



.img-responsive {
  border: transparent 3px solid;
  width: 100%;
  height: 100%;
}


.img-responsive1 {
  border-left: transparent 3px solid;
  padding-top:3px;
  width: 100%;
  height: 100%;

}


.CardClientes {
  border: 2px solid red;
  display: flex;
  flex-wrap: wrap;
}
.clientela {
  display: flex;
  align-items: baseline;
  flex-direction: column;
  height: fit-content;
  justify-content: center;
}
.carousel-item {
  background-color: transparent !important;
  width: 100%;
  height: 100vh;
}
#carousel-1 {
  text-shadow: #e5908f 1px 1px 2px !important;
  height: 100vh;
  background-color: transparent !important ;
  display: flex;
  justify-content: center;
}
.carousel-caption {
  display: flex;
  border: 1px solid red !important;
}
.teste {
  height: 60vh;
  display: flex;
  width: 75vw;
  justify-content: center;
}

@media screen and (max-width: 470px) {
  .img-responsive1 {
  border-left: transparent 3px solid;
  padding-top:3px;
  width: 100%;
  height: 100%;
}

h5{
    width: 80vw;
}
.teste{
  width: 80vw;
    /* padding-right: 5vw; */
}

.carrosselSonhos{
    margin-left: -5vw;
}

}
@media screen and (max-width: 420px) {
  .carousel-item {
    background-color: transparent !important;
    height: 90%;
    width: 90%;
  }
}
@media screen and (max-width: 400px) {
}
</style>
