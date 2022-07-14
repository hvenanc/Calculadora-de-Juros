var capital = document.querySelector("div.container form input:nth-of-type(1)")
var taxa = document.querySelector("div.container form input:nth-of-type(2)")
var aporte = document.querySelector("div.container form input:nth-of-type(3)")
var tempo = document.querySelector("div.container form input:nth-of-type(4)")
const jurosSimples = document.querySelector("div.container div button")
var resultadoSimples = document.querySelector("div.container div span")

jurosSimples.addEventListener("click", function () {

    var calculo = Number(capital.value) * (Number(taxa.value) / 100) * Number(tempo.value) + Number(capital.value) + Number(aporte.value) * Number(tempo.value)
    resultadoSimples.innerHTML = calculo

})

const jurosCompostos = document.querySelector(".composto")
var resultadoComposto = document.querySelector(".jcomposto")

jurosCompostos.addEventListener("click", function () {

    let x, y, soma, montante, total;
    x = Number(tempo.value)
    y = 1;
    montante = Number(capital.value)
    aplic = Number(aporte.value)
    perc = Number(taxa.value)

    while (x >= y) {
        soma = montante * (perc / 100)
        total = soma + aplic
        montante = montante + total
        y++;
    }
    var calculo2 = montante.toPrecision(6)
    resultadoComposto.innerHTML = calculo2

})