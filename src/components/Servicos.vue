<template>
  <div id="Servicos">
    <div class="fundorosa">
<!-- <img src="../assets/latdir.png" class="lateral2" /> -->
      <div class="conteudoservicos">
        <h1 data-aos="fade-down">O QUE FAZEMOS ?</h1>
        <div class="textservices">
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
              src="../assets/BATUQUE_GRAFICO.png"
              href=""
              class="img-responsive"
            />

            <router-link class="txt" :to="{ name: 'grafico' }"
              >GRÁFICO</router-link
            >
          </div>
          <div data-aos="fade-right" class="cardservicos1 grid-md">
            <img
              src="../assets/BATUQUE_INTERIORES.png"
              href=""
              class="img-responsive"
            />

            <router-link class="txt" :to="{ name: 'interiores' }"
              >INTERIORES</router-link
            >
          </div>
          <div data-aos="fade-right" class="cardservicos1 grid-md">
            <img
              src="../assets/BATUQUE_PRODUTOS.png"
              href=""
              class="img-responsive"
            />

            <router-link class="txt" :to="{ name: 'produtos' }"
              >PRODUTOS</router-link
            >
          </div>
        </div>
      </div>
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
.fundorosa {
  padding-bottom: 200px;
  background-color: #e48f8e;
  display: flex !important;
  align-items: center;
  position: relative;
  top: -60px;
  z-index: 1;
  -webkit-clip-path: polygon(100% 4%, 100% 90%, 0 100%, 0 0);
}
.conteudoservicos {
  position: relative;
  padding-top:10%;
  padding-bottom: 9%;
  background-color: #e48f8e;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.conteudoservicos h1 {
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
    width: 90%;
    justify-content: space-between;
  }

  .cardservicos1 {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .fundorosa {
    background-color: #e48f8e;
    display: flex !important;
    align-items: center;
    -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
  }
  .conteudoservicos {
    position: relative;
    right: 4%;
    top: -30px;
    background-color: #e48f8e;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .conteudoservicos h1 {
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
    justify-content: space-between;
  }

  .cardservicos1 {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .fundorosa {
    background-color: #e48f8e;
    display: flex !important;
    align-items: center;
    -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
  }
  .conteudoservicos {
    position: relative;
    right: 2%;
    top: -30px;
    background-color: #e48f8e;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .conteudoservicos h1 {
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
    justify-content: space-between;
  }

  .cardservicos1 {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .fundorosa {
    height: 1000px;
    background-color: #e48f8e;
    display: flex !important;
    align-items: center;
    -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
  }
  .conteudoservicos {
    position: relative;
    right: 0%;
    top: -30px;
    background-color: #e48f8e;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .conteudoservicos h1 {
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
    justify-content: space-between;
  }

  .cardservicos1 {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .fundorosa {
    height: 800px;
    background-color: #e48f8e;
    display: flex !important;
    align-items: center;
    -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
  }
  .conteudoservicos {
    position: relative;
    right: 0%;
    top: -30px;
    background-color: #e48f8e;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .conteudoservicos h1 {
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
    width: 80%;
  }

  @media screen and (max-width: 450px) {

   
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
      justify-content: space-between;
    }

    .cardservicos1 {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .fundorosa {
      height: 800px;
      background-color: #e48f8e;
      display: flex !important;
      align-items: center;
      -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
    }
    .conteudoservicos {
      position: relative;
      right: 0%;
      top: -30px;
      background-color: #e48f8e;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .conteudoservicos h1 {
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
      top: 100px;
      justify-content: space-between;
    }

    .cardservicos1 {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .fundorosa {
      height: 800px;
      background-color: #e48f8e;
      display: flex !important;
      align-items: center;
      -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
    }
    .conteudoservicos {
      position: relative;
      right: 0%;
      top: -30px;
      background-color: #e48f8e;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .conteudoservicos h1 {
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
      width: 80%;
    }
  }
}
</style>
