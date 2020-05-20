<template>
  <div id="Servicos">
    <div class="hello">
      
      <!-- <img src="../assets/BATIUQUE_LATERAL.png" class="lateral1" /> -->

      <div class="cont">
        <h1 data-aos="fade-down">PRODUTOS</h1>
        <br>
        
        <div class="textservices">
          <div class = "back"> <router-link class = "txt" :to = "{ name: 'index'}"> ⮜ </router-link> </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          
        </div>

        <div class="cardservicos">
          
          <div data-aos="fade-right" class="cardservicos1 grid-md">
            <img
              src="../assets/BATUQUE_PRODUTOS.png"
              href=""
              class="img-responsive"
            />

            <!-- <router-link class = "txt" :to = "{name: 'produtos'}">PRODUTOS</router-link> -->
          </div>
        </div>
      </div>
      
      <img src="../assets/latdir.png" class="lateral2" />
    </div>
    
  </div>
</template>

<script>
export default {
  name: "servicos",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back{
  /* padding-right: 70vw; */
  display:-ms-inline-grid;
  align-items:flex-end;
  color: white;
}

.lateral1 {
  width: 215px;
  position: relative;
  left: -100px;
  bottom: -700px;
}
.lateral2 {
  width: 150px;
  position: relative;
  display: flex;
  bottom: 450px;
  right: 0%;
}
.txt {
  color: white;
  text-decoration: none;
  font-style: inherit;
  font-family: monospace;
  font-weight: lighter;
  font-size: 35px;
}
.img-responsive {
  position: relative;
  bottom: 35px;
  align-items: space-around;
}
.cardservicos {
  display: flex;
  position: relative;
  height: fit-content;
  top: 100px;
  width: 70vw;
  justify-content: space-evenly;
  /* justify-content: space-around; */
}
.cardservicos1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hello {
  padding-bottom: 200px;
  background-color: #e48f8e;
  display: flex !important;
  align-items: center;
  position: relative;
  top: -60px;
  z-index: 1;
  -webkit-clip-path: polygon(100% 4%, 100% 90%, 0 100%, 0 0);
}
.cont {
  position: relative;
  right: 2%;
  top: -30px;
  padding-top:10%;
  padding-bottom: 9%;
  background-color: #e48f8e;
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* 
.lateral1{
  width: 215px;
  position: relative;
  left: -100px;
  bottom:-400px;
}
.lateral2{  
  width: 150px;
  position: relative;
  display: flex;
  bottom:450px;
  right: 0%;
  
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
align-items: space-around;
}

.cardservicos{
display: flex;
position: relative;
height: fit-content;
top:100px;
width: 70vw;
justify-content: space-around;

}

.cardservicos1{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hello{  
  height:fit-content;
  padding-top: 21vh;
  padding-bottom:10vh;
  background-color: #e48f8e;
  display: flex !important;
  align-items: center;
  position:relative;
 
  z-index:1;
  -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
}
.cont{  
 
  height: 50%;
  position: relative;
  right:2%;
  top:-250px;
  background-color: #e48f8e;
  display: flex;
  flex-direction: column;
  align-items: center;
} */
.cont h1 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 60px;
  font-weight: lighter;
  color: #ffffff;
  padding-top: 260px;
  padding-bottom: 72px;
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
.textservices {
  height: fit-content;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 35px;
  font-weight: lighter;
  color: #ffffff;
  width: 90%;
  margin-left: 9%;
}

@media screen and (max-width: 1300px) {
  .lateral1 {
    position: relative;
    left: -100px;
    bottom: -700px;
  }
  .lateral2 {
    position: relative;
    display: flex;
    bottom: 450px;
    right: 0%;
  }
  .txt {
    color: white;
    font-style: inherit;
    font-weight: lighter;
    font-size: 30px;
  }
  .img-responsive {
    width: 120px;
    position: relative;
    bottom: 35px;
    align-items: space-around;
  }

  .cardservicos {
    display: flex;
    position: relative;
    height: fit-content;
    top: 100px;
    width: 100%;
    justify-content: space-evenly;
    /* justify-content: space-between; */
  }

  .cardservicos1 {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .hello {
    background-color: #e48f8e;
    display: flex !important;
    align-items: center;
    -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
  }
  .cont {
    position: relative;
    right: 4%;
    top: -30px;
    background-color: #e48f8e;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .cont h1 {
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
  .textservices {
    font-size: 25px;
    font-weight: lighter;
    color: #ffffff;
    width: 100%;
  }
}

@media screen and (max-width: 1000px) {
  .lateral1 {
    width: 160px;
    position: relative;
    left: -60px;
    bottom: -719px;
  }
  .lateral2 {
    width: 100px;
    position: relative;
    display: flex;
    bottom: 450px;
    right: 0%;
  }
  .txt {
    color: white;
    font-style: inherit;
    font-weight: lighter;
    font-size: 30px;
  }
  .img-responsive {
    width: 120px;
    position: relative;
    bottom: 35px;
    align-items: space-around;
  }

  .cardservicos {
    display: flex;
    position: relative;
    height: fit-content;
    top: 100px;
    width: 110%;
    justify-content: space-evenly;
    /* justify-content: space-between; */
  }

  .cardservicos1 {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .hello {
    background-color: #e48f8e;
    display: flex !important;
    align-items: center;
    -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
  }
  .cont {
    position: relative;
    right: 2%;
    top: -30px;
    background-color: #e48f8e;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .cont h1 {
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
  .textservices {
    font-size: 30px;
    font-weight: lighter;
    color: #ffffff;
    width: 100%;
  }
}

@media screen and (max-width: 731px) {
  .lateral1 {
    width: 100px;
    position: relative;
    left: -30px;
    bottom: -579px;
  }
  .lateral2 {
    width: 80px;
    position: relative;
    display: flex;
    bottom: 370px;
    right: 0%;
  }
  .txt {
    color: white;
    font-style: inherit;
    font-weight: lighter;
    font-size: 20px;
  }
  .img-responsive {
    width: 90px;
    position: relative;
    bottom: 35px;
    align-items: space-around;
  }

  .cardservicos {
    display: flex;
    position: relative;
    height: fit-content;
    top: 100px;
    width: 110%;
    justify-content: space-evenly;
    /* justify-content: space-between; */
  }

  .cardservicos1 {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .hello {
    height: 1000px;
    background-color: #e48f8e;
    display: flex !important;
    align-items: center;
    -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
  }
  .cont {
    position: relative;
    right: 0%;
    top: -30px;
    background-color: #e48f8e;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .cont h1 {
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
  .textservices {
    font-size: 26px;
    font-weight: lighter;
    color: #ffffff;
    width: 100%;
  }
}

@media screen and (max-width: 530px) {
  .lateral1 {
    width: 100px;
    position: relative;
    left: -30px;
    bottom: -589px;
  }
  .lateral2 {
    width: 70px;
    position: relative;
    display: flex;
    bottom: 290px;
    right: 0%;
  }
  .txt {
    color: white;
    font-style: inherit;
    font-weight: lighter;
    font-size: 12px;
  }
  .img-responsive {
    width: 80px;
    position: relative;
    bottom: 20px;
    align-items: space-between;
  }

  .cardservicos {
    display: flex;
    position: relative;
    height: fit-content;
    top: 100px;
    width: 110%;
    justify-content: space-evenly;
    /* justify-content: space-between; */
  }

  .cardservicos1 {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .hello {
    height: 800px;
    background-color: #e48f8e;
    display: flex !important;
    align-items: center;
    -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
  }
  .cont {
    position: relative;
    right: 0%;
    top: -30px;
    background-color: #e48f8e;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .cont h1 {
    font-size: 30px;
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
  .textservices {
    line-height: 0.8;
    font-size: 25px;
    font-weight: lighter;
    color: #ffffff;
    width: 100%;
  }

  @media screen and (max-width: 450px) {
    .lateral1 {
      width: 100px;
      position: relative;
      left: -30px;
      bottom: -589px;
    }
    .lateral2 {
      width: 70px;
      position: relative;
      display: flex;
      bottom: 290px;
      right: 0%;
    }
    .txt {
      color: white;
      font-style: inherit;
      font-weight: lighter;
      font-size: 12px;
    }
    .img-responsive {
      width: 60px;
      position: relative;
      bottom: 20px;
      align-items: space-between;
    }

    .cardservicos {
      display: flex;
      position: relative;
      height: fit-content;
      top: 100px;
      width: 110%;
      justify-content: space-evenly;
      /* justify-content: space-between; */
    }

    .cardservicos1 {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .hello {
      height: 800px;
      background-color: #e48f8e;
      display: flex !important;
      align-items: center;
      -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
    }
    .cont {
      position: relative;
      right: 0%;
      top: -30px;
      background-color: #e48f8e;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .cont h1 {
      font-size: 30px;
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
    .textservices {
      line-height: 0.8;
      font-size: 25px;
      font-weight: lighter;
      color: #ffffff;
      width: 100%;
    }
  }

  @media screen and (max-width: 400px) {
    .lateral1 {
      width: 100px;
      position: relative;
      left: -30px;
      bottom: -509px;
    }
    .lateral2 {
      width: 20%;
      position: relative;
      display: flex;
      bottom: 290px;
      right: 4%;
    }
    .txt {
      color: white;
      font-style: inherit;
      font-weight: lighter;
      font-size: 12px;
    }
    .img-responsive {
      width: 60px;
      position: relative;
      bottom: 20px;
      align-items: space-between;
    }

    .cardservicos {
      display: flex;
      position: relative;
      height: fit-content;
      top: 100px;
      width: 150%;
      justify-content: space-evenly;
      /* justify-content: space-between; */
    }

    .cardservicos1 {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .hello {
      height: 800px;
      background-color: #e48f8e;
      display: flex !important;
      align-items: center;
      -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
    }
    .cont {
      position: relative;
      right: 0%;
      top: -30px;
      background-color: #e48f8e;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .cont h1 {
      font-size: 30px;
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
    .textservices {
      line-height: 0.8;
      font-size: 20px;
      font-weight: lighter;
      color: #ffffff;
      width: 100%;
    }
  }
}
</style>
