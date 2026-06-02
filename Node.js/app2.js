// require("./test.js"); // one module into another
// require("./sum.js");
// const calculateSum = require("./sum.js");
// const obj = require("./sum.js");

// const {x, calculateSum} = require("./sum.js");

// import { x, calculateSum } from "./sum.js";

// const calculateMultiply = require("./calculate/multiple.js");

const data = require("./data.json");

const util = require('node:util');

console.log(data);

const {calculateMultiply, calculateSum} = require("./calculate");

let name = "Node JS";

console.log(name);

var a = 10;
var b = 27;
// calculateSum(a, b);

// obj.calculateSum(a, b);
// console.log(obj.x);

calculateSum(a, b);
calculateMultiply(a,b);
// console.log(x);

// console.log(globalThis === global);

