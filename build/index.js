"use strict";
// type heroi={
//     name: string;
//     vulgo: string;
// };
// function printaObjeto(pessoa: heroi)
// {
//     console.log(pessoa);
// }
// printaObjeto({name: "Matt", vulgo: "batman"});
// tipos primitivos
let ligado = false;
let nome = "João";
let idade = 19;
let altura = 1.76;
// tipos especiais
let nulo = null;
let indefinido = undefined;
// tipos abrangetes
let retorno;
let retornoView = "pode retornar qualquer coisa";
// objeto - sem previsibilidade
let produto = {
    name: "Joao",
    cidade: "RN",
    idade: 19,
};
let meuProduto = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5,
};
// arrays
let dados = ["Joao", "ana", "felipe"];
let dados2 = ["Joao", "ana", "felipe"];
// vetor de 2 tipos
let infos = ["felipe", 15, "Joao", 19];
// tuplas
let boleto = ["agua conta", 199.90, 7493829182];
// arrays métodos -> mesmos do js
// Datas
let aniversario = new Date("2023-09-01 20:08");
console.log(aniversario.toString());
// funções
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `hello ${name}`;
}
let soma = addNumber(10, 5);
let msg = addToHello("João");
console.log(soma);
console.log(msg);
