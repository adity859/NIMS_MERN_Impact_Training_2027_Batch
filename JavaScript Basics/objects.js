// Objects -> is used to store in key-value pairs.

// Why use Objects?
// 1. Most important Concept

// How many ways we can create an Object?

// 1. Common - Object Literal

// let student = {
//     name: "Bhavesh",
//     age: 26,
//     course: "MERN"
// }

// console.log(student);

// Method 2 - Empty Object
// let person = {};
// person.name = "Bhavesh";
// person.city = "BLR";

// console.log(person);

// Method 3 - Using new Object()

// let bike = new Object();
// bike.brand = "Harley Davidson X440";
// bike.color = "Yellow";
// console.log(bike);

// Acess Properties
// 1. Dot Notation
// let student = {
//     name: "Bhavesh",
//     age: 26,
//     course: "MERN"
// }

// console.log(student);
// console.log(student.name);

// 2. Bracket Notation
// let student = {
//     name: "Bhavesh",
//     age: 26,
//     course: "MERN"
// }

// console.log(student["name"]);

// Add, Update & Delete

// Nested Objects

// let user = {
//     name: "Bhavesh",

//     address: {
//         city: "Sirohi",
//         state: "Rajasthan"
//     }
// }

// console.log(user.address.state);

// let user = {
//   name: "Bhavesh",

//   address: {
//     city: "Sirohi",
//     state: "Rajasthan",
//     block: "",
//   },

//   skills: ['HTML', 'CSS', 'JS']
// };

// console.log(user.address.state);
// console.log(user.skills[2]);

// let user = {
//   name: "Bhavesh",

//   address: {
//     city: "Sirohi",
//     state: "Rajasthan",
//     block: "",
//   },

//   skills: ['HTML', 'CSS', 'JS']
// };

// console.log(user.address.state);
// console.log(user.skills[2]);
// console.log(user.address?.block);

// let user = {};
// console.log(user.address?.block);

// Objects Methods
// Function inside Object

// let user = {
//   name: "Bhavesh",

//   greet: function(){
//     console.log("Hello Section B");
//   }
// }

// user.greet();

// let user = {
//   name: "Bhavesh",

//   greet () {
//     console.log("Hello Section B");
//   }
// }

// user.greet();

// Object Destructing
// let user = {
//   name: "Bhavesh",
//   age: 26
// }

// let {name, age} = user;

// console.log(name);
// console.log(age);

// Rename Variables

// let user = {
//   name: "Bhavesh"
// }

// let {name: username} = user;

// console.log(username);

// Default Values
// let user = {
//   name: "Bhavesh"
// }

// let {city = "BLR"} = user;

// console.log(city);

// Nested Destructuring

// let user = {
//   address: {
//     city: "Sirohi",
//   },
// };

// let {
//   address: { city },
// } = user;

// console.log(city);

// Spread Operator in Objects

// let user = {
//   name: "Bhavesh",
//   age: 26,
//   city: "Achrol"
// }

// let copiedUser = {
//   ...user
// }
// console.log(copiedUser);

// Mergic Objects + Spread Operator

// let user = {
//   name: "Bhavesh",
// }

// let user1 = {
//   age: 24,
// }

// let copiedUser = {
//   ...user,
//   ...user1
// }
// console.log(copiedUser);

// object.keys()
// object.values()
// object.entries()

// Loop Through Object

let user = {
  name: "Bhavesh",
  age: 10
}

for (let key in user){
  console.log(key, user[key]);
}



