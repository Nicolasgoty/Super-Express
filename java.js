let n1;
let res = document.getElementById(`resultado`);
function multi(){ 
    n1 = Number(window.prompt("Digite distância em km"));
    res = n1 * 2.2;
    resultado.innerHTML = `<p> Você irá pagar ${res.toFixed(1)}. </p>`
}