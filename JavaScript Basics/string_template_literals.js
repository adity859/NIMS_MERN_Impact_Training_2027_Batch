// String: It is used to store text data.

// let name = "Bhavesh";
// console.log(name);

// Ways to Create String in JS

// 1. Double Quotes
// let city = "Mount Abu";

// 2. Singe Quotes
// let city = "Swarupganj";

// 3. Backticks (Template Literals)
// let message = `Welcome to Impact Training Section A`;

// let firstName = "Bhaveshhhhhhh";
// let lastName = "Mali";

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// Template Literals - ES6 -> ``
// Make string writing easier
// Syntax
// `Hello ${variableName}`

// Example
// let name = "Sagarrrr";
// console.log(`Hello ${name}`);

// Multiple Variables
// let firstName = "Sagar";
// let age = 25;
// console.log(`My name is ${firstName} and I am ${age} years old.`);

// Advantages of Template Literals
// 1. Easy string Interpolation / Manipulation
// 2. Multi-line strings
// 3. Clear syntax
// 4. Readable Code

// Multi-line String
// let text = "hello\nbhaveshhhh";
// console.log(text);

// With Template Literals
// let text = `
// Hello
// World
// `;
// console.log(text);

// Strings Methods
// 1. String Length

// let language = "JavaScript";
// console.log(language.length);

// Access String Characters
// let text = "JavaScript"
// console.log(text[0]);
// console.log(text[3]);

// 3. toUpperCase()
// let text = "javascript";
// console.log(text.toUpperCase());

// 4. toLowerCase()
// let text = "JAVASCRIPT";
// console.log(text.toLowerCase());

// 5. trim(): Removes spaces from start and end.
// let text = "     Hello dSagagjkwjjwkjwq ";
// console.log(text.trim());

// 6. Includes: Check if values exists or not.

// let text = "JavaScript";
// console.log(text.includes("Script"));

// 7. startsWith()
// let text = "JavaScript";
// console.log(text.startsWith("Java"));

// 7. endsWith()
// let text = "JavaScript";
// console.log(text.endsWith("Java"));

// 8. slice: Extracts part of string

// let text = "JavaScript";
// console.log(text.slice(0,4));

// 9. replace()

// let text = "JavaScript";
// console.log(text.replace("JavaScript", "Node"));

// 10. split()
// let text = "HTML,CSS,JS";
// console.log(text.split(","));

// Escape Characters
// 1. \n - New Line
// 2. \t - Tab space
// 3. \' - Single Quote
// 4. \" - Double Quote

// String Immutable: String cannot be changed directly.

let text = "Bhavesh";
text[0] = "A";
console.log(text);

