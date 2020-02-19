<template>
  <div class="hello">
    
<img src = "../assets/BATIUQUE_LATERAL.png" class= "lateral2">

<img src = "../assets/BATIUQUE_LATERAL.png" class= "lateral1">

 
  <div class= "cont">
<h1>{{ msg }}</h1>
<div class = "texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
<div class="cardservicos">

<div class="cardservicos1 grid-md">
<img src= "../assets/BATUQUE_GRAFICO.png" href="" class="img-responsive">
<p class = "txt">GRÁFICO</p>
</div>
<div class="cardservicos2 grid-md">
<img src= "../assets/BATUQUE_INTERIORES.png" href=""  class="img-responsive">
<p class = "txt">INTERIORES</p>
</div>
<div class="cardservicos3 grid-md">
<img src= "../assets/BATUQUE_PRODUTOS.png" href=""  class="img-responsive">
<p class = "txt">PRODUTOS</p>
</div>
</div>

</div>

</div>
</template>

<script>
export default {
  name: 'servicos',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .lateral1{
  width: 10vw;
  position: absolute;
  left: -200px;
  bottom:-400px;
}

.lateral2{  
  position: absolute;
  width: 10vw;
  display: flex;
  bottom:450px;
  left: 11px;
  
} */

.lateral1{
  position: relative;
  width:100vw;
  right: 390px;
  bottom: -36vh;
}
.lateral2{  
  position: relative;
  width: 100vw;
  bottom:35vh;
  right: -89vw;
  
}
.txt{
  color:white;
  font-style: inherit;
  font-family: monospace;
  font-weight:lighter;
  font-size: 40px;
}

.img-responsive{
position: relative;
bottom:35px;  
}

.cardservicos{
display: flex;
position: relative;
width: 100vw;
height: fit-content;
justify-content: center;
top:80px;
justify-content: space-evenly;

}

.hello{  
  width: 100vw;
  height: fit-content;
  background-color: #e48f8e;
  display: flex !important;
  align-items: center;
  -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
}


.cont{  
  position: relative;
  left:-340px;
  top:30px;
  width: 82%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1{
  
  font-family:monospace;
  font-size: 60px;
  font-weight: lighter;
  color: #ffffff;
  padding-top: 94px;

}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.texto{
  /* position: relative; */
  font-family: 'Open Sans';
  font-size: 30px;
  font-weight:lighter;
  color: #ffffff;
  width:50vw;
  height: fit-content;
  bottom:-42px;

}

 
  @media screen and (max-width: 1800px) {
    
.cont{
bottom:2002px;
width:100vw;
left:-300px;
height: 70vh;
}

.img-responsive{
align-items: space-evenly;
}

.texto{

  position: relative;
  bottom:10px;
  font-family: 'Open Sans';
  font-weight:lighter;
  color: #ffffff;
  font-size: 20px;
  border:1px solid blue;
}
  h1{
  font-family: monospace;
  width: 100vw;
  font-size: 62px;
  font-weight: lighter;
  color: #fffffff1;
  padding-top: 94px;
  }
  .txt{
  
  color:white;
  font-style: inherit;
  font-family: monospace;
  font-weight:lighter;
  font-size: 30px;
  }
  .lateral1{
    
  display:flex;
  position: relative;
  bottom:-490px;
  left:-110px;
  
  
}

.lateral2{
  display:flex;
  position: relative;
    bottom: 500px;
    left:100%;
    margin-left:5%;

}
    .cardservicos {
      flex:1 1 calc(33% - 2rem);
      display: flex;
      justify-content: space-evenly;
      width: 100vw;
      height:fit-content;
    }

    .hello {
      flex: 1 1 calc(33% - 2rem);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
    }
  }
  
@media screen and (max-width: 1293px) {
 .cont{
width:100vw;
bottom:100px;
height: 50vh;
left: -350px;
}

.img-responsive{
width: 15vw;
align-items: space-around;
}

.texto{

  position: relative;
  bottom:10px;
  font-family: 'Open Sans';
  font-weight:lighter;
  color: #ffffff;
  font-size: 15px;
  border:1px solid blue;
}
  h1{
  font-family: monospace;
  width: 100%;
  font-size: 52px;
  font-weight: lighter;
  color: #fffffff1;
  padding-top: 94px;
  }
  .txt{
  
  color:white;
  font-style: inherit;
  font-family: monospace;
  font-weight:lighter;
  font-size: 20px;
  }
  .lateral1{
    
  display:flex;
  position: relative;
  bottom:-590px;
  left:-200px;
  
  
}

.lateral2{
  display:flex;
  position: relative;
    bottom: 590px;
    left:100%;
    margin-left: 12%;

}
    .cardservicos {
      flex:1 1 calc(33% - 2rem);
      display: flex;
      justify-content: space-evenly;
      width: 100vw;
      height: fit-content;
    }

    .hello {
      flex: 1 1 calc(33% - 2rem);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
    }
  }

  @media screen and (max-width: 666px) {
 .cont{
width:100vw;
height: fit-content;
}

.img-responsive{
width: 11vw;
align-items: space-around;
}

.texto{
width: 70vw;
  position: relative;
  bottom:10px;
  font-family: 'Open Sans';
  font-weight:lighter;
  color: #ffffff;
  font-size: 10px;
  border:1px solid blue;
}
  h1{
  font-family: monospace;
  width: 100vw;
  font-size: 32px;
  font-weight: lighter;
  color: #fffffff1;
  padding-top: 94px;
  }
  .txt{
  
  color:white;
  font-style: inherit;
  font-family: monospace;
  font-weight:lighter;
  font-size: 10px;
  }
  .lateral1{
  display:flex;
  position:fixed;
  /* bottom:-990px; */
  left:90%;
  
  
}

.lateral2{
  display:flex;
  position: fixed;
    /* bottom: 890px; */
    left:90%;

}
    .cardservicos {
      flex:1 1 calc(33% - 2rem);
      display: flex;
      justify-content: space-evenly;
      width:100vw;
      height: fit-content;
    }

    .hello {
      flex: 1 1 calc(33% - 2rem);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
    }
  }
</style>
