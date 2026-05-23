// Variables: Variables are containers used to store the data.
// In JavaScript we have 3 ways: var, let and const
// Variable Hoisting

// 1. Var - Old way to declare variable

var user_name = "Bhavesh";
console.log(user_name);

// Problems with var
// 1. Re-declaration Allowed

var city = "Mount Abu";
var city = "Udaipur";

console.log(city);

// 2. Re-assignment Allowed

// var age = 26;
// age = 25;

// console.log(age);

// 2. Let: Modern way to declare variables

let username = "Bhavesh";
console.log(username);

// Features of Let
// 1. Re-declaration Not Allowed

// let city = "Mount Abu";
// let city = "Bengaluru";

// console.log(city);

// 2. Re-assignment Allowed
let age = 26;

age = 10;

console.log(age);

// 3. Const: Used when value should not change

const country = "India";

console.log(country);

// Features of const

// 1. Re-declaration Not Allowed
// const country = "Nepal";
// console.log(country);

// 2. Re-assignment Not Allowed

// Const with Array
const students = ["Bhavesh", "Ananad", "Abhay"];
students.push("Mangilal");

console.log(students);

// Const with Objects

const student = {
    name: "Bhavesh"
}

student.name = "Mali";

console.log(student);




