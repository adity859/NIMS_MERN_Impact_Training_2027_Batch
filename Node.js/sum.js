// Modules protects their variable and function from leaking
// By defaults modules are protected

console.log("Sum module executed");

// export var x = "Hellooooo Bhavesh!";
var x = "Hellooooo Bhavesh!";


function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

// export function calculateSum(a, b) {
//   const sum = a + b;
//   console.log(sum);
// }

module.exports = {calculateSum};

// module.exports = {
//     calculateSum: calculateSum,
//     x: x,
// }

console.log(module.exports);

// module.exports = { x, calculateSum };

// module.exports.x = x;
// module.exports.calculateSum = calculateSum;

