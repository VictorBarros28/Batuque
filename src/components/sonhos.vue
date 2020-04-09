<template>


<div class="title">
   <h1>  SONHOS ENTREGUES </h1>

   <div class = "portfolio">
     <div class = "nomes"> 
      <h4> IDENTIDADE VISUAL </h4>
      <h4> AMBIENTAÇÃO </h4>
      <h4> EDITORIAL </h4>
      <h4> LAYOUT DE SITES </h4>
      <h4> SINALIZAÇÃO  </h4>
      </div>
      <div class = "proj">
      <img src= "../assets/Imagem 8.png"  href="" class="img-responsive">
      <img src= "../assets/Imagem 4.png"  href="" class="img-responsive">
      <img src= "../assets/Imagem 6.png"  href="" class="img-responsive">
      <img src= "../assets/Imagem 7.png"  href="" class="img-responsive">
      <img src= "../assets/Imagem 11.png" href="" class="img-responsive">
      <div class = "correcao">
      <img src= "../assets/Imagem 10.png" href="" class="img-r1">
      </div>
</div>
<div class = "proj2">
      <img src= "../assets/Imagem 3.png"  href="" class="img-responsive">
      <img src= "../assets/Imagem 5.png"  href="" class="img-r2">
      <img src= "../assets/Imagem 2.png"  href="" class="img-responsive">
      <img src= "../assets/Imagem 9.png"  href="" class="img-responsive">
</div>
</div>
 
</div>

</template>
<script>
export default {
  name: 'sonhos',
  components:{
  },
}
</script>

<style scoped>
.correcao{
  margin-top:0.5%;
  display: flex;
  height: fit-content;
  width: fit-content;
  background-color: #e5908f;
  padding-top:  0.8075vw;
  padding-bottom: 3.3208437500000003vw;
  margin-left:0.5%;
}
.nomes{
  display: flex;
  justify-content: space-around;
  padding-left: 12vw;
  width: 88%;
}
.img-responsive{
  border: transparent 1vh solid;
  width:   11.807291666666666vw;
  height:  12.311979166666667vw;
}

.img-r1{
  border: transparent 1vh solid;
  width:  11.765625vw;
  height: 19.609375vw;
}

.img-r2{
  border: transparent 1vh solid;
   height:  11.807291666666666vw;
   width:  23.579166666666668vw;
  
}
.proj{
  display: flex;
  justify-content: baseline;
  height: 10%;
  width: 100%;
  padding-left: 15vw;
  margin-bottom: 0.5vh;
}

.proj2{
  display: flex;
  align-items:flex-start;
  justify-content: baseline;
  height: 20%;
  width: 100%;
  padding-left: 15vw;
  margin-bottom: 30vh;
}
.portfolio{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  width: 100%;
  color:#d16e72;
 }

 .title{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   height: 90vh;
 }

 h4{
   display: flex;
   flex-direction: column;
 }
h1{
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color:  #707070;
font-weight: bolder;

}

@media screen and (max-width: 1357px) {
h4{
  font-size: 20px; 
}



}

@media screen and (max-width: 1140px) {
h4{
  font-size: 17px; 
}

.proj{
  display: flex;
  justify-content: baseline;
  height: 5%;
  width: 100%;
  padding-left: 15vw;
  margin-bottom: 0.5vh;
}

.proj2{
  display: flex;
  align-items:flex-start;
  justify-content: baseline;
  height: 10%;
  width: 100%;
  padding-left: 15vw;
  margin-bottom: 30vh;
}

}
</style>