//(Mini-Projeto 12) - Encontre a igualdade

// Intermediário

// Criando duas funções para comparar objetos

//Criar dois objetos endereços e depois vamos comparar se esses objetos se eles são iguais em questão de propriedades e depois se são iguais em questão de objeto de memória 

function Endereco(rua, cidade, cep) {
  this.rua = rua, // definindo as informações 
  this.cidade = cidade,
  this.cep = cep 
}

// criar dois objetos de endereços
const endereco1 = new Endereco ('a', 'b', 'c');
const endereco2 = new Endereco ('a', 'b', 'c');

// agora vai ser criado uma função que compara se esses objetos são iguais em dois sentidos : 

//se tem as propridades iguais
function saoIguais(endereco1, endereco2) {
    return endereco1.rua === endereco2.rua && 
           endereco1.cidade === endereco2.cidade &&
           endereco1.cep === endereco2.cep 
}
console.log(saoIguais(endereco1,endereco2)); // true

// se tem endereços memórias iguais > a referencia do objeto aponta para o mesmo local da memória
function temEnderecoMemoriaIguais(endereco1,endereco2){
  return endereco === endereco2;
}
console.log(temEnderecoMemoriaIguais(endereco1,endereco2)); // false

// eles apontam para espaços diferetne na memória

// nos temos => tipos de valor, e tipo de referencia
//      tipo de valor(6): null, undefined, boolean, number, string, symbol
//      tipo referencia(1): objeto 
