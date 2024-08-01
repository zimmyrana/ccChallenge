//Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

let product = (num1, num2 = 1) => {
    return num1 * num2
}

console.log(product(10))
console.log(product(10,88))

