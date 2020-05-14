<template>
  <div>
    <div id="contatos">
      <div id="info">
        <div id="email">
          <div class="icones">
            <a href="">
              <img src="../assets/email.png" alt="" />
            </a>
          </div>
          <div class="email">batuque.design@gmail.com</div>
        </div>

        <div id="fone">
          <div class="icones">
            <a href="">
              <img src="../assets/fone.png" alt="" />
            </a>
          </div>
          <div id="cidade">Maceió</div>
          <div>(82) 9 0000-0000</div>
        </div>

        <div id="horario">
          <div class="icones">
            <a href="">
              <img src="../assets/fone.png" alt="" />
            </a>
          </div>
          <div id="dias">Segunda à Sexta</div>
          <div>8 às 17h</div>
        </div>
      </div>
      <div id="location">
        <div class="icones">
          <a href="">
            <img src="../assets/location.png" alt="" />
          </a>
        </div>
        <div id="endereço">
          Av.Lourival Melo Mota, S/n - Tabuleiro do Martins, Maceió-AL,
          Faculdade de Arquitetura e Urbanismo(UFAL)
        </div>
      </div>
    </div>
    <div class="contatos-wrap">
      <div id="info-wrap">
        <div id="fone">
          <div class="icones">
            <a href="">
              <img src="../assets/fone.png" alt="" />
            </a>
          </div>
          <div id="cidade">Maceió</div>
          <div>(82) 9 0000-0000</div>
        </div>

        <div id="horario">
          <div class="icones">
            <a href="">
              <img src="../assets/fone.png" alt="" />
            </a>
          </div>
          <div id="dias">Segunda à Sexta</div>
          <div>8h às 17h</div>
        </div>

        <div id="email">
          <div class="icones">
            <a href="">
              <img src="../assets/email.png" alt="" />
            </a>
          </div>
          <div class="email">batuque.design@gmail.com</div>
        </div>
      </div>

      <div id="location-wrap">
        <div class="icones">
          <a href="">
            <img src="../assets/location.png" alt="" />
          </a>
        </div>
        <div id="endereço">
          Av.Lourival Melo Mota, S/n - Tabuleiro do Martins, Maceió-AL,
          Faculdade de Arquitetura e Urbanismo(UFAL)
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { BContainer, BRow, BCol } from "bootstrap-vue";
export default {
  components: {
    BContainer,
    BRow,
    BCol,
  },
};
</script>
<style scoped>
.contatos-wrap {
  display: none;
  background-color: #f8f8f8;
}

#contatos {
  background-color: #f8f8f8;
  font-family: Calibri;
  font-size: 16px;
  color: #4e4e4e;
}

#info {
  display: flex;
  flex-direction: row;

  justify-content: center;
}

#email {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding-bottom: 14px;
}

.email {
  margin-top: 24.2px;
}

#fone {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  border-left: 1px solid #707070;
  border-right: 1px solid #707070;
  border-top: 0px;
  border-bottom: 0px;
  padding-left: 44.5px;
  padding-right: 44.5px;
  padding-bottom: 14px;
  border-color: #4e4e4e;
}

#horario {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 30.1px;

  padding-bottom: 14px;
}

#location {
  display: flex;
  flex-direction: row;
  margin-top: 32px;
}

#endereço {
  margin-left: 10.3px;
  margin-top: 11px;
}

.icones {
  width: 31.7px;
  height: 31.7px;
}

@media only screen and (max-width: 1150px) {
  #fone {
    padding-right: 30.5px;
    padding-left: 30.5px;
    padding-bottom: 14px;
    margin-left: 0px;
  }

  .email {
    padding-right: 15px;
  }

  #horario {
    margin-left: 15px;
  }
}

@media screen and (max-width: 890px) {
  #fone {
    border: none;
    padding-left: 0px;
    padding-right: 0px;
  }

  #contatos {
    display: none;
    background-color: #f8f8f8;
  }

  .contatos-wrap {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    background: #f8f8f8;
  }

  #info-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 445px;
  }

  #email {
    width: 100%;
  }

  #location-wrap {
    display: flex;
  }
}

@media screen and (max-width: 490px) {
  #info-wrap {
    width: 340px;
    font-size: 12px;
  }
}

@media screen and (max-width: 340px) {
  #info-wrap {
    width: 275px;
  }
}
</style>
