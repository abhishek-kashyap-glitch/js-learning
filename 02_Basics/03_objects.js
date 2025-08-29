const mySymb = Symbol("key1")

const jsUser = {
    myName: "Abhishek",
    age: 25,
    location: "Hyderabad",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    "account code": "ABC123",
    [mySymb]: "myKey1"
}

console.log(jsUser.email);
console.log(jsUser["email"]);
// console.log(jsUser."account code"); // Not possible to access the value with sapce naming convention
console.log(jsUser["account code"]);
console.log(jsUser.mySymb);
console.log(jsUser[mySymb]);

jsUser.email = "qwerty@gmail.com"
// Object.freeze(jsUser) // Freeze the changes in the jsUser
console.log(jsUser.email);
jsUser.email = "anything@microsoft.com"
console.log(jsUser.email);

jsUser.greetings = function(){
    console.log(`Hello! ${this.myName}`);
}

jsUser.greetings()