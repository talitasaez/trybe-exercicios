// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C

// 2

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit:"kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

//3 

// const getPlanet = () => {
//     const mars = {
//       name: "Mars",
//       distanceFromSun: {
//         value: 227900000,
//         measurementUnit: "kilometers",
//       },
//     };
//     setTimeout(() => console.log("Returned planet: ", mars), 4000);
//   };
  
//   getPlanet(); // imprime Marte depois de 4 segundos



// 4

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

//  const sendMarsTemperature = () => {
//     const currentTemperature = getMarsTemperature();
//     setTimeout(() => console.log(`Mars temperature is: ${currentTemperature} degree Celsius`), messageDelay()); // crie a função sendMarsTemperature abaixo

// };
// sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

//5 


//6

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// }

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);

// // definição da função sendMarsTemperature...

// // definição da função sendMarsTemperature...
// const sendMarsTemperature = (onSuccess, onError) => {
//     const currentTemperature = getMarsTemperature();
//     const messageSuccessfullySent = Math.random() <= 0.6;
//     setTimeout(() => {
//         if(messageSuccessfullySent) onSuccess(currentTemperature)
//         else onError('Robot is busy');
//     }, messageDelay());
//   }


// // imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(temperatureInFahrenheit, handleError);

// // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(greet, handleError);

// 7

// const uppercase = (str, callback) => {
//     setTimeout(() => {
//       callback(str.toUpperCase());
//     }, 500);
//   };
  
//   it('uppercase "test" to equal "TEST"', (done) => {
//     uppercase('test', (str) => {
//       try {
//         expect(str).toBe('TEST');
//         done();
//       } catch (error) {
//         done(error);
//       }
//     });

// 8

// const pokemons = [
//     {
//       name: 'Bulbasaur',
//       type: 'Grass',
//       ability: 'Razor Leaf',
//     },
//     {
//       name: 'Charmander',
//       type: 'Fire',
//       ability: 'Ember',
//     },
//     {
//       name: 'Squirtle',
//       type: 'Water',
//       ability: 'Water Gun',
//     },
//   ];
  
//   function getPokemonDetails(filter, callback) {
//     setTimeout(() => {
//       if (pokemons.find(filter) === undefined) {
//         return callback(new Error('Não temos esse pokemon para você :('), null);
//       }
//       const pokemon = pokemons.find(filter);
  
//       const { name, type, ability } = pokemon;
  
//       const messageFromProfOak = `Olá, seu pokemon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
  
//       callback(null, messageFromProfOak);
//     }, 2000);
//   }
  
//   getPokemonDetails(
//     (pokemon) => pokemon.name === 'Bulbasaur',
//     (error, message) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(message);
//       }
//     }
//   );
  
//   module.exports = {
//     getPokemonDetails,
//   };

//9 

// const { getPokemonDetails } = require("./get-pokemon-details");

// describe("A função getPokemonDetails", () => {
//   it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
//     const expectedError = new Error('Não temos esse pokémon para você :(');

//     function callback(error, result) {
//       expect(error).toEqual(expectedError);
//       done();
//     }

//     getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
//   });

//   it("retorna um pokemon que existe no banco de dados", (done) => {
//     const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

//     function callback(err, result) {
//       expect(result).toBe(expectedString);
//       done();
//     }

//     getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
//   });
// });

//10

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

1 - beforeEach // antes de cada teste
1 - test // o teste
1 - afterEach // depois de cada teste
1 - beforeEach // antes de cada teste
2 - beforeEach // antes de cada teste dentro do describe
2 - test // o teste dentro do describe
2 - afterEach // depois de cada teste dentro do describe
1 - afterEach // depois de cada teste
