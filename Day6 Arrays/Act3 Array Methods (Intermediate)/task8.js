//Task 8: Use the filter method to create a new array with only even numbers and log the new array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 32, 45, 65, 23, 56, 8]
let result

result = arr.filter(el => el % 2 === 0)

console.log(result)