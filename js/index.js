/* window.alert("Janela de Alerta");  Ao carregar o site.
window.prompt("Nome: "); Permite digitar resposta 
window.confirm("Confirme"); Confirmar 'ok' ou 'Cancelar' */

document.getElementById('p1').textContent = "P alterado com textContent.";

let idade = 18;
console.log(`Você tem ${idade} anos.`); // Printa substituindo ${} pela variavel, entre ``.
console.log(typeof idade);


let usuario;
document.getElementById("submitar").onclick = function(){
    usuario = document.getElementById("usuario").value;
}