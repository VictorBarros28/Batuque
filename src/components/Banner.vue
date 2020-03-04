<template>
  <div>
    <div id="banner">
      <div class= "filtro"> 
      <div id="texto">
        <h1>LOREM IPSUM DOLOR SIT AMET, TOC TOC TOC</h1>
      </div>
      <div id="mouse" >
        <img src="../assets/mouse.png" id="icone" />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar }
};
</script>

<style>
#banner {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/banner.png");
  background-position: center;
  background-size: cover;
  font-size: 67px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.filtro{
  width: 100%;
  height: 100%;
  background-color: rgb(141, 50, 49, 0.555);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
}

#texto {
  width: 685px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: "Segoe UI";
  color: white;
  margin-bottom: 170px;
  margin-top: 230px;
  
}

#icone {
    height: 57.3px;
    
 
}
#mouse{
    position: absolute;
    bottom: 0;
}
@media screen and (max-width: 660px){

#banner{
  font-size: 26px;
}
#texto{
  width: 324px;
 font-size:26px;
}
h1{
  
}
}
</style>
