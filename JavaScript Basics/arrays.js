// Array -> is used to store multiple values in a single variable.

// Why use Arrays?
// 1. Store multiple values
// 2. Used everywhere in JavaScript, React & Node

// Creating Arrays

// Method 1
// let students = ['Bhavesh', 'Riya', 'Sid'];
// console.log(students);

// Method 2
// let numbers = [10, 20, 30, 40];

// Method 3
// let mixed = ["JavaScript", 100, true, null];
// console.log(mixed);

// Access Array Values

// let students = ['Bhavesh', 'Riya', 'Sid'];
// console.log(students[0]);
// console.log(students[2]);

// Array Length
// let students = ['Bhavesh', 'Riya', 'Sid'];
// console.log(students.length);


// Modify Array Values -> Array is mutable
// let students = ['Bhavesh', 'Riya', 'Sid'];
// students[1] = "Nandini";
// console.log(students);

// Array Methods

// 1.Push -> Add element at end.
// let students = ['Bhavesh', 'Riya', 'Sid'];
// students.push("Kundan");
// console.log(students);

// 2. Pop() -> Removes last element

// let students = ['Bhavesh', 'Riya', 'Sid'];
// students.pop();
// console.log(students);

// shift() - Removes first element
// let students = ['Bhavesh', 'Riya', 'Sid'];
// students.shift();
// console.log(students);

// unshift: Add element at beginning.
// let students = ['Bhavesh', 'Riya', 'Sid'];
// students.unshift("Sneha");
// console.log(students);


// Slice: Extract part of array & Does not modify original array
// array.slice(start, end);

// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.slice(1,4);
// console.log(result);

// Splice
// Add, remove or replace elements.
// Modifies original array.
// Syntax
// array.splice(start, deleteCount, newItem)

// Remove Elements
// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(1,2);
// console.log(numbers);

// Add Elements
// let fruits = ["Apple", "Orange"];
// fruits.splice(1,0,"Chikku");
// console.log(fruits);

// Replace Elements

// let fruits = ["Apple", "Orange"];
// fruits.splice(1,1,"Chikku");
// console.log(fruits);


// Concat() - Combine arrays
// let arr1 = [1, 2];
// let arr2 = [3, 4];

// let result = arr1.concat(arr2);
// console.log(result);

// includes
// let fruits = ["Apple", "Orange"];
// console.log(fruits.includes("Bananna"));

// indexOf - Return index values
// let fruits = ["Apple", "Orange"];
// console.log(fruits.indexOf("Orange"));



// Important Methods
// Map() -> Creates new array by transforming elements

// let numbers = [1, 2, 3];
// let result = numbers.map(num => num * 2);
// console.log(result);

// Filter -> Filter kr deta hain

// let numbers = [1, 2, 3, 4, 5, 6];
// let result = numbers.filter(num => num % 2 == 0);
// console.log(result);

// reduce(): Reduces array into single value
// array.reduce(accumlator, current) => {}, initialValue)

// let numbers = [1, 2, 3, 4];
// let total = numbers.reduce((acc, curr) => {
//     return acc + curr;
// },2);
// console.log(total);

// find -> Returns first matching element\
// let users = [10,20,30,40];
// let result = users.find( num => num > 20);
// console.log(result);

// Some - Returns true if any element matches

// let numbers = [1, 2, 3, 4];
// console.log(numbers.some(num => num > 3));

// every() -> Returns true if ALL elements matches
// let numbers = [2, 4, 6];
// console.log(numbers.every(num => num % 2 == 0))

// sort()

// let fruits = ["Orange", "Banana", "Mango"];
// fruits.sort();
// console.log(fruits);

// forEach() => Executes function for each element.

// let fruits = [1, 2, 3, 4, 45];
// fruits.forEach((fruit) => {
//     console.log(fruit);
// })

// Array Destructing
// Spread Operator (...)
// let arr1 = [1, 2];
// let arr2 = [...arr1, 3, 4];
// console.log(arr2);



