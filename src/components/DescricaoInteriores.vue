<template>
  <div id="Servicos">
    <div class="hello">
      <!-- <img src="../assets/BATIUQUE_LATERAL.png" class="lateral1" /> -->

      <div class="cont">
        <h1 data-aos="fade-down">INTERIORES</h1>
        <div class="textservices">
<div class = "back" id="trigger-right"> <router-link class = "txt" :to = "{ name: 'index'}"> ⮜ </router-link> </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div class="cardservicos">
          <div data-aos="fade-right" data-aos-anchor="#trigger-right" class="cardservicos1 grid-md">
            <img
              src="../assets/BATUQUE_INTERIORES.png"
              href=""
              class="img-responsive"
            />

            <!-- <router-link class = "txt" :to = "{name: 'interiores'}">INTERIORES</router-link> -->
          </div>
        </div>
      </div>
      <!-- <img src="../assets/latdir.png" class="lateral2" /> -->
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
  display: flex;
  justify-content: flex-start;
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
  justify-content: space-around;
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
  height: 100vh;
  top: -60px;
  z-index: 1;
  -webkit-clip-path: polygon(100% 4%, 100% 90%, 0 100%, 0 0);
}
.cont {
  position: relative;
  width: 99%;
  padding-bottom: 9%;
  background-color: #e48f8e;
  display: flex;
  flex-direction: column;
  align-items: center;
}
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
  width: 80%;
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
    width: 15%;
    justify-content: space-EVENLY;
  }

  .cardservicos1 {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .hello {
    top: -6vh;
    padding-bottom: 0px;
    background-color: #e48f8e;
    display: flex !important;
    align-items: center;
    -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
  }
  .cont {
    position: relative;
    justify-content: center;
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
    width: 80%;
    justify-content: space-evenly;
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
    right: -1%;
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
        width: 107px;
    position: relative;
    bottom: 35px;
    align-items: space-around;
  }

  .cardservicos {
    display: flex;
    position: relative;
    height: fit-content;
    top: 100px;
    width: 15%;
    justify-content: space-evenly;
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
  }
}

@media screen and (max-width: 530px) {

  .txt {
    color: white;
    font-style: inherit;
    font-weight: lighter;
    font-size: 12px;
  }
  .img-responsive {
    width: 97px;
    position: relative;
    bottom: 20px;
    align-items: space-between;
  }

  .cardservicos {
    display: flex;
    position: relative;
    height: fit-content;
    top: 100px;
    width: 20%;
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
    right: 0%;
    top: -10vh;
    background-color: #e48f8e;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .cont h1 {
font-size: 36px;
    height: 12vh;
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
      line-height: 1.2;
    font-size: 25px;
    font-weight: lighter;
    color: #ffffff;
    width: 80%;
  }

  @media screen and (max-width: 450px) {
   
    .txt {
      color: white;
      font-style: inherit;
      font-weight: lighter;
      font-size: 12px;
    }
    /* .img-responsive {
      width: 60px;
      position: relative;
      bottom: 20px;
      align-items: space-between;
    } */

    .cardservicos {
      display: flex;
      position: relative;
      height: fit-content;
      top: 100px;
      width: 25%;
      justify-content: space-evenly;
      /* justify-content: space-between; */
    }

    .cardservicos1 {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    /* .hello {
      height: 800px;
      background-color: #e48f8e;
      display: flex !important;
      align-items: center;
      -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
    } */
    .cont {
      position: relative;
      right: 0%;
      top: -5px;
      background-color: #e48f8e;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .cont h1 {
      font-size: 42px;
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
        line-height: 1.1;
      font-size: 25px;
      font-weight: lighter;
      color: #ffffff;
      width: 80%;
    }
  }

  @media screen and (max-width: 400px) {
  
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
      top: 90px;
      width: 20%;
      justify-content: space-evenly;
      /* justify-content: space-between; */
    }

    .cardservicos1 {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    /* .hello {
      height: 800px;
      background-color: #e48f8e;
      display: flex !important;
      align-items: center;
      -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
    } */
    .cont {
    
      top: -12vh;
     
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
      line-height: 1.0;
      font-size: 20px;
      font-weight: lighter;
      color: #ffffff;
      width: 80%;
    }
  }
}

@media screen and (max-height: 955px) {
.hello{
  top: -8vh;
}
}

@media screen and (max-height: 455px) {
  .hello{
  top: -10vh;
}

.textservices{
  font-size:12px;
}

.cont h1{
 font-size: 20px;
 padding-bottom: 4px;
}
.img-responsive{
  width: 10vw;
}

.cardservicos{
  top: 56px;
}

.lateral1{
    width: 11vw !important;
    top: -21vw !important;
}

}
</style>

<style>

@media screen and (max-height: 745px) {
  
.lateral1 {
    width: 12vw;
    top:-24vw;
}}

@media screen and (max-height: 568px) {
  
.lateral1 {
       width: 18vw;
    top: -40vw;
}}

@media screen and (max-height: 455px) {

.lateral1{
    width: 11vw !important;
    top: -21vw !important;
}

}
</style>