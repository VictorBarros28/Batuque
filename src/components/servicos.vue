<template>
  <div class="hello">
    

    <h1>{{ msg }}</h1>
    <div class = "texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
<div class="cardservicos">

  <div class="cardservicos1">
<img src= "../assets/BATUQUE_GRAFICO.png"  class="img-responsive">
<p class = "txt">GRÁFICO</p>
</div>
<div class="cardservicos2">
<img src= "../assets/BATUQUE_INTERIORES.png"  class="img-responsive">
<p class = "txt">INTERIORES</p>
</div>
<div class="cardservicos3">
<img src= "../assets/BATUQUE_PRODUTOS.png"  class="img-responsive">
<p class = "txt">PRODUTOS</p>
</div>

</div>
<img src = "../assets/BATIUQUE_LATERAL.png" class= "lateral2">
<img src = "../assets/BATIUQUE_LATERAL.png" class= "lateral1">
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
  margin-right: 1800px;
  margin-top: -50px;
}

.lateral2{
  margin-left: 1800px;
  margin-top: -720px;
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
margin-top: 126px;
padding-bottom: 30px;
margin-top:200px;
align-items: space-around;
}

.cardservicos{
display: flex;
width: 1920px;
height: 38px;
justify-content: center;
border-top: solid transparent 180px;
align-items: center;

}
.cardservicos1{
  
border-right: solid transparent 100px;
border-left: solid transparent 100px;
}

.cardservicos2{
  
border-right: solid transparent 100px;
border-left: solid transparent 100px;
}

.cardservicos3{
  
border-right: solid transparent 100px;
border-left: solid transparent 100px;
}

.hello{  
  width: 1920px;
  height: 906.8px;
  background-color: #e48f8e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
}
h1{
  
  font-family: 'Times New Roman';
  font-size: 50px;
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
</style>
