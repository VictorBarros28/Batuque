<template>

      <div id="navbar">
        <img id="logo" src="./img/logo_branca.png" alt="">
        <ul>
            <li><a href="">home</a></li>
            <li><a href="">sobre</a></li>
            <li><a href="">portfólio</a></li>
            <li><a href="">serviços</a></li>
            <li><a href="">blog</a></li>
            <li><a href="">contato</a></li>
        </ul>
    </div>

</template>

<script>
 //adicionando o efeito de trocar a navbar com o scroll
export default {

    methods:{
        handleScroll (event){
            if($(window).scrollTop()){
                $('#navbar').addClass('black');
                $('a').addClass('blacky');
                $('li').addClass('blackyi');
                document.getElementById('logo').setAttribute("src","/img/logo_rosa.9f863e19.png");
            }else{
                $('#navbar').removeClass('black');
                $('a').removeClass('blacky');
                $('li').removeClass('blackyi');
                $('img').attr("src","/img/logo_branca.f747ee1b.png");
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

    #navbar{
        box-sizing: border-box;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 280px;
        transition: .5s;
    }

    img{
        transition: .5s;
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
        transition: .2s;
    }

    li a:hover{
        text-decoration: none;
        color: #ffffff;
       
    }

    li:hover{
        border-bottom: solid;
        border-width: 1px;
        cursor: pointer;
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

</style>