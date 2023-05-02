//(Mini-Projeto 13) - Montador de Postagem de blog


// Postagem de Blog
// criar objeto postagem

//Criar um objeto de postagem de blog que vai conter as seguintes propriedades 

//postagem
/* 
=>titulo
=>mensagem
=>vizualizações
=>comentário ( autor,mensagem)
=>estaAoVivo
*/

let postagem = {
  titulo : 'a',
  mensagem: 'b',
  autor: 'c',
  visualizacoes: 10,
  comentarios : [                 // array de comentários
    { autor: 'a', mensagem: 'b'}, // array de comentários
    { autor: 'a', mensagem: 'b'} // array de comentários
  ],
  estaAoVivo : true 
}

console.log(postagem);