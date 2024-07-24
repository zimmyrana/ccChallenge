// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

let repeatMe = (func, times) => {
    for (let i = 0; i < times; i++) {
        console.log(func())
    }
    // When a function does not have a return statement, it implicitly returns undefined in JavaScript. at last.
}

function greet() {
    return 'hello'
}

console.log(repeatMe(greet, 3))