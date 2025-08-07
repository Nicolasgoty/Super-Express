let n1;
let res = document.getElementById(`resultado`);
function multi(){ 
    n1 = Number(window.prompt("Digite distância em km"));
    res = n1 * 2.6;
    resultado.innerHTML = `<p> Você irá pagar R$${res.toFixed(1)}. </p>`
}