let marvel_heros = ["Thor", "Ironman", "Spiderman"];
let dc_heros = ["Superman", "Batman", "Flash"];

marvel_heros.push(dc_heros); // Creates nested arrays

console.log(marvel_heros);
console.log(marvel_heros[3][1]); // Batman - Not a good way to write a code

marvel_heros = ["Thor", "Ironman", "Spiderman"];
dc_heros = ["Superman", "Batman", "Flash"];

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// Spread operator
const allNewHeros = [...marvel_heros, ...dc_heros]; // Concat after spreading all the values
console.log(allNewHeros);

marvel_heros = ["Thor", "Ironman", "Spiderman", ["Wonderwomen", "Ironlady"]];
console.log(...marvel_heros); // Spreading all the values upto 0 depth
console.log(marvel_heros.flat(Infinity)); // Spreading all the values upto Infinity depth

console.log(Array.isArray("Abhishek")); // Check if array or not
console.log(Array.from("Abhishek")); // Convert to the array
console.log(Array.from({ firstName: "Abhishek" })); // Can't convert the object to an array directly - returns empty array []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Makes the array of the variable values
