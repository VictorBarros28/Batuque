<template>


<div class="title">
   <h1>  SONHOS ENTREGUES </h1>

   <div class = "portfolio">
     <div class = "nomes"> 
        <md-tabs md-sync-route class="md-transparent" md-alignment="fixed" >
      <md-tab id="tab1" md-label="IDENTIDADE VISUAL" to="/identidade"></md-tab>
      <md-tab id="tab2" md-label="AMBIENTAÇÃO" to="/ambientacao"> </md-tab>
      <md-tab id="tab3" md-label="EDITORIAL" to="/editorial"></md-tab>
      <md-tab id="tab4" md-label="LAYOUT DE SITES" to="/sites"></md-tab>
      <md-tab id="tab5" md-label="SINALIZAÇÃO" to="/sinalizacao"></md-tab>
    </md-tabs>
    
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
 

 <div class="carrosselSonhos">
    <CarrosselSonhos></CarrosselSonhos>
</div>    
</div>

</template>
<script>
import CarrosselSonhos from './CarrosselSonhos'
export default {
  name: 'sonhos',
  components:{
    CarrosselSonhos
  },
}
</script>

<style scoped>


.carrosselSonhos{
  display: none;
}
.correcao{
  margin-top: 9px;
  display : flex;
  width:fit-content;
  height: fit-content;
  background-color: #e5908f;
  padding-top:  0.1075vw;
  padding-bottom: 4.6vw;
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
  border-left: transparent solid 10px;
  border-top: transparent solid 10px;
  border-right: transparent solid 10px;
  padding-top : 5%;
  width:  11.765625vw;
  height: 100%;
}

.img-r2{
  border: transparent 1vh solid;
   height:  11.807291666666666vw;
   width:  23.579166666666668vw;
  
}
.proj{
  display: flex;
  justify-content: baseline;
  align-items: flex-start;
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
  align-items: last baseline;
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


.correcao{
  padding-bottom: 4.9vw;
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


.correcao{
  padding-bottom: 5vw;
}
@media screen and (max-width: 975px) {
h4{
  font-size: 14px; 
}

}


@media screen and (max-width: 835px) {
  .portfolio{
  display: none;
}


.carrosselSonhos{
  display:flex;
  flex-direction: column;
  justify-content: center;
  width:100vw;
  height: 100%;
  padding-bottom: 10%;
}



}
}
</style>