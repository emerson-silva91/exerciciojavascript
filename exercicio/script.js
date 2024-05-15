let ipNumerl = document.querySelector ("#ipNumerl");
let ipNumerR = document.querySelector ("#ipNumerR");
let btsomar = document.querySelector ("#btsomar");
let resultado = document.querySelector ("#resultado");

function somar (){
   let Numero = Number(ipNumerl.value);
   let Numera = Number (ipNumerR.value);
   let soma = Numero+Numera
   resultado.textContent=soma
}
btsomar.onclick = function(){
    somar()
}