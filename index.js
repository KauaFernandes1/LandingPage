var seta = window.document.getElementById("setaesquerda")
var setadestra = window.document.getElementById("setadireita")
var leoo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")

function Rolarparadireita() {
    leoo.style = "display:none"
    bruna.style = "display:flex"
    samanta.style = "display:none"
    setadestra.style = "display:"
    seta.style = "display:flex; margin-top:-7%"
}

function Rolarparaesquerda(){
    leoo.style = "display:flex; margin-top: -8%"
    bruna.style = "display: none"
    samanta.style = "display:flex; margin-left: 55%; margin-top: -12%"
    setadireita.style = "display:flex; margin-top:10%"
    setaesquerda.style = "display:none"
}

