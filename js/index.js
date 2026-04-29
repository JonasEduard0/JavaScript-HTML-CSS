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


function pessoa(nome, idade) { //Pode ñ ter parâmetros, mas não terá argumentos.
    return console.log(`Ola, ${nome}, de ${idade} anos.`);
} //return nesse caso opcional. Quando tem, a função para quando chegar nele.


let frutas = ["Banana", "Maçã", "Laranja"];
frutas.push("Uva");             // Adiciona elemento no final do array.
frutas.unshift("Abacaxi");      // Adiciona elemento no início.
frutas.pop();                   // Remove o último elemento do array.
frutas.shift();                 // Remove o primeiro elemento.
frutas.map(x=>x+"s");           // Adiciona 's' a cada elemento, não altera o original.
frutas.filter(x=>x.length > 5); // Retorna um novo array com elementos com mais de 5 letras.

frutas.forEach(element => { // Para cada elemento do array, faça:
    console.log(element);
});


let novaFruta = [... frutas, "Pera"]; // Cria novo array com elementos de Frutas + "Pera".
let novoNome = [... "Jonas"];         // Cria array com cada letra do nome como elemento.

function Rest(...frutas) { // Recebe quantidade variavel de argumentos.
    console.log(frutas)    // Printa o array de argumentos.
}
Rest("Uva", "Melancia", "Laranja"); // Passa 3 argumentos, que serão um array dentro da função.

let Spread = [1, 2, 3];
console.log(...Spread);    // Printa separadamente, sem colchetes ou vírgulas.


// Callback: função passada como argumento para outra, que é executada depois.
function saudacao(nome, pessoa) {
    console.log(`Ola, ${nome}`);
    pessoa(); // Chama a função q é executada após o console.log
}

saudacao("Jonas", () => pessoa("Eduardo", 25)); // Passa função anônima como callback.


let nums = [5, 2, 9, 1]

let maior = nums.reduce((acc, valor) => {
    if (valor > acc) {
        return valor;
    } else {
        return acc;
    }
}); // Reduce reduz o array a um único valor, usando a função fornecida para comparar os elementos.

console.log(maior);