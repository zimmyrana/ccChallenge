//Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

const { add, divide, modulo, multiply, subtract } = require('./namedModule')

console.log(add(2,5))
console.log(divide(2,5))
console.log(modulo(2,5))
console.log(multiply(2,5))
console.log(subtract(2,5))