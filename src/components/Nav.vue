<<template>
   <div class="Navbar">
   
       <b-navbar toggleable="lg" id="navbar" >
      
    <b-navbar-brand href="#">
        <img id="logo" src="../assets/logo_branca.png" alt="">

    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">  
        <img id="burguer" src="../assets/menu.png" alt="">

    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Sobre</b-nav-item>
        <b-nav-item href="#">Portfólio</b-nav-item>
         <b-nav-item href="#">Serviços</b-nav-item>
          <b-nav-item href="#">Contato</b-nav-item>
   

     
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<style>
.Navbar{
        position: fixed;
        z-index: 50;
    top: 0;
    width: 100%;
}

   .navwhite{
       background-color: white !important;
   }
     #burguer{
         width: 30px;
         height: 30px;
     }
</style>

<script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous"></script>


<script>

    //adicionando o efeito de trocar a navbar com o scroll
   export default {
       
       methods:{
           handleScroll (event){
               if($(window).scrollTop()){
                   $('#navbar').addClass('navwhite');
                   $('a').addClass('blacky');
                   $('li').addClass('blackyi');
                   document.getElementById('logo').setAttribute("src",require('@/assets/logo_rosa.png'));
                   document.getElementById('burguer').setAttribute("src",require('@/assets/menu_rosa.png'));
               }else{
                   $('#navbar').removeClass('navwhite');
                   $('a').removeClass('blacky');
                   $('li').removeClass('blackyi');
                   document.getElementById('logo').setAttribute("src",require('@/assets/logo_branca.png'));
                   document.getElementById('burguer').setAttribute("src",require('@/assets/menu.png'));
               }
           }
       },
       created () {
           window.addEventListener('scroll', this.handleScroll);
       },
       destroyed () {
           window.removeEventListener('scroll', this.handleScroll);
       }
   }
   </script>

 