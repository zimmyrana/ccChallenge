//Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases. 

function fibonacci(num) {

    if (num === 0) {
        return 0
    } else if (num === 1) {
        return 1
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2)
    }

}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(5))
console.log(fibonacci(7))
console.log(fibonacci(10))
console.log(fibonacci(13))
