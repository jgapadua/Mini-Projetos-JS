//(Mini-Projeto 9) - Contador de Asteríscos

//Criar uma função que exibe a quantidade de *
// que aquela linha possui

exibirAsteristicos(10);

function exibirAsteristicos(linhas) {
  for (let linha = 1; linha <= linhas; linha++){
      let padrao = '';
      for (let i = 0; i < linha; i++) {
        padrao += '*';
      }
      console.log(padrao);
  }
}
// enqt a minha linha for 3 o loop vai rodar 3x
// esse loop roda 3x 


// function exibirAsteristicos(linhas) {
//     let padrao = '';
//     //LOOP
//     for (let linha =1; linha <= linhas; linha++) {
//       padrao += '*';
//       console.log(padrao);
//     }
// }

