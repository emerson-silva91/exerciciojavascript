let produto = document.querySelector ("#produto");
let segundocamp = document.querySelector ("#segundocamp");
let btsubtrair = document.querySelector ("#btsubtrair");
let resultado = document.querySelector ("#resultado");

function subtrair (){
    let subproduto = Number (produto.value);
    let segundoproduto = Number (segundocamp.value);
    let subtrair = subproduto-segundoproduto
    resultado.textContent=subtrair
}
btsubtrair.onclick = function(){ 
    subtrair ()
}
