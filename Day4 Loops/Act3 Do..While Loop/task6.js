//Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let num = 5;
let factorial = 1

do {

    if (num === 0) {
        //because factorial of 0 is 1
        break;
    } else {
        factorial *= num
        num--
    }

} while (num > 0)

console.log(factorial)