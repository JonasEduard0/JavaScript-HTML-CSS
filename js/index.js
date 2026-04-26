/* window.alert("Janela de Alerta");  Ao carregar o site.
window.prompt("Nome: "); Permite digitar resposta 
window.confirm("Confirme"); Confirmar 'ok' ou 'Cancelar' */

document.getElementById('p1').textContent = "P alterado com textContent.";

const idade = 18;
console.log(`Você tem ${idade} anos.`); // Printa substituindo ${} pela variavel, entre ``.
console.log(typeof idade);


document.getElementById("botaojs").onclick = function(){ //Quando clica no botão, função ativa
    let nome = document.getElementById("textojs").value; 
    document.getElementById("pjs").textContent = `Ola, ${nome}`;
}


let numero  = window.prompt("Digite um numero: "); // Pensa que é string.
numero = Number(numero); // Transforma outros tipos em número.
numero += Math.round(Math.PI); 
console.log(numero);


