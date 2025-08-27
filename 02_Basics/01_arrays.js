const myArray = [0, 1, 2, 3, 4, 5];
const myHeros = ["Shaktiman", "Nagraj"];
const mixArray = [0, 1, 100.12, "Hello", true, false];
console.log(mixArray);

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr2[1]);

myArray.push(6); // Add to the end of the array
myArray.pop(); // Remove from the end of the array

myArray.unshift(9); // Add to the beginning of the array
myArray.shift(); // Remove from the beginning of the array

console.log(myArray.includes(3));
console.log(myArray.indexOf(3));

const myArr3 = [0, 1, 2, 3, 4, 5];
console.log("A ", myArr3);

const myArr4 = myArr3.slice(1, 4);
console.log("B ", myArr4);
console.log("A ", myArr3);

const myArr5 = myArr3.splice(1, 4);
console.log("C ", myArr5);
console.log("A ", myArr3);
