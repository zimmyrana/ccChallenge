//Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 1000
let num2 = 486888
let num3 = 98888

if(num1>num2){
    
    if(num3>num1){
        console.log(`num3 is largest : ${num3}`)
    } else {
        console.log(`num1 is largest : ${num1}`)
    }

} else {

    if(num3>num2){
        console.log(`num3 is largest : ${num3}`)
    } else {
        console.log(`num2 is largest : ${num2}`)
    }
}