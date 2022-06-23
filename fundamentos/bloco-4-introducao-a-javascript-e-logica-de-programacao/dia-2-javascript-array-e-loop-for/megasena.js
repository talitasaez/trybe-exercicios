

let age =20;
 
console.log(age);


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//exercício 2 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}

console.log (soma);

// exercício 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma2 = 0

for (let index = 0; index < numbers.length; index += 1) {
    soma2 += numbers[index];
     
}

let media = soma2 / numbers.length;

console.log(media)

//exercicio 4 - 

if (media>20){
    console.log ('valor maior que 20');
}else {
    console.log ('valor menor ou igual a 20');
}

// exercicio 5 -importante 


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0]

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero){
        maiorNumero = numbers[index];
    }
}

console.log(maiorNumero);

// exercicio 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let valorImpar = 0

for (let index = 0; index < numbers.length; index += 1) {
   if (numbers[index]% 2 !==0){
       valorImpar += 1
   }
}
if (valorImpar === 0){
    console.log ('nenhum valor impar encontrado');
} else {
    console.log (valorImpar);
}
    
//exercicio 7 


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numbers[0]

for (let index = 1; index < numbers.length; index += 1){
   if (numbers[index]< menorNumero){
    menorNumero = numbers[index]; 
   }
}

console.log(menorNumero);

// exercicio 8 

let numero = [];

for (let index = 1; index <= 25; index += 1) {
    numero.push(index);
}

console.log(numero);

// exercicio 9 

for (let index = 0; index < numero.length; index +=1){
    console.log(numero[index] / 2);
}