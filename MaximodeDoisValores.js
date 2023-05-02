//  (Mini-Projeto 2) - Máximo Entre Dois Valores //

// Escreva uma função que usa 2 números e retorna o maior entre eles

let valorMaior= max(5,9);
console.log(valorMaior);

function max(numero1,numero2) { 
    if (numero1 > numero2) // comparar os 2 numeros
      return numero1;
    else return numero2;
}

// Simplificando o código deixando ele mais limpo
function max(numero1,numero2) {
  return numero1>numero2 ? numero1 : numero2;
}
