// Functions -> Functions are reusable blocks of code.
// Use case dekha jaye -> Instead of writing same code again and again, we use function.

// Why do we need Functions?
// 1. Reusable
// 2. Clean Code
// 3. Easy Maintenance
// 4. Better Readibility

// Function synatx

// function functionName(){
//     // code
// }

// Example
// function greet(){
//     console.log("Hello Students");
// }

// greet();

// Type of Functions
// 1. Function Declarations
// 2. Function Expressions
// 3. Arrow Functions
// 4. Callback Functions
// 5. Higher Order Functions
// 6. Pure Functions

// 1. Function Declarations: Noraml way to create a function
// function add(){
//     console.log(10 + 27);
// }
// add();

// Function with Parameters
// Paramters -> Variables inside function definition

// function greet(name){
//     console.log(`Hello ${name}`);
// }
// greet("Deepanshu");

// Parameters vs Arguments

// Paramters
// 1. Variables in function
// 2. name

// Arguments
// 1. Actual value passed
// 2. "Deepanshu"

// function add(a, b){
//     console.log(a + b);
//     console.log(a - b);
// }
// add(10,5);

// 2. Function Expression: Function stored inside the variable

// const variableName = function {
//     // code
// }

// const greet = function (name) {
//     console.log(`Hello ${name}`);
// }
// greet("Anurag kidda pazzi!")

// Function Named Expressions

// const add = function sum(a, b){
//     return a + b;
// }
// console.log(add(10,27));

// Arrow Function -> Fat Arrow Function
// Short syntax introduced in ES6

// Synatx

// const functionName = () => {
//     // code
// }

// const greet = () => {
//     console.log("Hello Bhaveshhhhh!!!");
// }
// greet();

// Arrow Functions with Parameters

// const add = (a, b) => {
//     return a + b;
// }
// console.log(add(10,27));

//  Short Arrow Functions
// const multiply = (a, b) => a * b;
// console.log(multiply(10,27));

// Single Parameter
// const square = num => num * num;
// console.log(square(4));

// Arrow Function and this...

// Default Parameters -> If arguments is not passed

// function greet(name = "Bhaveswwwwwwh"){
//     console.log(`Hello ${name}`);
// }
// greet();

// function add(a = 0, b = 0){
//     return a + b;
// }
// console.log(add(10));

// Rest Parameters: Collect multiples into the array
// ...

// Synatx
// function test(...values){}

// Example
// function total(...numbers){
//     console.log(numbers);
// }
// total(10,20,30,40);

// function sum(...numbers) {
//   let total = 0;
//   for (let num of numbers) {
//     total += num;
//   }
//   return total;
// }
// console.log(sum(10, 20, 30));

// Callback Function -> Function passed as argument to another function

// Example

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function processUser(param){
//     param("Bhavesh");
// }

// processUser(greet);

// Higher Order Functions are also known as call back functions.

// Example
function calculator (sum, a, b){
    return sum (a, b);
}

function add(x, y){
    return x + y;
}

console.log(calculator(add, 10, 20));

// Pure Functon - Same Input & Same Output