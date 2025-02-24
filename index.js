var SetaEsquerda = window.document.getElementById("seta-esquerda")
var Bruna = window.document.getElementById("bruna")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var SetaDireita = window.document.getElementById("seta-direita")


function RolarParaDireita() {
    Bruna.style = "display:none"
    Samantha.style = "display:flex; margin-left:40px"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex"
    Leonardo.style = "margin-left:0px"
}


function RolarParaEsquerda() {
    Samantha.style = "display:none"
    Bruna.style = "display:flex"
    SetaEsquerda.style = "display:none"
    SetaDireita.style = "display:flex"
    Leonardo.style = "margin-left:50px"
}