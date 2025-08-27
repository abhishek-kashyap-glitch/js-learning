// *************************** Dates ***************************
let myDate = new Date();
console.log(typeof myDate);
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

let myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate);

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(Math.floor(Date.now() / 1000)); // Convert to seconds

let newDate = new Date();
console.log(newDate);
