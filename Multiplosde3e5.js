//(Mini-Projeto 7) - Multiplos de 3 e 5

//Criar função somar que retorna a
// soma de todos os múltiplos de 3 e 5

//Quais são os múltiplos 3 e de 5 dentro de 10
//R: 3,6,9

//Multiplos de 5
//R: 5,10

//Somando os múltiplos e retornado
//33

//PASSO 1 : armazenar os múltiplos de 3
//PASSO 2 : armazernar os múltiplios de 5
//PASSO 3 : somar os 2

// for ou for in?

somar(10);
function somar(limite) {
  let MultiploDe3 = 0; // não temos valor ainda
  let MultiploDe5 = 0;  // não temos valor ainda

  //DESCOBRIR O QUE É UM NÚMERO ÍMPAR OU PAR
  // loop para percorrer até o limite(número 10)
  for(i = 0; i <= limite; i++){

  //definir se ele é ou não um múltiplo de 3
  //se o cálculo é perfeito ele é um múltiplo de 3
    if( i % 3 === 0 )

  //armazernar o múltiplo de 3 + 1
  // quando ele vier aqui pela segunda vez, se você não faz isso ele vai simplesmente sobrescrever o valor anterior e nos não queremos isso, nos queremos que ele some 
  // para isso usaremos o +=
      MultiploDe3 += i;

  // e se ele não for um múltiplo de 3, ele será um múltiplo de 5
    if( i % 5 === 0)
      MultiploDe5 += i;
  }

// agora fora do loop, pq se fosse dentro nos iríamos perder 
console.log(MultiploDe3 + MultiploDe5) // 33
}

// 3 + 6 + 9 + 5 + 10 = 33


