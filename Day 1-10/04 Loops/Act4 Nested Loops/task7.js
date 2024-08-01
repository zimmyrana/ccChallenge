// Task 7: Write a program to print a pattern using nested for loops:

/*
    *
    * *
    * * *
    * * * *
    * * * * *
*/

let pattern = '* '
let result = ''
for (let i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
      result += pattern
    }
    result += '\n' 
}

console.log(result)


