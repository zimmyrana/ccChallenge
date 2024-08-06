//Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

const add = require('./addModule')

const result = add(23,45)

console.log(result)