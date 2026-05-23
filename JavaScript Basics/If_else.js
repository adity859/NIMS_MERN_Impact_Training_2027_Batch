// Coditionals Statement
// Types of Conditional Statements
// 1. if
// 2. if....else
// 3. else if
// 4. nested if
// 5. Ternary Operator
// 6. Swicth Statement

// 1. If Statement

// // Example 1
// let age = 18;
// if (age >=18){
//     console.log("Eligible to Vote");
// }

// // Examle 2
// let temperature = 35;
// if(temperature > 30){
//     console.log("It's Hot Today");
// }

// 2. If else Statement

let age = 16;
if(age >=18){
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible");
}

let number = 10;
if (number % 2 === 0){
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// 3. else if Statement

let marks = 85;
if (marks>=90){
    console.log("Grade A++");
} else if(marks >=75){
    console.log("Grade A");
} else if(marks >= 60){
    console.log("Grade B");
} else {
    console.log("Fail");
}
