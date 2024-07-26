//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let sum

sum = arr.reduce((prev, curr) => prev + curr)

console.log(sum)