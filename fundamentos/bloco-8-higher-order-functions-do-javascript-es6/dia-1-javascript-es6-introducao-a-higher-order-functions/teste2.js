const newEmployees = (nome) => {
    const employees = {
      id1: nome('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: nome('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: nome('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const nome = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_');
    return {nomeCompleto, email:`${email}@trybe.com`}
}

console.log(newEmployees(nome));

// EXERCÍCIO 2 
// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. 
//Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.
// O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checar = (numApostado, numSorteado) => numApostado === numSorteado;

const resultadoLoteria = (numApostado, fn) =>{
  const numSorteado = Math.floor((Math.random() * 5) + 1);
  return fn (numApostado, numSorteado) ? "Parabéns você ganhou" : "Tente novamente";
};

console.log(resultadoLoteria(3, checar));


//Exercício 3

//3 - Crie uma HOF que receberá três parâmetros:

// O primeiro será um array de respostas corretas (Gabarito);
// o segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for "N.A");
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparar = (gabarito, respEStudante) => {
    if (gabarito === respEStudante){
        return 1;
    } if (respEStudante === "N.A") {
        return 0;
    }
        return 0.5;
}

const contaPontos = 