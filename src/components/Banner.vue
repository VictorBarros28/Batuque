<template>
  <div>
 <Nav></Nav>
 <div id="Home">
    <div id="banner">
      <div class="filtro">
        <div id="texto">
          <div id="h1">LOREM IPSUM DOLOR SIT AMET, TOC TOC TOC</div>
        </div>
        <div id="mouse">
          <img src="../assets/mouse.png" id="icone" />
        </div>
      </div>
    </div>
 </div>  

  </div>
</template>

<script>

  import Nav from './Nav'
  
  export default {
    components: { 
      Nav
    
     },
    
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

  .filtro {
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

  #mouse {
    position: absolute;
    bottom: 0;
  }

  #h1 {
    font-size: 45px;
  }

  @media screen and (max-width: 680px) {


    #texto {
      width: 258px;
    }

    #h1 {
      font-size: 26px;

    }
  }
</style>