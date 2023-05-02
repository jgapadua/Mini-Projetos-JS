//(Mini-Projeto 11) - Montador de Endereço

//Criar um objeto endereço que contém:
// Rua
// Cidade
// CEP
// exibirEndereco(endereco)

// Primeiro : criar um endereço (pode sofer alteração, entao é o let)

let endereco = { // definindo as propriedades abaixo
  rua: 'a',
  cidade: 'b',
  cep: 'c'
};

// Segundo: será criado uma função para exibir as funções desse objeto 
function exibirEndereco(endereco){ // <== recebe end. como parâmetro
  for (let chave in endereco) // <== vai ser usado o LOOP for in => ele permite iterar sobre as propriedades de um objeto
  console.log(chave,endereco[chave]) // <== aqui nos vamos logar mas precisamos pegar o valores indexado de chave
}
exibirEndereco(endereco); // <<== chamando a função