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
let ligado: boolean = false;
let nome: string = "João";
let idade: number = 19;
let altura: number = 1.76;

// tipos especiais
let nulo: null = null;
let indefinido: undefined = undefined;

// tipos abrangetes
let retorno: void;
let retornoView: any = "pode retornar qualquer coisa";

// objeto - sem previsibilidade
let produto: object = {
    name:"Joao",
    cidade:"RN",
    idade:19,
};

// objeto tipado - com previsibilidade
type produtoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: produtoLoja = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5, 
}

// arrays
let dados: string[] = ["Joao","ana","felipe"];
let dados2: Array<string> = ["Joao","ana","felipe"];

// vetor de 2 tipos
let infos: (string | number)[] = ["felipe", 15, "Joao", 19];

// tuplas
let boleto:[string, number, number] = ["agua conta",199.90,7493829182];

// arrays métodos -> mesmos do js

// Datas
let aniversario: Date = new Date("2023-09-01 20:08");
console.log(aniversario.toString());