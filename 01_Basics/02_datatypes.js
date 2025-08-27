"use strict"; // Treat all JS code as newer version of JS

// alert("Hello World@ There is an error!") // We are using the Node JS, not the browser

let name = "Abhishek";
let age = 25;
let isLoggedIn = false;

// Number => 2 to power 53
// Bigint
// String => "abc"
// Boolean => True/False
// Null => Standalone value
// Undefined => Value not assigned
// Symbol => Uniqueness
// Object
// NaN => Not a Number

console.log(typeof name);
console.log(typeof age);
console.log(typeof null);
console.log(typeof undefined);

// ******************************* Data Types *******************************
// Dynamically typed language (eg. const temp = 100)

// Primitive (Call by value)
// Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

// Non-Primitve or Reference (Call by reference)
// Types: Array, Objects, Functions

const heros = ["Shaktiman", "Superman", "Batman"];
let myObj = {
  firstName: "Abhishek",
  age: 25,
};

const myFunction = function () {
  console.log("Abhishek! Hello world.");
};

// ******************************* Memory *******************************

// Stack (Primitive Data Types) - Copy of the Value
let myName = "Abhishek";
let anotherName = myName;
console.log(myName);
console.log(anotherName);

anotherName = "Abhi";

console.log(myName);
console.log(anotherName);

// Heap (Non-Primitive Data Types) - Reference type
let userOne = {
  name: "abc",
  email: "abc@google.com",
};

let userTwo = userOne;

console.log(userOne.email);
console.log(userTwo.email);

userTwo.email = "cba@google.com"; // Reference type

console.log(userOne.email);
console.log(userTwo.email);

// ******************************* Strings *******************************
let myFirstName = "Abhishek";
let myLastName = "Kashyap";

// console.log("Hello " + myFirstName + " " + myLastName + "."); // Outdated way to merge the strings

console.log(`Hello ${myFirstName} ${myLastName}.`);

const gameName = new String("Abhishek");

console.log(gameName[1]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("i"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const anotherStringOne = "     Abhishek   ";
console.log(anotherStringOne);
console.log(anotherStringOne.trim());

const anotherStringTwo = "https://www.linkedin.com/in/abhishekshyp/";
console.log(anotherStringTwo.replace("in/", "uk/"));
console.log(anotherStringTwo.includes("abhishek"));

// ******************************* Numbers *******************************
const scoreOne = 400;
console.log(scoreOne);

const scoreTwo = new Number(100);
console.log(scoreTwo);

console.log(scoreOne.length); // Undefined
console.log(scoreTwo.length); // Undefined
console.log(scoreTwo.toString().length);
console.log(scoreTwo.toFixed(2));

const scoreThree = 230.3392;
console.log(scoreThree.toPrecision(3)); // Priority before decimal values

const billions = 1000000000;
console.log(billions.toLocaleString("en-IN")); // Indian number system commas

// ******************************* Maths Library *******************************
console.log(Math.abs(-4));
console.log(Math.round(3.2));
console.log(Math.ceil(3.2));
console.log(Math.floor(3.2));
console.log(Math.min(-4, 1, 5, 0));
console.log(Math.max(3, 4, 1, 9));

console.log(Math.random()); // Random values between 0-1
console.log(Math.floor(Math.random() * 10) + 1); // Values between 1-10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Values between 10-20
