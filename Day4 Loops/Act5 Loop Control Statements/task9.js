//Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

let num = 1
while (num < 10){
    if(num === 7){
        break;
    } else {
        console.log(num)
    }
    num++
}

console.log(num)