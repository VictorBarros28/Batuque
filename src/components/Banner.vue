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
  z-index: 0;
}
.filtro{
  width: 100vw;
  height: 100vh;
  background-color: rgb(141, 50, 49);
  opacity:0.55;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 0;
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
h1{
  z-index: 1;
}
#icone {
    height: 57.3px;
    widht: 73.5px;
 
}
#mouse{
    
    display: flex;
    justify-content: center;
}
</style>
