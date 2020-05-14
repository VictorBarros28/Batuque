<template>
  <div id="formulario">
    <form action="" method="post" enctype="multipart/form-data">
      <div id="form-name">
        <label class="info" for="">NOME</label>
        <input
          class="placeholder"
          type="text"
          name="nome"
          required="required"
          placeholder=""
        />
      </div>
      <div id="form-email">
        <label class="info" for="">EMAIL</label>
        <input
          class="placeholder"
          type="text"
          name="nome"
          required="required"
          placeholder=""
        />
      </div>
      <div id="form-fone">
        <label class="info" for="">TELEFONE</label>
        <input
          class="placeholder"
          type="text"
          name="telefone"
          required="required"
          placeholder=""
        />
      </div>
      <div id="form-mensagem">
        <label class="info" for="">MENSAGEM</label>
        <textarea
          name="mensagem"
          id="mensagem"
          required="required"
          placeholder=""
          cols="61"
          rows="10"
        ></textarea>
      </div>
      <div id="form-enviar">
        <button id="enviar">ENVIAR!</button>
      </div>
    </form>

    <div id="logo">
      <div>
        <a href="">
          <img class="icones" src="../assets/face.png" alt="" />
        </a>
      </div>
      <div>
        <a href="">
          <img class="icones" src="../assets/insta.png" alt="" />
        </a>
      </div>
      <div>
        <a href="">
          <img class="icones" src="../assets/be.png" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Contatos from "./Contatos.vue";
export default {
  components: { Contatos },
};
</script>

<style>
#formulario {
  background-color: #f8f8f8;
}
.info {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  color: #4e4e4e;
  font-family: "Segoe UI";
  font-weight: lighter;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  opacity: 0.8;
}
.placeholder {
  width: 454.1px;
  height: 30.5px;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  border-bottom: solid 1px #e8777b;
  background-color: #f8f8f8;
  opacity: 0.3;
}

#form-email {
  margin-top: 34.7px;
}
#form-fone {
  margin-top: 35.2px;
}
#form-mensagem {
  margin-top: 22.1px;
}
#form-enviar {
  width: 454.1px;
  height: 30px;
}
#mensagem {
  width: 453.4px;
  height: 137.8px;
  border: solid 0.3px #e8777b;
  margin-top: 15.8px;
  background-color: #f8f8f8;
  opacity: 0.3;
  resize: none;
}
#enviar {
  font-family: "Segoe UI";
  font-size: 12px;
  color: black;
  font-weight: lighter;
  width: 73.7px;
  height: 25.8px;
  border: solid 0.6px #e8777b;
  background-color: #f8f8f8;
  margin-top: 21.8px;
  float: right;
  opacity: 0.6;
}
#enviar:hover {
  color: white;
  background-color: #e8777b;
}
#logo {
  margin-top: 33.7px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 180px;
}
.icones {
  cursor: pointer;
}
@media only screen and (max-width: 1150px) {
  .placeholder {
    width: 350px;
  }
  #mensagem {
    width: 350px;
  }
  #form-enviar {
    width: 350px;
  }
}

@media only screen and (max-width: 950px) {
  .placeholder {
    width: 300px;
  }
  #mensagem {
    width: 300px;
  }
  #form-enviar {
    width: 300px;
  }
}

@media screen and (max-width: 890px) {
  .placeholder {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #mensagem {
    width: 100%;
  }
  #formulario {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #enviar {
    width: 100%;
    float: none;
  }
  #form-enviar {
    width: 444.59px;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 520px) {
    #form-enviar {
      width: 100%;
    }

    .placeholder {
      width: 100%;
    }
    #mensagem {
      width: 100%;
    }
    form {
      width: 80%;
    }
    #endereco {
      font-size: 14px;
    }
    #location-wrap {
      width: 80%;
    }
  }

  @media screen and (max-width: 420px) {
    #location-wrap {
      width: 90%;
      font-size: 12.5px;
    }
  }

  @media screen and (max-width: 340px) {
    .placeholder {
      width: 100%;
    }
    #mensagem {
      width: 100%;
    }
    #form-enviar {
      width: 100%;
    }
  }
}
</style>
