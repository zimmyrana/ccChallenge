//Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let num = 100

function checkNum(num){
    return (num>=0) ? 'positive number' : 'negative number'
}

console.log(checkNum(num))