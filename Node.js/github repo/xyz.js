function x(){
    const a = 10;
    
    function b(){
        console.log("b");
    }
}

console.log(a);

// require(".path")
// All the code of the module is wrapped inside a function(IIFE)

// IIFE - Immediately Invoked Function Expressions

// Anoynoumus Functon
// function x (){
    
// }
// x();

// function (){

// All code of the module runs inside here

    
// } (); // Immediately Invoked Function Expressions

(function (module, require){

function calculateMultiply (a, b){
  const result = a * b;
  console.log(result);
}

module.exports = {calculateMultiply};

    
})(); 
