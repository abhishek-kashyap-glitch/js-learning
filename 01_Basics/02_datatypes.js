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
