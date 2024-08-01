//Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

let num = 1
while (num < 10){
    if(num === 5){
        num++
        continue;
    } else {
        console.log(num)
    }
    num++
}

console.log(num)