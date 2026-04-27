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


/* let numero  = window.prompt("Digite um numero: "); // Pensa que é string.
numero = Number(numero); // Transforma outros tipos em número.
numero += Math.round(Math.PI); 
console.log(numero); */


document.getElementById("botaojs").onclick = function(){
    let masculino = document.getElementById("Masculino").checked; // true ou false.
    let feminino = document.getElementById("Feminino").checked;
    let humano = document.getElementById("humano");        // verifica se está marcado.

    if(masculino && humano.checked) {
        console.log("Humano Masculino");
    } else if(feminino && humano.checked) {
        console.log("Humano Feminino");
    } else{
        console.log("Selecione humano e sexo");
    }

    humano.checked = false; // Desmarca o checkbox.
}


const eu = "Jonas Eduardo";
let primeiroNome = eu.slice(0, eu.indexOf(" ")); // Pega texto do inicio ao espaço.


const num = 17;
num === "17" ? console.log("Mesmo valor e tipo") : console.log("Tipo diferente");
num !== "17" ? console.log("Nao e mesmo valor e tipo") : console.log("Mesmo valor e tipo");