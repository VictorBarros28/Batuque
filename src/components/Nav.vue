<<template>
  <div class="Navbar ">
    <b-navbar toggleable="lg" id="navbar" class="navbarshadow">
      <b-navbar-brand href="#">
        <img id="logo" src="../assets/logo_branca.png" alt="" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">
        <img id="burguer" src="../assets/menu.png" alt="" />
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item data-scroll class="cor" href="#Home">home</b-nav-item>
          <b-nav-item data-scroll class="cor" href="#About">sobre</b-nav-item>
          <b-nav-item class="cor" href="#">portfólio</b-nav-item>
          <b-nav-item class="cor" href="#Servicos">serviços</b-nav-item>
          <b-nav-item class="cor" href="#">blog</b-nav-item>
          <b-nav-item data-scroll class="cor" href="#Contato">contato</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous"
></script>

<script src="path/to/smooth-scroll.polyfills.min.js"></script>

<script>
import SmoothScroll from "smooth-scroll";
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
});

//adicionando o efeito de trocar a navbar com o scroll
export default {
  methods: {
    handleScroll(event) {
      if ($(window).scrollTop()) {
        $("#navbar").addClass("navwhite");
        $("#navbar").removeClass("navbarshadow");
        $("a").removeClass("cor");
        $("li").removeClass("cor");

        document
          .getElementById("logo")
          .setAttribute("src", require("@/assets/logo_rosa.png"));
        document
          .getElementById("burguer")
          .setAttribute("src", require("@/assets/menu_rosa.png"));
      } else {
        $("#navbar").removeClass("navwhite");
        $("#navbar").addClass("navbarshadow");

        $("a").addClass("cor");
        $("li").addClass("cor");
        document
          .getElementById("logo")
          .setAttribute("src", require("@/assets/logo_branca.png"));
        document
          .getElementById("burguer")
          .setAttribute("src", require("@/assets/menu.png"));
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.navbar {
  transition: 2s;
}

.navbarshadow {
  box-shadow: none !important;
}

.cor a {
  color: white !important;
  font-family: Calibri;
  font-weight: lighter;
  font-size: 25px;
}

.navbar-light .navbar-nav .nav-item .nav-link {
  font-size: 25px;
  font-family: Calibri;
  font-weight: lighter;
}

#logo {
  width: 300px !important;
  margin-left: 110px;
}

.Navbar {
  position: fixed;
  z-index: 50;
  top: 0;
  width: 100%;
}

.navwhite {
  background-color: white !important;
  transition: 2s;
}
#burguer {
  width: 25px;
  height: 20px;
  margin-top: 15px;
}

.navbar-expand-lg .navbar-collapse {
  transition: 0.5s;
  margin-right: 229px;
}

@media screen and (max-width: 1500px) {
  .navbar-expand-lg .navbar-collapse {
    transition: 0.5s;
    margin-right: 170px;
  }
}
@media screen and (max-width: 1300px) {
  .navbar-expand-lg .navbar-collapse {
    transition: 0.5s;

    margin-right: 100px;
  }
}
@media screen and (max-width: 1200px) {
  .navbar-expand-lg .navbar-collapse {
    transition: 0.5s;
    margin-right: 50px;
  }
}
@media screen and (max-width: 1100px) {
  #logo {
    width: 280px;
    transition: 0.5s;
    margin-left: 70px;
  }
}

@media screen and (max-width: 680px) {
  #logo {
    width: 200px !important;
    transition: 0.5s;
    margin-left: 20px;
  }
}
</style>
