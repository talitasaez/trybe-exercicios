// exercicio 1 

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);

let fatorial = 1;

for (let index = 2; index < 10; index += 1) {
  fatorial *= index;
}

console.log(fatorial);

//exercicio2

let word = 'tryber';
let inverso = '';

for (let index2= 0; index2 < word.length; index2 += 1) { 
    inverso += word[word.length - 1 - index2];
}

console.log(inverso);

//exercicio 3

let array = ['java', 'javascript', 'python', 'html', 'css'];


for (let i = 0; i < array.length; i += 1) {


}

console.log(array[i]);