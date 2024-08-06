//Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties. 

const operations = require('./module.js')

console.log(operations.PI)
console.log(operations.add(1,2))
console.log(operations.subtract(3,1))
console.log(operations.multiply(5,8))
console.log(operations.divide(67,4))
console.log(operations.modulo(56,9))