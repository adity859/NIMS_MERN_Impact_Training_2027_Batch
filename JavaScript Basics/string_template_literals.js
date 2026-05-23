// String: String is used to store text data.

// let name = "Bhavesh";

// console.log(name);

// Ways to Create String
// 1. Double Quotes

let city = "Jaipur";

// 2. Single Quotes
let countru = 'India';

// 3. Backticks (Template Literals)
let message = `Welcome to JavaScript`;

// String Concatenation

// let firstName = "Bhavesh";
// let lastName = "Mali";

// let fullName = firstName + " " + lastName;

// console.log(fullName);

// Template Literals: Introduced in ES6
// Used Backticks ``: Makes string writing easier

// Syntax: `Hello $(variableName)`

let name = "Bhavesh";
console.log(`Hello ${name}`);

// Multiple Variables Example

let firstName = "Bhavesh";
let age = 26;

console.log(`My name is ${firstName} and I am ${age} years old.`)

// Advantages of Template Literals

// Easy string interpolation
// Multi - line strings
// Cleaner syntax
// Readable code


// Multi-line String
// Without Template Literal

// let text = "Hello\nWorld";
// console.log(text);

// With Template Literals

// let text = `
// Hello
// World
// `;

// console.log(text);


// String Length
// .length returns total characters

let language = "JavaScript";

console.log(language.length);

// Access String Characters

// Using Index

// let text = "JavaScript";

// console.log(text[0]);
// console.log(text[4]);

// Common String Methods ()

// 1. toUpperCase()
// let text = "javascript";

// console.log(text.toUpperCase());

// 2. toLowerCase()

// let text = "JAVASCRIPT";
// console.log(text.toLowerCase());

// 3. trim()

// let text = " Hello JS  ";
// console.log(text.trim());

// 4. Includes(): Checks if value exists.

// let text = "JavaScript";
// console.log(text.includes("Script"));

// 5. startsWith()

// let text = "JavaScript";
// console.log(text.startsWith("Java"));

// 6. endsWith()
// let text = "JavaScript";
// console.log(text.endsWith("Script"));

// 7. slice()
// let text = "JavaScript"
// console.log(text.slice(0,4));

// 8. replace ()
// let text = "Hello JavaScript";
// console.log(text.replace("JavaScript", "React"));

// 9. split()
// let text = "HTML,CSS,JS";
// console.log(text.split(","));

// String Immutability
let text = "Bhavesh";
text[0] = "Y";
console.log(text);
