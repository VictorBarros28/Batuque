<template>

      <div id="navbar">
        <img id="logo" src="../assets/logo_branca.png" alt="">
      <img id="burguer" src="../assets/menu.png" alt="">
        <ul>
            <li><router-link to="">home</router-link></li>
            <li><router-link to="">sobre</router-link></li>
            <li><router-link to="">portfólio</router-link></li>
            <li><router-link to="">serviços</router-link></li>
            <li><router-link to="">blog</router-link></li>
            <li><router-link to="">contato</router-link></li>
        </ul>
    </div>

</template>

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
                $('#navbar').addClass('black');
                $('a').addClass('blacky');
                $('li').addClass('blackyi');
                document.getElementById('logo').setAttribute("src",require('@/assets/logo_rosa.png'));
                document.getElementById('burguer').setAttribute("src",require('@/assets/menu_rosa.png'));
            }else{
                $('#navbar').removeClass('black');
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

<style>
    #burguer{
        display:none;
    }
    #navbar{
        box-sizing: border-box;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 280px;
        transition: .5s;
        z-index: 100;
        top:0;
    }
    ul{
        margin: 0 12% 0 0 !important;
        display: inline;
    }
    li{
        display: inline;
        margin-right: 10%;
        font-family: Calibri;
        font-size: 28px;
        line-height: 0.72;
        letter-spacing: -1.98px;
        border-color: #ffffff;;
    }
    li a{
        text-decoration: none;
        color: #ffffff;
    }
    li a:hover{
        text-decoration: none;
        color: #ffffff;
    }
    li:hover{
        border-bottom: solid;
        border-width: 1px;
        border-color: #ffffff;;
    }
    .blacky{
        color: #535353;
    }
    .blacky:hover{
        color: #535353;
    }
    .blackyi:hover{
        border-color: #535353;
    }
    .black{
        background-color: #ffffff;
        height: 182px !important;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    }
    @media screen and (max-width: 1200px){
        li{
            font-size: 24px;
        }
    }
    @media screen and (max-width: 950px){
        
        li{
            font-size: 20px;
        }
    }
    @media screen and (max-width: 830px){
        #navbar{
            height: 210px;
        }
        #logo{
            width: 220px;
            height: 61.8px;
        }
        
        li{
            font-size: 18px;
        }
    }
    @media screen and (max-width: 830px) and (max-height: 620px){
        .black{
            height: 120px !important;
        }
        #navbar{
            height: 150px;
        }
        #logo{
            width: 200px;
            height: 56.6px;
        }
        
        li{
            font-size: 18px;
        }
    }
    @media screen and (max-width: 700px){
        ul{
            display: none;
        }
       
        #burguer {
            display: flex;
            width: 5%;
            margin:0;
            padding: 0;
        }
        .black{
            height: 100px !important;
        }
        #navbar{
            height: 130px;
        }
        #logo{
            width: 150px;
            height: 42.4px;
        }
    }
    @media screen and (max-width: 567px){
        #burguer{
            width: 8%;
        }
    }
</style>