//(Mini-Projeto 8) - Média de Nota Escolar


// Execício Nota Escolar
// Obter a média a partir de um array

// 0-59 : F
// 60-69 : D
// 70-79 : C
// 80-89 : D
const array = [70,70,80]; //notas
//75

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
  const media = calcularMedia(notas);

  if (media < 59 ) return 'F';
  if (media < 69)  return 'D';
  if (media < 79)  return 'C' ;
  if (media < 89)  return 'B' ;
  return 'A'
}

function calcularMedia(array) {
  let soma = 0;
  // LOOP for : loop que você itera sobre as arrays
  for (let valor of array) {
      soma += valor; // += atribuir todos os valores ali dentro
   }
  // a soma
  return soma/(array.length); // tamanho do array
}


 //=============> For OF <================
// ==> PARA PERCORRER ==> COLEÇÕES <===
//==> PARA PERCORRER ==> ARRAYS <===
// ==> não precisam de um contador ++


// // a soma
// const media = soma/(notas.length); // tamanho do array
// if (media >= 0 && media <= 59)
//   return 'F'
// if (media >= 60 && media <= 69)
//   return 'D'
// if (media >= 70 && media <= 89)
//   return 'C'
// if (media >= 80 && media <= 89)
//   return 'D'
// }