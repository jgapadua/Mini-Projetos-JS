//(Mini-Projeto 6) - Encontre o String

//Criar um método para ler propriedades de um objeto

//Exibir somente as propriedades do tipo STRING que estão nesse objeto

//_________________________________________//

//criar um objeto filme
// chave : titulo
// valor: vingadores
const filme = {
  titulo: 'vingadores',
  ano: 2018,
  diretor: 'Robin',
  personagem: 'Thor'
}

exibirPropriedade(filme);
function exibirPropriedade(obj) {
  // loop for : nos vamos pegar um propriedade in objeto 
  //=> nos vamos ver todas as propriedades/ iterar sobre as propriedades do objeto
  for (prop in obj)
  //==> comparar se if > o tipo da propriedade é igual a string
      if(typeof obj[prop] === 'string') 
  //==> se for o caso nos vamos fazer o console.log exibindo a propriedade o tipo de propriedade e também o objeto indexado na propriedade
        console.log(prop,obj[prop])
}

// DICA : ==> comprar especificamente o valor que esta dentro da propriedade
        // ==> use > obj[prop]


// console.log(filme) // {titulo: 'vingadores', ano: 2018, diretor: 'Robin', personagem: 'Thor'//