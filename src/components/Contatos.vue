<template>
    <div id="contatos">
        <div id="info">
        
        <div id="email">
            <div class="icones" >
            <a href="">
                <img src="../assets/email.png" alt="">
            </a>
            </div>
            <div class="email">
            batuque.design@gmail.com
            </div>
        </div>
        
        <div id="fone">
            <div class="icones">
            <a href="">
                <img src="../assets/fone.png" alt="">
            </a>
            </div>
            <div id="cidade">
            Maceió 
            </div>
            <div>
            (82) 9 0000-0000   
            </div>
        </div>
        
        <div id="horario">
            <div class="icones">
            <a href="">
                <img src="../assets/fone.png" alt="">
            </a>
            </div>
            <div>Segunda à Sexta</div>
            <div>8 às 17h</div>
        </div>
    </div>
    <div id="location">
        <div class="icones" >
            <a href="">
                <img src="../assets/location.png" alt="">
            </a>
        </div>
        <div id="endereço">
            Av.Lourival Melo Mota, S/n - Tabuleiro do Martins, Maceió-AL, Faculdade de Arquitetura e Urbanismo(UFAL)
        </div>
    </div>
    </div>
</template>
<script>

export default {
    
}
</script>
<style scoped>
#contatos{
    background-color:#f8f8f8; 
    font-family:Calibri;
    font-size: 16px;
    color:#4e4e4e;
}
#info{
    display: flex;
    flex-direction: row;
    width: 750px;
    justify-content: center;
}

#email{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    
    padding-bottom:14px;
}
.email{
    margin-top: 24.2px;
}
#fone{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-left: 50px;
    border-left: 1px solid #707070;
    border-right:1px solid #707070;
    border-top: 0px;
    border-bottom: 0px;
    padding-left: 50px; 
    padding-right: 50px;
    padding-bottom:14px;
    border-color:#4e4e4e;
}

#horario{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-left: 30.1px;
    
    padding-bottom:14px;
}
#location{
    display: flex;
    flex-direction: row;
    margin-top: 32px;
}
#endereço{
    margin-left: 10.3px;
    margin-top:11px;
}
.icones{
    width: 31.7px;
    height: 31.7px;
}
</style>