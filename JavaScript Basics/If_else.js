// Conditionals - Return true or false

// Types of condtionals
// 1. if
// 2. if...else
// 3. else if
// 4. Nested if
// 5. Ternary Operator
// 6. Switch Statement

// Example 1: If
// let age = 18;
// if (age >= 18){
//     console.log("Eligible to Vote");
// }

// Example 2: If...else

// let age = 16;
// if (age >=18){
//     console.log("Eligible to Vote");
// } else {
//     console.log("Note Eligible ");
// }

// let number = 15;
// if (number % 2 == 0){
//     console.log("Even Number");
// } else {
//     console.log("Odd Number");
// }

// Example 3: else if

// let marks = 85;
// if(marks >=90){
//     console.log("Grade A+");
// } else if(marks >=75){
//     console.log("Grade A");
// } else if(marks >=60){
//     console.log("Grade B");
// } else {
//     console.log("Fail");
// }

// Example 4. Nested If
// let age = 16;
// let hasID = true;

// if (age >=18){
//     if(hasID){
//         console.log("Entry Allowed");
//     } else{
//         console.log("ID Required");
//     }
// } else {
//     console.log("Under age");
// }

// Ternary Operator
// let age = 13;
// let result = age >=18 ? "Adult" : "Minor";
// console.log(result);

// Truthy and Falsy Values - VVVVV Important
// Falsy Values in JavaScript
// 1. false
// 2. 0
// 3. -0
// 4. ""
// 5. null
// 6. undefined
// 7. NaN

// Everything Else is Truthy
// 1. "Hello"
// 2. 1
// 3. []
// 4. {}
// 5. true

// Logicals Operators in Conditionals
// let age = 26;
// let hasLiscence = true;

// 1. AND &&
// if(age>=18 && hasLiscence){
//     console.log("Can drive");
// }

// 2. OR ||
// let isAdmin = false;
// let isEditor = true;

// if(isAdmin || isEditor){
//     console.log("Access Granted");
// }

// 3. NOT(!)
// let isLoggedIn = true;

// if (!isLoggedIn) {
//   console.log("Please Login");
// } else {
//   console.log("Not Loginnnnn!");
// }

// Switch Statement:
// let day = 5;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid Day");
// }
