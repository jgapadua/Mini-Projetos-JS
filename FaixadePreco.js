//(Mini-Projeto 14) - Faixa de Preço

// crie um array de objetos de faixa de preço para que ela possa ser usado em um site igual o mercado livre

// faixas, tooltio, minimo, máximo 

// ===> Primeira Opção
let faixas = [ // tooltip : passar o mouse em cima e aparecer uma legenda
  {tooltip: 'ate R$700', minimo: 0, maximo: 700},
  {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
  {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 99999}
];

// ===> Segunda Opção ( Factory Function)
function criaFaixaPreco(tootip,minimo,maximo) {
  return {
    tootip,
    minimo,
    maximo
  }
}
let faixas2 = [
  criaFaixaPreco('a',1,100),
  criaFaixaPreco('b',100,1000),
  criaFaixaPreco('c',1000,10000),
]


// Terceira Opção (Constructor Function)
function FaixaPreco(tooltip,minimo,maximo) {
  this.tooltip = tooltip,
  this.minimo = minimo,
  this.maximo = maximo
}

let faixas3 = [
  new FaixaPreco('d',10,20),
  new FaixaPreco('e',20,30),
  new FaixaPreco('f',30,40)
];

console.log(faixas);
console.log(faixas2);
console.log(faixa3);




