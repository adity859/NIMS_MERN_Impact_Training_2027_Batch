// Types of Data Types in JavaScript

// 1. Primitive Data Types
// String
// Number
// Boolean
// Undefined
// Null
// Symbol
// BigInt

// 2. Non-Primitive(Reference) Data Types
// Object
// Array
// Function

// 1. String: Used to store text values

let firstName = "Bhavesh";
let lastName = "Mali";
let message = "Hellooooo Section A - Welcome to JavaScript Class!";

console.log(firstName);
console.log(lastName);
console.log(message);

// 2. Number: Used to store numeric values
let age = 26;
let price = 10.27;

console.log(age);
console.log(price);

console.log(typeof(age));
console.log(typeof(price));

// 3. Boolean: Stores only true or false.

let isMarried = false;
let isLoggedIn = true;

console.log(isLoggedIn);
console.log(isMarried)

console.log(typeof(isLoggedIn));
console.log(typeof(isMarried));


// 4. Undefined: Variable declared but value not assigned

let city;

console.log(city);
console.log(typeof(city));

// 5. NULL: Intentional empty value 
// It's a JavaScript Bug

let user = null;
console.log(user);
console.log(typeof(user));

// 6. Symbol: Used to create unique values
// Read about it.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2);

// 7. BigInt: Used for very large numbers.

let bigNumber = 12345678900000000000000082992929299292929;

console.log(bigNumber);
console.log(typeof(bigNumber));


// 8. Object: Stores data in key-value pair.

let student = {
    name: "Bhavesh",
    age: 26,
    course: "MERN"
}

console.log(student);
console.log(student.name);
console.log(typeof(student));

// 9. Array: Used to store multiple values.
// Arrays are also objects in JavaScript

let students = ["Bhavesh", "Ananad", "Simran", "Abhay"];
console.log(students);
console.log(students[3]);
console.log(typeof(students));

// 10. Function: We use for reusable code.

function test(){
    console.log("You are failed in test");
}

// let answer = test();
// console.log(answer);
console.log(test());


