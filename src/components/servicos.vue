<template>
  <div class="hello">
    


<img src = "../assets/BATIUQUE_LATERAL.png" class= "lateral1">
 
  <div class= "cont">
<h1>{{ msg }}</h1>
<div class = "texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
<div class="cardservicos">

<div class="cardservicos1 grid-md">
<img src= "../assets/BATUQUE_GRAFICO.png"  class="img-responsive">
<p class = "txt">GRÁFICO</p>
</div>
<div class="cardservicos2 grid-md">
<img src= "../assets/BATUQUE_INTERIORES.png"  class="img-responsive">
<p class = "txt">INTERIORES</p>
</div>
<div class="cardservicos3 grid-md">
<img src= "../assets/BATUQUE_PRODUTOS.png"  class="img-responsive">
<p class = "txt">PRODUTOS</p>
</div>
</div>

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
  
  width: 189.9px;
  height: 347.4px;
  margin-bottom:-900px;
}

.lateral2{  
  width: 189.9px;
  height: 347.4px;
  display: flex;
  margin-top: -790px;
  margin-left:150px;
  
}
.txt{
  color:white;
  font-style: inherit;
  font-family: monospace;
  font-weight:lighter;
  font-size: 40px;
  padding-bottom: 70px;
}

.img-responsive{
padding-bottom: 30px;
margin-top:-60px;
align-items: space-around;
}

.cardservicos{
display: flex;
width: 1280px;
height: fit-content;
justify-content: center;
border-top: solid transparent 180px;
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
  width: 1920px;
  height: 1000px;
  background-color: #e48f8e;
  display: flex !important;
  align-items: center;
  -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
}


.cont{  
  padding-left: 150px;
  width: 1580px;
  height: 900px;
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
  width:1236px;
  height: 124px;
  margin-top:72px;
  height: 124px;

}

 
  @media screen and (max-width: 840px) {
    
.cont{
width: 300px;
margin-right: 400px;
padding-right: 0px;
padding-left: 260px;
margin-bottom: 500px;
}

.img-responsive{
width: 270px;
padding-bottom: 30px;
margin-top:-60px;
align-items: space-around;
}

.texto{

  font-family: 'Open Sans';
  font-size: 40px;
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
  font-size: 100px;
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
  font-size: 35px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  }
  .lateral1{
    
    width: 427.275px;
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
    height: 781.65px;
    margin-bottom: 1500px;
    margin-left: 10%;
    margin-right:-750px;
    margin-top: 70px;

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
  
   @media screen and (max-width: 350px) {
    
.cont{
width: 190px !important;
margin-right: 400px;
margin-left:400px;
margin-bottom: 500px;
}

.img-responsive{
width: 270px;
padding-bottom: 30px;
margin-top:-60px;
align-items: space-around;
}

.texto{

  font-family: 'Open Sans';
  font-size: 40px;
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
  font-size: 100px;
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
  font-size: 35px;
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
</style>
