let numerosecreto = GerarNumeroAleatorio ();

let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do numero secreto";

let paragrafo = document.querySelector("p")
paragrafo.innerHTML = "Digite um numero entre 1 e 10";

function exibirTextoNaTela (tag) {
let campo = documento.querySelector(tag)
campo.innerHTML = texto; 
}

exibirTextoNaTela ("h1", "acertou")
exibirTextoNaTela ("p", "Digite um numero entre 1 e 10")

function verificarChute() {
    let chute = document.querySelector ("imput").value;
    console.log(chute == numerosecreto);
}

function GerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 +1)
};