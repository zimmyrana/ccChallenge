//Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

let multiply = (func1, func2, val) => {
    let result = func1(val)
    return  func2(result)
}

function square(num){
    return num*num
}

function cube(num){
    return num*num*num
}

console.log(multiply(square,cube,2))