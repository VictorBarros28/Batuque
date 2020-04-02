<template>


<div class="secao">
  <div class="titulo">
   <h1>+ QUE CLIENTES, FRIENDS</h1>
      <div class="clientes grid-md">
        <div class="edens">
        <img src= "../assets/grupo26.png" href="" class="img-responsive">
        <img src= "../assets/grupo26.png" href="" class="img-responsive">
        </div>
        <div class="batuque">
        <img src= "../assets/navbar.png" href=""  class="img-responsive">
        <img src= "../assets/navbar.png" href=""  class="img-responsive">
        </div>
         <div class="edens">
        <img src= "../assets/grupo26.png" href="" class="img-responsive">
        <img src= "../assets/grupo26.png" href="" class="img-responsive">
        </div>
        <div class="batuque">
        <img src= "../assets/navbar.png" href=""  class="img-responsive">
        <img src= "../assets/navbar.png" href=""  class="img-responsive">
        </div>
        
      </div>
    </div>
<div class="carrosselClientes">
  
   <h3>+ QUE CLIENTES, FRIENDS</h3>
    <CarrosselClientes></CarrosselClientes>
</div>    

</div>

</template>
<script>
import CarrosselClientes from './CarrosselClientes'
export default {
  name: 'clientes',
  components:{
    CarrosselClientes
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.titulo{
  padding-left: 2vw;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10vh;
}

.carrosselClientes{
  display:none;
  width:100%;
}

.batuque{
width: 100%; 
margin-right: 7%;
margin-top: 2%;
height:60vh;
display: flex;
flex-direction: column;
justify-content: space-around;
}


.edens{
width: 100%;
margin-right: 7%;
display: flex;
justify-content: space-around;
height: 60vh;
flex-direction: column;
}

.txt{
  color:white;
  text-decoration: none;
  font-style: inherit;
  font-family: monospace;
  font-weight:lighter;
  font-size: 35px;
}
.img-responsive{
position: relative;
bottom:35px;  
align-items: space-evenly;
}

.clientes{
display: flex;
position: relative;
height: fit-content;
top:-20px;
width: 70vw;
justify-content: space-around;

}

.secao{  
 padding-top: 10%;
  width: 100%;
  height: 100vh;
  padding-bottom:200px;
  background-color: #e48f8e;
  display: flex !important;
  flex-direction:column;
  align-items: center;
  -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
}
h1{
  width: 50vw;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 60px;
  font-weight: lighter;
  color: #ffffff;
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
 height: fit-content;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 45px;
  font-weight:lighter;
  color: #ffffff;
  width: 90%;
  margin-left: 9%;
}
 
  @media screen and (max-width: 1300px) {

.txt{
  color:white;
  font-style: inherit;
  font-weight:lighter;
  font-size: 30px;
}
.img-responsive{
width: 200px;
position: relative;
bottom:35px;  
align-items: space-around;
}

.clientes{
  padding-right: 10%;
display: flex;
position: relative;
height: fit-content;
top:-10px;
width: 100%;
justify-content: space-between;

}

.secao{  
  background-color: #e48f8e;
  display: flex !important;
  align-items: center;
  -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
}
h1{
  
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
 
  font-size: 25px;
  font-weight:lighter;
  color: #ffffff;
  width: 100%;
}}

@media screen and (max-width: 1114px) {
.titulo{
padding-left: 6vw;
  }

h1{
  width: 60vw;
}

.txt{
  color:white;
  font-style: inherit;
  font-weight:lighter;
  font-size: 30px;
}
.img-responsive{
width: 220px;
position: relative;
bottom:35px;  
align-items: space-around;
}

.clientes{
display: flex;
position: relative;
height: fit-content;
top:9%;
width: 100%;
justify-content: space-between;

}

.secao{  
  background-color: #e48f8e;
  display: flex !important;
  align-items: center;
  -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
  padding-bottom:30%;
}
h1{
  
  font-size: 60px;
  font-weight: lighter;
  color: #ffffff;
  padding-top: 20%;
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
 
  font-size: 30px;
  font-weight:lighter;
  color: #ffffff;
  width: 100%;
}}


@media screen and (max-width: 835px) {
  .titulo{
  display: none;
}
.carrosselClientes{
  display:flex;
  flex-direction: column;
  justify-content: center;
  width:90%;
  padding-bottom: 20%;
}


.txt{
  color:white;
  font-style: inherit;
  font-weight:lighter;
  font-size: 20px;
}
.img-responsive{
width: 100px;
position: relative;
bottom:35px;  
align-items: space-around;
}

.clientes{
display: flex;
position: relative;
height: fit-content;
top:100px;
width: 100%;
justify-content: space-between;

}

.secao{  
  padding-top: 55%;
  padding-bottom: 54%;
  background-color: #e48f8e;
  display: flex !important;
  justify-content: center;
  align-items: center;
  -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
}
h3{
  font-size: 40px;
  font-weight: normal;
  color: #ffffff;
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
 
  font-size: 26px;
  font-weight:lighter;
  color: #ffffff;
  width: 100%;
}}


@media screen and (max-width: 570px) {
.titulo{
  display: none;
}
.carrosselClientes{
  display:initial;
  width:100%;
}
.txt{
  color:white;
  font-style: inherit;
  font-weight:lighter;
  font-size: 12px;
}
.img-responsive{
width: 80px;
position: relative;
bottom:20px;  
align-items: space-between;
}

.clientes{
display: flex;
position: relative;
height: fit-content;
top:10px;
width: 100%;
justify-content: space-between;

}
.secao{  
  background-color: #e48f8e;
  display: flex !important;
  align-items: center;
  justify-content: center;
  -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
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
  line-height: 0.8;
  font-size: 25px;
  font-weight:lighter;
  color: #ffffff;
  width: 100%;
}

@media screen and (max-width: 478px) {

h3{
font-size:35px;

}


}


@media screen and (max-width: 450px) {

.txt{
  color:white;
  font-style: inherit;
  font-weight:lighter;
  font-size: 12px;
}
.img-responsive{
width: 60px;
position: relative;
bottom:20px;  
align-items: space-between;
}

.clientes{
display: flex;
position: relative;
height: fit-content;
top:100px;
width: 100%;
justify-content: space-between;

}

.secao{  

  background-color: #e48f8e;
  display: flex !important;
  align-items: center;
  -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
}

h3{
  font-size:30px;

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
  line-height: 0.8;
  font-size: 25px;
  font-weight:lighter;
  color: #ffffff;
  width: 100%;
}}

@media screen and (max-width: 400px) {
 
.txt{
  color:white;
  font-style: inherit;
  font-weight:lighter;
  font-size: 12px;
}
.img-responsive{
width: 60px;
position: relative;
bottom:20px;  
align-items: space-between;
}

.clientes{
display: flex;
position: relative;
height: fit-content;
top:100px;
width: 100%;
justify-content: space-between;

}

.secao{  
  background-color: #e48f8e;
  display: flex !important;
  align-items: center;
  -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
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
  line-height: 0.8;
  font-size: 20px;
  font-weight:lighter;
  color: #ffffff;
  width: 100%;
}}
}

@media screen and (max-width: 320px) {
  h3{
    font-size: 24px;
  }
}
  
</style>