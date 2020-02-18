<template>
  <div class="hello">
    

    <img src = "../assets/BATIUQUE_LATERAL.png" class= "lateral1">

 
  <div class= "cont">
<h1>{{ msg }}</h1>
<div class = "texto">
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
</div>
<!--
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
-->

</div>
<img src = "../assets/BATIUQUE_LATERAL.png" class= "lateral2">
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
.lateral1{
  position: relative;
  left: -100px;
  width: 379px;
  height: 620.8px;
  bottom:-400px;
}

.lateral2{  
  position: relative;
  width: 379px;
  height: 620.8px;
  display: flex;
  bottom:350px;
  left: 100px;
  
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
align-items: space-around;
}

.cardservicos{
display: flex;
position: relative;
width: 1280px;
height: 800px;
justify-content: center;
top:80px;
flex-wrap: wrap;
align-items: center;

}
.cardservicos1{
  
border-right: solid transparent 110px;
border-left: solid transparent 110px;
}

.cardservicos2{
  
border-right: solid transparent 110px;
border-left: solid transparent 110px;
}

.cardservicos3{
  
border-right: solid transparent 110px;
border-left: solid transparent 110px;
}

.hello{  
  
  height: 1000px;
  background-color: #e48f8e;
  display: flex !important;
  align-items: center;
  -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
}


.cont{  
  position: relative;
  left:-10px;
  top:-30px;
  padding-left: 50px;
  width: 1290px;
 /* height: 900px; */
  background-color: #e48f8e;
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
 
  font-family: 'Open Sans';
  font-size: 30px;
  font-weight:lighter;
  color: #ffffff;
  border:1px solid black;
  width: 100%;

}

 
  @media screen and (max-width: 840px) {
    
.cont{

/*margin-bottom: 500px;*/

}

.img-responsive{
width: 270px;
padding-bottom: 30px;
margin-top:-60px;
align-items: space-around;
}

.texto{

  position: relative;
  bottom:10px;
  font-family: 'Open Sans';
  font-size: 25px;
  font-weight:lighter;
  color: #ffffff;
  border:1px solid blue;

  /* tirar 
  width:1150px;
  height: 124px;
  margin-top:72px;
  height: 124px;
  */
  }

  h1{
   font-family: monospace;
   
  font-size: 50px;
  font-stretch: extra-expanded;
  font-weight: lighter;
  color: #fffffff1;
  padding-top: 94px;
  }
  .txt{
  
  color:white;
  font-style: inherit;
  font-family: monospace;
  font-weight:lighter;
  font-size: 45px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  }
  .lateral1{
    
  width: 50px;
  height: 195px;
  display:flex;
  position: relative;
  top:475px;
  left:0px;
  align-self: auto;
  
  
}

.lateral2{
    display:flex;
    position: relative;
    align-self: auto;
    width: 50px !important;
    height: 195px !important;
    bottom: 890px;
    left:0px;
    bottom: 425px;
    


}
    .cardservicos {
      flex:1 1 calc(33% - 2rem);
      display: flex;
      position: relative;
      top:400px;
      flex-direction: column;
      width: 800px;
      height: 198px;
      margin-right: 300px;
    }
    .cardservicos1 {
      flex:1 1 calc(33% - 2rem);
      border-right: solid transparent 55px;
      border-left: solid transparent 55px;
    }
    .cardservicos2 {
      flex: 1 1 calc(33% - 2rem);
      border-right: solid transparent 55px;
      border-left: solid transparent 55px;
    }
    .cardservicos3 {
      flex: 1 1 calc(33% - 2rem);
      border-right: solid transparent 55px;
      border-left: solid transparent 55px;
    }
    .hello {
      flex: 1 1 calc(33% - 2rem);
      display: flex;
      justify-content: center;
      align-items: center;
      /*height: 2100px;*/
     
      -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
    }
  }

  /*
  @media screen and (max-width: 430px) {
    
.cont{
width: 190px !important;
position: relative;
left: 170px;
}
.img-responsive{
width: 270px;
padding-bottom: 30px;
margin-top:-60px;
align-items: space-around;
}
.texto{
  font-family: 'Open Sans';
  font-size: 50px;
  font-weight:lighter;
  color: #ffffff;
  width:1000px;
  height: 124px;
  margin-top:72px;
  margin-bottom: 300px;
  height: 124px;
  }
  h1{
   font-family: monospace;
    width: 2000px;
  font-size: 110px;
  font-stretch: extra-expanded;
  font-weight: lighter;
  color: #fffffff1;
  padding-top: 94px;
  }
  .txt{
    
  color:white;
  font-style: inherit;
  font-family: monospace;
  font-weight:lighter;
  font-size: 45px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  }
  .lateral1{
    
  width: 377.275px;
  height: 781.65px;
  display:flex;
  position: fixed;
  align-self: auto;
  margin-left:-780px;
  margin-top: 900px;
  
}
.lateral2{
  display:flex;
  position: relative;
  align-self: auto;
    width: 427.275px;
    height: 601.65px;
    margin-bottom: 1500px;
    margin-left: 11%;
    margin-right:310px;
    padding-left: 1px;
    left:-220px;
}
    .cardservicos {
      flex:1 1 calc(33% - 2rem);
      display: flex;
      flex-direction: column;
      width: 800px;
      height: 198px;
      margin-right: 300px;
    }
    .cardservicos1 {
      flex:1 1 calc(33% - 2rem);
      border-right: solid transparent 55px;
      border-left: solid transparent 55px;
    }
    .cardservicos2 {
      flex: 1 1 calc(33% - 2rem);
      border-right: solid transparent 55px;
      border-left: solid transparent 55px;
    }
    .cardservicos3 {
      flex: 1 1 calc(33% - 2rem);
      border-right: solid transparent 55px;
      border-left: solid transparent 55px;
    }
    .hello {
      flex: 1 1 calc(33% - 2rem);
      display: flex;
      justify-content: center;
      height: 1800px;
      width:1700px;
      -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
    }
  }

  */
  
</style>
