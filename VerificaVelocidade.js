//(Mini-Projeto 4) - Medidor de Velocidade

//Velocidade Máxima de até 70 km
// a cada 5km acima do limite você ganha 1 ponto
// Math.Floor() ==> arredondar os números decimais
//caso pontos maior que 12 => "Cateira Suspendida"


verificaVelocidade(130); // coloque aqui o valor da velocidade

function verificaVelocidade(velocidade) {
  const velocidadeMaxima = 70;
  const KmPorPonto = 5;
    //Primeira Condição => Velocidade Máxima de até 70 km
      if (velocidade <= velocidadeMaxima)
        console.log('Ok');
    //Segunda Condição => A cada 5km acima do limite você ganha 1 ponto
      else {
        const pontos = Math.floor((velocidade - velocidadeMaxima)/ KmPorPonto)
    //caso pontos maior que 12 => "Cateira Suspendida"
        if(pontos >= 12)
          console.log('Carteira Suspensa');
        else 
          console.log('Pontos', pontos);
      }
  }