// (Mini-Projeto 5) - Par ou Impar

// Receber uma *quantidade* de valores para avaliar 
// Função exibe se cada valor é par ou ímpar

// exibirTipo(5);

// function exbibirTipo(limite) {
//     if (exibirTipo === 0|| 2 || 4 || 6 || 8)
//     console.log('PAR');

//     else
//     console.log('IMPAR')
// }

// como eu faço para indicar os numeros terminados em pares? uso o módulo? 
//preciso fazer uma variável para mostrar os pares? 


// RESOLVENDO

exibirTipo(5);
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
      if (i % 2 === 0)
        console.log(i, 'PAR');
      else 
        console.log(i,'IMPAR');
    }
}


            // CONSTRUINDO UM FOR
//primeiro : fazer um loop para que possa iterar sobre cada valor que foi passado 
//segundo: fazer um loop : for
    // 1- definir um for
    //2- dentro for, o valor inicial > let 1 = 0
    // (nos vamos definir o valor inicial como zero)
    //3- esse valor vai ocorrer até que ele chega no limite ou seja, até que : i <= limite (que foi passado em cima)
    //4- depois disso ele vai icrementar o i++ para que ele consiga fazer a próxima iteração. 

          // DEFINIR SE ELE É UM PAR OU ÍMPAR

  // nos podemos comparar definindo um if > o valor que foi passado > (i % 2 === 0) > modulos 2 % for igual a zero > ou seja esse calculo está me mostrando que ele par, e se ele for 0 ele está dizendo que é PAR
  // else : caso nao seja o caso ele é IMPAR

  // COLOCAR O NÚMERO QUE ESTÁ SENDO COMPARADO
      // acrescentar o i dentro do CONSOLE.LOG

